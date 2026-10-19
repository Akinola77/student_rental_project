import { turnstileSecretKey } from "./config.ts";

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export function turnstileSecret() {
  return turnstileSecretKey();
}

export function turnstileConfigured() {
  return Boolean(turnstileSecret());
}

export async function verifyTurnstileToken(token: string, ip: string | null) {
  const secret = turnstileSecret();
  if (!secret) return { ok: false as const, reason: "unconfigured" as const };
  if (!token) return { ok: false as const, reason: "missing" as const };

  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  const res = await fetch(VERIFY_URL, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) return { ok: false as const, reason: "verify_failed" as const };

  const payload = (await res.json()) as { success?: boolean };
  if (!payload.success) return { ok: false as const, reason: "rejected" as const };
  return { ok: true as const };
}
