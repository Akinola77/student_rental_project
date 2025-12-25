-- StudentStay (MVP) - Row Level Security policies
-- Apply AFTER running supabase/migration.sql

-- Helper functions
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select (auth.role() = 'service_role') or exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
      and p.account_status = 'active'
  );
$$;

create or replace function public.is_landlord()
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
      and p.role = 'landlord'
      and p.account_status = 'active'
  );
$$;

create or replace function public.is_student()
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid()
      and p.role = 'student'
      and p.account_status = 'active'
  );
$$;

-- Guard sensitive profile fields from non-admin updates
create or replace function public.guard_profile_update()
returns trigger
language plpgsql
as $$
declare
  admin boolean;
begin
  select public.is_admin() into admin;

  if not admin then
    if auth.uid() is null or auth.uid() <> new.id then
      raise exception 'not_allowed';
    end if;

    -- lock down non-user-editable fields
    if new.role <> old.role then raise exception 'role_locked'; end if;
    if new.email <> old.email then raise exception 'email_locked'; end if;
    if new.verification_status is distinct from old.verification_status then raise exception 'verification_locked'; end if;
    if new.verified_at is distinct from old.verified_at then raise exception 'verified_at_locked'; end if;
    if new.account_status <> old.account_status then raise exception 'account_status_locked'; end if;
  end if;

  return new;
end;
$$;

drop trigger if exists trg_guard_profile_update on public.profiles;
create trigger trg_guard_profile_update
before update on public.profiles
for each row execute function public.guard_profile_update();

-- Guard landlord_verified from non-admin updates
create or replace function public.guard_listing_denorm_fields()
returns trigger
language plpgsql
as $$
begin
  if not public.is_admin() then
    if new.landlord_verified <> old.landlord_verified then
      raise exception 'landlord_verified_locked';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_guard_listing_denorm on public.listings;
create trigger trg_guard_listing_denorm
before update on public.listings
for each row execute function public.guard_listing_denorm_fields();

-- Enable RLS
alter table public.universities enable row level security;
alter table public.profiles enable row level security;
alter table public.listings enable row level security;
alter table public.listing_private enable row level security;
alter table public.listing_photos enable row level security;
alter table public.enquiries enable row level security;
alter table public.enquiry_messages enable row level security;
alter table public.landlord_verification_docs enable row level security;
alter table public.listing_reports enable row level security;
alter table public.audit_logs enable row level security;
alter table public.landlord_verification_notes enable row level security;

-- Universities: public read
drop policy if exists "universities_select_all" on public.universities;
create policy "universities_select_all"
on public.universities for select
to anon, authenticated
using (true);

-- Profiles: self + admin only
drop policy if exists "profiles_select_self" on public.profiles;
create policy "profiles_select_self"
on public.profiles for select
to authenticated
using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_insert_self" on public.profiles;
create policy "profiles_insert_self"
on public.profiles for insert
to authenticated
with check (id = auth.uid());

drop policy if exists "profiles_update_self" on public.profiles;
create policy "profiles_update_self"
on public.profiles for update
to authenticated
using (id = auth.uid() or public.is_admin())
with check (id = auth.uid() or public.is_admin());

-- Listings:
-- Public read: only active listings
drop policy if exists "listings_public_select_active" on public.listings;
create policy "listings_public_select_active"
on public.listings for select
to anon, authenticated
using (status = 'active');

-- Landlord read: own listings (any status)
drop policy if exists "listings_landlord_select_own" on public.listings;
create policy "listings_landlord_select_own"
on public.listings for select
to authenticated
using (public.is_landlord() and landlord_id = auth.uid());

-- Landlord insert/update/delete: own listings
drop policy if exists "listings_landlord_insert" on public.listings;
create policy "listings_landlord_insert"
on public.listings for insert
to authenticated
with check (public.is_landlord() and landlord_id = auth.uid());

