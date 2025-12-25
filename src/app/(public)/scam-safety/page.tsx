import { Alert } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";

export default function ScamSafetyPage() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <h1 className="text-2xl font-semibold tracking-tight">Avoid scams</h1>
      <Alert variant="warning">
        <strong>Never pay upfront.</strong> StudentStay does not handle payments, deposits,
        bookings, or escrow.
      </Alert>

      <Card>
        <CardContent className="space-y-3 text-sm leading-6 text-zinc-700">
          <p>
            StudentStay is a listings + enquiry platform. Always use good judgement when
            arranging viewings and payments.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Don&apos;t send money before viewing the property and verifying the landlord.
            </li>
            <li>
              Be wary of pressure tactics: “pay today or you lose it”, urgent transfers, or
              gifts cards/crypto.
            </li>
            <li>
              Watch for “too good to be true” rent, fake photos, and vague descriptions.
            </li>
            <li>
              Keep proof of conversations and report suspicious listings in-app.
            </li>
          </ul>
          <p className="text-zinc-600">
            If you suspect a scam, submit a report from the listing page. Admin can
            deactivate listings and suspend landlords.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

