import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { isHoneypotTriggered, mailToAddress, parseEnquiry } from "./enquiry.ts";

function form(entries: Record<string, string>, file?: File) {
  const data = new FormData();
  for (const [key, value] of Object.entries(entries)) data.set(key, value);
  if (file) data.set("resume", file);
  return data;
}

test("rejects an unknown variant", async () => {
  const parsed = await parseEnquiry(form({ variant: "spam", name: "A", email: "a@b.com" }));
  assert.ok("error" in parsed);
});

test("parses a contact enquiry for info@cloudhight.com", async () => {
  const parsed = await parseEnquiry(
    form({
      variant: "contact",
      name: "Ada Lovelace",
      email: "ada@example.com",
      company: "Analytical Engines",
      subject: "Cloud migration",
      message: "We need help moving to AWS.",
    }),
  );
  assert.ok(!("error" in parsed));
  if ("error" in parsed) return;
  assert.equal(parsed.replyTo, "ada@example.com");
  assert.match(parsed.subject, /Contact form/);
  assert.match(parsed.text, /Ada Lovelace/);
  assert.match(parsed.text, /Mailbox: info@cloudhight.com/);
  assert.equal(mailToAddress(), "info@cloudhight.com");
});

test("requires a CV on job applications and attaches it", async () => {
  const missing = await parseEnquiry(
    form({
      variant: "job",
      name: "Grace Hopper",
      email: "grace@example.com",
      role: "DevOps Engineer",
    }),
  );
  assert.ok("error" in missing);

  const pdf = new File([readFileSync("/etc/hosts")], "grace-hopper.pdf", {
    type: "application/pdf",
  });
  const parsed = await parseEnquiry(
    form(
      {
        variant: "job",
        name: "Grace Hopper",
        email: "grace@example.com",
        role: "DevOps Engineer",
        cover: "I would like to apply.",
      },
      pdf,
    ),
  );
  assert.ok(!("error" in parsed));
  if ("error" in parsed) return;
  assert.equal(parsed.attachment?.filename, "grace-hopper.pdf");
  assert.match(parsed.subject, /DevOps Engineer/);
});

test("silently flags honeypot submissions", () => {
  assert.equal(isHoneypotTriggered(form({ website: "" })), false);
  assert.equal(isHoneypotTriggered(form({ website: "http://spam.test" })), true);
});
