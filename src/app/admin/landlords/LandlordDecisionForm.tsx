"use client";

import { useActionState } from "react";
import {
  decideLandlordVerificationAction,
  type ActionState,
} from "@/app/actions/admin";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function LandlordDecisionForm({ landlordId }: { landlordId: string }) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    decideLandlordVerificationAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-2">
      <input type="hidden" name="landlord_id" value={landlordId} />
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}
      <Select name="decision" defaultValue="approved">
        <option value="approved">Approve</option>
        <option value="rejected">Reject</option>
        <option value="suspended">Suspend</option>
      </Select>
      <Textarea name="notes" rows={2} placeholder="Admin notes (kept internal)." />
      <Button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Apply decision + email landlord"}
      </Button>
    </form>
  );
}

