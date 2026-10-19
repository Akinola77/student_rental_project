import { SES_FROM, SES_MAILBOX } from "../ses.ts";

function encodeUtf8Header(value: string) {
  const safe = value.replace(/[\r\n]+/g, " ").trim().slice(0, 180);
  if (/^[\x20-\x7e]+$/.test(safe)) return safe;
  return `=?UTF-8?B?${Buffer.from(safe, "utf8").toString("base64")}?=`;
}

function foldBase64(value: string) {
  return value.replace(/(.{76})/g, "$1\r\n");
}

export function buildRawEmail(options: {
  to: string;
  replyTo?: string;
  subject: string;
  text: string;
  attachment?: { filename: string; contentType: string; content: Buffer };
}) {
  const boundary = `ch-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;
  const headers = [
    `From: ${SES_FROM}`,
    `To: ${options.to}`,
    `Reply-To: ${options.replyTo || SES_MAILBOX}`,
    `Subject: ${encodeUtf8Header(options.subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
  ];

  const parts = [
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: 8bit",
    "",
    options.text.replace(/\r?\n/g, "\r\n"),
  ];

  if (options.attachment) {
    const filename = options.attachment.filename.replace(/["\r\n]/g, "");
    parts.push(
      `--${boundary}`,
      `Content-Type: ${options.attachment.contentType}; name="${filename}"`,
      "Content-Transfer-Encoding: base64",
      `Content-Disposition: attachment; filename="${filename}"`,
      "",
      foldBase64(options.attachment.content.toString("base64")),
    );
  }

  parts.push(`--${boundary}--`, "");
  return Buffer.from(`${headers.join("\r\n")}\r\n\r\n${parts.join("\r\n")}`, "utf8");
}
