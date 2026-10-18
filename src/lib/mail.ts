import nodemailer from "nodemailer";
import { SendEmailCommand, SESv2Client } from "@aws-sdk/client-sesv2";
import type { ParsedEnquiry } from "@/lib/enquiry";
import { mailFromAddress, mailToAddress } from "@/lib/enquiry";

function smtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS,
  );
}

function sesConfigured() {
  return (
    process.env.MAIL_TRANSPORT === "ses" || Boolean(process.env.SES_REGION?.trim())
  );
}

export function mailIsConfigured() {
  return smtpConfigured() || sesConfigured();
}

function createTransport() {
  if (smtpConfigured()) {
    const host = process.env.SMTP_HOST!.trim();
    const port = Number(process.env.SMTP_PORT || 587);
    const local = host === "127.0.0.1" || host === "localhost";
    return nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === "true" || port === 465,
      ignoreTLS: local,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  const region =
    process.env.SES_REGION?.trim() ||
    process.env.AWS_REGION?.trim() ||
    "eu-west-1";
  const sesClient = new SESv2Client({ region });
  return nodemailer.createTransport({
    SES: { sesClient, SendEmailCommand },
  });
}

export async function sendEnquiryMail(enquiry: ParsedEnquiry) {
  if (!mailIsConfigured()) {
    throw new Error("Mail transport is not configured");
  }

  const transport = createTransport();
  await transport.sendMail({
    to: mailToAddress(),
    from: mailFromAddress(),
    replyTo: enquiry.replyTo,
    subject: enquiry.subject,
    text: enquiry.text,
    attachments: enquiry.attachment
      ? [
          {
            filename: enquiry.attachment.filename,
            content: enquiry.attachment.content,
            contentType: enquiry.attachment.contentType,
          },
        ]
      : undefined,
  });
}
