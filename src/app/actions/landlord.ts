"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { requireRole } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import {
  emailLandlordReplyToStudent,
  sendEmail,
} from "@/lib/email";

export type ActionState = { error?: string; message?: string };

const listingSchema = z.object({
  title: z.string().min(5).max(120),
  university_id: z.coerce.number().int().positive(),
  rent_monthly_eur: z.coerce.number().int().positive(),
  deposit_eur: z.coerce.number().int().nonnegative(),
  bills_included: z.enum(["on", "off"]).optional(),
  room_type: z.enum(["single_room", "shared_room", "entire_property"]),
  available_from: z.string().min(1),
  min_stay: z.enum(["short_term", "semester", "academic_year"]),
  description: z.string().min(20).max(5000),
  house_rules: z.string().max(2000).optional().nullable(),
  address: z.string().min(10).max(300),
});

export async function createListingAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const landlord = await requireRole("landlord");
  const parsed = listingSchema.safeParse({
    title: formData.get("title"),
    university_id: formData.get("university_id"),
    rent_monthly_eur: formData.get("rent_monthly_eur"),
    deposit_eur: formData.get("deposit_eur"),
    bills_included: formData.get("bills_included") ? "on" : "off",
    room_type: formData.get("room_type"),
    available_from: formData.get("available_from"),
    min_stay: formData.get("min_stay"),
    description: formData.get("description"),
    house_rules: (formData.get("house_rules") as string) || null,
    address: formData.get("address"),
  });
  if (!parsed.success) return { error: "Please check the listing fields." };

  const supabase = await supabaseServer();
  const { data: listing, error } = await supabase
    .from("listings")
    .insert({
      landlord_id: landlord.id,
      title: parsed.data.title,
      university_id: parsed.data.university_id,
      rent_monthly_eur: parsed.data.rent_monthly_eur,
      deposit_eur: parsed.data.deposit_eur,
      bills_included: parsed.data.bills_included === "on",
      room_type: parsed.data.room_type,
      available_from: parsed.data.available_from,
      min_stay: parsed.data.min_stay,
      description: parsed.data.description,
      house_rules: parsed.data.house_rules,
      status: "draft",
    })
    .select("id")
    .single();
  if (error) return { error: error.message };

  const { error: addrErr } = await supabase.from("listing_private").insert({
    listing_id: listing.id,
    address: parsed.data.address,
  });
  if (addrErr) return { error: addrErr.message };

  redirect(`/dashboard/landlord/listings/${listing.id}/edit`);
}

const listingUpdateSchema = listingSchema.partial().extend({
  listing_id: z.string().uuid(),
});

export async function updateListingAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const landlord = await requireRole("landlord");
  const parsed = listingUpdateSchema.safeParse({
    listing_id: formData.get("listing_id"),
    title: formData.get("title"),
    university_id: formData.get("university_id"),
    rent_monthly_eur: formData.get("rent_monthly_eur"),
    deposit_eur: formData.get("deposit_eur"),
    bills_included: formData.get("bills_included") ? "on" : "off",
    room_type: formData.get("room_type"),
    available_from: formData.get("available_from"),
    min_stay: formData.get("min_stay"),
    description: formData.get("description"),
    house_rules: (formData.get("house_rules") as string) || null,
    address: formData.get("address"),
  });
  if (!parsed.success) return { error: "Please check the fields and try again." };

  const supabase = await supabaseServer();
  const { listing_id, address, bills_included, ...rest } = parsed.data;

  const payload: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(rest)) {
    if (v !== undefined) payload[k] = v;
  }
  if (bills_included !== undefined) payload.bills_included = bills_included === "on";

  const { error } = await supabase
    .from("listings")
    .update(payload)
    .eq("id", listing_id)
    .eq("landlord_id", landlord.id);
  if (error) return { error: error.message };

  if (address !== undefined) {
    const { error: addrErr } = await supabase.from("listing_private").upsert({
      listing_id,
      address,
    });
    if (addrErr) return { error: addrErr.message };
  }

  return { message: "Saved." };
}

export async function submitListingForReviewAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const landlord = await requireRole("landlord");
  const listingId = String(formData.get("listing_id") ?? "");
  if (!listingId) return { error: "Missing listing id." };

  const supabase = await supabaseServer();
  const { error } = await supabase
    .from("listings")
    .update({ status: "pending_review" })
    .eq("id", listingId)
    .eq("landlord_id", landlord.id);

  if (error) {
    if (error.message.includes("landlord_not_verified")) {
      return { error: "You must be verified before submitting listings for review." };
    }
    return { error: error.message };
  }

  return { message: "Submitted for review. An admin will approve or reject it." };
}

const replySchema = z.object({
  enquiry_id: z.string().uuid(),
  message: z.string().min(5).max(2000),
});

export async function replyToEnquiryAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const landlord = await requireRole("landlord");
  const parsed = replySchema.safeParse({
    enquiry_id: formData.get("enquiry_id"),
    message: formData.get("message"),
  });
  if (!parsed.success) return { error: "Please write a message." };

  const supabase = await supabaseServer();

  // Ensure this enquiry belongs to this landlord
  const { data: enquiry } = await supabase
    .from("enquiries")
    .select("id,listing_id,student_id,listings!inner(id,landlord_id,title)")
    .eq("id", parsed.data.enquiry_id)
    .maybeSingle();

  const enquiryRow = enquiry as unknown as
    | {
        student_id: string;
        listings: { landlord_id: string; title: string };
      }
    | null;

  if (!enquiryRow || enquiryRow.listings.landlord_id !== landlord.id) {
    return { error: "Not allowed." };
  }

  const { error: insertErr } = await supabase.from("enquiry_messages").insert({
    enquiry_id: parsed.data.enquiry_id,
    sender_role: "landlord",
    sender_id: landlord.id,
    message: parsed.data.message,
  });
  if (insertErr) return { error: insertErr.message };

  // Email student (admin client to access student profile/email)
  const admin = supabaseAdmin();
  const { data: studentProfile } = await admin
    .from("profiles")
    .select("email")
    .eq("id", enquiryRow.student_id)
    .single();

  const appUrl = process.env.APP_URL ?? "http://localhost:3000";
  const threadUrl = `${appUrl}/dashboard/student`;
  const studentEmail = (studentProfile as unknown as { email: string } | null)?.email;

  if (studentEmail) {
    await sendEmail({
      to: studentEmail,
      subject: `Reply about: ${enquiryRow.listings.title}`,
      html: emailLandlordReplyToStudent({
        listingTitle: enquiryRow.listings.title,
        landlordName: landlord.full_name ?? null,
        reply: parsed.data.message,
        threadUrl,
      }),
    });
  }

  return { message: "Reply sent (email relay)." };
}

