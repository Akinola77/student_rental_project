import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  DatabaseBackup,
  Eye,
  EyeOff,
  Gauge,
  GitBranch,
  HeartPulse,
  Layers,
  LineChart,
  RefreshCw,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Sparkles,
  Users,
  Wallet,
  Wrench,
  Workflow,
} from "lucide-react";
import { PageHero } from "@/components/Heros";

const consultHref =
  "/contact?subject=" + encodeURIComponent("Book a Cloud Consultation");
const expertHref =
  "/contact?subject=" + encodeURIComponent("Talk to an Expert");
const discussHref =
  "/contact?subject=" + encodeURIComponent("Discuss Managed Cloud Requirements");

export const metadata: Metadata = {
  title: {
    absolute: "Managed Cloud Services | CloudHight Consulting",
  },
  description:
    "Managed cloud services from CloudHight Consulting covering cloud operations, monitoring, SRE, security, FinOps, automation and continuous optimisation across AWS, Azure and Google Cloud.",
  alternates: { canonical: "/services/managed-cloud-services" },
  openGraph: {
    title: "Managed Cloud Services | CloudHight Consulting",
    description:
      "Proactive managed cloud services covering operations, monitoring, SRE, security, FinOps, automation and continuous optimisation across AWS, Azure and Google Cloud.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const challenges: { title: string; Icon: LucideIcon }[] = [
  { title: "Increasing cloud complexity", Icon: Layers },
  { title: "Limited internal cloud expertise", Icon: Users },
  { title: "Unpredictable cloud costs", Icon: CircleDollarSign },
  { title: "Performance and reliability issues", Icon: Gauge },
  { title: "Security and compliance requirements", Icon: ShieldAlert },
  { title: "Operational incidents", Icon: AlertTriangle },
  { title: "Manual infrastructure processes", Icon: Wrench },
  { title: "Lack of visibility across cloud environments", Icon: EyeOff },
];

const capabilities: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Cloud Operations",
    body: "Day-to-day management and operational support for cloud infrastructure, workloads and services.",
    Icon: Workflow,
  },
  {
    title: "Monitoring & Observability",
    body: "Improve visibility across infrastructure, applications and services using metrics, logs, traces, dashboards and intelligent alerting.",
    Icon: Activity,
  },
  {
    title: "Site Reliability Engineering (SRE)",
    body: "Apply reliability engineering practices to improve availability, performance, resilience and operational efficiency.",
    Icon: HeartPulse,
  },
  {
    title: "Incident & Problem Management",
    body: "Help identify, investigate and resolve operational issues while addressing underlying causes to reduce recurrence.",
    Icon: Siren,
  },
  {
    title: "Cloud Security Management",
    body: "Continuously improve cloud security posture through access controls, configuration management, monitoring, vulnerability awareness and cloud security best practices.",
    Icon: ShieldCheck,
  },
  {
    title: "Cloud Cost Optimisation & FinOps",
    body: "Improve cloud cost visibility and identify opportunities to optimise resource consumption, architecture and spending.",
    Icon: Wallet,
  },
  {
    title: "Performance Optimisation",
    body: "Continuously assess workloads and infrastructure to improve performance, scalability and resource efficiency.",
    Icon: Gauge,
  },
  {
    title: "Backup, Resilience & Disaster Recovery",
    body: "Help implement and maintain appropriate backup, recovery and resilience strategies aligned with business requirements.",
    Icon: DatabaseBackup,
  },
  {
    title: "Automation & Infrastructure as Code",
    body: "Reduce manual operational effort through automation, Infrastructure as Code, configuration management and repeatable cloud operations.",
    Icon: GitBranch,
  },
  {
    title: "Governance & Continuous Improvement",
    body: "Continuously review cloud environments against operational, security, reliability and cost optimisation objectives.",
    Icon: ClipboardCheck,
  },
];

const steps: { number: string; title: string; body: string; Icon: LucideIcon }[] =
  [
    {
      number: "01",
      title: "Monitor",
      body: "Maintain visibility across cloud infrastructure, applications, security events, performance and operational health.",
      Icon: Eye,
    },
    {
      number: "02",
      title: "Manage",
      body: "Support day-to-day cloud operations, configuration, access, workloads and platform services.",
      Icon: Settings,
    },
    {
      number: "03",
      title: "Protect",
      body: "Continuously strengthen security, resilience, backup, governance and operational controls.",
      Icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Optimise",
      body: "Identify opportunities to improve performance, reliability, cloud costs and resource utilisation.",
      Icon: LineChart,
    },
    {
      number: "05",
      title: "Improve",
      body: "Use automation, engineering insights and operational learnings to continuously improve the environment.",
      Icon: RefreshCw,
    },
  ];

