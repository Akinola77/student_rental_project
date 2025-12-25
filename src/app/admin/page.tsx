import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const supabase = await supabaseServer();

  const [
    { count: pendingVerifications },
    { count: pendingListings },
    { count: activeListings },
    { count: openReports },
  ] = await Promise.all([
    supabase
      .from("profiles")
      .select("id", { count: "exact", head: true })
      .eq("role", "landlord")
      .eq("verification_status", "pending"),
    supabase
      .from("listings")
      .select("id", { count: "exact", head: true })
      .eq("status", "pending_review"),
    supabase
      .from("listings")
      .select("id", { count: "exact", head: true })
      .eq("status", "active"),
    supabase
      .from("listing_reports")
      .select("id", { count: "exact", head: true })
      .eq("status", "open"),
  ]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Admin</h1>
        <p className="text-sm text-zinc-600">Manual verification + moderation queues (MVP).</p>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        <Stat title="Pending verifications" value={pendingVerifications ?? 0} />
        <Stat title="Pending listings" value={pendingListings ?? 0} />
        <Stat title="Active listings" value={activeListings ?? 0} />
        <Stat title="Open reports" value={openReports ?? 0} />
      </div>

      <Card>
        <CardHeader>
          <div className="font-semibold">Queues</div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-sm">
          <Link className="underline" href="/admin/landlords">
            Landlord verification
          </Link>
          <Link className="underline" href="/admin/listings">
            Listings moderation
          </Link>
          <Link className="underline" href="/admin/reports">
            Reports
          </Link>
          <Link className="underline" href="/admin/audit">
            Audit logs
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-4">
      <div className="text-xs font-medium text-zinc-600">{title}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
    </div>
  );
}

