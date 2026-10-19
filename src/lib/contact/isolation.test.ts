import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../../");
const SERVER_ONLY = /@\/lib\/contact\/(config|handler|turnstile|rate-limit|runtime-env)|lib\/contact\/(config|handler|turnstile|rate-limit|runtime-env)/;

function walk(dir: string, files: string[] = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) walk(path, files);
    else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) files.push(path);
  }
  return files;
}

test("client components do not import server-only contact configuration", () => {
  const files = walk(join(ROOT, "components")).concat(walk(join(ROOT, "app")));
  const leaks: string[] = [];
  for (const file of files) {
    const source = readFileSync(file, "utf8");
    if (!source.includes('"use client"') && !source.includes("'use client'")) {
      continue;
    }
    if (SERVER_ONLY.test(source)) leaks.push(file);
  }
  assert.deepEqual(leaks, []);
});
