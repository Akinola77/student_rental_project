import type { Metadata } from "next";
import { overview } from "@/lib/data";
import { PageHero } from "@/components/Heros";

export const metadata: Metadata = { title: "Overview" };

export default function OverviewPage() {
  return (
    <div className="bg-white">
      <PageHero title={overview.heroTitle} subtitle={overview.heroSubtitle} />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-ocu-blue mb-6">
              {overview.whoWeAreTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              {overview.whoWeAreText}
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={overview.companyImage}
              alt="CloudHight Consulting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {overview.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl md:text-5xl font-extrabold text-gradient">
                {s.value}
                {s.suffix}
              </p>
              <p className="text-sm text-gray-600 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-ocu-blue mb-4">
              {overview.missionTitle}
            </h3>
            <p className="text-gray-600 leading-relaxed">{overview.missionText}</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-ocu-blue mb-4">
              {overview.visionTitle}
            </h3>
            <p className="text-gray-600 leading-relaxed">{overview.visionText}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gradient mb-4">
            Culture & Trust Builders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan mx-auto rounded-full mb-12" />
          <h3 className="text-xl font-semibold text-ocu-blue mb-6 text-center">
            Our Values
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {overview.values.map((v) => (
              <span
                key={v}
                className="px-5 py-2 rounded-full bg-ocu-blue/5 text-ocu-blue font-medium border border-ocu-blue/10"
              >
                {v}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-ocu-blue mb-4 text-center">
            A Global, Multi-Skilled Team
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
            {overview.diversityText}
          </p>
          <h3 className="text-xl font-semibold text-ocu-blue mb-8 text-center">
            How We Work
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {overview.howWeWork.map((step, i) => (
              <div
                key={step}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-ocu-cyan text-white font-bold flex items-center justify-center mb-4">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-cloudhight" className="py-20 px-6 bg-ocu-bg scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gradient mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan mx-auto rounded-full mb-12" />
          <div className="grid md:grid-cols-4 gap-6">
            {overview.goals.map((g) => (
              <div
                key={g.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-ocu-blue mb-2">{g.title}</h3>
                <p className="text-sm text-gray-600">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="py-20 px-6 overflow-hidden scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gradient mb-4">
            Industries We Support
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan mx-auto rounded-full mb-12" />
          <div className="grid md:grid-cols-3 gap-6">
            {overview.industries.map((ind) => (
              <div
                key={ind.title}
                className="rounded-2xl p-6 bg-gradient-to-br from-ocu-blue to-[#123a7a] text-white"
              >
                <h3 className="text-lg font-bold mb-2">{ind.title}</h3>
                <p className="text-sm text-white/80">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gradient mb-4">
            Certifications & Partnerships
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan mx-auto rounded-full mb-12" />
          <div className="grid md:grid-cols-2 gap-6">
            {overview.certifications.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="font-bold text-ocu-blue mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
