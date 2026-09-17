import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  Check,
  Building2,
  CircleDollarSign,
  CloudUpload,
  Gauge,
  GitBranch,
  GitFork,
  Layers,
  Link2,
  LineChart,
  PenLine,
  Rocket,
  Search,
  ServerCrash,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { PageHero } from "@/components/Heros";

const consultHref =
  "/contact?subject=" + encodeURIComponent("Book a Cloud Consultation");
const expertHref =
  "/contact?subject=" + encodeURIComponent("Talk to an Expert");

export const metadata: Metadata = {
  title: {
    absolute:
      "Cloud Implementation & Migration Services | CloudHight Consulting",
  },
  description:
    "Cloud implementation, migration and modernisation services from CloudHight Consulting. Design, migrate and optimise secure, scalable cloud environments across AWS, Azure and Google Cloud.",
  alternates: { canonical: "/services/cloud-implementation" },
  openGraph: {
    title: "Cloud Implementation & Migration Services | CloudHight Consulting",
    description:
      "Design, migrate and optimise secure, scalable cloud environments across AWS, Azure and Google Cloud.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const challenges: { title: string; Icon: LucideIcon }[] = [
  { title: "Legacy infrastructure and technical debt", Icon: ServerCrash },
  { title: "Rising infrastructure and operational costs", Icon: CircleDollarSign },
  { title: "Scalability and performance limitations", Icon: Gauge },
  { title: "Security and compliance requirements", Icon: ShieldAlert },
  { title: "Complex application dependencies", Icon: GitFork },
  { title: "Cloud skills and resource gaps", Icon: Users },
];

const deliverables: {
  title: string;
  body: string;
  Icon: LucideIcon;
  href?: string;
}[] = [
  {
    title: "Cloud Strategy & Assessment",
    body: "Assess the existing environment, business objectives, workloads and dependencies to develop a practical cloud transformation roadmap.",
    Icon: Search,
  },
  {
    title: "Cloud Architecture & Design",
    body: "Design secure, resilient and scalable cloud architectures aligned with business and technical requirements.",
    Icon: Layers,
  },
  {
    title: "Cloud Landing Zones",
    body: "Establish secure cloud foundations incorporating identity, networking, governance, logging, security and account/subscription structures.",
    Icon: Building2,
  },
  {
    title: "Cloud Migration",
    body: "Plan and execute workload migrations while minimising disruption, managing risk and accelerating time to value.",
    Icon: CloudUpload,
  },
  {
    title: "Application Modernisation",
    body: "Modernise legacy applications using cloud-native architectures, containers, serverless technologies and managed services where appropriate.",
    Icon: Boxes,
    href: "/services/application-services",
  },
  {
    title: "Cloud Integration",
    body: "Integrate cloud environments with existing applications, data platforms, APIs and on-premises infrastructure.",
    Icon: Link2,
  },
  {
    title: "DevOps & Automation",
    body: "Implement CI/CD, Infrastructure as Code, automated deployment and modern DevOps practices.",
    Icon: GitBranch,
  },
  {
    title: "Security & Governance",
    body: "Embed security, compliance, monitoring, access controls and governance throughout the cloud environment.",
    Icon: ShieldCheck,
  },
];

const steps: { number: string; title: string; body: string; Icon: LucideIcon }[] =
  [
    {
      number: "01",
      title: "Assess",
      body: "Understand the business objectives, existing technology estate, workloads, dependencies, risks and cloud readiness.",
      Icon: Search,
    },
    {
      number: "02",
      title: "Design",
      body: "Develop the target architecture, migration strategy, security model, governance framework and implementation roadmap.",
      Icon: PenLine,
    },
    {
      number: "03",
      title: "Migrate",
      body: "Move workloads and data using an appropriate migration approach while minimising operational disruption.",
      Icon: CloudUpload,
    },
    {
      number: "04",
      title: "Modernise",
      body: "Optimise applications and infrastructure using cloud-native services, automation, DevOps and modern architectural patterns.",
      Icon: Sparkles,
    },
    {
      number: "05",
      title: "Optimise",
      body: "Continuously improve performance, security, reliability and cost after migration.",
      Icon: LineChart,
    },
  ];

const whyPoints = [
  "AWS Advanced Tier Services Partner",
  "Deep cloud architecture and engineering expertise",
  "Multi-cloud capabilities across AWS, Azure and Google Cloud",
  "DevOps, DevSecOps and Platform Engineering expertise",
  "Security-first approach",
  "Automation and Infrastructure as Code",
  "Experience supporting cloud environments from strategy through operations",
  "Business All-Star recognition — Global Cloud Consulting Company of the Year 2026",
];

const outcomes: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Accelerate Time to Market",
    body: "Use automation and modern cloud platforms to deliver applications and services faster.",
    Icon: Rocket,
  },
  {
    title: "Improve Scalability",
    body: "Build infrastructure capable of adapting to changing business demand.",
    Icon: Gauge,
  },
  {
    title: "Strengthen Security",
    body: "Embed security, governance and monitoring throughout the cloud environment.",
    Icon: ShieldCheck,
  },
  {
    title: "Reduce Operational Complexity",
    body: "Use managed cloud services and automation to simplify infrastructure operations.",
    Icon: Layers,
  },
  {
    title: "Optimise Cloud Costs",
    body: "Improve visibility and design environments around efficient resource consumption.",
    Icon: Wallet,
  },
  {
    title: "Build for Innovation",
    body: "Create a modern cloud foundation capable of supporting AI, data and digital transformation initiatives.",
    Icon: Sparkles,
  },
];

