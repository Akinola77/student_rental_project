"use client";

import { useActionState } from "react";
import { createListingAction, type ActionState } from "@/app/actions/landlord";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function CreateListingForm(props: {
  universities: Array<{ id: number; name: string }>;
}) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    createListingAction,
    {},
  );

  return (
    <form action={action} className="flex flex-col gap-3">
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">Title</label>
        <Input name="title" placeholder="e.g. Single room near UCD" required />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">University</label>
          <Select name="university_id" required defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {props.universities.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </Select>
          <div className="mt-1 text-xs text-zinc-500">Dublin only (MVP).</div>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">
            Available from
          </label>
          <Input name="available_from" type="date" required />
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">
            Rent (€ / mo)
          </label>
          <Input name="rent_monthly_eur" type="number" min={1} required />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">
            Deposit (€)
          </label>
          <Input name="deposit_eur" type="number" min={0} required />
        </div>
        <div className="flex items-end gap-2">
          <label className="flex items-center gap-2 text-sm text-zinc-700">
            <input name="bills_included" type="checkbox" className="h-4 w-4" /> Bills included
          </label>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">Room type</label>
          <Select name="room_type" required defaultValue="single_room">
            <option value="single_room">Single room</option>
            <option value="shared_room">Shared room</option>
            <option value="entire_property">Entire property</option>
          </Select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">Min stay</label>
          <Select name="min_stay" required defaultValue="semester">
            <option value="short_term">Short term</option>
            <option value="semester">Semester</option>
            <option value="academic_year">Academic year</option>
          </Select>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          Description
        </label>
        <Textarea name="description" rows={6} required placeholder="Describe the room, house, and what's included." />
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          House rules (optional)
        </label>
        <Textarea name="house_rules" rows={3} />
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          Full address (private)
        </label>
        <Input name="address" placeholder="Stored privately; only you + admin can view." required />
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Creating..." : "Create draft listing"}
      </Button>
    </form>
  );
}

