import Link from "next/link";
import { notFound } from "next/navigation";
import { requireRole } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";
import { ReplyForm } from "./ReplyForm";
import type { EnquiryMessageRow, EnquiryRow } from "@/lib/db-types";

export default async function LandlordEnquiryThreadPage({
  params,
}: {
  params: { id: string };
}) {
  const landlord = await requireRole("landlord");
  const { id } = params;
  const supabase = await supabaseServer();

  const { data: enquiry } = await supabase
    .from("enquiries")
    .select(
      "id,created_at,status,message,move_in_date,length_of_stay,listing_id,listings!inner(id,title,landlord_id)",
    )
    .eq("id", id)
    .maybeSingle();

  const e = enquiry as unknown as EnquiryRow | null;
  if (!e || e.listings?.landlord_id !== landlord.id) notFound();

  const { data: messages } = await supabase
    .from("enquiry_messages")
    .select("id,sender_role,message,created_at")
    .eq("enquiry_id", id)
    .order("created_at", { ascending: true });
  const msgRows = (messages as unknown as EnquiryMessageRow[] | null) ?? [];

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <div className="text-sm text-zinc-600">
        <Link href="/dashboard/landlord/enquiries" className="underline">
          ← Back to inbox
        </Link>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {e.listings?.title ?? "Enquiry"}
          </h1>
          <div className="text-sm text-zinc-600">
            Received {new Date(e.created_at).toLocaleString("en-IE")}
          </div>
        </div>
        <Badge className="bg-white">{e.status}</Badge>
      </div>

      <Alert variant="warning">
        <strong>Safety:</strong> Never ask for money upfront. Use clear written agreements and
        receipts.
      </Alert>

      <Card>
        <CardHeader>
          <div className="font-semibold">Student enquiry</div>
          <div className="text-sm text-zinc-600">
            Move-in: {e.move_in_date ?? "—"} · Length: {e.length_of_stay ?? "—"}
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="whitespace-pre-wrap rounded-lg border border-zinc-200 bg-white p-3 text-sm text-zinc-800">
            {e.message ?? "—"}
          </div>

          {msgRows.length ? (
            <div className="flex flex-col gap-2">
              {msgRows.map((m) => (
                <div
                  key={m.id}
                  className="rounded-lg border border-zinc-200 bg-white p-3 text-sm"
                >
                  <div className="mb-1 flex items-center justify-between text-xs text-zinc-500">
                    <span>{m.sender_role}</span>
                    <span>{new Date(m.created_at).toLocaleString("en-IE")}</span>
                  </div>
                  <div className="whitespace-pre-wrap text-zinc-800">{m.message}</div>
                </div>
              ))}
            </div>
          ) : null}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="font-semibold">Reply</div>
          <div className="text-sm text-zinc-600">Sends an email to the student.</div>
        </CardHeader>
        <CardContent>
          <ReplyForm enquiryId={e.id} />
        </CardContent>
      </Card>
    </div>
  );
}

