/** Runtime secrets Next.js SSR needs after the Amplify `.env.production` bake. */
export const CONTACT_RUNTIME_ENV_NAMES = [
  "TURNSTILE_SECRET_KEY",
  "CONTACT_RATE_LIMIT_TABLE",
] as const;

function trimEnv(value: string | undefined) {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Static `process.env.NAME` reads so Next.js can inline server env from
 * `.env.production` at build time. Do not switch these to dynamic lookups.
 */
export function turnstileSecretKey() {
  return trimEnv(process.env.TURNSTILE_SECRET_KEY);
}

export function contactRateLimitTable() {
  return trimEnv(process.env.CONTACT_RATE_LIMIT_TABLE);
}

export function missingContactRuntimeEnvNames() {
  const missing: string[] = [];
  if (!turnstileSecretKey()) missing.push("TURNSTILE_SECRET_KEY");
  if (!contactRateLimitTable()) missing.push("CONTACT_RATE_LIMIT_TABLE");
  return missing;
}

export function contactSecurityConfigured() {
  return missingContactRuntimeEnvNames().length === 0;
}

/** Logs missing variable names only. Never logs values. */
export function logMissingContactRuntimeEnv() {
  const missing = missingContactRuntimeEnvNames();
  if (missing.length > 0) {
    console.error(
      `Contact API refused: missing environment variables: ${missing.join(", ")}`,
    );
  }
  return missing;
}
