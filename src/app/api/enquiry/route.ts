import { NextResponse } from "next/server";
import {
  isHoneypotTriggered,
  parseEnquiry,
} from "@/lib/enquiry";
import { DEFAULT_MAILBOX } from "@/lib/enquiry";
import { mailIsConfigured, sendEnquiryMail } from "@/lib/mail";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 8;
const hits = new Map<string, number[]>();

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function rateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  return false;
}

function fail(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  try {
    if (rateLimited(clientKey(request))) {
      return fail("Please wait a few minutes before sending another enquiry.", 429);
    }

    const form = await request.formData();
    if (isHoneypotTriggered(form)) {
      return NextResponse.json({ ok: true });
    }

    const parsed = await parseEnquiry(form);
    if ("error" in parsed) return fail(parsed.error);

    if (!mailIsConfigured()) {
      console.error("Enquiry received but MAIL/SMTP/SES is not configured");
      return fail(
        `We could not send your message just now. Please email ${DEFAULT_MAILBOX} directly.`,
        503,
      );
    }

    await sendEnquiryMail(parsed);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Enquiry send failed", error);
    return fail(
        `We could not send your message just now. Please email ${DEFAULT_MAILBOX} directly.`,
      502,
    );
  }
}
