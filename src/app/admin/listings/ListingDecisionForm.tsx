"use client";

import { useActionState } from "react";
import { decideListingAction, type ActionState } from "@/app/actions/admin";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ListingDecisionForm({ listingId }: { listingId: string }) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    decideListingAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-2">
      <input type="hidden" name="listing_id" value={listingId} />
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}
      <Select name="decision" defaultValue="approve">
        <option value="approve">Approve → Active</option>
        <option value="reject">Reject → Deactivated</option>
        <option value="deactivate">Deactivate</option>
      </Select>
      <Textarea name="notes" rows={2} placeholder="Reason / notes (stored on listing + audit log)." />
      <Button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Apply"}
      </Button>
    </form>
  );
}

