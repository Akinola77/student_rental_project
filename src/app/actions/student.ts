"use server";

import { z } from "zod";
import { requireRole } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import {
  emailNewEnquiryToLandlord,
  sendEmail,
} from "@/lib/email";

export type ActionState = { error?: string; message?: string };

const enquirySchema = z.object({
  listing_id: z.string().uuid(),
  move_in_date: z.string().optional().nullable(),
  length_of_stay: z.string().max(120).optional().nullable(),
  message: z.string().min(10).max(2000),
});

export async function createEnquiryAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const student = await requireRole("student");

  const parsed = enquirySchema.safeParse({
    listing_id: formData.get("listing_id"),
    move_in_date: (formData.get("move_in_date") as string) || null,
    length_of_stay: (formData.get("length_of_stay") as string) || null,
    message: formData.get("message"),
  });
  if (!parsed.success) return { error: "Please check your enquiry details." };

  const supabase = await supabaseServer();
  const { listing_id, move_in_date, length_of_stay, message } = parsed.data;

  const { data: enquiry, error } = await supabase
    .from("enquiries")
    .insert({
      listing_id,
      student_id: student.id,
      move_in_date,
      length_of_stay,
      message,
    })
    .select("id")
    .single();

  if (error) {
    if (error.message.includes("daily_limit_exceeded")) {
      return { error: "Daily limit reached (max 5 enquiries/day). Try again tomorrow." };
    }
    return { error: error.message };
  }

  await supabase.from("enquiry_messages").insert({
    enquiry_id: enquiry.id,
    sender_role: "student",
    sender_id: student.id,
    message,
  });

  // Email landlord using a server-only admin client (bypasses RLS).
  const admin = supabaseAdmin();
  const { data: listing } = await admin
    .from("listings")
    .select(
      "id,title,landlord_id,landlord:profiles!listings_landlord_id_fkey(email,full_name)",
    )
    .eq("id", listing_id)
    .single();
  const listingRow = listing as unknown as {
    title: string;
    landlord?: { email: string; full_name: string | null } | null;
  };

  const appUrl = process.env.APP_URL ?? "http://localhost:3000";
  const threadUrl = `${appUrl}/dashboard/landlord/enquiries/${enquiry.id}`;

  const landlordEmail = listingRow.landlord?.email;
  if (landlordEmail) {
    await sendEmail({
      to: landlordEmail,
      subject: `New enquiry: ${listingRow.title}`,
      html: emailNewEnquiryToLandlord({
        landlordName: listingRow.landlord?.full_name ?? null,
        listingTitle: listingRow.title,
        studentEmail: student.email,
        moveInDate: move_in_date ?? null,
        lengthOfStay: length_of_stay ?? null,
        message,
        threadUrl,
      }),
    });
  }

  return { message: "Enquiry sent. The landlord will reply by email." };
}

const reportSchema = z.object({
  listing_id: z.string().uuid(),
  reason: z.enum([
    "asked_for_money_upfront",
    "suspicious_communication",
    "fake_photos",
    "too_good_to_be_true",
    "other",
  ]),
  details: z.string().max(2000).optional().nullable(),
});

export async function createReportAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const student = await requireRole("student");
  const parsed = reportSchema.safeParse({
    listing_id: formData.get("listing_id"),
    reason: formData.get("reason"),
    details: (formData.get("details") as string) || null,
  });
  if (!parsed.success) return { error: "Please select a reason and try again." };

  const supabase = await supabaseServer();
  const { error } = await supabase.from("listing_reports").insert({
    listing_id: parsed.data.listing_id,
    student_id: student.id,
    reason: parsed.data.reason,
    details: parsed.data.details,
  });

  if (error) {
    if (error.message.includes("daily_limit_exceeded")) {
      return { error: "Daily limit reached (max 5 reports/day). Try again tomorrow." };
    }
    return { error: error.message };
  }
  return { message: "Report submitted. Thanks for keeping students safe." };
}

