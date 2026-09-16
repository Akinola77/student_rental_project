import type { Metadata } from "next";
import { academyDisclaimer } from "@/lib/data";
import { GradientHero, SectionHeading } from "@/components/Heros";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = { title: "AWS Certification Lobby" };

const process = [
  [
    "Nomination / Registration",
    "The college nominates students, or students register through their institution.",
  ],
  [
    "Readiness Assessment",
    "CloudHight Consulting evaluates existing AWS knowledge.",
  ],
  [
    "Eligibility",
    "Students are classified based on readiness: Ready for Lobby, Preparation Recommended, or Alternative Certification Path Recommended.",
  ],
  [
    "Pre-Lobby Preparation",
    "Eligible students receive an exam blueprint, prerequisite resources, preparation guidance, environment requirements, and a diagnostic assessment.",
  ],
  ["Enter the Lobby", "Students participate in an intensive cohort-based preparation experience."],
  ["Progressive Assessment", "Performance is measured throughout the program."],
  [
    "Final Mock Examination",
    "Students complete a final certification-style readiness assessment.",
  ],
  [
    "Exam Readiness",
    "Students receive their readiness outcome and recommended next steps.",
  ],
  [
    "AWS Certification Attempt",
    "Eligible students may proceed to independently schedule the relevant AWS certification examination.",
  ],
];

const inside = [
  ["Concept Review", "Review important AWS services and certification domains."],
  [
    "Architecture & Scenarios",
    "Work through real-world AWS architecture and operational scenarios.",
  ],
  ["Hands-On Practice", "Apply concepts through guided technical exercises where appropriate."],
  [
    "Question Drills",
    "Practice certification-style questions and analyze why answers are correct or incorrect.",
  ],
  ["Mentor Sessions", "Discuss difficult concepts with experienced practitioners."],
  ["Progress Assessment", "Track readiness throughout the Lobby."],
];

export default function LobbyPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <GradientHero
        eyebrow="Certification Lobby"
        title="Welcome to the AWS Certification Lobby"
        subtitle="An intensive cohort-based AWS certification preparation environment designed for students who already have prerequisite knowledge."
        primary={{ href: "#partnership-request", label: "Enter the Certification Lobby" }}
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="The Lobby Process" />
          <ol className="grid md:grid-cols-3 gap-5">
            {process.map(([t, d], i) => (
              <li key={t} className="bg-white p-5 rounded-lg border border-gray-200">
                <span className="text-[#2F6FED] font-bold">{i + 1}</span>
                <h3 className="font-bold text-gray-900 mt-1">{t}</h3>
                <p className="text-sm text-gray-600 mt-1">{d}</p>
              </li>
            ))}
          </ol>
          <p className="text-sm text-gray-500 mt-8 max-w-3xl mx-auto text-center">
            The AWS certification examination itself is administered under AWS’s
            certification program. CloudHight Consulting’s readiness assessment is an
            internal preparation measure, not an AWS-issued guarantee.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What Happens Inside the Lobby" />
          <div className="grid md:grid-cols-3 gap-6">
            {inside.map(([t, d]) => (
              <div key={t} className="p-6 border border-gray-200 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{t}</h3>
                <p className="text-sm text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading title="Progress Tracking" />
          <p className="text-sm text-gray-500 mb-6">
            Readiness is measured throughout the Lobby. Illustrative example — not
            actual student data
          </p>
          <div className="grid grid-cols-4 gap-4">
            {[
              ["Initial Assessment", "51%"],
              ["Checkpoint 1", "62%"],
              ["Checkpoint 2", "71%"],
              ["Final Mock", "82%"],
            ].map(([l, v]) => (
              <div key={l} className="bg-white rounded-lg border p-4">
                <p className="text-2xl font-bold text-[#2F6FED]">{v}</p>
                <p className="text-xs text-gray-500 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="partnership-request" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Enter the Certification Lobby" />
          <InquiryForm variant="academy" defaultProgram="Certification Lobby" />
          <p className="text-xs text-gray-500 mt-8">{academyDisclaimer}</p>
        </div>
      </section>
    </div>
  );
}
