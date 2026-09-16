import type { Metadata } from "next";
import { academyDisclaimer, mockExams } from "@/lib/data";
import { GradientHero, SectionHeading } from "@/components/Heros";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = { title: "AWS Mock Examination" };

export default function MockExamPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <GradientHero
        eyebrow="Mock Examination"
        title="Know Before You Go"
        subtitle="Measure your certification readiness before attempting the official AWS exam, with a full domain-by-domain breakdown."
        primary={{ href: "#exams", label: "Explore AWS Mock Examinations" }}
      />
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="The Process" />
          <ol className="grid md:grid-cols-6 gap-4">
            {[
              "Choose Your AWS Certification",
              "Take a Mock Examination",
              "Get Your Readiness Score",
              "Understand Your Strengths & Gaps",
              "Get Your Readiness Classification",
              "Follow Your Recommended Next Step",
            ].map((s, i) => (
              <li key={s} className="bg-white p-4 rounded-lg border text-center">
                <span className="text-[#2F6FED] font-bold">{i + 1}</span>
                <p className="text-sm font-medium mt-2">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Understand Your Readiness" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              [
                "Exam Ready",
                "Your mock examination performance is consistent with candidates who are prepared for the exam domains.",
                "Proceed toward scheduling your official AWS Certification attempt.",
              ],
              [
                "Nearly Ready",
                "You are close, with a few specific gaps holding back a fully consistent result.",
                "Focus on targeted preparation in your weaker domains, then reassess with another mock examination.",
              ],
              [
                "Further Preparation Recommended",
                "Your results indicate meaningful gaps across multiple exam domains.",
                "Explore the appropriate AWS Certification Lobby track before attempting the exam.",
              ],
            ].map(([t, a, b]) => (
              <article key={t} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-ocu-blue mb-2">{t}</h3>
                <p className="text-sm text-gray-600 mb-3">{a}</p>
                <p className="text-sm text-gray-500">{b}</p>
              </article>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center">
            Readiness classifications are internal CloudHight Consulting
            recommendations based on your mock examination performance. They are
            intended to guide preparation and never guarantee success on the official
            AWS Certification examination.
          </p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading title="Get Your Readiness Score" />
          <p className="text-sm text-gray-500 mb-6">
            A sample of the readiness report you receive after your mock examination.
            Illustrative example — not actual assessment data
          </p>
          <div className="grid grid-cols-4 gap-4">
            {[
              ["Security", "82%"],
              ["Deployment", "76%"],
              ["Monitoring", "64%"],
              ["Automation", "71%"],
            ].map(([l, v]) => (
              <div key={l} className="bg-white rounded-lg border p-4">
                <p className="text-2xl font-bold text-[#2F6FED]">{v}</p>
                <p className="text-xs text-gray-500 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="exams" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Explore AWS Mock Examinations" />
          <p className="text-center text-gray-600 mb-8">
            Choose from certifications currently supported on CloudHight Academy.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {mockExams.map((e) => (
              <a
                key={e.name}
                href="https://academy.cloudhight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-cyan-400"
              >
                <div>
                  <p className="text-xs uppercase tracking-wide text-purple-700 font-bold">
                    {e.level}
                  </p>
                  <p className="font-semibold text-gray-900">{e.name}</p>
                </div>
                <span className="text-sm font-bold text-[#2F6FED]">Explore Mock</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="partnership-request" className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Request a Mock Examination" />
          <InquiryForm variant="academy" defaultProgram="Mock Examination" />
          <p className="text-xs text-gray-500 mt-8">{academyDisclaimer}</p>
        </div>
      </section>
    </div>
  );
}
