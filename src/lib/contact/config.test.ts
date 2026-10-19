import assert from "node:assert/strict";
import test from "node:test";
import {
  contactSecurityConfigured,
  logMissingContactRuntimeEnv,
  missingContactRuntimeEnvNames,
} from "./config.ts";

function withEnv(
  env: Record<string, string | undefined>,
  fn: () => void,
) {
  const previous = {
    TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,
    CONTACT_RATE_LIMIT_TABLE: process.env.CONTACT_RATE_LIMIT_TABLE,
  };
  for (const [key, value] of Object.entries(env)) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
  try {
    fn();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
}

test("lists only the names of missing contact runtime variables", () => {
  withEnv(
    { TURNSTILE_SECRET_KEY: undefined, CONTACT_RATE_LIMIT_TABLE: undefined },
    () => {
      assert.deepEqual(missingContactRuntimeEnvNames(), [
        "TURNSTILE_SECRET_KEY",
        "CONTACT_RATE_LIMIT_TABLE",
      ]);
      assert.equal(contactSecurityConfigured(), false);
    },
  );
});

test("lists a single missing name when the other runtime variable is set", () => {
  withEnv(
    {
      TURNSTILE_SECRET_KEY: "unit-test-secret",
      CONTACT_RATE_LIMIT_TABLE: undefined,
    },
    () => {
      assert.deepEqual(missingContactRuntimeEnvNames(), [
        "CONTACT_RATE_LIMIT_TABLE",
      ]);
    },
  );
});

test("logs missing names without values", () => {
  withEnv(
    {
      TURNSTILE_SECRET_KEY: undefined,
      CONTACT_RATE_LIMIT_TABLE: undefined,
    },
    () => {
      const lines: string[] = [];
      const original = console.error;
      console.error = (...args: unknown[]) => {
        lines.push(args.map(String).join(" "));
      };
      try {
        logMissingContactRuntimeEnv();
      } finally {
        console.error = original;
      }
      const joined = lines.join("\n");
      assert.match(joined, /TURNSTILE_SECRET_KEY/);
      assert.match(joined, /CONTACT_RATE_LIMIT_TABLE/);
      assert.doesNotMatch(joined, /unit-test-secret/);
      assert.doesNotMatch(joined, /=/);
    },
  );
});

test("treats whitespace-only values as missing", () => {
  withEnv(
    { TURNSTILE_SECRET_KEY: "   ", CONTACT_RATE_LIMIT_TABLE: " table " },
    () => {
      assert.deepEqual(missingContactRuntimeEnvNames(), ["TURNSTILE_SECRET_KEY"]);
      assert.equal(contactSecurityConfigured(), false);
    },
  );
});
