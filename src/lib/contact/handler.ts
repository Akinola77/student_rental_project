import { SES_MAILBOX, sendSesEmail } from "../ses.ts";
import { resolveClientIp } from "./ip.ts";
import { acknowledgementSubject, acknowledgementText, internalSubject, internalText } from "./messages.ts";
import { buildRawEmail } from "./mime.ts";
import { consumeRateLimit, rateLimitTableName } from "./rate-limit.ts";
import { contactFieldsSchema } from "./schema.ts";
import { turnstileConfigured, verifyTurnstileToken } from "./turnstile.ts";

export const MAX_CONTACT_BODY_BYTES = 4.5 * 1024 * 1024;
const MAX_RESUME_BYTES = 4 * 1024 * 1024;
const RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const RESUME_EXT = /\.(pdf|docx?)$/i;

export const PUBLIC_ERROR =
  `We could not send your message just now. Please email ${SES_MAILBOX} directly.`;

type Resume = { filename: string; contentType: string; content: Buffer };

export type ContactDeps = {
  verifyCaptcha: typeof verifyTurnstileToken;
  consumeLimit: typeof consumeRateLimit;
  sendEmail: typeof sendSesEmail;
};

const defaultDeps: ContactDeps = {
  verifyCaptcha: verifyTurnstileToken,
  consumeLimit: consumeRateLimit,
  sendEmail: sendSesEmail,
};

function fail(message: string, status: number) {
  return Response.json({ ok: false, error: message }, { status });
}

function readString(form: FormData, name: string) {
  const raw = form.get(name);
  return typeof raw === "string" ? raw : "";
}

async function readResume(form: FormData): Promise<Resume | { error: string }> {
  const file = form.get("resume");
  if (!(file instanceof File) || file.size === 0) {
    return { error: "Please attach your CV." };
  }
  if (file.size > MAX_RESUME_BYTES) {
    return { error: "Please attach a CV under 4 MB." };
  }
  const type = (file.type || "").toLowerCase();
  if (!RESUME_TYPES.has(type) && !RESUME_EXT.test(file.name)) {
    return { error: "Please attach your CV as a PDF or Word document." };
  }
  const filename =
    file.name.replace(/[\r\n"]+/g, "").slice(0, 180) || "cv.pdf";
  return {
    filename,
    contentType: RESUME_TYPES.has(type) ? type : "application/octet-stream",
    content: Buffer.from(await file.arrayBuffer()),
  };
}

export function securityConfigured() {
  return turnstileConfigured() && Boolean(rateLimitTableName());
}

export async function handleContactPost(
  request: Request,
  deps: ContactDeps = defaultDeps,
) {
  const length = Number(request.headers.get("content-length") || "0");
  if (Number.isFinite(length) && length > MAX_CONTACT_BODY_BYTES) {
    return fail("Please keep the submission under 4 MB.", 413);
  }

  if (!securityConfigured()) {
    console.error("Contact API refused: Turnstile or rate-limit table is not configured");
    return fail(PUBLIC_ERROR, 503);
  }

  const ip = resolveClientIp(request.headers);
  if (!ip) {
    console.error("Contact API refused: no trusted client IP");
    return fail(PUBLIC_ERROR, 400);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail("This form could not be submitted. Please try again.", 400);
  }

  if (readString(form, "website").trim()) {
    return Response.json({ ok: true });
  }

  const parsed = contactFieldsSchema.safeParse({
    variant: readString(form, "variant") || "contact",
    name: readString(form, "name"),
    email: readString(form, "email"),
    phone: readString(form, "phone") || undefined,
    company: readString(form, "company") || undefined,
    subject: readString(form, "subject") || undefined,
    message: readString(form, "message") || undefined,
    org: readString(form, "org") || undefined,
    title: readString(form, "title") || undefined,
    date: readString(form, "date") || undefined,
    location: readString(form, "location") || undefined,
    attendees: readString(form, "attendees") || undefined,
    details: readString(form, "details") || undefined,
    role: readString(form, "role") || undefined,
    cover: readString(form, "cover") || undefined,
    type: readString(form, "type") || undefined,
    size: readString(form, "size") || undefined,
    program: readString(form, "program") || undefined,
    objective: readString(form, "objective") || undefined,
    timeline: readString(form, "timeline") || undefined,
    turnstileToken:
      readString(form, "cf-turnstile-response") ||
      readString(form, "turnstileToken"),
  });

  if (!parsed.success) {
    const message =
      parsed.error.issues[0]?.message ||
      "Please check the form and try again.";
    return fail(message, 400);
  }

  const fields = parsed.data;
  let resume: Resume | undefined;
  if (fields.variant === "job") {
    const file = await readResume(form);
    if ("error" in file) return fail(file.error, 400);
    resume = file;
  }

  const captcha = await deps.verifyCaptcha(fields.turnstileToken, ip);
  if (!captcha.ok) {
    if (captcha.reason === "unconfigured") return fail(PUBLIC_ERROR, 503);
    return fail("Please complete the verification check and try again.", 400);
  }

  let limited: Awaited<ReturnType<ContactDeps["consumeLimit"]>>;
  try {
    limited = await deps.consumeLimit(ip);
  } catch (error) {
    console.error("Contact rate limit store failed", error);
    return fail(PUBLIC_ERROR, 503);
  }
  if (!limited.ok) {
    if (limited.reason === "unconfigured") return fail(PUBLIC_ERROR, 503);
    if (limited.reason === "limited") {
      return fail("Please wait a few minutes before sending another enquiry.", 429);
    }
    return fail(PUBLIC_ERROR, 503);
  }

  const subject = internalSubject(fields);
  const text = internalText(fields, Boolean(resume));

  try {
    await deps.sendEmail({
      to: SES_MAILBOX,
      replyTo: fields.email,
      subject,
      text,
      raw: resume
        ? buildRawEmail({
            to: SES_MAILBOX,
            replyTo: fields.email,
            subject,
            text,
            attachment: resume,
          })
        : undefined,
    });
  } catch (error) {
    console.error("SES internal enquiry send failed", error);
    return fail(PUBLIC_ERROR, 502);
  }

  try {
    await deps.sendEmail({
      to: fields.email,
      replyTo: SES_MAILBOX,
      subject: acknowledgementSubject(),
      text: acknowledgementText(fields),
    });
  } catch (error) {
    console.error("SES visitor acknowledgement failed after internal send", error);
  }

  return Response.json({ ok: true });
}
