import Link from "next/link";
import { requireRole } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";
import { LandlordProfileForm } from "./LandlordProfileForm";
import { VerificationDocsUploader } from "./VerificationDocsUploader";
import type { LandlordDocRow } from "@/lib/db-types";

export default async function LandlordDashboardPage() {
  const landlord = await requireRole("landlord");
  const supabase = await supabaseServer();

  const [{ data: docs }, { count: listingCount }] = await Promise.all([
    supabase
      .from("landlord_verification_docs")
      .select("id,doc_type,storage_path,created_at")
      .eq("landlord_id", landlord.id)
      .order("created_at", { ascending: false }),
    supabase
      .from("listings")
      .select("status", { count: "exact", head: true })
      .eq("landlord_id", landlord.id),
  ]);
  const docRows = (docs as unknown as LandlordDocRow[] | null) ?? [];

  const status = landlord.verification_status ?? "pending";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Landlord dashboard</h1>
        <p className="text-sm text-zinc-600">
          Verify your account, create listings, and reply to enquiries by email.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <div className="font-semibold">Verification</div>
              <Badge className="bg-white">{status}</Badge>
            </div>
            <div className="text-sm text-zinc-600">
              You must be <strong>approved</strong> before submitting listings for review.
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {status !== "approved" ? (
              <Alert variant="warning">
                Upload your documents below. An admin will manually approve or reject.
              </Alert>
            ) : (
              <Alert variant="success">You are verified. Your listings can be reviewed.</Alert>
            )}

            <VerificationDocsUploader
              landlordId={landlord.id}
              existing={docRows}
            />
          </CardContent>
        </Card>

        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <div className="font-semibold">Your profile</div>
              <div className="text-sm text-zinc-600">Used for admin verification and emails.</div>
            </CardHeader>
            <CardContent>
              <LandlordProfileForm
                profile={{ full_name: landlord.full_name, phone: landlord.phone }}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="font-semibold">Quick links</div>
            </CardHeader>
            <CardContent className="flex flex-col gap-2 text-sm">
              <Link href="/dashboard/landlord/listings" className="underline">
                Manage listings
              </Link>
              <Link href="/dashboard/landlord/listings/new" className="underline">
                Create new listing
              </Link>
              <Link href="/dashboard/landlord/enquiries" className="underline">
                Enquiries inbox
              </Link>
              <div className="text-xs text-zinc-500">
                Total listings: {listingCount ?? 0}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

