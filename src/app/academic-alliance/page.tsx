import type { Metadata } from "next";
import Link from "next/link";
import { academyDisclaimer } from "@/lib/data";
import { GradientHero, SectionHeading } from "@/components/Heros";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Partner Program" };

const benefits = [
  {
    title: "Financial Incentives",
    description:
      "Up to €2,000 referral bonus for every successful deal closed, plus priority access to additional incentive programs backed by AWS.",
    cta: "Discuss a Referral",
  },
  {
    title: "AWS Resources & Training",
    description:
      "Access AWS-funded activities, proof-of-concept programs, AWS credits for startups, and free or discounted AWS and cloud training courses.",
    cta: "Ask About AWS Resources",
  },
  {
    title: "Business Collaboration",
    description:
      "Collaborate on joint proposals or tenders, and get invited to industry events and networking opportunities.",
    cta: "Explore Collaboration",
  },
  {
    title: "Partner Support",
    description:
      "Get access to a dedicated partner manager for quick updates and support, with regular reporting and transparency on your referrals’ progress.",
    cta: "Meet Your Partner Manager",
  },
];

const steps = [
  ["Register", "Complete the partnership form with your name, company and country."],
  [
    "Discovery Call",
    "CloudHight discusses your business, referral opportunities and goals.",
  ],
  [
    "Partner Onboarding",
    "Get set up with a dedicated partner manager and access to AWS-funded resources.",
  ],
  [
    "Joint Go-to-Market",
    "Plan joint proposals, tenders and shared target industries or regions.",
  ],
  [
    "Referrals & Reporting",
    "Submit referrals and track progress with regular, transparent reporting.",
  ],
  ["Grow Together", "Earn referral bonuses and expand the partnership over time."],
];

export default function PartnerProgramPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <GradientHero
        eyebrow="Partner Program"
        title="The CloudHight Partnership Program"
        subtitle="We invite organisations, consultants, and ecosystem partners to join our Partnership Program — designed to connect businesses with world-class AWS onboarding and cloud consulting support."
        primary={{ href: "#partnership-request", label: "Apply to Partner" }}
        secondary={{ href: "#program-areas", label: "Explore Benefits" }}
      />
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionHeading title="Why Partner With CloudHight?" />
          <p className="text-gray-600 mb-8">
            CloudHight is a trusted AWS Select Tier and Advanced Tier Partner, and
            winner of the Cloud Consulting Company of the Year 2026 award by the
            All-Ireland Business Foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "AWS-funded activities",
              "Proof-of-concept programs",
              "Joint go-to-market planning",
              "Referral incentives",
              "Dedicated partner support",
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-gray-600">
            The Partnership Program helps organisations, consultants and ecosystem
            partners grow alongside CloudHight through structured collaboration.
          </p>
        </div>
      </section>
      <section id="program-areas" className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Partnership Benefits" />
          <p className="text-center text-gray-600 mb-10">
            A look at what CloudHight Partnership Program members get access to.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <article
                key={b.title}
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{b.title}</h3>
                  <span className="text-xs font-bold uppercase text-green-700 bg-green-50 px-2 py-1 rounded">
                    Active
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{b.description}</p>
                <Link href="#partnership-request" className="text-sm font-bold text-[#2F6FED]">
                  {b.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="How the Partnership Works" />
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(([t, d], i) => (
              <div key={t} className="bg-white p-6 rounded-lg border border-gray-200">
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
          <SectionHeading title="Apply to the Partnership Program" />
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
            <InquiryForm variant="partner" />
          </div>
          <p className="text-xs text-gray-500 mt-8">{academyDisclaimer}</p>
        </div>
      </section>
    </div>
  );
}
