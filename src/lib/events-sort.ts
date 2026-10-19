export const EVENT_FILTERS = ["upcoming", "past", "all"] as const;
export type EventFilter = (typeof EVENT_FILTERS)[number];

/** Default date sort: upcoming and all ascend; past descends. */
export function defaultEventSortAscending(filter: EventFilter) {
  return filter !== "past";
}

export function sortEventsByDate<T extends { date: string }>(
  items: T[],
  ascending: boolean,
) {
  return [...items].sort((a, b) =>
    ascending ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date),
  );
}
