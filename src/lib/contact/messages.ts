import { SES_MAILBOX } from "../ses.ts";
import type { ContactFields } from "@/lib/contact/schema";

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

const VARIANT_LABEL: Record<ContactFields["variant"], string> = {
  contact: "Contact form",
  event: "Event request",
  job: "Job application",
  partner: "Partner programme",
  academy: "Academy enquiry",
};

function headerSafe(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function internalSubject(fields: ContactFields) {
  const prefix = `[CloudHight] ${VARIANT_LABEL[fields.variant]}`;
  const rest =
    fields.variant === "contact"
      ? fields.subject || fields.name
      : fields.variant === "event"
        ? fields.title
        : fields.variant === "job"
          ? `${fields.role} — ${fields.name}`
          : fields.org;
  return headerSafe(`${prefix}: ${rest}`).slice(0, 180);
}

export function internalText(fields: ContactFields, hasCv: boolean) {
  const lines = [
    `New ${VARIANT_LABEL[fields.variant].toLowerCase()} submitted on CloudHight Consulting.`,
    "",
  ];
  for (const [key, value] of Object.entries(fields)) {
    if (key === "variant" || key === "website" || key === "turnstileToken") continue;
    if (!value) continue;
    lines.push(`${LABELS[key] ?? key}: ${value}`);
  }
  if (hasCv) lines.push("CV: attached");
  lines.push("", `Mailbox: ${SES_MAILBOX}`);
  return lines.join("\n");
}

export function acknowledgementSubject() {
  return "We received your enquiry — CloudHight Consulting";
}

export function acknowledgementText(fields: ContactFields) {
  return [
    `Hello ${fields.name},`,
    "",
    "Thank you for contacting CloudHight Consulting. We have received your enquiry and a member of the team will get back to you shortly.",
    "",
    "If your message is urgent, you can also reach us at info@cloudhight.com.",
    "",
    "Kind regards,",
    "CloudHight Consulting",
  ].join("\n");
}
