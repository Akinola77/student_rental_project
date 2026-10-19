import assert from "node:assert/strict";
import test from "node:test";
import { verifyTurnstileToken } from "./turnstile.ts";

test("rejects a missing Turnstile token once the secret is configured", async () => {
  process.env.TURNSTILE_SECRET_KEY = "unit-test-secret";
  const result = await verifyTurnstileToken("", "203.0.113.10");
  assert.deepEqual(result, { ok: false, reason: "missing" });
});

test("rejects an invalid Turnstile token from siteverify", async () => {
  process.env.TURNSTILE_SECRET_KEY = "unit-test-secret";
  const original = globalThis.fetch;
  globalThis.fetch = async () =>
    new Response(JSON.stringify({ success: false }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  try {
    const result = await verifyTurnstileToken("invalid-token", "203.0.113.10");
    assert.deepEqual(result, { ok: false, reason: "rejected" });
  } finally {
    globalThis.fetch = original;
  }
});