const aiopsCapabilities = [
  "Infrastructure monitoring",
  "Application monitoring",
  "Centralised logging",
  "Metrics and dashboards",
  "Intelligent alerting",
  "Event correlation",
  "Automated operational workflows",
  "Predictive operational insights",
  "Root-cause analysis support",
  "AI-assisted cloud operations",
];

const finopsCapabilities = [
  "Cloud cost visibility",
  "Usage analysis",
  "Resource optimisation",
  "Rightsizing opportunities",
  "Unused resource identification",
  "Architecture optimisation",
  "Budget and cost monitoring",
  "Cost allocation and tagging strategy",
  "FinOps practices",
  "Continuous optimisation recommendations",
];

const sreCapabilities = [
  "Reliability engineering",
  "Availability and resilience",
  "Service health monitoring",
  "Incident management",
  "Root-cause analysis",
  "Capacity and performance planning",
  "Automation",
  "Operational readiness",
  "Continuous improvement",
];

const securityCapabilities = [
  "Identity and access management",
  "Cloud configuration reviews",
  "Security monitoring",
  "Logging and auditability",
  "Vulnerability awareness",
  "Encryption and key-management considerations",
  "Backup and recovery",
  "Security automation",
  "Governance and policy",
  "DevSecOps practices",
];

const whyPoints = [
  "AWS Advanced Tier Services Partner",
  "Cloud architecture and engineering expertise",
  "DevOps and Platform Engineering capability",
  "Site Reliability Engineering expertise",
  "Cloud security expertise",
  "Automation-first approach",
  "AIOps and intelligent operations capability",
  "FinOps and cloud optimisation",
  "Multi-cloud capability across AWS, Azure and Google Cloud",
  "Business All-Star recognition — Global Cloud Consulting Company of the Year 2026",
  "Support across the cloud lifecycle — from implementation through ongoing operations",
];

const outcomes: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Improve Reliability",
    body: "Build more resilient cloud environments through proactive monitoring, engineering and operational best practices.",
    Icon: HeartPulse,
  },
  {
    title: "Strengthen Security",
    body: "Continuously improve security posture and governance across cloud environments.",
    Icon: ShieldCheck,
  },
  {
    title: "Control Cloud Costs",
    body: "Gain greater visibility into cloud consumption and identify opportunities for ongoing optimisation.",
    Icon: Wallet,
  },
  {
    title: "Reduce Operational Burden",
    body: "Allow internal technology teams to spend less time on repetitive cloud operations and more time on strategic initiatives.",
    Icon: Workflow,
  },
  {
    title: "Improve Performance",
    body: "Continuously review and optimise infrastructure and workloads for performance and scalability.",
    Icon: Gauge,
  },
  {
    title: "Accelerate Innovation",
    body: "Create a stable, well-managed cloud foundation that enables teams to adopt new technologies, data platforms and AI capabilities faster.",
    Icon: Sparkles,
  },
];

const engagements = [
  {
    title: "Co-Managed Cloud",
    body: "CloudHight works alongside the customer's internal technology team, providing specialist cloud engineering and operational capability.",
  },
  {
    title: "Managed Cloud Operations",
    body: "CloudHight takes responsibility for agreed areas of day-to-day cloud management, monitoring, optimisation and operational support.",
  },
  {
    title: "Cloud Optimisation & Advisory",
    body: "Ongoing specialist support focused on architecture, security, FinOps, reliability, automation and continuous improvement.",
  },
];

