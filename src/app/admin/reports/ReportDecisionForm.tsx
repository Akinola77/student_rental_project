"use client";

import { useActionState } from "react";
import { decideReportAction, type ActionState } from "@/app/actions/admin";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

export function ReportDecisionForm({ reportId }: { reportId: string }) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    decideReportAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-2">
      <input type="hidden" name="report_id" value={reportId} />
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}
      <Select name="action" defaultValue="resolve">
        <option value="resolve">Resolve</option>
        <option value="deactivate_listing">Deactivate listing + resolve</option>
        <option value="suspend_landlord">Suspend landlord + deactivate listings + resolve</option>
      </Select>
      <Button type="submit" disabled={pending}>
        {pending ? "Applying..." : "Apply"}
      </Button>
    </form>
  );
}

