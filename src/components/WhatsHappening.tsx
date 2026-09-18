import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { news } from "@/lib/data";

export default function WhatsHappening() {
  if (!news.length) return null;
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-[#fafbfc] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            What&apos;s Happening
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan mx-auto rounded-full" />
        </div>
        <div className="grid md:grid-cols-1 max-w-4xl mx-auto">
          {news.map((item) => (
            <article
              key={item.title}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 bg-ocu-blue flex items-center justify-center p-10">
                <img
                  src="/photos/aws-badge-partner-advanced-tier-services.png"
                  alt="AWS Advanced Tier"
                  className="max-h-40 object-contain"
                />
              </div>
              <div className="p-8 md:p-10 flex-1">
                <h3 className="text-2xl font-bold text-ocu-blue mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-ocu-blue font-semibold hover:text-ocu-cyan underline decoration-2 underline-offset-4"
                >
                  {item.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
