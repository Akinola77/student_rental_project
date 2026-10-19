#!/usr/bin/env node
/**
 * Amplify Hosting Next.js SSR env pattern:
 * https://docs.aws.amazon.com/amplify/latest/userguide/ssr-environment-variables.html
 *
 * Console variables are present at build time, not automatically in the
 * Next.js compute runtime. Writing them to `.env.production` before
 * `next build` is the supported way to make them available to SSR.
 *
 * This script never prints values — only variable names.
 */
import { writeFileSync } from "node:fs";

const OUTPUT = ".env.production";

const REQUIRED_RUNTIME = ["TURNSTILE_SECRET_KEY", "CONTACT_RATE_LIMIT_TABLE"];
const REQUIRED_PUBLIC = ["NEXT_PUBLIC_TURNSTILE_SITE_KEY", "NEXT_PUBLIC_SITE_URL"];

function dotenvLine(key, value) {
  const sanitized = value.replace(/\r?\n/g, "");
  if (/[\s#"'$`\\]/.test(sanitized)) {
    return `${key}="${sanitized.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  }
  return `${key}=${sanitized}`;
}

function present(value) {
  return typeof value === "string" && value.length > 0;
}

const selected = new Map();

for (const key of [...REQUIRED_RUNTIME, ...REQUIRED_PUBLIC]) {
  const value = process.env[key];
  if (present(value)) selected.set(key, value);
}

for (const [key, value] of Object.entries(process.env)) {
  if (key.startsWith("NEXT_PUBLIC_") && present(value) && !selected.has(key)) {
    selected.set(key, value);
  }
}

const lines = [...selected.entries()].map(([key, value]) =>
  dotenvLine(key, value),
);
writeFileSync(OUTPUT, lines.length ? `${lines.join("\n")}\n` : "", "utf8");

const written = [...selected.keys()].sort();
const missingRequired = [...REQUIRED_RUNTIME, ...REQUIRED_PUBLIC].filter(
  (key) => !selected.has(key),
);

console.log(
  `Amplify SSR env: wrote ${written.length} variable name(s) to ${OUTPUT}: ${written.join(", ") || "(none)"}`,
);
if (missingRequired.length > 0) {
  console.warn(
    `Amplify SSR env: missing variable name(s): ${missingRequired.join(", ")}`,
  );
}
