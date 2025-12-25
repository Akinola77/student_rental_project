import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export type ListingCardData = {
  id: string;
  title: string;
  rent_monthly_eur: number;
  deposit_eur: number;
  bills_included: boolean;
  room_type: string;
  min_stay: string;
  available_from: string;
  university_name: string;
  landlord_verified: boolean;
};

export function ListingCard({ listing }: { listing: ListingCardData }) {
  return (
    <Link href={`/listings/${listing.id}`} className="block">
      <Card className="hover:border-zinc-300">
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="truncate font-semibold">{listing.title}</div>
              <div className="text-sm text-zinc-600">{listing.university_name}</div>
            </div>
            {listing.landlord_verified ? (
              <Badge className="border-emerald-200 bg-emerald-50 text-emerald-900">
                Verified landlord
              </Badge>
            ) : (
              <Badge>Unverified</Badge>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-700">
            <Badge className="bg-white">{listing.room_type.replaceAll("_", " ")}</Badge>
            <Badge className="bg-white">{listing.min_stay.replaceAll("_", " ")}</Badge>
            <Badge className="bg-white">
              Available {new Date(listing.available_from).toLocaleDateString("en-IE")}
            </Badge>
          </div>

          <div className="mt-1 flex items-center justify-between">
            <div className="text-sm text-zinc-700">
              €{listing.rent_monthly_eur}/mo{" "}
              <span className="text-zinc-500">
                · deposit €{listing.deposit_eur}
                {listing.bills_included ? " · bills included" : ""}
              </span>
            </div>
            <span className="text-sm text-zinc-600">View</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

