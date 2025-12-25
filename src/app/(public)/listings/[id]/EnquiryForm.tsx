"use client";

import { useActionState } from "react";
import { createEnquiryAction, type ActionState } from "@/app/actions/student";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";

export function EnquiryForm({ listingId }: { listingId: string }) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    createEnquiryAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="listing_id" value={listingId} />

      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}

      <Alert variant="warning">
        <strong>Never pay upfront.</strong> Arrange a viewing first and verify the landlord.
      </Alert>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">
            Move-in date (optional)
          </label>
          <Input name="move_in_date" type="date" />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">
            Length of stay (optional)
          </label>
          <Input name="length_of_stay" placeholder="e.g. 1 semester" />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          Message
        </label>
        <Textarea
          name="message"
          rows={5}
          placeholder="Introduce yourself, your course/university, and any questions. (Min 10 characters)"
          required
        />
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send enquiry"}
      </Button>
    </form>
  );
}

