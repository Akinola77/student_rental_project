## StudentStay (MVP)

StudentStay is a **student-only accommodation listing platform for Dublin, Ireland** (MVP) focused on **trust + verification + student workflows**:

- **Students**: browse/search active listings, send enquiries (email relay), report scams.
- **Landlords**: upload verification docs, create/manage listings, view and reply to enquiries (email relay).
- **Admin**: manually approve/reject landlord verification, approve/reject listings, deactivate listings, suspend users, handle reports, view audit logs.

### Tech stack

- **Next.js (App Router) + TypeScript (strict)**
- **Tailwind CSS**
- **Supabase**: Auth, Postgres, RLS, Storage
- **Resend**: transactional emails (enquiry relay, verification updates)
- **Vercel**: deployment

---

## Setup (step-by-step)

### 1) Create Supabase project

Create a new Supabase project, then in **Project Settings → API** copy:

- `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
- `anon public key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `service_role key` → `SUPABASE_SERVICE_ROLE_KEY` (server-only; never expose client-side)

### 2) Apply database schema + RLS

In Supabase **SQL Editor**:

1. Run `supabase/migration.sql`
2. Run `supabase/rls.sql`

This creates:

- Tables: `profiles`, `universities`, `listings`, `listing_private`, `listing_photos`, `enquiries`, `enquiry_messages`, `landlord_verification_docs`, `listing_reports`, `audit_logs`
- Triggers:
  - `updated_at` timestamps
  - **Rate limits**: max **5 enquiries/day** and **5 reports/day** per student
  - **Photo limit**: max **6 photos/listing**
  - Status guards: only **admin** (or `service_role`) can activate listings; only **approved landlords** can submit to review
- RLS policies that keep tables **closed by default**

### 3) Create storage buckets

In Supabase **Storage**:

- Create bucket `listing-photos` (**Public = ON**)  
  Used for listing photos (up to 6).
- Create bucket `verification-docs` (**Public = OFF**)  
  Used for landlord verification documents.

Then run the storage policies included at the bottom of `supabase/rls.sql` (if you haven’t already).

### 4) Configure Resend

Create a Resend API key, and set a verified sender. You’ll need:

- `RESEND_API_KEY`
- `EMAIL_FROM` (example: `StudentStay <no-reply@yourdomain.ie>`)

### 5) Configure environment variables locally

Copy `.env.example` to `.env.local` and fill values:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `RESEND_API_KEY`
- `EMAIL_FROM`
- `APP_URL` (local: `http://localhost:3000`)

### 6) Install + run

```bash
npm install
npm run dev
```

### 7) Seed demo data

This creates the 4 Dublin universities, a verified demo landlord, a demo student, and **5 active demo listings**.

```bash
npm run seed
```

Demo credentials (printed by the script):

- **Landlord**: `landlord@demo.studentstay.ie` / `Password123!`
- **Student**: `student@demo.studentstay.ie` / `Password123!`

### 8) Create an admin user

Admin is identified by `profiles.role = 'admin'`.

Steps:

1. Sign up normally in the app (any email/password).
2. In Supabase SQL Editor run:

```sql
update public.profiles
set role = 'admin'
where email = 'your-email@example.com';
```

---

## Deployment (Vercel)

1. Push to a Git repo and import the project in Vercel.
2. Set the same env vars in **Vercel → Project → Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `APP_URL` (your production URL)
3. In Supabase Auth settings, add your Vercel URL to allowed redirect URLs (if needed).

---

## MVP limitations (explicit non-features)

To prevent scope creep, StudentStay (MVP) intentionally excludes:

- No payments, escrow, deposits collection, or bookings
- No in-app chat (email relay only)
- No reviews/ratings
- No maps
- No multi-city support (Dublin only)
- No university list management UI (seeded fixed list)
- No automated identity/KYC (manual admin workflow only)

