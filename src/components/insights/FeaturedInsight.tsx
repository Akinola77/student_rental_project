import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Insight } from "@/lib/insights";
import { formatInsightDate } from "@/lib/insights";

export default function FeaturedInsight({ article }: { article: Insight }) {
  return (
    <section className="px-6 py-16 md:py-20" aria-labelledby="featured-insight-heading">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-ocu-cyan">
          Featured Insight
        </p>
        <Link
          href={`/blogs/${article.slug}`}
          className="group grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-ocu-cyan/30 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2 lg:grid-cols-2"
          aria-labelledby="featured-insight-heading"
        >
          <div
            className={`relative min-h-[260px] ${
              article.heroImageFit === "contain" ? "bg-ocu-bg" : "bg-ocu-blue"
            }`}
          >
            <Image
              src={article.heroImage}
              alt={article.heroImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={
                article.heroImageFit === "contain"
                  ? "object-contain p-8"
                  : "object-cover"
              }
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-ocu-cyan">
              {article.category}
            </p>
            <h2
              id="featured-insight-heading"
              className="mt-3 text-3xl font-bold text-ocu-blue transition-colors group-hover:text-ocu-cyan md:text-4xl"
            >
              {article.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
              {article.excerpt}
            </p>
            <p className="mt-5 text-sm text-gray-400">
              <time dateTime={article.publishedAt}>
                {formatInsightDate(article.publishedAt)}
              </time>
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ocu-blue">
              Read Article
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
