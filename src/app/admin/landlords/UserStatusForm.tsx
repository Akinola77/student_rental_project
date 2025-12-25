"use client";

import { useActionState } from "react";
import { setUserAccountStatusAction, type ActionState } from "@/app/actions/admin";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

export function UserStatusForm({
  userId,
  current,
}: {
  userId: string;
  current: string;
}) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    setUserAccountStatusAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-2">
      <input type="hidden" name="user_id" value={userId} />
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}
      <Select name="account_status" defaultValue={current}>
        <option value="active">Active</option>
        <option value="suspended">Suspended</option>
        <option value="banned">Banned</option>
      </Select>
      <Button type="submit" variant="secondary" disabled={pending}>
        {pending ? "Saving..." : "Update user status"}
      </Button>
    </form>
  );
}

