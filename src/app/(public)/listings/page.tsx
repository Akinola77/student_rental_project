import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";
import { ListingCard, type ListingCardData } from "@/components/listing-card";
import { Card, CardContent } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { ListingRowPublic, UniversityRow } from "@/lib/db-types";

type SearchParams = {
  university_id?: string;
  max_budget?: string;
  room_type?: string;
  available_from?: string;
  min_stay?: string;
  sort?: string;
};

export default async function ListingsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = searchParams;
  const supabase = await supabaseServer();

  const { data: universities } = await supabase
    .from("universities")
    .select("id,name")
    .order("name");

  let query = supabase
    .from("listings")
    .select(
      "id,title,rent_monthly_eur,deposit_eur,bills_included,room_type,min_stay,available_from,created_at,landlord_verified,universities(name)",
    )
    .eq("status", "active");

  if (params.university_id) query = query.eq("university_id", Number(params.university_id));
  if (params.max_budget) query = query.lte("rent_monthly_eur", Number(params.max_budget));
  if (params.room_type) query = query.eq("room_type", params.room_type);
  if (params.available_from) query = query.gte("available_from", params.available_from);
  if (params.min_stay) query = query.eq("min_stay", params.min_stay);

  if (params.sort === "rent_asc") {
    query = query.order("rent_monthly_eur", { ascending: true });
  } else {
    query = query.order("created_at", { ascending: false });
  }

  const { data: listings } = await query.limit(50);

  const rows: ListingCardData[] = ((listings ?? []) as unknown as ListingRowPublic[]).map(
    (l) => ({
      id: l.id,
      title: l.title,
      rent_monthly_eur: l.rent_monthly_eur,
      deposit_eur: l.deposit_eur,
      bills_included: l.bills_included,
      room_type: l.room_type,
      min_stay: l.min_stay,
      available_from: l.available_from,
      university_name: l.universities?.name ?? "Dublin",
      landlord_verified: Boolean(l.landlord_verified),
    }),
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight">Browse listings</h1>
        <p className="text-sm text-zinc-600">
          Dublin only · Active listings only · No maps, bookings, or payments (MVP).
        </p>
      </div>

      <Card>
        <CardContent>
          <form method="get" className="grid gap-3 md:grid-cols-6">
            <div className="md:col-span-2">
              <label className="mb-1 block text-xs font-medium text-zinc-700">
                University
              </label>
              <Select name="university_id" defaultValue={params.university_id ?? ""}>
                <option value="">Any</option>
                {((universities ?? []) as unknown as UniversityRow[]).map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.name}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-700">
                Max budget
              </label>
              <Input
                name="max_budget"
                type="number"
                min={0}
                defaultValue={params.max_budget ?? ""}
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-700">
                Room type
              </label>
              <Select name="room_type" defaultValue={params.room_type ?? ""}>
                <option value="">Any</option>
                <option value="single_room">Single room</option>
                <option value="shared_room">Shared room</option>
                <option value="entire_property">Entire property</option>
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-700">
                Available from
              </label>
              <Input name="available_from" type="date" defaultValue={params.available_from ?? ""} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-700">Min stay</label>
              <Select name="min_stay" defaultValue={params.min_stay ?? ""}>
                <option value="">Any</option>
                <option value="short_term">Short term</option>
                <option value="semester">Semester</option>
                <option value="academic_year">Academic year</option>
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-700">Sort</label>
              <Select name="sort" defaultValue={params.sort ?? ""}>
                <option value="">Newest</option>
                <option value="rent_asc">Rent (low → high)</option>
              </Select>
            </div>
            <div className="md:col-span-6 flex items-center justify-between gap-3">
              <Link href="/listings" className="text-sm text-zinc-600 hover:text-zinc-900">
                Reset
              </Link>
              <Button type="submit">Apply filters</Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {rows.length ? (
        <div className="grid gap-3 md:grid-cols-3">
          {rows.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-600">
          No listings match your filters.
        </div>
      )}
    </div>
  );
}

