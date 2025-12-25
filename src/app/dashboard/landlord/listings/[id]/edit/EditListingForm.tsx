"use client";

import { useActionState } from "react";
import { updateListingAction, type ActionState } from "@/app/actions/landlord";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function EditListingForm(props: {
  listing: {
    id: string;
    title: string;
    university_id: number;
    rent_monthly_eur: number;
    deposit_eur: number;
    bills_included: boolean;
    room_type: string;
    available_from: string;
    min_stay: string;
    description: string;
    house_rules: string | null;
  };
  address: string | null;
  universities: Array<{ id: number; name: string }>;
}) {
  const [state, action, pending] = useActionState<ActionState, FormData>(
    updateListingAction,
    {},
  );

  const l = props.listing;

  return (
    <form action={action} className="flex flex-col gap-3">
      <input type="hidden" name="listing_id" value={l.id} />
      {state.error ? <Alert variant="danger">{state.error}</Alert> : null}
      {state.message ? <Alert variant="success">{state.message}</Alert> : null}

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">Title</label>
        <Input name="title" defaultValue={l.title} required />
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">University</label>
          <Select name="university_id" defaultValue={String(l.university_id)} required>
            {props.universities.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">
            Available from
          </label>
          <Input name="available_from" type="date" defaultValue={l.available_from} required />
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">
            Rent (€ / mo)
          </label>
          <Input name="rent_monthly_eur" type="number" min={1} defaultValue={l.rent_monthly_eur} required />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">
            Deposit (€)
          </label>
          <Input name="deposit_eur" type="number" min={0} defaultValue={l.deposit_eur} required />
        </div>
        <div className="flex items-end gap-2">
          <label className="flex items-center gap-2 text-sm text-zinc-700">
            <input name="bills_included" type="checkbox" className="h-4 w-4" defaultChecked={l.bills_included} /> Bills included
          </label>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">Room type</label>
          <Select name="room_type" defaultValue={l.room_type} required>
            <option value="single_room">Single room</option>
            <option value="shared_room">Shared room</option>
            <option value="entire_property">Entire property</option>
          </Select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-zinc-700">Min stay</label>
          <Select name="min_stay" defaultValue={l.min_stay} required>
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
        <Textarea name="description" rows={6} defaultValue={l.description} required />
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          House rules (optional)
        </label>
        <Textarea name="house_rules" rows={3} defaultValue={l.house_rules ?? ""} />
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-zinc-700">
          Full address (private)
        </label>
        <Input name="address" defaultValue={props.address ?? ""} required />
      </div>

      <Button type="submit" disabled={pending}>
        {pending ? "Saving..." : "Save changes"}
      </Button>
    </form>
  );
}