const relatedServices: {
  title: string;
  body: string;
  href?: string;
}[] = [
  {
    title: "Cloud Implementation & Migration",
    body: "Plan, migrate and modernise workloads onto a secure, scalable cloud foundation.",
    href: "/services/cloud-implementation",
  },
  {
    title: "Application Services",
    body: "Modernise applications and engineer cloud-native services that managed operations then keep running.",
    href: "/services/application-services",
  },
  {
    title: "DevOps & Platform Engineering",
    body: "CI/CD, Infrastructure as Code, DevSecOps and platform engineering to make software delivery repeatable.",
    href: "/services/devops-platform-engineering",
  },
  {
    title: "Cloud Security",
    body: "Security embedded into everyday cloud operations, configuration and governance.",
  },
  {
    title: "AI & AIOps",
    body: "Observability, intelligent alerting and AI-assisted operations across your cloud estate.",
    href: "/#ai-solutions",
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

function CapabilityPills({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-ocu-blue font-medium"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ManagedCloudServicesPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Managed Cloud Services"
        subtitle="Keep your cloud environment secure, reliable, optimised and ready to scale. CloudHight provides proactive managed cloud services that combine cloud operations, monitoring, automation, security, cost optimisation and continuous improvement — allowing your teams to focus on the business while we help manage the cloud."
        image="/photos/managedservices.png"
        imageAlt="Managed cloud operations, monitoring and infrastructure"
        primary={{ href: consultHref, label: "Book a Cloud Consultation" }}
        secondary={{ href: expertHref, label: "Talk to an Expert" }}
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ocu-blue mb-6">
              Your Cloud Doesn&apos;t Stop at Deployment
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Moving to the cloud is only the beginning.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Once workloads are running in production, organisations need to
              maintain availability, performance, security, cost control and
              operational resilience while continuously adapting to changing
              business requirements.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Managing this effectively can place significant pressure on
              internal technology teams.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CloudHight works as an extension of your team, helping operate
              and continuously improve your cloud environment through proactive
              monitoring, automation, engineering expertise and cloud best
              practices.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/photos/devopsandautomation.png"
              alt="Cloud operations, monitoring and automation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
          <SectionTitle title="End-to-End Managed Cloud Services" />
          <div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-6">
            {capabilities.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ocu-blue mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Proactive Cloud Management, Not Just Reactive Support"
            subtitle="A continuous operating cycle — not a one-off project."
          />
          <ol className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-4 text-sm sm:text-base font-semibold text-ocu-blue">
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
            <li className="flex items-center gap-2 sm:gap-3">
              <span className="text-ocu-cyan" aria-hidden>
                ↻
              </span>
              <span className="px-3 py-1.5 rounded-full bg-ocu-cyan/10 border border-ocu-cyan/20 text-ocu-cyan">
                Repeat
              </span>
            </li>
          </ol>
          <div className="grid md:grid-cols-5 gap-5 mt-12">
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
            title="Smarter Cloud Operations with Observability & AIOps"
            subtitle="Modern cloud environments generate enormous volumes of operational data. CloudHight helps organisations turn that data into actionable insight through modern observability, intelligent monitoring and automation. AIOps is an advanced capability we can incorporate into managed cloud operations where it is a good fit — not a claim of autonomous or proprietary AI."
          />
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9] max-w-4xl mx-auto mb-10">
            <Image
              src="/photos/aiintegration.png"
              alt="Observability and AI-assisted cloud operations"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <CapabilityPills items={aiopsCapabilities} />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Turn Cloud Spend into Business Value"
            subtitle="Cloud costs can become difficult to control as environments grow. Effective cloud financial management requires visibility, accountability and continuous optimisation. CloudHight helps organisations understand how cloud resources are being consumed and identify opportunities to improve efficiency without compromising performance or resilience."
          />
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[16/9] max-w-4xl mx-auto mb-10">
            <Image
              src="/photos/costoptimization.png"
              alt="Cloud cost visibility and FinOps optimisation"
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
          </div>
          <CapabilityPills items={finopsCapabilities} />
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Build Reliability into Cloud Operations"
            subtitle="Reliable digital services require more than infrastructure monitoring. CloudHight applies Site Reliability Engineering principles to help organisations build resilient platforms and improve operational performance."
          />
          <CapabilityPills items={sreCapabilities} />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Security Embedded into Cloud Operations"
            subtitle="Security should be part of everyday cloud operations rather than a periodic activity. CloudHight integrates security considerations throughout the management of cloud environments, without making unsupported compliance guarantees."
          />
          <CapabilityPills items={securityCapabilities} />
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Managed Expertise Across Leading Cloud Platforms"
            subtitle="CloudHight helps organisations operate and optimise cloud environments across leading cloud platforms, providing the engineering expertise and operational practices needed to keep critical workloads performing effectively."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <article className="bg-white rounded-2xl p-8 border border-ocu-cyan/20 shadow-md ring-1 ring-ocu-cyan/10">
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
                CloudHight is an AWS Advanced Tier Services Partner. We operate,
                monitor and continuously improve AWS estates with a
                security-first operations practice.
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
                We help organisations operate and optimise Azure environments
                — identity, networking, workloads and day-to-day platform
                management — as part of a multi-cloud operating model.
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
                We operate and optimise GCP environments where they best fit
                the workload, applying the same observability, security and
                FinOps practices used across the rest of the estate.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Why Choose CloudHight for Managed Cloud Services?" />
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
          <SectionTitle title="Focus on Your Business. We'll Help Manage the Cloud." />
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
          <SectionTitle
            title="A Managed Service Built Around Your Environment"
            subtitle="Organisations have different operational requirements. CloudHight's managed services can be aligned with your environment, cloud maturity and internal capabilities — without a one-size-fits-all commercial package."
          />
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {engagements.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-ocu-blue mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={discussHref}
              className="inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2"
            >
              Discuss Your Requirements
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Related Services" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {item.href ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-ocu-blue font-semibold hover:text-ocu-cyan transition-colors underline decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
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

      <section className="py-20 px-6 bg-ocu-blue text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your Cloud Operations?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Whether you need additional cloud expertise, proactive operational
            support or a partner to continuously optimise your environment,
            CloudHight can help you build a more secure, reliable and efficient
            cloud operating model.
          </p>
          <CtaButtons light />
        </div>
      </section>
    </div>
  );
}
