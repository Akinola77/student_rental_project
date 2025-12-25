import { notFound } from "next/navigation";
import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";
import { getProfile } from "@/lib/auth";
import { publicObjectUrl } from "@/lib/storage";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";
import { EnquiryForm } from "./EnquiryForm";
import { ReportForm } from "./ReportForm";
import type { ListingPhotoRow, ListingPrivateRow, ListingRowPublic } from "@/lib/db-types";

export default async function ListingDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const supabase = await supabaseServer();
  const profile = await getProfile();

  const { data: listing } = await supabase
    .from("listings")
    .select(
      "id,title,landlord_id,city,university_id,rent_monthly_eur,deposit_eur,bills_included,room_type,available_from,min_stay,description,house_rules,status,created_at,landlord_verified,universities(name)",
    )
    .eq("id", id)
    .eq("status", "active")
    .maybeSingle();

  if (!listing) notFound();
  const l = listing as unknown as (ListingRowPublic & {
    landlord_id: string;
    description: string;
    house_rules: string | null;
  });

  const { data: photos } = await supabase
    .from("listing_photos")
    .select("id,storage_path,sort_order")
    .eq("listing_id", id)
    .order("sort_order", { ascending: true });
  const photoRows = (photos ?? []) as unknown as ListingPhotoRow[];

  // Private address only for admin or owning landlord.
  let privateAddress: string | null = null;
  if (
    profile &&
    (profile.role === "admin" ||
      (profile.role === "landlord" && profile.id === l.landlord_id))
  ) {
    const { data: priv } = await supabase
      .from("listing_private")
      .select("address")
      .eq("listing_id", id)
      .maybeSingle();
    privateAddress = (priv as unknown as ListingPrivateRow | null)?.address ?? null;
  }

  const landlordVerified = Boolean(l.landlord_verified);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-2xl font-semibold tracking-tight">{l.title}</h1>
          {landlordVerified ? (
            <Badge className="border-emerald-200 bg-emerald-50 text-emerald-900">
              Verified landlord
            </Badge>
          ) : (
            <Badge>Unverified landlord</Badge>
          )}
        </div>
        <div className="text-sm text-zinc-600">
          {l.universities?.name ?? "Dublin"} · Dublin
        </div>
      </div>

      <Alert variant="warning">
        <strong>Never pay upfront.</strong> StudentStay has no payments, deposits, bookings, or
        escrow.
      </Alert>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 flex flex-col gap-4">
          {photoRows.length ? (
            <Card>
              <CardHeader>
                <div className="font-semibold">Photos</div>
                <div className="text-sm text-zinc-600">Max 6 photos (MVP).</div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2 sm:grid-cols-2">
                  {photoRows.map((p) => (
                    <img
                      key={p.storage_path}
                      src={publicObjectUrl("listing-photos", p.storage_path)}
                      alt="Listing photo"
                      className="h-48 w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : null}

          <Card>
            <CardHeader>
              <div className="font-semibold">Details</div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-zinc-700">
              <div className="grid gap-3 sm:grid-cols-2">
                <Detail label="Rent" value={`€${l.rent_monthly_eur}/month`} />
                <Detail label="Deposit" value={`€${l.deposit_eur}`} />
                <Detail
                  label="Bills included"
                  value={l.bills_included ? "Yes" : "No"}
                />
                <Detail
                  label="Room type"
                  value={l.room_type.replaceAll("_", " ")}
                />
                <Detail
                  label="Available from"
                  value={new Date(l.available_from).toLocaleDateString("en-IE")}
                />
                <Detail label="Min stay" value={l.min_stay.replaceAll("_", " ")} />
              </div>

              <div>
                <div className="mb-1 text-xs font-medium text-zinc-700">Description</div>
                <div className="whitespace-pre-wrap">{l.description}</div>
              </div>
              {l.house_rules ? (
                <div>
                  <div className="mb-1 text-xs font-medium text-zinc-700">House rules</div>
                  <div className="whitespace-pre-wrap">{l.house_rules}</div>
                </div>
              ) : null}
            </CardContent>
          </Card>

          {privateAddress ? (
            <Alert variant="info">
              <strong>Private address (visible to you only):</strong> {privateAddress}
            </Alert>
          ) : null}
        </div>

        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <div className="font-semibold">Enquire</div>
              <div className="text-sm text-zinc-600">Email relay (no in-app chat).</div>
            </CardHeader>
            <CardContent>
              {profile?.role === "student" ? (
                <EnquiryForm listingId={l.id} />
              ) : (
                <div className="text-sm text-zinc-700">
                  <p className="mb-3">Log in as a student to send an enquiry.</p>
                  <Link href="/login" className="underline">
                    Log in
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="font-semibold">Report listing</div>
              <div className="text-sm text-zinc-600">Help prevent scams.</div>
            </CardHeader>
            <CardContent>
              {profile?.role === "student" ? (
                <ReportForm listingId={l.id} />
              ) : (
                <div className="text-sm text-zinc-700">
                  <p className="mb-3">Log in as a student to report a listing.</p>
                  <Link href="/login" className="underline">
                    Log in
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-zinc-200 bg-zinc-50 p-3">
      <div className="text-xs font-medium text-zinc-700">{label}</div>
      <div className="mt-1 text-sm text-zinc-900">{value}</div>
    </div>
  );
}

