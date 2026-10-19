import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const script = join(dirname(fileURLToPath(import.meta.url)), "write-amplify-env.mjs");
const SECRET = "unit-test-turnstile-secret-do-not-log";

function run(env) {
  const dir = mkdtempSync(join(tmpdir(), "amplify-env-"));
  const result = spawnSync(process.execPath, [script], {
    cwd: dir,
    encoding: "utf8",
    env: { PATH: process.env.PATH, ...env },
  });
  const file = readFileSync(join(dir, ".env.production"), "utf8");
  rmSync(dir, { recursive: true, force: true });
  return { result, file };
}

test("writes allowlisted Amplify vars to .env.production", () => {
  const { result, file } = run({
    TURNSTILE_SECRET_KEY: SECRET,
    CONTACT_RATE_LIMIT_TABLE: "cloudhight-contact-rate-limit",
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: "public-site-key",
    NEXT_PUBLIC_SITE_URL: "https://cloudhight.test",
    AWS_SECRET_ACCESS_KEY: "must-not-be-written",
  });
  assert.equal(result.status, 0, result.stderr);
  assert.match(file, /^TURNSTILE_SECRET_KEY=/m);
  assert.match(file, /^CONTACT_RATE_LIMIT_TABLE=cloudhight-contact-rate-limit$/m);
  assert.match(file, /^NEXT_PUBLIC_TURNSTILE_SITE_KEY=public-site-key$/m);
  assert.match(file, /^NEXT_PUBLIC_SITE_URL=https:\/\/cloudhight\.test$/m);
  assert.doesNotMatch(file, /AWS_SECRET_ACCESS_KEY/);
  assert.match(result.stdout, /TURNSTILE_SECRET_KEY/);
  assert.match(result.stdout, /CONTACT_RATE_LIMIT_TABLE/);
  assert.match(result.stdout, /NEXT_PUBLIC_TURNSTILE_SITE_KEY/);
  assert.doesNotMatch(result.stdout, new RegExp(SECRET));
  assert.doesNotMatch(result.stderr || "", new RegExp(SECRET));
});

test("logs missing variable names without failing the build", () => {
  const { result, file } = run({
    NEXT_PUBLIC_SITE_URL: "https://cloudhight.test",
  });
  assert.equal(result.status, 0, result.stderr);
  assert.equal(file.includes("TURNSTILE_SECRET_KEY"), false);
  assert.match(result.stderr || result.stdout, /missing variable name\(s\):/);
  assert.match(result.stderr || result.stdout, /TURNSTILE_SECRET_KEY/);
  assert.match(result.stderr || result.stdout, /CONTACT_RATE_LIMIT_TABLE/);
  assert.match(result.stderr || result.stdout, /NEXT_PUBLIC_TURNSTILE_SITE_KEY/);
  assert.doesNotMatch(`${result.stdout}\n${result.stderr}`, /=super/);
});
