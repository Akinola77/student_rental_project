export const DEFAULT_MAILBOX = "info@cloudhight.com";
export const SITE_NAME = "CloudHight Consulting";

export const ENQUIRY_VARIANTS = [
  "contact",
  "event",
  "job",
  "partner",
  "academy",
] as const;

export type EnquiryVariant = (typeof ENQUIRY_VARIANTS)[number];

export type EnquiryAttachment = {
  filename: string;
  contentType: string;
  content: Buffer;
};

export type ParsedEnquiry = {
  variant: EnquiryVariant;
  fields: Record<string, string>;
  replyTo: string;
  subject: string;
  text: string;
  attachment?: EnquiryAttachment;
};

const MAX_FIELD = 8_000;
const MAX_RESUME_BYTES = 4 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const RESUME_EXT = /\.(pdf|docx?)$/i;

const LABELS: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  company: "Company",
  subject: "Subject",
  message: "Message",
  org: "Organisation",
  title: "Event title",
  date: "Preferred date",
  location: "Location",
  attendees: "Expected attendees",
  details: "Details",
  role: "Role",
  cover: "Cover letter",
  type: "Type",
  size: "Size",
  program: "Program of interest",
  objective: "Primary objective",
  timeline: "Preferred timeline",
};

const VARIANT_LABEL: Record<EnquiryVariant, string> = {
  contact: "Contact form",
  event: "Event request",
  job: "Job application",
  partner: "Partner programme",
  academy: "Academy enquiry",
};

function isVariant(value: string): value is EnquiryVariant {
  return (ENQUIRY_VARIANTS as readonly string[]).includes(value);
}

function readString(form: FormData, name: string) {
  const raw = form.get(name);
  if (typeof raw !== "string") return "";
  return raw.replace(/\r\n/g, "\n").trim().slice(0, MAX_FIELD);
}

function headerSafe(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function isHoneypotTriggered(form: FormData) {
  return readString(form, "website").length > 0;
}

async function readResume(
  form: FormData,
): Promise<EnquiryAttachment | { error: string }> {
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
  const content = Buffer.from(await file.arrayBuffer());
  return {
    filename: headerSafe(file.name || "cv.pdf").slice(0, 180) || "cv.pdf",
    contentType: RESUME_TYPES.has(type) ? type : "application/octet-stream",
    content,
  };
}

export async function parseEnquiry(
  form: FormData,
): Promise<ParsedEnquiry | { error: string }> {
  const variantRaw = readString(form, "variant");
  if (!isVariant(variantRaw)) {
    return { error: "This form could not be submitted. Please try again." };
  }

  const name = readString(form, "name");
  const email = readString(form, "email").toLowerCase();
  if (!name) return { error: "Please enter your name." };
  if (!EMAIL_RE.test(email)) return { error: "Please enter a valid email address." };

  const fields: Record<string, string> = { name, email };

  const optional = [
    "phone",
    "company",
    "subject",
    "message",
    "org",
    "title",
    "date",
    "location",
    "attendees",
    "details",
    "role",
    "cover",
    "type",
    "size",
    "program",
    "objective",
    "timeline",
  ] as const;
  for (const key of optional) {
    const value = readString(form, key);
    if (value) fields[key] = value;
  }

  let attachment: EnquiryAttachment | undefined;

  if (variantRaw === "contact") {
    if (!fields.message) return { error: "Please enter a message." };
  } else if (variantRaw === "event") {
    if (!fields.title) return { error: "Please enter a proposed event title." };
  } else if (variantRaw === "job") {
    if (!fields.role) return { error: "Please choose a role of interest." };
    const resume = await readResume(form);
    if ("error" in resume) return resume;
    attachment = resume;
  } else if (variantRaw === "partner" || variantRaw === "academy") {
    if (!fields.org) {
      return {
        error:
          variantRaw === "partner"
            ? "Please enter your company name."
            : "Please enter your institution name.",
      };
    }
    if (!fields.location) {
      return {
        error:
          variantRaw === "partner"
            ? "Please enter your country."
            : "Please enter your city / location.",
      };
    }
  }

  const subject = buildSubject(variantRaw, fields);
  const text = buildBody(variantRaw, fields, Boolean(attachment));

  return {
    variant: variantRaw,
    fields,
    replyTo: email,
    subject,
    text,
    attachment,
  };
}

function buildSubject(variant: EnquiryVariant, fields: Record<string, string>) {
  const prefix = `[CloudHight] ${VARIANT_LABEL[variant]}`;
  const rest =
    variant === "contact"
      ? fields.subject || fields.name
      : variant === "event"
        ? fields.title
        : variant === "job"
          ? `${fields.role} — ${fields.name}`
          : fields.org;
  return headerSafe(`${prefix}: ${rest}`).slice(0, 180);
}

function buildBody(
  variant: EnquiryVariant,
  fields: Record<string, string>,
  hasCv: boolean,
) {
  const lines = [
    `New ${VARIANT_LABEL[variant].toLowerCase()} submitted on ${SITE_NAME}.`,
    "",
  ];
  for (const [key, value] of Object.entries(fields)) {
    lines.push(`${LABELS[key] ?? key}: ${value}`);
  }
  if (hasCv) lines.push("CV: attached");
  lines.push("", `Mailbox: ${DEFAULT_MAILBOX}`);
  return lines.join("\n");
}

export function mailToAddress() {
  return process.env.MAIL_TO?.trim() || DEFAULT_MAILBOX;
}

export function mailFromAddress() {
  const from = process.env.MAIL_FROM?.trim() || DEFAULT_MAILBOX;
  if (from.includes("<")) return from;
  return `${SITE_NAME} <${from}>`;
}
