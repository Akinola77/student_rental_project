import assert from "node:assert/strict";
import test from "node:test";
import { handleContactPost, PUBLIC_ERROR } from "./handler.ts";
import type { ContactDeps } from "./handler.ts";
import type { SesMessage } from "../ses.ts";

function form(entries: Record<string, string>) {
  const data = new FormData();
  for (const [key, value] of Object.entries(entries)) data.set(key, value);
  return data;
}

function request(
  body: FormData,
  headers?: Record<string, string>,
  length?: number,
) {
  const reqHeaders = new Headers({
    "cloudfront-viewer-address": "203.0.113.10:443",
    ...headers,
  });
  if (length !== undefined) reqHeaders.set("content-length", String(length));
  return new Request("http://127.0.0.1:3000/api/contact", {
    method: "POST",
    headers: reqHeaders,
    body,
  });
}

function deps(overrides: Partial<ContactDeps> = {}): ContactDeps {
  const sent: SesMessage[] = [];
  return {
    verifyCaptcha: async () => ({ ok: true as const }),
    consumeLimit: async () => ({ ok: true as const }),
    sendEmail: async (message) => {
      sent.push(message);
      return "msg-id";
    },
    ...overrides,
    sent,
  } as ContactDeps & { sent: SesMessage[] };
}

const valid = {
  variant: "contact",
  name: "Niamh Walsh",
  email: "niamh.walsh@example.com",
  message: "Please contact me about managed AWS operations.",
  "cf-turnstile-response": "turnstile-token",
};

test("fails closed when Turnstile or the rate-limit table is missing", async () => {
  delete process.env.TURNSTILE_SECRET_KEY;
  delete process.env.CONTACT_RATE_LIMIT_TABLE;
  const lines: string[] = [];
  const original = console.error;
  console.error = (...args: unknown[]) => {
    lines.push(args.map(String).join(" "));
  };
  try {
    const res = await handleContactPost(request(form(valid)), deps());
    assert.equal(res.status, 503);
    const json = await res.json();
    assert.equal(json.ok, false);
    assert.equal(json.error, PUBLIC_ERROR);
    assert.doesNotMatch(json.error, /TURNSTILE_SECRET_KEY|CONTACT_RATE_LIMIT_TABLE/);
  } finally {
    console.error = original;
  }
  const joined = lines.join("\n");
  assert.match(joined, /missing environment variables: TURNSTILE_SECRET_KEY, CONTACT_RATE_LIMIT_TABLE/);
  assert.doesNotMatch(joined, /test-secret/);
});

test("rejects invalid payloads", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  const res = await handleContactPost(
    request(form({ variant: "contact", name: "Niamh", "cf-turnstile-response": "t" })),
    deps(),
  );
  assert.equal(res.status, 400);
});

test("rejects a missing Turnstile token", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  const payload = { ...valid };
  delete payload["cf-turnstile-response"];
  const res = await handleContactPost(request(form(payload)), deps());
  assert.equal(res.status, 400);
  const json = await res.json();
  assert.equal(json.ok, false);
  assert.match(json.error, /verification/i);
});

test("rejects an empty Turnstile token", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  const res = await handleContactPost(
    request(form({ ...valid, "cf-turnstile-response": "   " })),
    deps(),
  );
  assert.equal(res.status, 400);
  const json = await res.json();
  assert.match(json.error, /verification/i);
});

test("rejects CAPTCHA failure", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  const res = await handleContactPost(
    request(form(valid)),
    deps({ verifyCaptcha: async () => ({ ok: false, reason: "rejected" }) }),
  );
  assert.equal(res.status, 400);
  const json = await res.json();
  assert.match(json.error, /verification/i);
});

test("rejects the sixth submission from the same IP within ten minutes", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  let attempts = 0;
  const limited = deps({
    consumeLimit: async () => {
      attempts += 1;
      if (attempts > 5) return { ok: false as const, reason: "limited" as const };
      return { ok: true as const };
    },
  });
  for (let i = 0; i < 5; i += 1) {
    const res = await handleContactPost(request(form(valid)), limited);
    assert.equal(res.status, 200, `attempt ${i + 1}`);
  }
  const sixth = await handleContactPost(request(form(valid)), limited);
  assert.equal(sixth.status, 429);
  const json = await sixth.json();
  assert.match(json.error, /few minutes/i);
});

test("returns 429 when the IP is rate limited", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  const res = await handleContactPost(
    request(form(valid)),
    deps({ consumeLimit: async () => ({ ok: false, reason: "limited" }) }),
  );
  assert.equal(res.status, 429);
});

test("returns 502 when the internal SES send fails", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  const res = await handleContactPost(
    request(form(valid)),
    deps({
      sendEmail: async () => {
        throw new Error("SES down");
      },
    }),
  );
  assert.equal(res.status, 502);
});

test("sends an internal enquiry then an acknowledgement on success", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  const sent: SesMessage[] = [];
  const res = await handleContactPost(
    request(form(valid)),
    deps({
      sendEmail: async (message) => {
        sent.push(message);
        return "id";
      },
    }),
  );
  assert.equal(res.status, 200);
  assert.equal((await res.json()).ok, true);
  assert.equal(sent.length, 2);
  assert.equal(sent[0]?.to, "info@cloudhight.com");
  assert.equal(sent[0]?.replyTo, "niamh.walsh@example.com");
  assert.equal(sent[1]?.to, "niamh.walsh@example.com");
  assert.equal(sent[1]?.replyTo, "info@cloudhight.com");
  assert.match(sent[0]?.subject || "", /Contact form/);
});

test("treats acknowledgement failure as success after the internal send", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  let n = 0;
  const res = await handleContactPost(
    request(form(valid)),
    deps({
      sendEmail: async () => {
        n += 1;
        if (n === 2) throw new Error("ack failed");
        return "id";
      },
    }),
  );
  assert.equal(res.status, 200);
});

test("rejects an untrusted request with no client IP", async () => {
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  const res = await handleContactPost(
    request(form(valid), { "cloudfront-viewer-address": "" }),
    deps(),
  );
  assert.equal(res.status, 400);
});
