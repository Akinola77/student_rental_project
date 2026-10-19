import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  return {
    title: cs?.title ?? "Case Study",
    robots: { index: false, follow: false },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();
  const others = caseStudies.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <div className="bg-white">
      <section className="relative min-h-[48vh] flex items-end pt-32 pb-12 bg-black">
        <img src={cs.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <p className="text-ocu-cyan text-sm font-semibold mb-2">{cs.category}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
            {cs.title}
          </h1>
          <p className="text-white/80">Client: {cs.client}</p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">{cs.summary}</p>
          <p className="text-gray-600 mb-8">{cs.body}</p>
          <ul className="space-y-2 mb-12">
            {cs.results.map((r) => (
              <li key={r} className="text-ocu-blue font-medium">
                • {r}
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold text-ocu-blue mb-6">More Case Studies</h2>
          <div className="space-y-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/case-studies/${o.slug}`}
                className="block p-4 rounded-xl border border-gray-100 hover:border-ocu-cyan"
              >
                <p className="text-xs text-ocu-cyan">{o.client}</p>
                <p className="font-semibold text-ocu-blue">{o.title}</p>
              </Link>
            ))}
            <Link href="/case-studies" className="text-ocu-cyan font-semibold">
              All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
