import Link from "next/link";
import { requireRole } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StudentProfileForm } from "./StudentProfileForm";
import type { EnquiryRow, UniversityRow } from "@/lib/db-types";

export default async function StudentDashboardPage() {
  const student = await requireRole("student");
  const supabase = await supabaseServer();

  const [{ data: universities }, { data: enquiries }] = await Promise.all([
    supabase.from("universities").select("id,name").order("name"),
    supabase
      .from("enquiries")
      .select("id,created_at,status,listing_id,listings!inner(id,title)")
      .eq("student_id", student.id)
      .order("created_at", { ascending: false })
      .limit(30),
  ]);
  const uniRows = (universities as unknown as UniversityRow[] | null) ?? [];
  const enquiryRows = (enquiries as unknown as EnquiryRow[] | null) ?? [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Student dashboard</h1>
        <p className="text-sm text-zinc-600">Profile and enquiries you&apos;ve sent.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="font-semibold">Your profile</div>
            <div className="text-sm text-zinc-600">
              Used to prefill enquiries and help you search faster.
            </div>
          </CardHeader>
          <CardContent>
            <StudentProfileForm
              profile={{
                full_name: student.full_name,
                university_id: student.university_id,
                budget_min: student.budget_min,
                budget_max: student.budget_max,
                move_in_date: student.move_in_date,
              }}
              universities={uniRows}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="font-semibold">Enquiries</div>
            <div className="text-sm text-zinc-600">
              Replies arrive by email (MVP). Your initial message is stored here.
            </div>
          </CardHeader>
          <CardContent>
            {enquiryRows.length ? (
              <div className="flex flex-col gap-3">
                {enquiryRows.map((e) => (
                  <div
                    key={e.id}
                    className="flex items-start justify-between gap-3 rounded-lg border border-zinc-200 bg-white p-3"
                  >
                    <div className="min-w-0">
                      <div className="truncate font-medium">
                        <Link href={`/listings/${e.listing_id}`} className="underline">
                          {e.listings?.title ?? "Listing"}
                        </Link>
                      </div>
                      <div className="text-xs text-zinc-500">
                        Sent {new Date(e.created_at).toLocaleString("en-IE")}
                      </div>
                    </div>
                    <Badge className="bg-white">{e.status}</Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-sm text-zinc-600">No enquiries yet.</div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