drop policy if exists "listings_landlord_update" on public.listings;
create policy "listings_landlord_update"
on public.listings for update
to authenticated
using (public.is_landlord() and landlord_id = auth.uid())
with check (public.is_landlord() and landlord_id = auth.uid());

drop policy if exists "listings_landlord_delete" on public.listings;
create policy "listings_landlord_delete"
on public.listings for delete
to authenticated
using (public.is_landlord() and landlord_id = auth.uid());

-- Admin full access
drop policy if exists "listings_admin_all" on public.listings;
create policy "listings_admin_all"
on public.listings for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- listing_private: admin + owning landlord
drop policy if exists "listing_private_select" on public.listing_private;
create policy "listing_private_select"
on public.listing_private for select
to authenticated
using (
  public.is_admin()
  or exists (
    select 1 from public.listings l
    where l.id = listing_private.listing_id
      and l.landlord_id = auth.uid()
  )
);

drop policy if exists "listing_private_write" on public.listing_private;
create policy "listing_private_write"
on public.listing_private for all
to authenticated
using (
  public.is_admin()
  or exists (
    select 1 from public.listings l
    where l.id = listing_private.listing_id
      and l.landlord_id = auth.uid()
  )
)
with check (
  public.is_admin()
  or exists (
    select 1 from public.listings l
    where l.id = listing_private.listing_id
      and l.landlord_id = auth.uid()
  )
);

-- listing_photos: public read for active listings; landlord/admin manage for their listings
drop policy if exists "listing_photos_public_select" on public.listing_photos;
create policy "listing_photos_public_select"
on public.listing_photos for select
to anon, authenticated
using (
  exists (
    select 1 from public.listings l
    where l.id = listing_photos.listing_id
      and l.status = 'active'
  )
);

drop policy if exists "listing_photos_landlord_manage" on public.listing_photos;
create policy "listing_photos_landlord_manage"
on public.listing_photos for all
to authenticated
using (
  public.is_admin()
  or exists (
    select 1 from public.listings l
    where l.id = listing_photos.listing_id
      and l.landlord_id = auth.uid()
  )
)
with check (
  public.is_admin()
  or exists (
    select 1 from public.listings l
    where l.id = listing_photos.listing_id
      and l.landlord_id = auth.uid()
  )
);

-- enquiries:
drop policy if exists "enquiries_student_insert" on public.enquiries;
create policy "enquiries_student_insert"
on public.enquiries for insert
to authenticated
with check (public.is_student() and student_id = auth.uid());

drop policy if exists "enquiries_student_select_own" on public.enquiries;
create policy "enquiries_student_select_own"
on public.enquiries for select
to authenticated
using (student_id = auth.uid() or public.is_admin());

drop policy if exists "enquiries_landlord_select" on public.enquiries;
create policy "enquiries_landlord_select"
on public.enquiries for select
to authenticated
using (
  public.is_admin()
  or exists (
    select 1 from public.listings l
    where l.id = enquiries.listing_id
      and l.landlord_id = auth.uid()
  )
);

-- enquiry_messages:
drop policy if exists "enquiry_messages_select_participants" on public.enquiry_messages;
create policy "enquiry_messages_select_participants"
on public.enquiry_messages for select
to authenticated
using (
  public.is_admin()
  or exists (
    select 1 from public.enquiries e
    where e.id = enquiry_messages.enquiry_id
      and e.student_id = auth.uid()
  )
  or exists (
    select 1 from public.enquiries e
    join public.listings l on l.id = e.listing_id
    where e.id = enquiry_messages.enquiry_id
      and l.landlord_id = auth.uid()
  )
);

drop policy if exists "enquiry_messages_insert_student" on public.enquiry_messages;
create policy "enquiry_messages_insert_student"
on public.enquiry_messages for insert
to authenticated
with check (
  sender_role = 'student'
  and sender_id = auth.uid()
  and exists (
    select 1 from public.enquiries e
    where e.id = enquiry_messages.enquiry_id
      and e.student_id = auth.uid()
  )
);

