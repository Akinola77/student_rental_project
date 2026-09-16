import type { Metadata } from "next";
import Link from "next/link";
import { academyDisclaimer } from "@/lib/data";
import { GradientHero, SectionHeading } from "@/components/Heros";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = { title: "AWS Certification Excellence" };

export default function ExcellencePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <GradientHero
        eyebrow="AWS Certification Excellence"
        title="Build AWS-Certified Talent on Campus"
        subtitle="The AWS Certification Excellence Program helps colleges and universities provide students with structured certification guidance, intensive preparation and certification readiness assessment."
        primary={{ href: "#partnership-request", label: "Start a Certification Program" }}
        secondary={{
          href: "/academic-alliance/aws-certification-lobby",
          label: "Explore the Certification Lobby",
        }}
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Three Core Offerings" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "AWS Certification Lobby",
                body: "An intensive cohort-based AWS certification preparation environment for students who already possess the required foundational knowledge and want structured, intensive preparation toward AWS certification readiness.",
                points: [
                  "Readiness assessment",
                  "Intensive preparation",
                  "Exam-domain review",
                  "Scenario discussions",
                  "Hands-on exercises",
                ],
                href: "/academic-alliance/aws-certification-lobby",
                cta: "Enter the Certification Lobby",
              },
              {
                title: "AWS Certification Roadmap Sessions",
                extra: "60–90 minutes",
                body: "Short industry-led sessions helping students understand AWS career pathways, certification levels, prerequisites, and next steps.",
                points: [
                  "AWS career pathways",
                  "AWS certification levels",
                  "Certification options",
                  "Recommended prerequisites",
                  "Learning paths",
                ],
                href: "/academic-alliance/aws-certification-roadmap",
                cta: "Request a Roadmap Session",
              },
              {
                title: "AWS Mock Examination Program",
                body: "Structured certification readiness assessment identifying current readiness, strong and weak domains, and recommended preparation.",
                points: [
                  "Current readiness",
                  "Strong domains",
                  "Weak domains",
                  "Knowledge gaps",
                  "Recommended preparation",
                ],
                href: "/academic-alliance/aws-mock-examination",
                cta: "Request a Mock Examination",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:border-cyan-400 flex flex-col"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
                {c.extra && (
                  <p className="text-xs font-bold text-purple-700 mb-2">{c.extra}</p>
                )}
                <p className="text-sm text-gray-600 mb-4">{c.body}</p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2F6FED] flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link href={c.href} className="text-sm font-bold text-[#2F6FED]">
                  {c.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Certification Journey" />
          <ol className="grid md:grid-cols-4 gap-4">
            {[
              "AWS Certification Roadmap Session",
              "Student Interest / Nomination",
              "Readiness Assessment",
              "AWS Certification Lobby",
              "Progressive Assessment",
              "Final Mock Examination",
              "Exam Readiness",
              "AWS Certification Attempt",
            ].map((s, i) => (
              <li key={s} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <span className="text-[#2F6FED] font-bold">{i + 1}</span>
                <p className="font-medium text-gray-900 mt-1">{s}</p>
              </li>
            ))}
          </ol>
          <p className="text-sm text-gray-500 mt-8 max-w-3xl mx-auto text-center">
            Colleges do not need to follow the entire sequence — they may independently
            request a Roadmap Session, a Certification Lobby, or a Mock Examination
            depending on their students’ current readiness.
          </p>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Certification Tracks" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-bold text-ocu-blue mb-3">Foundation</h3>
              <p>AWS Certified Cloud Practitioner</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-bold text-ocu-blue mb-3">Associate</h3>
              <p>AWS Certified Solutions Architect – Associate</p>
              <p className="mt-1">AWS Certified Developer – Associate</p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-bold text-ocu-blue mb-3">Professional</h3>
              <p>AWS Certified Solutions Architect – Professional</p>
              <p className="mt-1">AWS Certified DevOps Engineer – Professional</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Admission subject to readiness assessment.
          </p>
        </div>
      </section>
      <section id="partnership-request" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <SectionHeading title="Start a Certification Program" />
          <InquiryForm variant="academy" defaultProgram="AWS Certification Excellence" />
          <p className="text-xs text-gray-500 mt-8">{academyDisclaimer}</p>
        </div>
      </section>
    </div>
  );
}
