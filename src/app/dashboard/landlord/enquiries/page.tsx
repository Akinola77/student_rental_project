import Link from "next/link";
import { requireRole } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { EnquiryRow } from "@/lib/db-types";

export default async function LandlordEnquiriesPage() {
  const landlord = await requireRole("landlord");
  const supabase = await supabaseServer();

  const { data: enquiries } = await supabase
    .from("enquiries")
    .select("id,created_at,status,listing_id,listings!inner(id,title,landlord_id)")
    .order("created_at", { ascending: false })
    .limit(50);

  const filtered =
    ((enquiries as unknown as EnquiryRow[] | null) ?? []).filter(
      (e) => e.listings?.landlord_id === landlord.id,
    );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Enquiries inbox</h1>
        <p className="text-sm text-zinc-600">Reply sends an email to the student (no chat).</p>
      </div>

      <Card>
        <CardHeader>
          <div className="font-semibold">Recent enquiries</div>
        </CardHeader>
        <CardContent>
          {filtered.length ? (
            <div className="flex flex-col gap-2">
              {filtered.map((e) => (
                <div
                  key={e.id}
                  className="flex items-start justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-3"
                >
                  <div className="min-w-0">
                    <div className="truncate font-medium">{e.listings?.title ?? "Listing"}</div>
                    <div className="text-xs text-zinc-500">
                      {new Date(e.created_at).toLocaleString("en-IE")}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-white">{e.status}</Badge>
                    <Link href={`/dashboard/landlord/enquiries/${e.id}`} className="underline text-sm">
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-zinc-600">No enquiries yet.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

