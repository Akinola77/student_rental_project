"use client";

import { useActionState } from "react";
import { submitListingForReviewAction, type ActionState } from "@/app/actions/landlord";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export function SubmitForReviewForm(props: { listingId: string; disabled?: boolean }) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    submitListingForReviewAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="listing_id" value={props.listingId} />
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}
      <Button type="submit" disabled={pending || props.disabled}>
        {pending ? "Submitting..." : "Submit for admin review"}
      </Button>
      <div className="text-xs text-zinc-500">
        Only verified landlords can submit listings for review. Admin must activate listings.
      </div>
    </form>
  );
}

