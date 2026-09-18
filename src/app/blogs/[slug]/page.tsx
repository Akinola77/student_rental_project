import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import ArticleBody from "@/components/insights/ArticleBody";
import { InsightCard } from "@/components/insights/InsightCard";
import {
  formatInsightDate,
  getInsightBySlug,
  getPublishedInsights,
  getRelatedInsights,
  insights,
  readingTimeMinutes,
} from "@/lib/insights";
import { absoluteUrl } from "@/lib/site";
import { site } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return getPublishedInsights(insights).map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(insights, slug);
  if (!article) {
    return { title: "Insight", robots: { index: false, follow: false } };
  }
  const url = `/blogs/${article.slug}`;
  return {
    title: { absolute: article.seoTitle },
    description: article.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      url,
      publishedTime: article.publishedAt,
      ...(article.updatedAt ? { modifiedTime: article.updatedAt } : {}),
      images: [{ url: article.heroImage, alt: article.heroImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.heroImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getInsightBySlug(insights, slug);
  if (!article) notFound();

  const related = getRelatedInsights(article, insights);
  const minutes = readingTimeMinutes(article);
  const canonical = absoluteUrl(`/blogs/${article.slug}`);
  const imageUrl = absoluteUrl(article.heroImage);
  const dateModified = article.updatedAt ?? undefined;

  const articleSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seoDescription,
    image: imageUrl,
    datePublished: article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/photos/cloudhightlogo.png"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
  if (dateModified) articleSchema.dateModified = dateModified;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Insights", item: absoluteUrl("/blogs") },
      { "@type": "ListItem", position: 3, name: article.title, item: canonical },
    ],
  };

  return (
    <div className="bg-white">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article>
        <header className="bg-ocu-bg pt-32 pb-12">
          <div className="mx-auto max-w-3xl px-6">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link
                    href="/"
                    className="hover:text-ocu-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/blogs"
                    className="hover:text-ocu-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
                  >
                    Insights
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-ocu-blue" aria-current="page">
                  {article.title}
                </li>
              </ol>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocu-cyan">
              {article.category}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ocu-blue md:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">{article.excerpt}</p>
            <p className="mt-5 text-sm text-gray-500">
              <time dateTime={article.publishedAt}>
                {formatInsightDate(article.publishedAt)}
              </time>
              <span aria-hidden> · </span>
              <span>{minutes} min read</span>
              <span aria-hidden> · </span>
              <span>{article.author}</span>
            </p>
          </div>
        </header>

        <div className="px-6 pt-10">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-100 bg-ocu-bg">
            <div className="relative min-h-[240px] md:min-h-[420px]">
              <Image
                src={article.heroImage}
                alt={article.heroImageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className={
                  article.heroImageFit === "contain"
                    ? "object-contain p-6 md:p-10"
                    : "object-cover"
                }
              />
            </div>
          </div>
        </div>

        <div className="px-6 py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <ArticleBody content={article.content} />

            {article.source ? (
              <p className="mt-10 text-sm text-gray-500">
                {article.source.note}{" "}
                <a
                  href={article.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ocu-blue underline decoration-2 underline-offset-4 hover:text-ocu-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
                >
                  View the original on {article.source.label}
                </a>
                .
              </p>
            ) : null}

            <div className="mt-12 rounded-3xl bg-ocu-blue px-6 py-8 text-white md:px-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
                {article.cta.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">{article.cta.title}</h2>
              <p className="mt-3 text-white/80 leading-relaxed">{article.cta.body}</p>
              <Link
                href={article.cta.href}
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-ocu-blue hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {article.cta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <Link
              href="/blogs"
              className="mt-10 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-ocu-blue hover:text-ocu-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Back to Insights
            </Link>
          </div>
        </div>
      </article>

      {article.relatedServices.length > 0 ? (
        <section className="border-t border-gray-100 bg-ocu-bg px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold text-ocu-blue">Relevant Services</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {article.relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-ocu-cyan/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50"
                >
                  <h3 className="text-lg font-bold text-ocu-blue">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{service.body}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ocu-blue">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-ocu-blue md:text-3xl">Related Insights</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <InsightCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
