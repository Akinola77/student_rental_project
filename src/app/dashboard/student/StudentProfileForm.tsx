"use client";

import { useActionState } from "react";
import { updateStudentProfileAction, type ActionState } from "@/app/actions/profile";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export function StudentProfileForm(props: {
  profile: {
    full_name: string | null;
    university_id: number | null;
    budget_min: number | null;
    budget_max: number | null;
    move_in_date: string | null;
  };
  universities: Array<{ id: number; name: string }>;
}) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    updateStudentProfileAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-3">
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">Full name</label>
        <Input
          name="full_name"
          defaultValue={props.profile.full_name ?? ""}
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          University (optional)
        </label>
        <Select
          name="university_id"
          defaultValue={props.profile.university_id?.toString() ?? ""}
        >
          <option value="">Prefer not to say</option>
          {props.universities.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </Select>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">
            Budget min (optional)
          </label>
          <Input
            name="budget_min"
            type="number"
            min={0}
            defaultValue={props.profile.budget_min ?? ""}
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">
            Budget max (optional)
          </label>
          <Input
            name="budget_max"
            type="number"
            min={0}
            defaultValue={props.profile.budget_max ?? ""}
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          Move-in date (optional)
        </label>
        <Input name="move_in_date" type="date" defaultValue={props.profile.move_in_date ?? ""} />
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Save profile"}
      </Button>
    </form>
  );
}

