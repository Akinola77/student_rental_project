import assert from "node:assert/strict";
import test from "node:test";
import { ConditionalCheckFailedException } from "@aws-sdk/client-dynamodb";
import { consumeRateLimit, RATE_LIMIT_MAX } from "./rate-limit.ts";

test("DynamoDB rate limit rejects the sixth increment in a ten-minute window", async () => {
  process.env.CONTACT_RATE_LIMIT_TABLE = "contact-rate-limit";
  let attempts = 0;
  const store = {
    send: async () => {
      attempts += 1;
      if (attempts > RATE_LIMIT_MAX) {
        throw new ConditionalCheckFailedException({
          message: "The conditional request failed",
          $metadata: {},
        });
      }
      return {};
    },
  };

  for (let i = 0; i < RATE_LIMIT_MAX; i += 1) {
    const result = await consumeRateLimit("203.0.113.10", store);
    assert.deepEqual(result, { ok: true });
  }

  const sixth = await consumeRateLimit("203.0.113.10", store);
  assert.deepEqual(sixth, { ok: false, reason: "limited" });
  assert.equal(attempts, RATE_LIMIT_MAX + 1);
});
