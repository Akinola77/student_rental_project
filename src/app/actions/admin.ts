"use server";

import { z } from "zod";
import { requireAdmin } from "@/lib/auth";
import { supabaseServer } from "@/lib/supabase/server";
import {
  emailAdminDecisionToLandlord,
  sendEmail,
} from "@/lib/email";

export type ActionState = { error?: string; message?: string };

async function logAudit(params: {
  actor_id: string;
  action: string;
  entity_type: string;
  entity_id?: string | null;
  metadata?: Record<string, unknown>;
}) {
  const supabase = await supabaseServer();
  await supabase.from("audit_logs").insert({
    actor_id: params.actor_id,
    action: params.action,
    entity_type: params.entity_type,
    entity_id: params.entity_id ?? null,
    metadata: params.metadata ?? {},
  });
}

const landlordDecisionSchema = z.object({
  landlord_id: z.string().uuid(),
  decision: z.enum(["approved", "rejected", "suspended"]),
  notes: z.string().max(2000).optional().nullable(),
});

export async function decideLandlordVerificationAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const admin = await requireAdmin();
  const parsed = landlordDecisionSchema.safeParse({
    landlord_id: formData.get("landlord_id"),
    decision: formData.get("decision"),
    notes: (formData.get("notes") as string) || null,
  });
  if (!parsed.success) return { error: "Invalid decision." };

  const supabase = await supabaseServer();
  const { landlord_id, decision, notes } = parsed.data;

  const patch: Record<string, unknown> = {
    verification_status: decision,
    verified_at: decision === "approved" ? new Date().toISOString() : null,
  };

  const { data: landlordProfile, error } = await supabase
    .from("profiles")
    .update(patch)
    .eq("id", landlord_id)
    .eq("role", "landlord")
    .select("email,full_name")
    .single();

  if (error) return { error: error.message };

  if (notes && notes.trim().length) {
    await supabase.from("landlord_verification_notes").upsert({
      landlord_id,
      notes: notes.trim(),
    });
  }

  await logAudit({
    actor_id: admin.id,
    action: `landlord_verification_${decision}`,
    entity_type: "profile",
    entity_id: landlord_id,
    metadata: { notes },
  });

  await sendEmail({
    to: landlordProfile.email,
    subject: `StudentStay verification: ${decision.toUpperCase()}`,
    html: emailAdminDecisionToLandlord({
      landlordName: landlordProfile.full_name ?? null,
      decision,
    }),
  });

  return { message: `Landlord marked as ${decision}.` };
}

const listingDecisionSchema = z.object({
  listing_id: z.string().uuid(),
  decision: z.enum(["approve", "reject", "deactivate"]),
  notes: z.string().max(2000).optional().nullable(),
});

export async function decideListingAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const admin = await requireAdmin();
  const parsed = listingDecisionSchema.safeParse({
    listing_id: formData.get("listing_id"),
    decision: formData.get("decision"),
    notes: (formData.get("notes") as string) || null,
  });
  if (!parsed.success) return { error: "Invalid action." };

  const supabase = await supabaseServer();
  const { listing_id, decision, notes } = parsed.data;

  let status: string | null = null;
  if (decision === "approve") status = "active";
  if (decision === "reject") status = "deactivated";
  if (decision === "deactivate") status = "deactivated";

  const { error } = await supabase
    .from("listings")
    .update({ status, moderation_notes: notes })
    .eq("id", listing_id);

  if (error) return { error: error.message };

  await logAudit({
    actor_id: admin.id,
    action: `listing_${decision}`,
    entity_type: "listing",
    entity_id: listing_id,
    metadata: { notes },
  });

  return { message: "Listing updated." };
}

const reportDecisionSchema = z.object({
  report_id: z.string().uuid(),
  action: z.enum(["resolve", "deactivate_listing", "suspend_landlord"]),
});

export async function decideReportAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const admin = await requireAdmin();
  const parsed = reportDecisionSchema.safeParse({
    report_id: formData.get("report_id"),
    action: formData.get("action"),
  });
  if (!parsed.success) return { error: "Invalid action." };

  const supabase = await supabaseServer();
  const { data: report } = await supabase
    .from("listing_reports")
    .select("id,listing_id")
    .eq("id", parsed.data.report_id)
    .single();

  if (!report) return { error: "Report not found." };

  if (parsed.data.action === "resolve") {
    const { error } = await supabase
      .from("listing_reports")
      .update({
        status: "resolved",
        resolved_at: new Date().toISOString(),
        resolved_by: admin.id,
      })
      .eq("id", report.id);
    if (error) return { error: error.message };
  }

  if (parsed.data.action === "deactivate_listing") {
    await supabase.from("listings").update({ status: "deactivated" }).eq("id", report.listing_id);
    await supabase
      .from("listing_reports")
      .update({
        status: "resolved",
        resolved_at: new Date().toISOString(),
        resolved_by: admin.id,
      })
      .eq("id", report.id);
  }

  if (parsed.data.action === "suspend_landlord") {
    const { data: listing } = await supabase
      .from("listings")
      .select("landlord_id")
      .eq("id", report.listing_id)
      .single();

    if (listing?.landlord_id) {
      await supabase
        .from("profiles")
        .update({ verification_status: "suspended" })
        .eq("id", listing.landlord_id);
      await supabase.from("listings").update({ status: "deactivated" }).eq("landlord_id", listing.landlord_id);
    }
    await supabase
      .from("listing_reports")
      .update({
        status: "resolved",
        resolved_at: new Date().toISOString(),
        resolved_by: admin.id,
      })
      .eq("id", report.id);
  }

  await logAudit({
    actor_id: admin.id,
    action: `report_${parsed.data.action}`,
    entity_type: "listing_report",
    entity_id: report.id,
    metadata: { listing_id: report.listing_id },
  });

  return { message: "Report action applied." };
}

const userMgmtSchema = z.object({
  user_id: z.string().uuid(),
  account_status: z.enum(["active", "suspended", "banned"]),
});

export async function setUserAccountStatusAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const admin = await requireAdmin();
  const parsed = userMgmtSchema.safeParse({
    user_id: formData.get("user_id"),
    account_status: formData.get("account_status"),
  });
  if (!parsed.success) return { error: "Invalid status." };

  const supabase = await supabaseServer();
  const { error } = await supabase
    .from("profiles")
    .update({ account_status: parsed.data.account_status })
    .eq("id", parsed.data.user_id);
  if (error) return { error: error.message };

  await logAudit({
    actor_id: admin.id,
    action: `user_status_${parsed.data.account_status}`,
    entity_type: "profile",
    entity_id: parsed.data.user_id,
  });

  return { message: "User status updated." };
}

