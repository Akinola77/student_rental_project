import Link from "next/link";
import { supabaseServer } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ListingCard, type ListingCardData } from "@/components/listing-card";
import { Alert } from "@/components/ui/alert";
import type { ListingRowPublic, UniversityRow } from "@/lib/db-types";

export default async function Home() {
  const supabase = await supabaseServer();

  const [{ data: universities }, { data: listings }] = await Promise.all([
    supabase.from("universities").select("id,name").order("name"),
    supabase
      .from("listings")
      .select(
        "id,title,rent_monthly_eur,deposit_eur,bills_included,room_type,min_stay,available_from,landlord_verified,universities(name)",
      )
      .eq("status", "active")
      .order("created_at", { ascending: false })
      .limit(3),
  ]);

  const featured: ListingCardData[] = ((listings ?? []) as unknown as ListingRowPublic[]).map(
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
    <div className="flex flex-col gap-8">
      <section className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Student-only accommodation listings for Dublin.
            </h1>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Trust-first MVP: verified landlords, simple enquiries, and scam reporting.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/listings">
              <Button>Browse listings</Button>
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <Alert variant="warning">
            <strong>Never pay upfront.</strong> StudentStay does not take payments or deposits.
            Beware of pressure tactics and “too good to be true” offers.
          </Alert>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <div className="font-semibold">Quick search</div>
            <div className="text-sm text-zinc-600">
              Filters are MVP-only (no maps, no bookings).
            </div>
          </CardHeader>
          <CardContent>
            <form method="get" action="/listings" className="grid gap-3 md:grid-cols-5">
              <div className="md:col-span-2">
                <label className="mb-1 block text-xs font-medium text-zinc-700">
                  University
                </label>
                <Select name="university_id" defaultValue="">
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
                  Max budget (€ / mo)
                </label>
                <Input name="max_budget" type="number" min={0} placeholder="e.g. 1200" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-700">
                  Room type
                </label>
                <Select name="room_type" defaultValue="">
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
                <Input name="available_from" type="date" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-zinc-700">
                  Min stay
                </label>
                <Select name="min_stay" defaultValue="">
                  <option value="">Any</option>
                  <option value="short_term">Short term</option>
                  <option value="semester">Semester</option>
                  <option value="academic_year">Academic year</option>
                </Select>
              </div>
              <div className="md:col-span-5 flex items-center justify-between gap-3">
                <div className="text-xs text-zinc-500">City is fixed to Dublin (MVP).</div>
                <Button type="submit">Search</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-3">
        <div className="flex items-end justify-between">
          <h2 className="text-lg font-semibold">Featured (newest)</h2>
          <Link href="/listings" className="text-sm text-zinc-600 hover:text-zinc-900">
            View all
          </Link>
        </div>
        {featured.length ? (
          <div className="grid gap-3 md:grid-cols-3">
            {featured.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-600">
            No active listings yet. Run the Supabase seed script to populate demo data.
          </div>
        )}
      </section>
    </div>
  );
}
