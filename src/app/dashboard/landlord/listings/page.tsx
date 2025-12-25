import Link from "next/link";
import { requireRole } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function LandlordListingsPage() {
  const landlord = await requireRole("landlord");
  const supabase = await supabaseServer();

  const { data: listings } = await supabase
    .from("listings")
    .select("id,title,status,created_at,universities(name)")
    .eq("landlord_id", landlord.id)
    .order("created_at", { ascending: false });
  const rows =
    (listings as unknown as
      | Array<{
          id: string;
          title: string;
          status: string;
          created_at: string;
          universities?: { name: string } | null;
        }>
      | null) ?? [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Your listings</h1>
          <p className="text-sm text-zinc-600">Draft → Pending review → Active.</p>
        </div>
        <Link href="/dashboard/landlord/listings/new">
          <Button>Create listing</Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="font-semibold">Listings</div>
        </CardHeader>
        <CardContent>
          {rows.length ? (
            <div className="flex flex-col gap-2">
              {rows.map((l) => (
                <div
                  key={l.id}
                  className="flex items-start justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-3"
                >
                  <div className="min-w-0">
                    <div className="truncate font-medium">{l.title}</div>
                    <div className="text-xs text-zinc-500">
                      {(l.universities?.name ?? "Dublin")} · Created{" "}
                      {new Date(l.created_at).toLocaleDateString("en-IE")}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-white">{l.status}</Badge>
                    <Link href={`/dashboard/landlord/listings/${l.id}/edit`}>
                      <Button size="sm" variant="secondary">
                        Edit
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-zinc-600">No listings yet.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