drop policy if exists "enquiry_messages_insert_landlord" on public.enquiry_messages;
create policy "enquiry_messages_insert_landlord"
on public.enquiry_messages for insert
to authenticated
with check (
  sender_role = 'landlord'
  and sender_id = auth.uid()
  and exists (
    select 1 from public.enquiries e
    join public.listings l on l.id = e.listing_id
    where e.id = enquiry_messages.enquiry_id
      and l.landlord_id = auth.uid()
  )
);

-- landlord_verification_docs: landlord self + admin
drop policy if exists "verification_docs_select" on public.landlord_verification_docs;
create policy "verification_docs_select"
on public.landlord_verification_docs for select
to authenticated
using (public.is_admin() or landlord_id = auth.uid());

drop policy if exists "verification_docs_insert" on public.landlord_verification_docs;
create policy "verification_docs_insert"
on public.landlord_verification_docs for insert
to authenticated
with check (public.is_landlord() and landlord_id = auth.uid());

drop policy if exists "verification_docs_delete_admin" on public.landlord_verification_docs;
create policy "verification_docs_delete_admin"
on public.landlord_verification_docs for delete
to authenticated
using (public.is_admin());

-- listing_reports: student insert + admin view/manage
drop policy if exists "reports_student_insert" on public.listing_reports;
create policy "reports_student_insert"
on public.listing_reports for insert
to authenticated
with check (public.is_student() and student_id = auth.uid());

drop policy if exists "reports_student_select_own" on public.listing_reports;
create policy "reports_student_select_own"
on public.listing_reports for select
to authenticated
using (student_id = auth.uid() or public.is_admin());

drop policy if exists "reports_admin_all" on public.listing_reports;
create policy "reports_admin_all"
on public.listing_reports for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- audit_logs: admin only
drop policy if exists "audit_admin_select" on public.audit_logs;
create policy "audit_admin_select"
on public.audit_logs for select
to authenticated
using (public.is_admin());

drop policy if exists "audit_admin_insert" on public.audit_logs;
create policy "audit_admin_insert"
on public.audit_logs for insert
to authenticated
with check (public.is_admin());

-- landlord_verification_notes: admin only (true admin-only field)
drop policy if exists "landlord_verification_notes_admin_all" on public.landlord_verification_notes;
create policy "landlord_verification_notes_admin_all"
on public.landlord_verification_notes for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- Storage policies (run AFTER creating buckets)
-- Buckets: listing-photos (public), verification-docs (private)

-- listing-photos: public read
drop policy if exists "Listing photos are publicly readable" on storage.objects;
create policy "Listing photos are publicly readable"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'listing-photos');

-- listing-photos: landlord/admin upload for their listing folder: "<listing_id>/<file>"
drop policy if exists "Landlords upload listing photos to own listings" on storage.objects;
create policy "Landlords upload listing photos to own listings"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'listing-photos'
  and (
    public.is_admin()
    or exists (
      select 1 from public.listings l
      where l.id::text = split_part(name, '/', 1)
        and l.landlord_id = auth.uid()
    )
  )
);

drop policy if exists "Landlords delete listing photos from own listings" on storage.objects;
create policy "Landlords delete listing photos from own listings"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'listing-photos'
  and (
    public.is_admin()
    or exists (
      select 1 from public.listings l
      where l.id::text = split_part(name, '/', 1)
        and l.landlord_id = auth.uid()
    )
  )
);

-- verification-docs: private; landlord + admin only. Folder "<landlord_id>/<file>"
drop policy if exists "Verification docs readable by owner or admin" on storage.objects;
create policy "Verification docs readable by owner or admin"
on storage.objects for select
to authenticated
using (
  bucket_id = 'verification-docs'
  and (
    public.is_admin()
    or split_part(name, '/', 1) = auth.uid()::text
  )
);

drop policy if exists "Verification docs upload by owner" on storage.objects;
create policy "Verification docs upload by owner"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'verification-docs'
  and split_part(name, '/', 1) = auth.uid()::text
);

