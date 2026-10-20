"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { events } from "@/lib/data";
import { PageHero } from "@/components/Heros";
import {
  EVENT_FILTERS,
  defaultEventSortAscending,
  sortEventsByDate,
  type EventFilter,
} from "@/lib/events-sort";

export default function EventsPage() {
  const [filter, setFilter] = useState<EventFilter>("upcoming");
  const [asc, setAsc] = useState(() => defaultEventSortAscending("upcoming"));

  const list = useMemo(() => {
    const filtered =
      filter === "all" ? events : events.filter((e) => e.status === filter);
    return sortEventsByDate(filtered, asc);
  }, [filter, asc]);

  function selectFilter(next: EventFilter) {
    setFilter(next);
    setAsc(defaultEventSortAscending(next));
  }

  return (
    <div className="bg-white">
      <PageHero
        title="CloudHight Community Day"
        subtitle="Connecting cloud enthusiasts"
        image="/photos/transformcloudjourney.jpg"
      />
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-2">
                CloudHight Events &amp; Experiences
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Explore upcoming events, technical workshops, and expert-led
                sessions designed to accelerate cloud adoption, AI innovation,
                and digital transformation.
              </p>
            </div>
            <Link
              href="/request-event"
              className="px-5 py-2.5 bg-ocu-blue text-white rounded-lg font-semibold w-fit shrink-0"
            >
              Request an Event
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 mb-8">
            <div className="flex flex-wrap gap-3">
              {EVENT_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  aria-pressed={filter === f}
                  onClick={() => selectFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize ${
                    filter === f
                      ? "bg-ocu-blue text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <select
              aria-label="Sort events by date"
              className="sm:ml-auto text-sm border border-gray-200 rounded-lg px-3 py-1.5 w-full sm:w-auto bg-white"
              value={asc ? "asc" : "desc"}
              onChange={(e) => setAsc(e.target.value === "asc")}
            >
              <option value="asc">Sort: Date (Ascending)</option>
              <option value="desc">Sort: Date (Descending)</option>
            </select>
          </div>
          <div className="space-y-6">
            {list.map((e) => (
              <article
                key={e.slug}
                className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm"
              >
                <div className="w-20 h-20 rounded-xl bg-ocu-blue text-white flex flex-col items-center justify-center shrink-0 px-1">
                  <span className="text-xs uppercase tracking-wider">{e.month}</span>
                  <span
                    className={`font-bold leading-tight ${
                      e.day.length > 2 ? "text-lg" : "text-2xl"
                    }`}
                  >
                    {e.day}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-ocu-blue">
                    {e.title}
                  </h3>
                  {e.location || e.attendees || e.dateLabel || e.format ? (
                    <p className="text-sm text-gray-500 mt-1">
                      {[e.dateLabel, e.format, e.location, e.attendees]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  ) : null}
                  <p className="text-gray-600 mt-3">{e.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <Link
                      href={`/events/${e.slug}`}
                      className="inline-block text-ocu-cyan font-semibold"
                    >
                      View Details
                    </Link>
                    {e.ctaHref ? (
                      <Link
                        href={e.ctaHref}
                        className="inline-block text-ocu-blue font-semibold"
                      >
                        {e.ctaLabel ?? "Register Now"}
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
