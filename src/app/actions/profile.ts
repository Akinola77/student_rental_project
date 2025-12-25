"use server";

import { z } from "zod";
import { requireProfile } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";

export type ActionState = { error?: string; message?: string };

const studentProfileSchema = z.object({
  full_name: z.string().min(2).max(120),
  university_id: z.string().optional().nullable(),
  budget_min: z.string().optional().nullable(),
  budget_max: z.string().optional().nullable(),
  move_in_date: z.string().optional().nullable(),
});

export async function updateStudentProfileAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const profile = await requireProfile();
  if (profile.role !== "student") return { error: "Not allowed." };

  const parsed = studentProfileSchema.safeParse({
    full_name: formData.get("full_name"),
    university_id: (formData.get("university_id") as string) || null,
    budget_min: (formData.get("budget_min") as string) || null,
    budget_max: (formData.get("budget_max") as string) || null,
    move_in_date: (formData.get("move_in_date") as string) || null,
  });
  if (!parsed.success) return { error: "Please check your inputs." };

  const supabase = await supabaseServer();
  const { error } = await supabase
    .from("profiles")
    .update({
      full_name: parsed.data.full_name,
      university_id: parsed.data.university_id ? Number(parsed.data.university_id) : null,
      budget_min: parsed.data.budget_min ? Number(parsed.data.budget_min) : null,
      budget_max: parsed.data.budget_max ? Number(parsed.data.budget_max) : null,
      move_in_date: parsed.data.move_in_date || null,
    })
    .eq("id", profile.id);

  if (error) return { error: error.message };
  return { message: "Profile saved." };
}

const landlordProfileSchema = z.object({
  full_name: z.string().min(2).max(120),
  phone: z.string().max(40).optional().nullable(),
});

export async function updateLandlordProfileAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const profile = await requireProfile();
  if (profile.role !== "landlord") return { error: "Not allowed." };

  const parsed = landlordProfileSchema.safeParse({
    full_name: formData.get("full_name"),
    phone: (formData.get("phone") as string) || null,
  });
  if (!parsed.success) return { error: "Please check your inputs." };

  const supabase = await supabaseServer();
  const { error } = await supabase
    .from("profiles")
    .update({
      full_name: parsed.data.full_name,
      phone: parsed.data.phone,
    })
    .eq("id", profile.id);

  if (error) return { error: error.message };
  return { message: "Profile saved." };
}

