import { z } from "zod";

export const VARIANTS = [
  "contact",
  "event",
  "job",
  "partner",
  "academy",
] as const;

export type ContactVariant = (typeof VARIANTS)[number];

const short = z.string().trim().max(200);
const medium = z.string().trim().max(500);
const long = z.string().trim().max(8_000);
const email = z
  .string()
  .trim()
  .max(254)
  .email()
  .transform((value) => value.toLowerCase());

export const contactFieldsSchema = z
  .object({
    variant: z.enum(VARIANTS),
    name: z.string().trim().min(1).max(120),
    email,
    phone: short.optional(),
    company: short.optional(),
    subject: short.optional(),
    message: long.optional(),
    org: short.optional(),
    title: medium.optional(),
    date: short.optional(),
    location: short.optional(),
    attendees: short.optional(),
    details: long.optional(),
    role: medium.optional(),
    cover: long.optional(),
    type: short.optional(),
    size: short.optional(),
    program: medium.optional(),
    objective: medium.optional(),
    timeline: short.optional(),
    website: z.string().max(200).optional(),
    turnstileToken: z.string().trim().min(1).max(8_000),
  })
  .superRefine((value, ctx) => {
    if (value.variant === "contact" && !value.message) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter a message.",
        path: ["message"],
      });
    }
    if (value.variant === "event" && !value.title) {
      ctx.addIssue({
        code: "custom",
        message: "Please enter a proposed event title.",
        path: ["title"],
      });
    }
    if (value.variant === "job" && !value.role) {
      ctx.addIssue({
        code: "custom",
        message: "Please choose a role of interest.",
        path: ["role"],
      });
    }
    if (value.variant === "partner" || value.variant === "academy") {
      if (!value.org) {
        ctx.addIssue({
          code: "custom",
          message:
            value.variant === "partner"
              ? "Please enter your company name."
              : "Please enter your institution name.",
          path: ["org"],
        });
      }
      if (!value.location) {
        ctx.addIssue({
          code: "custom",
          message:
            value.variant === "partner"
              ? "Please enter your country."
              : "Please enter your city / location.",
          path: ["location"],
        });
      }
    }
  });

export type ContactFields = z.infer<typeof contactFieldsSchema>;
