import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { PageHero } from "@/components/Heros";

export const metadata: Metadata = { title: "Case Studies" };

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Excellence in Every Project"
        subtitle="Delivering exceptional cloud solutions across industries"
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient mb-3">Read Case Studies</h2>
            <p className="text-gray-600">
              Illustrative examples of how we&apos;ve helped organizations achieve
              their cloud goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <article
                key={cs.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col"
              >
                <div className="aspect-video relative">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-ocu-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {cs.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-ocu-blue mb-1">{cs.title}</h3>
                  <p className="text-sm text-ocu-cyan mb-3">Client: {cs.client}</p>
                  <p className="text-sm text-gray-600 mb-4 flex-1">{cs.summary}</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-5">
                    {cs.results.map((r) => (
                      <li key={r}>• {r}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-ocu-blue font-semibold hover:text-ocu-cyan"
                  >
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-ocu-blue text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to Start Your Cloud Journey?</h2>
        <p className="text-white/80 mb-6">
          Let&apos;s discuss how we can help transform your business with cloud
          solutions.
        </p>
        <Link
          href="/contact"
          className="inline-flex px-6 py-3 bg-ocu-cyan rounded-lg font-bold"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
