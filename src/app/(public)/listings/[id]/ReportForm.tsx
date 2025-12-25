"use client";

import { useActionState } from "react";
import { createReportAction, type ActionState } from "@/app/actions/student";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";

export function ReportForm({ listingId }: { listingId: string }) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    createReportAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="listing_id" value={listingId} />

      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">Reason</label>
        <Select name="reason" defaultValue="" required>
          <option value="" disabled>
            Select a reason…
          </option>
          <option value="asked_for_money_upfront">Asked for money upfront</option>
          <option value="suspicious_communication">Suspicious communication</option>
          <option value="fake_photos">Fake photos</option>
          <option value="too_good_to_be_true">Too good to be true</option>
          <option value="other">Other</option>
        </Select>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          Details (optional)
        </label>
        <Textarea name="details" rows={4} placeholder="Add context to help admins." />
      </div>

      <Button type="submit" variant="danger" disabled={pending}>
        {pending ? "Submitting..." : "Report listing"}
      </Button>
    </form>
  );
}

