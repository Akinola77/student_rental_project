import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LandlordDecisionForm } from "./LandlordDecisionForm";
import { UserStatusForm } from "./UserStatusForm";
import { DocLink } from "./DocLink";
import type { LandlordDocRow } from "@/lib/db-types";

export default async function AdminLandlordsPage() {
  await requireAdmin();
  const supabase = await supabaseServer();

  const { data: landlords } = await supabase
    .from("profiles")
    .select(
      "id,email,full_name,phone,verification_status,verified_at,account_status,created_at,landlord_verification_docs(id,doc_type,storage_path,created_at)",
    )
    .eq("role", "landlord")
    .order("created_at", { ascending: false })
    .limit(100);
  const rows =
    (landlords as unknown as
      | Array<{
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          verification_status: string | null;
          verified_at: string | null;
          account_status: string;
          created_at: string;
          landlord_verification_docs: LandlordDocRow[] | null;
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
        <h1 className="text-2xl font-semibold tracking-tight">Landlord verification</h1>
        <p className="text-sm text-zinc-600">Approve/reject/suspend, view docs, manage users.</p>
      </div>

      <div className="flex flex-col gap-3">
        {rows.length ? (
          rows.map((l) => (
            <Card key={l.id}>
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate font-semibold">{l.full_name ?? "—"}</div>
                    <div className="truncate text-sm text-zinc-600">{l.email}</div>
                    {l.phone ? <div className="text-xs text-zinc-500">{l.phone}</div> : null}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-white">{l.verification_status ?? "pending"}</Badge>
                    <Badge className="bg-white">{l.account_status}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-1">
                  <div className="text-sm font-medium">Docs</div>
                  <div className="mt-2 flex flex-col gap-2">
                    {(l.landlord_verification_docs ?? []).length ? (
                      (l.landlord_verification_docs ?? []).map((d) => (
                        <div
                          key={d.id}
                          className="flex items-center justify-between gap-2 rounded-lg border border-zinc-200 bg-white p-3 text-sm"
                        >
                          <div className="min-w-0">
                            <div className="font-medium">{d.doc_type.replaceAll("_", " ")}</div>
                            <div className="truncate text-xs text-zinc-500">{d.storage_path}</div>
                          </div>
                          <DocLink path={d.storage_path} />
                        </div>
                      ))
                    ) : (
                      <div className="text-sm text-zinc-600">No docs uploaded.</div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-1">
                  <div className="text-sm font-medium">Verification decision</div>
                  <div className="mt-2">
                    <LandlordDecisionForm landlordId={l.id} />
                  </div>
                </div>

                <div className="md:col-span-1">
                  <div className="text-sm font-medium">User status</div>
                  <div className="mt-2">
                    <UserStatusForm userId={l.id} current={l.account_status} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="text-sm text-zinc-600">No landlords found.</div>
        )}
      </div>
    </div>
  );
}

