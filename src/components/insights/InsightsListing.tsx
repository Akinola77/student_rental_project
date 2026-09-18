"use client";

import { useMemo, useState } from "react";
import type { Insight, InsightCategory } from "@/lib/insights";
import { INSIGHTS_PAGE_SIZE } from "@/lib/insights";
import { InsightCard } from "./InsightCard";

export default function InsightsListing({
  articles,
  featuredSlug,
  categories,
}: {
  articles: Insight[];
  featuredSlug?: string;
  categories: InsightCategory[];
}) {
  const [category, setCategory] = useState<"All" | InsightCategory>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const byCategory =
      category === "All"
        ? articles
        : articles.filter((article) => article.category === category);
    if (category === "All" && featuredSlug) {
      return byCategory.filter((article) => article.slug !== featuredSlug);
    }
    return byCategory;
  }, [articles, category, featuredSlug]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / INSIGHTS_PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageItems = filtered.slice(
    (currentPage - 1) * INSIGHTS_PAGE_SIZE,
    currentPage * INSIGHTS_PAGE_SIZE,
  );
  const showPagination = filtered.length > INSIGHTS_PAGE_SIZE;

  function selectCategory(next: "All" | InsightCategory) {
    setCategory(next);
    setPage(1);
  }

  return (
    <section className="px-6 pb-20" aria-labelledby="latest-insights-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="latest-insights-heading"
              className="text-3xl font-bold text-gradient md:text-4xl"
            >
              Latest Insights
            </h2>
            <p className="mt-2 max-w-2xl text-gray-600">
              Practical perspectives across AWS, enterprise AI, cloud
              transformation and modern technology operations.
            </p>
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter insights by category"
          >
            {(["All", ...categories] as const).map((item) => {
              const selected = category === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => selectCategory(item)}
                  aria-pressed={selected}
                  className={`min-h-[44px] rounded-full px-4 py-1.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2 ${
                    selected
                      ? "bg-ocu-blue text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {pageItems.length === 0 ? (
          <p className="rounded-2xl border border-gray-100 bg-ocu-bg px-6 py-10 text-gray-600">
            No published insights in this category yet.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
        )}

        {showPagination && (
          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
            aria-label="Insights pagination"
          >
            <button
              type="button"
              onClick={() => setPage((value) => Math.max(1, value - 1))}
              disabled={currentPage === 1}
              className="min-h-[44px] rounded-lg border border-gray-200 px-4 text-sm font-semibold text-ocu-blue disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50"
            >
              Previous
            </button>
            <p className="text-sm text-gray-500">
              Page {currentPage} of {pageCount}
            </p>
            <button
              type="button"
              onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
              disabled={currentPage === pageCount}
              className="min-h-[44px] rounded-lg border border-gray-200 px-4 text-sm font-semibold text-ocu-blue disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50"
            >
              Next
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
