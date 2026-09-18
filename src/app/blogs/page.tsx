import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/Heros";
import JsonLd from "@/components/JsonLd";
import FeaturedInsight from "@/components/insights/FeaturedInsight";
import InsightsListing from "@/components/insights/InsightsListing";
import {
  getFeaturedInsight,
  getPublishedCategories,
  getPublishedInsights,
  insights,
} from "@/lib/insights";
import { absoluteUrl } from "@/lib/site";

const title = "Insights | Cloud, AI & DevOps | CloudHight Consulting";
const description =
  "Explore CloudHight insights on AWS, enterprise AI, cloud transformation, DevOps, platform engineering, AIOps, FinOps and modern technology operations.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/blogs" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function InsightsPage() {
  const published = getPublishedInsights(insights);
  const featured = getFeaturedInsight(published);
  const categories = getPublishedCategories(published);

  return (
    <div className="bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "CloudHight Insights",
          description,
          url: absoluteUrl("/blogs"),
        }}
      />
      <PageHero
        eyebrow="Insights"
        title="Insights for What's Next in Cloud, AI & Modern Technology"
        subtitle="Explore practical perspectives, technical guidance and CloudHight thinking across AWS, enterprise AI, cloud transformation, DevOps, platform engineering and modern technology operations."
        image="/photos/transformcloudjourney.jpg"
        imageAlt="Cloud transformation visual"
      />
      {featured ? <FeaturedInsight article={featured} /> : null}
      <InsightsListing
        articles={published}
        featuredSlug={featured?.slug}
        categories={categories}
      />
      <section className="bg-ocu-blue px-6 py-16 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
            From insight to implementation
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Looking for practical help, not just reading?
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            CloudHight helps organisations turn AWS, AI and engineering insight
            into production-ready capability.
          </p>
          <Link
            href={"/contact?subject=" + encodeURIComponent("Talk to CloudHight")}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-bold text-ocu-blue transition-colors hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocu-blue"
          >
            Talk to CloudHight
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
