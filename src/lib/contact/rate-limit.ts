import {
  ConditionalCheckFailedException,
  DynamoDBClient,
  UpdateItemCommand,
} from "@aws-sdk/client-dynamodb";
import { createHash } from "node:crypto";
import { SES_REGION } from "../ses.ts";
import { contactRateLimitTable } from "./config.ts";

export const RATE_LIMIT_WINDOW_SECONDS = 10 * 60;
export const RATE_LIMIT_MAX = 5;

let dynamo: DynamoDBClient | undefined;

function getDynamo() {
  if (!dynamo) dynamo = new DynamoDBClient({ region: SES_REGION });
  return dynamo;
}

type RateLimitStore = Pick<DynamoDBClient, "send">;

function ipKey(ip: string, windowStart: number) {
  const hash = createHash("sha256").update(ip).digest("hex").slice(0, 32);
  return `rl#${hash}#${windowStart}`;
}

export function rateLimitTableName() {
  return contactRateLimitTable();
}

export async function consumeRateLimit(
  ip: string,
  store: RateLimitStore = getDynamo(),
) {
  const table = rateLimitTableName();
  if (!table) {
    return { ok: false as const, reason: "unconfigured" as const };
  }

  const now = Math.floor(Date.now() / 1000);
  const windowStart = now - (now % RATE_LIMIT_WINDOW_SECONDS);
  const ttl = windowStart + RATE_LIMIT_WINDOW_SECONDS + 60;

  try {
    await store.send(
      new UpdateItemCommand({
        TableName: table,
        Key: { pk: { S: ipKey(ip, windowStart) } },
        UpdateExpression:
          "ADD attempts :one SET #ttl = if_not_exists(#ttl, :ttl)",
        ConditionExpression:
          "attribute_not_exists(attempts) OR attempts < :max",
        ExpressionAttributeNames: { "#ttl": "ttl" },
        ExpressionAttributeValues: {
          ":one": { N: "1" },
          ":max": { N: String(RATE_LIMIT_MAX) },
          ":ttl": { N: String(ttl) },
        },
      }),
    );
    return { ok: true as const };
  } catch (error) {
    if (error instanceof ConditionalCheckFailedException) {
      return { ok: false as const, reason: "limited" as const };
    }
    throw error;
  }
}
