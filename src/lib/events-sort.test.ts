import assert from "node:assert/strict";
import test from "node:test";
import {
  defaultEventSortAscending,
  sortEventsByDate,
} from "./events-sort.ts";

test("upcoming and all default to date ascending; past to descending", () => {
  assert.equal(defaultEventSortAscending("upcoming"), true);
  assert.equal(defaultEventSortAscending("all"), true);
  assert.equal(defaultEventSortAscending("past"), false);
});

test("sorts event dates ascending and descending", () => {
  const items = [{ date: "2026-11-25" }, { date: "2025-08-23" }, { date: "2026-04-15" }];
  assert.deepEqual(
    sortEventsByDate(items, true).map((e) => e.date),
    ["2025-08-23", "2026-04-15", "2026-11-25"],
  );
  assert.deepEqual(
    sortEventsByDate(items, false).map((e) => e.date),
    ["2026-11-25", "2026-04-15", "2025-08-23"],
  );
});
