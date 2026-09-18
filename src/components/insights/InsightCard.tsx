import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Insight } from "@/lib/insights";
import { formatInsightDate } from "@/lib/insights";

export function InsightCard({
  article,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
}: {
  article: Insight;
  sizes?: string;
}) {
  return (
    <article className="h-full">
      <Link
        href={`/blogs/${article.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-ocu-cyan/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2"
        aria-label={`Read article: ${article.title}`}
      >
        <div
          className={`relative aspect-video overflow-hidden ${
            article.heroImageFit === "contain" ? "bg-ocu-bg" : "bg-ocu-blue"
          }`}
        >
          <Image
            src={article.heroImage}
            alt={article.heroImageAlt}
            fill
            sizes={sizes}
            className={`transition-transform duration-500 group-hover:scale-[1.02] ${
              article.heroImageFit === "contain"
                ? "object-contain p-4"
                : "object-cover"
            }`}
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-ocu-cyan">
            {article.category}
          </p>
          <h3 className="mt-2 text-lg font-bold text-ocu-blue transition-colors group-hover:text-ocu-cyan">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <time
              className="text-xs text-gray-400"
              dateTime={article.publishedAt}
            >
              {formatInsightDate(article.publishedAt)}
            </time>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-ocu-blue">
              Read Article
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
