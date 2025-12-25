"use client";

import { useActionState } from "react";
import { updateLandlordProfileAction, type ActionState } from "@/app/actions/profile";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LandlordProfileForm(props: {
  profile: { full_name: string | null; phone: string | null };
}) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    updateLandlordProfileAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-3">
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">Full name</label>
        <Input name="full_name" defaultValue={props.profile.full_name ?? ""} required />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          Phone (optional)
        </label>
        <Input name="phone" defaultValue={props.profile.phone ?? ""} />
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Save profile"}
      </Button>
    </form>
  );
}