const relatedServices = [
  {
    title: "Application Services",
    body: "Modernise legacy applications and build secure, scalable cloud-native solutions on your cloud foundation.",
    href: "/services/application-services",
  },
  {
    title: "DevOps & Platform Engineering",
    body: "Build CI/CD, Infrastructure as Code, DevSecOps and developer platforms on top of your cloud foundation.",
    href: "/services/devops-platform-engineering",
  },
  {
    title: "Managed Cloud Services",
    body: "Operate, monitor, secure and continuously optimise your cloud environment after go-live.",
    href: "/services/managed-cloud-services",
  },
  {
    title: "AI & Automation",
    body: "Design, build and operationalise secure enterprise AI solutions on the AWS foundations you implement.",
    href: "/services/ai-automation",
  },
  {
    title: "Cloud & AI Skills Enablement",
    body: "Build the internal cloud, DevOps, security and AI capability your teams need to operate what you implement.",
    href: "/services/cloud-ai-skills-enablement",
  },
];

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan mx-auto rounded-full" />
      {subtitle && (
        <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function CtaButtons({ light = false }: { light?: boolean }) {
  const primary = light
    ? "inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocu-blue"
    : "inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2";
  const secondary = light
    ? "inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 hover:bg-white/10 px-6 py-3.5 rounded-lg text-sm font-bold transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocu-blue"
    : "inline-flex items-center justify-center gap-2 bg-white text-ocu-blue border border-ocu-blue/15 hover:bg-ocu-bg px-6 py-3.5 rounded-lg text-sm font-bold transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 focus-visible:ring-offset-2";

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href={consultHref} className={primary}>
        Book a Cloud Consultation
        <ArrowRight className="w-4 h-4" aria-hidden />
      </Link>
      <Link href={expertHref} className={secondary}>
        Talk to an Expert
      </Link>
    </div>
  );
}

export default function CloudImplementationPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Cloud Implementation & Migration"
        subtitle="Build a secure, scalable and future-ready cloud foundation designed around your business. CloudHight helps organisations plan, migrate and modernise workloads across AWS, Azure and Google Cloud — from initial assessment through production deployment and optimisation."
        image="/photos/cloudmigration.png"
        imageAlt="Cloud implementation and migration architecture"
        primary={{ href: consultHref, label: "Book a Cloud Consultation" }}
        secondary={{ href: expertHref, label: "Talk to an Expert" }}
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ocu-blue mb-6">
              Move to the Cloud with Confidence
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cloud adoption is about more than moving workloads from one
              environment to another. Successful transformation requires the
              right strategy, architecture, security, governance and operating
              model.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CloudHight works with organisations throughout the cloud journey
              — helping reduce migration risk, modernise legacy environments
              and build secure, scalable platforms that support long-term
              business growth.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/photos/architecturedesign.png"
              alt="Cloud architecture design workshop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {challenges.map(({ title, Icon }) => (
            <article
              key={title}
              className="bg-ocu-bg rounded-2xl p-5 border border-gray-100 flex gap-4 items-start"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-white" aria-hidden />
              </div>
              <h3 className="text-sm font-semibold text-ocu-blue leading-snug pt-2">
                {title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Our Cloud Implementation Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverables.map(({ title, body, Icon, href }) => (
              <article
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ocu-blue mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1">{body}</p>
                {href ? (
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 mt-4 text-ocu-blue font-semibold hover:text-ocu-cyan transition-colors underline decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="From Strategy to Production" />
          <ol className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12 text-sm sm:text-base font-semibold text-ocu-blue">
            {steps.map((step, i) => (
              <li key={step.title} className="flex items-center gap-2 sm:gap-3">
                <span className="px-3 py-1.5 rounded-full bg-ocu-blue/5 border border-ocu-blue/10">
                  {step.title}
                </span>
                {i < steps.length - 1 && (
                  <span className="text-ocu-cyan" aria-hidden>
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
          <div className="grid md:grid-cols-5 gap-5">
            {steps.map(({ number, title, body, Icon }) => (
              <article
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative"
              >
                <p className="text-ocu-cyan font-extrabold text-sm tracking-widest mb-3">
                  {number}
                </p>
                <div className="w-10 h-10 rounded-full bg-ocu-cyan text-white flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ocu-blue mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Expertise Across Leading Cloud Platforms"
            subtitle="We help organisations design and implement cloud solutions across the world's leading cloud platforms, selecting the technologies and architecture that best support their requirements."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <article className="md:col-span-1 bg-white rounded-2xl p-8 border border-ocu-cyan/20 shadow-md ring-1 ring-ocu-cyan/10">
              <Image
                src="/photos/aws-badge-partner-advanced-tier-services.png"
                alt="AWS Partner — Advanced Tier Services"
                width={180}
                height={180}
                className="h-24 w-auto object-contain mb-5"
              />
              <h3 className="text-xl font-bold text-ocu-blue mb-2">
                Amazon Web Services (AWS)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                CloudHight is an AWS Advanced Tier Services Partner. We design,
                migrate and operate workloads on AWS with a security-first
                architecture practice.
              </p>
            </article>
            <article className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="h-24 flex items-center mb-5">
                <span className="text-2xl font-extrabold text-ocu-blue tracking-tight">
                  Azure
                </span>
              </div>
              <h3 className="text-xl font-bold text-ocu-blue mb-2">
                Microsoft Azure
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We help organisations plan and implement Azure environments —
                landing zones, identity, networking and workload migration —
                as part of a multi-cloud strategy.
              </p>
            </article>
            <article className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="h-24 flex items-center mb-5">
                <span className="text-2xl font-extrabold text-ocu-blue tracking-tight">
                  Google Cloud
                </span>
              </div>
              <h3 className="text-xl font-bold text-ocu-blue mb-2">
                Google Cloud Platform (GCP)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We design and implement GCP architectures where they best fit
                the workload — from data and analytics platforms to
                cloud-native application estates.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Why CloudHight?" />
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <Image
              src="/photos/aws-badge-partner-advanced-tier-services.png"
              alt="AWS Partner — Advanced Tier Services"
              width={200}
              height={200}
              className="h-28 w-auto object-contain"
            />
            <Image
              src="/photos/business-allstar-2026.png"
              alt="Business All-Star 2026 Accredited"
              width={200}
              height={200}
              className="h-28 w-auto object-contain"
            />
            <Image
              src="/photos/badge-devops-institute.png"
              alt="DevOps Institute"
              width={180}
              height={180}
              className="h-24 w-auto object-contain"
            />
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 bg-ocu-bg rounded-2xl p-4 border border-gray-100"
              >
                <span className="mt-1 w-5 h-5 rounded-full bg-ocu-cyan text-white flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" aria-hidden />
                </span>
                <span className="text-sm text-gray-700 leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Cloud Transformation Built Around Business Outcomes" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="rounded-2xl p-6 bg-gradient-to-br from-ocu-blue to-[#123a7a] text-white"
              >
                <Icon className="w-7 h-7 text-cyan-200 mb-4" aria-hidden />
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Related Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
              >
                <h3 className="text-lg font-bold text-ocu-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-ocu-blue font-semibold hover:text-ocu-cyan transition-colors underline decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-blue text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Cloud Journey?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Whether you&apos;re planning your first cloud migration, modernising
            an existing environment or looking to optimise your cloud platform,
            our team can help you define the right path forward.
          </p>
          <CtaButtons light />
        </div>
      </section>
    </div>
  );
}
