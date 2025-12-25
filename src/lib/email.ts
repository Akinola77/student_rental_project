import "server-only";
import { Resend } from "resend";

function resendClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("Missing RESEND_API_KEY");
  return new Resend(key);
}

function baseLayout(title: string, body: string) {
  return `
  <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height: 1.5; color: #111827">
    <h2 style="margin: 0 0 12px 0; font-size: 18px;">${title}</h2>
    <div style="font-size: 14px;">${body}</div>
    <hr style="margin: 16px 0; border: none; border-top: 1px solid #e5e7eb" />
    <div style="font-size: 12px; color: #6b7280;">
      StudentStay (MVP) — Dublin student accommodation. Never pay upfront.
    </div>
  </div>
  `;
}

export function emailNewEnquiryToLandlord(params: {
  landlordName: string | null;
  listingTitle: string;
  studentEmail: string;
  moveInDate: string | null;
  lengthOfStay: string | null;
  message: string;
  threadUrl: string;
}) {
  const body = `
    <p>Hi ${params.landlordName ?? "there"},</p>
    <p>You received a new enquiry on <strong>${params.listingTitle}</strong>.</p>
    <ul>
      <li><strong>Student email:</strong> ${params.studentEmail}</li>
      <li><strong>Move-in:</strong> ${params.moveInDate ?? "Not provided"}</li>
      <li><strong>Length of stay:</strong> ${params.lengthOfStay ?? "Not provided"}</li>
    </ul>
    <p><strong>Message</strong></p>
    <p style="white-space: pre-wrap; border:1px solid #e5e7eb; padding: 12px; border-radius: 8px;">${escapeHtml(
      params.message,
    )}</p>
    <p>
      Reply from your dashboard: <a href="${params.threadUrl}">${params.threadUrl}</a>
    </p>
  `;
  return baseLayout("New enquiry received", body);
}

export function emailLandlordReplyToStudent(params: {
  listingTitle: string;
  landlordName: string | null;
  reply: string;
  threadUrl: string;
}) {
  const body = `
    <p>You received a reply about <strong>${params.listingTitle}</strong>.</p>
    <p><strong>From:</strong> ${params.landlordName ?? "Landlord"}</p>
    <p style="white-space: pre-wrap; border:1px solid #e5e7eb; padding: 12px; border-radius: 8px;">${escapeHtml(
      params.reply,
    )}</p>
    <p>View the thread: <a href="${params.threadUrl}">${params.threadUrl}</a></p>
    <p><strong>Safety reminder:</strong> Never pay upfront. If someone pressures you, report the listing.</p>
  `;
  return baseLayout("Landlord replied to your enquiry", body);
}

export function emailAdminDecisionToLandlord(params: {
  landlordName: string | null;
  decision: "approved" | "rejected" | "suspended";
}) {
  const body = `
    <p>Hi ${params.landlordName ?? "there"},</p>
    <p>Your verification status has been updated to: <strong>${params.decision.toUpperCase()}</strong>.</p>
    <p>If you have questions, reply to this email.</p>
  `;
  return baseLayout("Verification status update", body);
}

export async function sendEmail(params: {
  to: string;
  subject: string;
  html: string;
}) {
  const from = process.env.EMAIL_FROM;
  if (!from) throw new Error("Missing EMAIL_FROM");

  const resend = resendClient();
  await resend.emails.send({
    from,
    to: params.to,
    subject: params.subject,
    html: params.html,
  });
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

