import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

/** Server-only SES helpers. Import from App Router route handlers, never from Client Components. */
export const SES_REGION = "eu-west-1";
export const SES_MAILBOX = "info@cloudhight.com";
export const SES_FROM = `CloudHight Consulting <${SES_MAILBOX}>`;

let client: SESv2Client | undefined;

export function getSesClient() {
  if (!client) {
    client = new SESv2Client({ region: SES_REGION });
  }
  return client;
}

export type SesMessage = {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
  raw?: Uint8Array;
};

export async function sendSesEmail(message: SesMessage) {
  const destination = { ToAddresses: [message.to] };
  const command = message.raw
    ? new SendEmailCommand({
        FromEmailAddress: SES_FROM,
        Destination: destination,
        Content: { Raw: { Data: message.raw } },
      })
    : new SendEmailCommand({
        FromEmailAddress: SES_FROM,
        Destination: destination,
        ReplyToAddresses: message.replyTo ? [message.replyTo] : [SES_MAILBOX],
        Content: {
          Simple: {
            Subject: { Data: message.subject, Charset: "UTF-8" },
            Body: { Text: { Data: message.text, Charset: "UTF-8" } },
          },
        },
      });

  const result = await getSesClient().send(command);
  return result.MessageId;
}
