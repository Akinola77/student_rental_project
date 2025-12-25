import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReportDecisionForm } from "./ReportDecisionForm";
import type { ReportRow } from "@/lib/db-types";

export default async function AdminReportsPage() {
  await requireAdmin();
  const supabase = await supabaseServer();

  const { data: reports } = await supabase
    .from("listing_reports")
    .select(
      "id,reason,details,status,created_at,listing_id,student_id,listings!inner(id,title,landlord_id)",
    )
    .eq("status", "open")
    .order("created_at", { ascending: true })
    .limit(100);
  const rows = (reports as unknown as ReportRow[] | null) ?? [];

  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-zinc-600">
        <Link href="/admin" className="underline">
          ← Back to admin
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Reports</h1>
        <p className="text-sm text-zinc-600">Review scam reports and take action.</p>
      </div>

      {rows.length ? (
        <div className="flex flex-col gap-3">
          {rows.map((r) => (
            <Card key={r.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{r.listings?.title ?? "Listing"}</div>
                    <div className="text-sm text-zinc-600">{r.reason.replaceAll("_", " ")}</div>
                    <div className="text-xs text-zinc-500">
                      Reported {new Date(r.created_at).toLocaleString("en-IE")} · Listing{" "}
                      <span className="font-mono">{r.listing_id}</span>
                    </div>
                  </div>
                  <Badge className="bg-white">{r.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <div className="text-sm text-zinc-700">
                  <div className="mb-2 font-medium">Details</div>
                  <div className="whitespace-pre-wrap rounded-lg border border-zinc-200 bg-white p-3">
                    {r.details ?? "—"}
                  </div>
                  <div className="mt-2 text-xs text-zinc-500">
                    Student: <span className="font-mono">{r.student_id}</span> · Landlord:{" "}
                    <span className="font-mono">{r.listings?.landlord_id}</span>
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-sm font-medium">Action</div>
                  <ReportDecisionForm reportId={r.id} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-sm text-zinc-600">No open reports.</div>
      )}
    </div>
  );
}

