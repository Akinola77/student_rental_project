import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { AuditLogRow } from "@/lib/db-types";

export default async function AdminAuditPage() {
  await requireAdmin();
  const supabase = await supabaseServer();

  const { data: logs } = await supabase
    .from("audit_logs")
    .select("id,created_at,actor_id,action,entity_type,entity_id,metadata")
    .order("created_at", { ascending: false })
    .limit(100);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-sm text-zinc-600">
        <Link href="/admin" className="underline">
          ← Back to admin
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Audit logs</h1>
        <p className="text-sm text-zinc-600">Recent admin actions (MVP).</p>
      </div>

      <Card>
        <CardHeader>
          <div className="font-semibold">Latest 100</div>
        </CardHeader>
        <CardContent>
          {(logs as unknown as AuditLogRow[] | null)?.length ? (
            <div className="flex flex-col gap-2">
              {(logs as unknown as AuditLogRow[]).map((l) => (
                <div
                  key={l.id}
                  className="rounded-lg border border-zinc-200 bg-white p-3 text-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="font-medium">{l.action}</div>
                    <div className="text-xs text-zinc-500">
                      {new Date(l.created_at).toLocaleString("en-IE")}
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-zinc-500">
                    Actor: <span className="font-mono">{l.actor_id ?? "—"}</span> ·{" "}
                    {l.entity_type}: <span className="font-mono">{l.entity_id ?? "—"}</span>
                  </div>
                  <pre className="mt-2 overflow-auto rounded-md border border-zinc-200 bg-zinc-50 p-2 text-xs">
{JSON.stringify(l.metadata ?? {}, null, 2)}
                  </pre>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-zinc-600">No audit logs yet.</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

