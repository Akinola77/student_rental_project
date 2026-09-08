"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { events } from "@/lib/data";
import { PageHero } from "@/components/Heros";

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all");
  const [asc, setAsc] = useState(true);

  const list = useMemo(() => {
    const filtered =
      filter === "all" ? events : events.filter((e) => e.status === filter);
    return [...filtered].sort((a, b) =>
      asc ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date),
    );
  }, [filter, asc]);

  return (
    <div className="bg-white">
      <PageHero
        title="CloudHight Community Day"
        subtitle="Connecting cloud enthusiasts"
        image="/photos/transformcloudjourney.jpg"
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gradient mb-2">
                Events We&apos;ve Conducted
              </h2>
              <p className="text-gray-600">
                Bringing multi-cloud expertise and innovation to communities
              </p>
            </div>
            <Link
              href="/request-event"
              className="px-5 py-2.5 bg-ocu-blue text-white rounded-lg font-semibold w-fit"
            >
              Request an Event
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            {(["upcoming", "past", "all"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize ${
                  filter === f
                    ? "bg-ocu-blue text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {f}
              </button>
            ))}
            <select
              className="ml-auto text-sm border border-gray-200 rounded-lg px-3 py-1.5"
              value={asc ? "asc" : "desc"}
              onChange={(e) => setAsc(e.target.value === "asc")}
            >
              <option value="asc">Sort: Date (Asc)</option>
              <option value="desc">Sort: Date (Desc)</option>
            </select>
          </div>
          <div className="space-y-6">
            {list.map((e) => (
              <article
                key={e.slug}
                className="flex flex-col md:flex-row gap-6 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="w-20 h-20 rounded-xl bg-ocu-blue text-white flex flex-col items-center justify-center shrink-0">
                  <span className="text-xs uppercase tracking-wider">{e.month}</span>
                  <span className="text-2xl font-bold">{e.day}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-ocu-blue">{e.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {e.location} · {e.attendees}
                  </p>
                  <p className="text-gray-600 mt-3">{e.summary}</p>
                  <Link
                    href={`/events/${e.slug}`}
                    className="inline-block mt-4 text-ocu-cyan font-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
