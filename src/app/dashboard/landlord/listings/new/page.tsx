import Link from "next/link";
import { requireRole } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CreateListingForm } from "./CreateListingForm";
import type { UniversityRow } from "@/lib/db-types";

export default async function NewListingPage() {
  await requireRole("landlord");
  const supabase = await supabaseServer();
  const { data: universities } = await supabase
    .from("universities")
    .select("id,name")
    .order("name");
  const uniRows = (universities as unknown as UniversityRow[] | null) ?? [];

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-3 text-sm text-zinc-600">
        <Link href="/dashboard/landlord/listings" className="underline">
          ← Back to listings
        </Link>
      </div>
      <Card>
        <CardHeader>
          <div className="text-lg font-semibold">Create listing (draft)</div>
          <div className="text-sm text-zinc-600">
            You can upload photos and submit for review after saving.
          </div>
        </CardHeader>
        <CardContent>
          <CreateListingForm universities={uniRows} />
        </CardContent>
      </Card>
    </div>
  );
}

