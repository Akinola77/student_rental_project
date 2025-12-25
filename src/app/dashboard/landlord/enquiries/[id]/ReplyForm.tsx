"use client";

import { useActionState } from "react";
import { replyToEnquiryAction, type ActionState } from "@/app/actions/landlord";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ReplyForm({ enquiryId }: { enquiryId: string }) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    replyToEnquiryAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="enquiry_id" value={enquiryId} />
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">Your reply</label>
        <Textarea name="message" rows={5} required placeholder="Write a reply (this will be emailed to the student)." />
      </div>
      <Button type="submit" disabled={pending}>
        {pending ? "Sending..." : "Send reply (email)"}
      </Button>
    </form>
  );
}

