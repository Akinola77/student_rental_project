import assert from "node:assert/strict";
import test from "node:test";
import { resolveClientIp } from "./ip.ts";

test("prefers CloudFront-Viewer-Address over spoofed X-Forwarded-For", () => {
  const headers = new Headers({
    "cloudfront-viewer-address": "203.0.113.10:54321",
    "x-forwarded-for": "1.2.3.4, 203.0.113.10",
  });
  assert.equal(resolveClientIp(headers), "203.0.113.10");
});

test("uses the last X-Forwarded-For hop when CloudFront header is absent", () => {
  const headers = new Headers({
    "x-forwarded-for": "8.8.8.8, 198.51.100.20",
  });
  assert.equal(resolveClientIp(headers), "198.51.100.20");
});

test("returns null when no trusted IP is present", () => {
  assert.equal(resolveClientIp(new Headers()), null);
});
