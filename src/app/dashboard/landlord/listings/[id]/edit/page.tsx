import Link from "next/link";
import { notFound } from "next/navigation";
import { requireRole } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";
import { EditListingForm } from "./EditListingForm";
import { PhotoUploader } from "./PhotoUploader";
import { SubmitForReviewForm } from "./SubmitForReviewForm";
import type { ListingPhotoRow, ListingPrivateRow, UniversityRow } from "@/lib/db-types";

export default async function EditListingPage({
  params,
}: {
  params: { id: string };
}) {
  const landlord = await requireRole("landlord");
  const { id } = params;
  const supabase = await supabaseServer();

  const [{ data: universities }, { data: listing }, { data: addr }, { data: photos }] =
    await Promise.all([
      supabase.from("universities").select("id,name").order("name"),
      supabase
        .from("listings")
        .select("*")
        .eq("id", id)
        .eq("landlord_id", landlord.id)
        .maybeSingle(),
      supabase
        .from("listing_private")
        .select("address")
        .eq("listing_id", id)
        .maybeSingle(),
      supabase
        .from("listing_photos")
        .select("id,storage_path,sort_order")
        .eq("listing_id", id)
        .order("sort_order", { ascending: true }),
    ]);

  if (!listing) notFound();
  const l = listing as unknown as {
    id: string;
    status: string;
    title: string;
    university_id: number;
    rent_monthly_eur: number;
    deposit_eur: number;
    bills_included: boolean;
    room_type: string;
    available_from: string;
    min_stay: string;
    description: string;
    house_rules: string | null;
  };

  const uniRows = (universities as unknown as UniversityRow[] | null) ?? [];
  const address = (addr as unknown as ListingPrivateRow | null)?.address ?? null;
  const photoRows = (photos as unknown as ListingPhotoRow[] | null) ?? [];

  const canSubmit =
    landlord.verification_status === "approved" &&
    l.status !== "pending_review" &&
    l.status !== "active";

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-zinc-600">
          <Link href="/dashboard/landlord/listings" className="underline">
            ← Back
          </Link>
        </div>
        <Badge className="bg-white">{l.status}</Badge>
      </div>

      {landlord.verification_status !== "approved" ? (
        <Alert variant="warning">
          You can edit drafts, but you must be <strong>verified</strong> before submitting for
          review.
        </Alert>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="font-semibold">Listing details</div>
          </CardHeader>
          <CardContent>
            <EditListingForm
              listing={l}
              address={address}
              universities={uniRows}
            />
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <div className="font-semibold">Photos</div>
              <div className="text-sm text-zinc-600">
                Photos are stored in Supabase Storage (`listing-photos`).
              </div>
            </CardHeader>
            <CardContent>
              <PhotoUploader listingId={l.id} existing={photoRows} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="font-semibold">Submit for review</div>
              <div className="text-sm text-zinc-600">
                Admin approval is required to go live.
              </div>
            </CardHeader>
            <CardContent>
              {canSubmit ? (
                <SubmitForReviewForm listingId={l.id} />
              ) : (
                <Alert variant="info">
                  This listing is already submitted or active/deactivated.
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

