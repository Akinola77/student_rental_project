import type { Metadata } from "next";
import Link from "next/link";
import { academyDisclaimer } from "@/lib/data";
import { GradientHero, SectionHeading } from "@/components/Heros";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = { title: "MotivaLogic Academy" };

const programs = [
  {
    title: "AWS Certification Excellence",
    status: "Active",
    description:
      "Structured AWS certification preparation, readiness assessment, intensive certification programs and mock examinations.",
    cta: "Explore Certification Excellence",
    href: "/academic-alliance/aws-certification-excellence",
  },
  {
    title: "Roadmap Sessions",
    status: "Active",
    description:
      "Short industry-led sessions helping you understand AWS career pathways, certification levels, and next steps.",
    cta: "Request a Roadmap Session",
    href: "/academic-alliance/aws-certification-roadmap",
  },
  {
    title: "Certification Lobby",
    status: "Active",
    description:
      "An intensive cohort-based preparation environment for candidates who already have the required foundational knowledge.",
    cta: "Enter the Certification Lobby",
    href: "/academic-alliance/aws-certification-lobby",
  },
  {
    title: "Mock Examination",
    status: "Active",
    description:
      "Measure your certification readiness before attempting the official AWS exam, with a full domain-by-domain breakdown.",
    cta: "Request a Mock Examination",
    href: "/academic-alliance/aws-mock-examination",
  },
];

const steps = [
  ["Roadmap Session", "Understand certification levels and pick the right path."],
  ["Readiness Assessment", "We evaluate your existing AWS knowledge."],
  ["Certification Lobby", "Intensive, mentor-supported cohort preparation."],
  ["Mock Examination", "A final certification-style readiness check."],
  ["Certification Attempt", "Schedule your official AWS Certification exam."],
];

export default function AcademyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <GradientHero
        eyebrow="MotivaLogic Academy"
        title="MotivaLogic Academy"
        subtitle="A structured path to AWS certification — readiness assessment, intensive preparation, and mock examinations, built for individuals and academic partner institutions alike."
        primary={{ href: "#programs", label: "Explore Programs" }}
        secondary={{
          href: "/academic-alliance/aws-certification-roadmap",
          label: "Request a Roadmap Session",
        }}
      />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading title="Why MotivaLogic Academy?" />
          <p className="text-gray-600 mb-8">
            Certification prep works best when it is structured, assessed, and
            mentor-led rather than self-paced alone.
          </p>
          <ul className="grid md:grid-cols-2 gap-4 text-left">
            {[
              "Readiness assessment before you commit",
              "Cohort-based, mentor-supported preparation",
              "Practice-question drills and mock examinations",
              "A clear roadmap across Foundation, Associate and Professional levels",
            ].map((p) => (
              <li
                key={p}
                className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-700"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section id="programs" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Programs" />
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((p) => (
              <article
                key={p.title}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                  <span className="text-xs font-bold uppercase text-green-700 bg-green-50 px-2 py-1 rounded">
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-6 flex-1">{p.description}</p>
                <Link href={p.href} className="text-sm font-bold text-[#2F6FED]">
                  {p.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Your Certification Journey" />
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map(([t, d], i) => (
              <div key={t} className="bg-white p-5 rounded-lg border border-gray-200">
                <div className="w-8 h-8 rounded-full bg-[#2F6FED] text-white font-bold flex items-center justify-center mb-3">
                  {i + 1}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{t}</h3>
                <p className="text-sm text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="partnership-request" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Get Started with MotivaLogic Academy" />
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
            <InquiryForm variant="academy" />
          </div>
          <p className="text-xs text-gray-500 mt-8">{academyDisclaimer}</p>
        </div>
      </section>
    </div>
  );
}
