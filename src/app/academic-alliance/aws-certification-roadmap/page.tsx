import type { Metadata } from "next";
import { academyDisclaimer } from "@/lib/data";
import { GradientHero, SectionHeading } from "@/components/Heros";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = { title: "AWS Certification Roadmap" };

const structure = [
  "AWS & Cloud Career Landscape",
  "AWS Certification Ecosystem",
  "Career Roles",
  "Certification Selection",
  "Prerequisites",
  "Learning Roadmap",
  "Next Steps",
];

export default function RoadmapPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <GradientHero
        eyebrow="Roadmap Sessions"
        title="Find Your AWS Certification Path"
        subtitle="Many students are unsure which AWS certification to pursue, whether they should start at Foundation, Associate or Professional level, what prerequisites they need, or which certifications align with particular career paths. The Roadmap Session addresses this."
        primary={{ href: "#partnership-request", label: "Request a Roadmap Session" }}
      />
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 text-sm font-bold uppercase tracking-wide">
            60–90 minute session
          </span>
        </div>
      </section>
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Session Structure" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-7 gap-4">
            {structure.map((s, i) => (
              <div
                key={s}
                className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#2F6FED] text-white font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="text-sm font-semibold text-gray-900">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="partnership-request" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Request a Roadmap Session" />
          <InquiryForm variant="academy" defaultProgram="Roadmap Session" />
          <p className="text-xs text-gray-500 mt-8">{academyDisclaimer}</p>
        </div>
      </section>
    </div>
  );
}
