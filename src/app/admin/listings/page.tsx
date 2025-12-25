import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ListingDecisionForm } from "./ListingDecisionForm";
import type { ListingPrivateRow } from "@/lib/db-types";

export default async function AdminListingsPage() {
  await requireAdmin();
  const supabase = await supabaseServer();

  const { data: listings } = await supabase
    .from("listings")
    .select(
      "id,title,status,created_at,rent_monthly_eur,deposit_eur,bills_included,room_type,min_stay,available_from,landlord_id,universities(name),listing_private(address)",
    )
    .eq("status", "pending_review")
    .order("created_at", { ascending: true })
    .limit(100);
  const rows =
    (listings as unknown as
      | Array<{
          id: string;
          title: string;
          status: string;
          created_at: string;
          rent_monthly_eur: number;
          deposit_eur: number;
          bills_included: boolean;
          room_type: string;
          min_stay: string;
          available_from: string;
          landlord_id: string;
          universities?: { name: string } | null;
          listing_private?: ListingPrivateRow | null;
        }>
      | null) ?? [];

  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-zinc-600">
        <Link href="/admin" className="underline">
          ← Back to admin
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Listings moderation</h1>
        <p className="text-sm text-zinc-600">Approve → Active, or reject/deactivate.</p>
      </div>

      {rows.length ? (
        <div className="flex flex-col gap-3">
          {rows.map((l) => (
            <Card key={l.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{l.title}</div>
                    <div className="text-sm text-zinc-600">
                      {(l.universities?.name ?? "Dublin")} · €{l.rent_monthly_eur}/mo
                      {l.bills_included ? " · bills included" : ""}
                    </div>
                    <div className="text-xs text-zinc-500">
                      Available {new Date(l.available_from).toLocaleDateString("en-IE")} ·{" "}
                      {l.room_type.replaceAll("_", " ")} · {l.min_stay.replaceAll("_", " ")}
                    </div>
                  </div>
                  <Badge className="bg-white">{l.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 text-sm text-zinc-700">
                  <div className="font-medium">Private address</div>
                  <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                    {l.listing_private?.address ?? "—"}
                  </div>
                  <div className="text-xs text-zinc-500">
                    Created {new Date(l.created_at).toLocaleString("en-IE")} · Landlord ID{" "}
                    <span className="font-mono">{l.landlord_id}</span>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium">Decision</div>
                  <ListingDecisionForm listingId={l.id} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-sm text-zinc-600">No pending listings.</div>
      )}
    </div>
  );
}

