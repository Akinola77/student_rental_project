import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  Check,
  Cloud,
  Container,
  Eye,
  Gauge,
  GitBranch,
  Layers,
  LineChart,
  Lock,
  Package,
  PenLine,
  Rocket,
  Search,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/Heros";

const consultHref =
  "/contact?subject=" + encodeURIComponent("Book a DevOps Consultation");
const expertHref =
  "/contact?subject=" + encodeURIComponent("Talk to an Expert");
const assessmentHref =
  "/contact?subject=" + encodeURIComponent("DevOps Assessment");
const projectHref =
  "/contact?subject=" + encodeURIComponent("Discuss Your DevOps Project");
const augmentHref =
  "/contact?subject=" + encodeURIComponent("Extend Your Engineering Team");

export const metadata: Metadata = {
  title: {
    absolute: "DevOps & Platform Engineering Services | CloudHight Consulting",
  },
  description:
    "DevOps and Platform Engineering services from CloudHight Consulting covering CI/CD, Infrastructure as Code, DevSecOps, Kubernetes, SRE, automation and specialist engineering augmentation.",
  alternates: { canonical: "/services/devops-platform-engineering" },
  openGraph: {
    title: "DevOps & Platform Engineering Services | CloudHight Consulting",
    description:
      "Design and implement CI/CD, Infrastructure as Code, DevSecOps and Platform Engineering — with specialist engineering expertise when additional capability is needed.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const challenges: { title: string; Icon: LucideIcon }[] = [
  { title: "Slow and manual software releases", Icon: Workflow },
  { title: "Inconsistent development and production environments", Icon: Layers },
  { title: "Deployment failures", Icon: ShieldAlert },
  { title: "Infrastructure configuration drift", Icon: Settings },
  { title: "Limited automation", Icon: Wrench },
  { title: "Security introduced too late", Icon: Lock },
  { title: "Fragmented DevOps tooling", Icon: GitBranch },
  { title: "Limited observability", Icon: Eye },
  { title: "Developer friction", Icon: Users },
  { title: "Shortage of experienced DevOps and platform engineers", Icon: Users },
  { title: "Scaling challenges", Icon: Gauge },
  { title: "Cloud complexity", Icon: Cloud },
];

const transformation: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "DevOps Assessment & Strategy",
    body: "Assess current delivery processes, technology, team structures and DevOps maturity to develop a practical transformation roadmap.",
    Icon: Search,
  },
  {
    title: "DevOps Operating Model",
    body: "Help establish processes, responsibilities and engineering practices that support collaboration between development, operations and security teams.",
    Icon: Users,
  },
  {
    title: "Toolchain Design & Integration",
    body: "Design and integrate appropriate DevOps tooling across source control, CI/CD, infrastructure, testing, security and observability.",
    Icon: GitBranch,
  },
  {
    title: "Automation Strategy",
    body: "Identify repetitive operational and delivery processes that can be automated to improve consistency and engineering efficiency.",
    Icon: Workflow,
  },
];

const cicdCapabilities = [
  "Source control integration",
  "Continuous Integration",
  "Automated builds",
  "Automated testing",
  "Security scanning",
  "Artifact management",
  "Continuous Delivery",
  "Continuous Deployment",
  "Approval workflows",
  "Environment promotion",
  "Deployment strategies",
  "Rollback mechanisms",
  "Pipeline monitoring",
];

const iacCapabilities = [
  "Infrastructure as Code",
  "Environment provisioning",
  "Configuration management",
  "Reusable infrastructure modules",
  "Automated deployments",
  "Policy and governance automation",
  "Configuration consistency",
  "Git-based infrastructure workflows",
  "Automated cloud operations",
];

const devsecopsCapabilities = [
  "Security scanning within CI/CD",
  "Dependency scanning",
  "Infrastructure security checks",
  "Secrets management",
  "Identity and access management",
  "Policy as Code",
  "Container security",
  "Cloud security controls",
  "Auditability",
  "Security automation",
];

const platformCapabilities = [
  "Internal Developer Platforms",
  "Self-service infrastructure",
  "Golden paths / paved roads",
  "Reusable deployment templates",
  "Standardised CI/CD",
  "Infrastructure automation",
  "Container platforms",
  "Kubernetes",
  "Developer enablement",
  "Developer experience",
  "Observability integration",
  "Security guardrails",
  "Platform governance",
];

const containerCapabilities = [
  "Container strategy",
  "Containerisation",
  "Kubernetes architecture",
  "Amazon ECS",
  "Amazon EKS",
  "Container registries",
  "CI/CD for containers",
  "Container security",
  "Monitoring and observability",
  "Scaling and resilience",
  "Container platform automation",
];

const sreCapabilities = [
  "Application monitoring",
  "Infrastructure monitoring",
  "Logging",
  "Metrics",
  "Distributed tracing",
  "Dashboards",
  "Intelligent alerting",
  "Service health",
  "Incident management",
  "Reliability engineering",
  "Performance optimisation",
  "Operational automation",
];

const roles = [
  "DevOps Engineers",
  "Cloud Engineers",
  "Platform Engineers",
  "DevSecOps Engineers",
  "Site Reliability Engineers",
  "Infrastructure Automation Engineers",
  "CI/CD specialists",
  "Kubernetes and container expertise",
];

const augmentUses = [
  "DevOps transformation projects",
  "Platform implementation",
  "Cloud migration",
  "CI/CD implementation",
  "Infrastructure automation",
  "Application modernisation",
  "Kubernetes and container adoption",
  "Operational improvement",
  "Capability and skills gaps",
  "Delivery acceleration",
];

const engagements = [
  {
    title: "DevOps Transformation & Implementation",
    body: "For organisations that need CloudHight to assess, design and implement a modern DevOps capability.",
    areas: [
      "Assessment",
      "Strategy",
      "Operating model",
      "Toolchain",
      "CI/CD",
      "Infrastructure as Code",
      "DevSecOps",
      "Platform Engineering",
      "Automation",
    ],
    cta: "Discuss Your DevOps Project",
    href: projectHref,
  },
  {
    title: "Engineering Augmentation",
    body: "For organisations with existing technology teams that need additional specialist DevOps, cloud or platform engineering capability.",
    areas: [
      "Specialist engineers",
      "Project augmentation",
      "Capability gaps",
      "Delivery acceleration",
      "Platform expertise",
      "Cloud engineering expertise",
    ],
    cta: "Extend Your Engineering Team",
    href: augmentHref,
  },
  {
    title: "Managed DevOps",
    body: "For organisations that need ongoing engineering support and continuous improvement after implementation.",
    areas: [
      "Pipeline management",
      "Automation",
      "Platform operations",
      "Observability",
      "Reliability",
      "Optimisation",
      "Continuous improvement",
    ],
    cta: "Explore Managed DevOps",
    href: "/services/managed-cloud-services",
  },
];

const steps: { number: string; title: string; body: string; Icon: LucideIcon }[] =
  [
    {
      number: "01",
      title: "Assess",
      body: "Understand the existing software delivery lifecycle, technology stack, bottlenecks, security requirements and engineering maturity.",
      Icon: Search,
    },
    {
      number: "02",
      title: "Design",
      body: "Define the target DevOps architecture, toolchain, operating model, automation strategy and transformation roadmap.",
      Icon: PenLine,
    },
    {
      number: "03",
      title: "Implement",
      body: "Build CI/CD pipelines, infrastructure automation, security controls and platform capabilities.",
      Icon: GitBranch,
    },
    {
      number: "04",
      title: "Enable",
      body: "Support engineering teams with documentation, knowledge transfer, standardised workflows and practical adoption.",
      Icon: Users,
    },
    {
      number: "05",
      title: "Optimise",
      body: "Continuously improve delivery performance, reliability, security, automation and developer experience.",
      Icon: LineChart,
    },
  ];

const techGroups = [
  {
    title: "Cloud",
    items: ["Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud"],
  },
  {
    title: "CI/CD & Source Control",
    items: ["Jenkins", "Source control integration", "Automated pipelines"],
  },
  {
    title: "Infrastructure as Code",
    items: ["Terraform", "AWS CloudFormation", "AWS CDK"],
  },
  {
    title: "Containers",
    items: ["Docker", "Kubernetes", "Amazon ECS", "Amazon EKS"],
  },
  {
    title: "Observability",
    items: ["Amazon CloudWatch", "Grafana", "Logging, metrics and alerting"],
  },
  {
    title: "Security",
    items: ["IAM", "Secrets management", "Policy as Code", "Security scanning"],
  },
];

const outcomes: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Accelerate Software Delivery",
    body: "Automate build, testing and deployment processes to reduce friction between code and production.",
    Icon: Rocket,
  },
  {
    title: "Improve Deployment Reliability",
    body: "Introduce repeatable automated processes that reduce manual configuration and deployment inconsistencies.",
    Icon: Check,
  },
  {
    title: "Strengthen Security",
    body: "Integrate security controls and testing throughout the software delivery lifecycle.",
    Icon: ShieldCheck,
  },
  {
    title: "Increase Engineering Productivity",
    body: "Reduce repetitive operational work and enable engineers to focus on higher-value development.",
    Icon: Sparkles,
  },
  {
    title: "Improve Scalability",
    body: "Create delivery platforms and infrastructure capable of supporting growing applications, workloads and engineering teams.",
    Icon: Gauge,
  },
  {
    title: "Increase Operational Visibility",
    body: "Use observability and monitoring to improve understanding of application and infrastructure health.",
    Icon: Eye,
  },
];

const whyPoints = [
  "AWS Advanced Tier Services Partner",
  "Cloud architecture and engineering expertise",
  "DevOps transformation expertise",
  "Platform Engineering capability",
  "DevSecOps capability",
  "Site Reliability Engineering capability",
  "Infrastructure as Code and automation",
  "Cloud security expertise",
  "Multi-cloud capability across AWS, Azure and Google Cloud",
  "Business All-Star recognition — Global Cloud Consulting Company of the Year 2026",
  "Experience spanning cloud implementation through ongoing operations",
];

const relatedServices = [
  {
    title: "Cloud Implementation & Migration",
    body: "Build the secure, scalable cloud foundations that support modern application and DevOps environments.",
    href: "/services/cloud-implementation",
  },
  {
    title: "Managed Cloud Services",
    body: "Operate, monitor, secure and continuously optimise your cloud environment.",
    href: "/services/managed-cloud-services",
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
        Book a DevOps Consultation
        <ArrowRight className="w-4 h-4" aria-hidden />
      </Link>
      <Link href={expertHref} className={secondary}>
        Talk to an Expert
      </Link>
    </div>
  );
}

function FlowPills({
  items,
  loopLabel,
}: {
  items: string[];
  loopLabel?: string;
}) {
  return (
    <ol className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base font-semibold text-ocu-blue">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-2 sm:gap-3">
          <span className="px-3 py-1.5 rounded-full bg-ocu-blue/5 border border-ocu-blue/10">
            {item}
          </span>
          {i < items.length - 1 && (
            <span className="text-ocu-cyan" aria-hidden>
              →
            </span>
          )}
        </li>
      ))}
      {loopLabel && (
        <li className="flex items-center gap-2 sm:gap-3">
          <span className="text-ocu-cyan" aria-hidden>
            ↻
          </span>
          <span className="px-3 py-1.5 rounded-full bg-ocu-cyan/10 border border-ocu-cyan/20 text-ocu-cyan">
            {loopLabel}
          </span>
        </li>
      )}
    </ol>
  );
}

function Pills({ items }: { items: string[] }) {
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

export default function DevOpsPlatformEngineeringPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="DevOps & Platform Engineering"
        subtitle="Build, automate and scale modern software delivery platforms. CloudHight helps organisations implement DevOps, CI/CD, Infrastructure as Code, DevSecOps and Platform Engineering — with specialist engineering expertise available when additional capability is needed."
        image="/photos/devopsandautomation.png"
        imageAlt="DevOps automation and software delivery lifecycle"
        primary={{ href: consultHref, label: "Book a DevOps Consultation" }}
        secondary={{ href: expertHref, label: "Talk to an Expert" }}
      />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ocu-blue mb-6">
              Deliver Software Faster Without Sacrificing Control
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Modern organisations need to release applications and digital
              services faster while maintaining security, reliability and
              governance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              But many engineering teams still rely on manual deployments,
              fragmented tooling, inconsistent environments and operational
              processes that slow delivery and increase risk.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CloudHight helps organisations modernise the way software is
              built, tested, deployed and operated by combining DevOps
              practices, cloud-native technologies, automation and Platform
              Engineering.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Transform Your Software Delivery Lifecycle"
            subtitle="DevOps transformation is not simply about introducing new tools. Successful DevOps requires alignment across people, processes, technology, security and operating models. CloudHight helps organisations assess their existing software delivery capability, identify bottlenecks and implement practical improvements that increase delivery speed, reliability and engineering productivity."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformation.map(({ title, body, Icon }) => (
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
            title="Automate Software Delivery with CI/CD"
            subtitle="Modern CI/CD pipelines enable engineering teams to move code from development to production quickly, consistently and safely. CloudHight designs and implements automated delivery pipelines tailored to application, infrastructure, security and governance requirements."
          />
          <div className="rounded-3xl border border-ocu-blue/10 bg-ocu-bg p-6 md:p-10 mb-8">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-ocu-cyan mb-5">
              Delivery pipeline
            </p>
            <FlowPills
              items={[
                "Developer",
                "Source Control",
                "Build",
                "Test",
                "Security",
                "Deploy",
                "Monitor",
              ]}
              loopLabel="Improve"
            />
            <p className="mt-6 text-center text-sm text-gray-600">
              Security is designed into the pipeline — not left as a final gate
              before production.
            </p>
            <div
              className="mt-4 h-2 rounded-full bg-gradient-to-r from-ocu-blue via-ocu-cyan to-ocu-blue"
              aria-hidden
            />
            <p className="mt-2 text-center text-xs font-semibold text-ocu-blue uppercase tracking-widest">
              Security across the lifecycle
            </p>
          </div>
          <Pills items={cicdCapabilities} />
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ocu-blue mb-4">
              Infrastructure Built Through Code
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Infrastructure as Code helps organisations create repeatable,
              consistent and auditable cloud environments while reducing manual
              configuration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CloudHight helps teams adopt Infrastructure as Code and cloud
              automation practices that improve deployment speed, governance
              and operational consistency.
            </p>
          </div>
          <div>
            <Pills items={iacCapabilities} />
            <p className="text-xs text-gray-500 mt-6 text-center lg:text-left">
              Typical IaC approaches include Terraform and AWS-native options
              such as CloudFormation and CDK. Technology names indicate
              capability, not additional vendor partnerships.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Build Security into the Delivery Lifecycle"
            subtitle="Security is most effective when integrated throughout the software delivery lifecycle rather than introduced immediately before production. CloudHight helps organisations adopt DevSecOps practices that embed security controls, automated testing and governance into development and deployment workflows — without unsupported compliance guarantees."
          />
          <FlowPills
            items={[
              "Plan",
              "Code",
              "Build",
              "Test",
              "Deploy",
              "Operate",
              "Monitor",
            ]}
          />
          <div className="mt-8 rounded-2xl bg-ocu-blue text-white text-center py-4 px-6 mb-10">
            <p className="text-sm font-semibold tracking-wide">
              DevSecOps as an integrated layer — not a separate late-stage
              activity
            </p>
          </div>
          <Pills items={devsecopsCapabilities} />
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Build Platforms That Enable Developers to Move Faster"
            subtitle="As technology environments grow, developers can spend increasing amounts of time managing infrastructure, deployment processes and cloud complexity instead of building products. Platform Engineering creates standardised, reusable and self-service capabilities that reduce this complexity and improve developer experience. CloudHight helps organisations design and implement internal platforms — not a proprietary CloudHight product."
          />
          <div className="max-w-3xl mx-auto mb-10 space-y-3">
            {[
              { label: "Developers", note: "Product and application teams" },
              {
                label: "Internal Developer Platform",
                note: "Self-service golden paths and guardrails",
              },
              {
                label: "CI/CD  ·  IaC  ·  Security  ·  Observability  ·  Containers",
                note: "Standardised engineering capabilities",
              },
              {
                label: "AWS  ·  Azure  ·  Google Cloud",
                note: "Cloud foundations",
              },
            ].map((layer, i) => (
              <div key={layer.label}>
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm px-6 py-5 text-center">
                  <p className="font-bold text-ocu-blue">{layer.label}</p>
                  <p className="text-sm text-gray-500 mt-1">{layer.note}</p>
                </div>
                {i < 3 && (
                  <p className="text-center text-ocu-cyan font-bold py-1" aria-hidden>
                    ↓
                  </p>
                )}
              </div>
            ))}
          </div>
          <Pills items={platformCapabilities} />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ocu-blue mb-4">
              Modernise Application Delivery with Containers
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Container technologies can provide greater consistency,
              portability and scalability across modern application
              environments.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CloudHight helps organisations design, implement and operate
              containerised workloads and Kubernetes platforms aligned with
              application, security and operational requirements. AWS services
              such as Amazon ECS and Amazon EKS can receive appropriate
              prominence as CloudHight is an AWS Advanced Tier Services Partner.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: Container, label: "Containers" },
              { Icon: Boxes, label: "Kubernetes" },
              { Icon: Package, label: "Amazon ECS / EKS" },
              { Icon: ShieldCheck, label: "Container security" },
            ].map(({ Icon, label }) => (
              <article
                key={label}
                className="rounded-2xl border border-gray-100 bg-ocu-bg p-6 text-center"
              >
                <Icon className="w-8 h-8 text-ocu-cyan mx-auto mb-3" aria-hidden />
                <p className="text-sm font-semibold text-ocu-blue">{label}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10">
          <Pills items={containerCapabilities} />
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Build Reliability into Every Release"
            subtitle="Accelerating software delivery creates business value only when applications remain reliable, performant and observable in production. CloudHight combines DevOps with modern observability and Site Reliability Engineering practices to help organisations understand application health, detect issues faster and continuously improve operational reliability."
          />
          <div className="flex flex-wrap justify-center items-center gap-3 mb-10 text-sm sm:text-base font-bold">
            {["DevOps", "Observability", "SRE"].map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="px-5 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm text-ocu-blue">
                  {item}
                </span>
                {i < 2 && <span className="text-ocu-cyan">+</span>}
              </span>
            ))}
            <span className="text-ocu-cyan">=</span>
            <span className="px-5 py-3 rounded-2xl bg-ocu-blue text-white">
              Faster, more reliable delivery
            </span>
          </div>
          <Pills items={sreCapabilities} />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Extend Your Team with Experienced DevOps Engineers"
            subtitle="Sometimes the challenge is not strategy or technology — it is having enough experienced engineering capability to execute. CloudHight can work alongside internal technology teams to provide additional DevOps, cloud and Platform Engineering expertise when specialist capability is needed. This is Engineering Augmentation, not generic staffing."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <article className="rounded-2xl border border-gray-100 p-8 bg-ocu-bg">
              <h3 className="text-lg font-bold text-ocu-blue mb-4">
                Engineering capabilities
              </h3>
              <ul className="space-y-2">
                {roles.map((role) => (
                  <li key={role} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-ocu-cyan mt-0.5 shrink-0" aria-hidden />
                    {role}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-gray-100 p-8 bg-white shadow-sm">
              <h3 className="text-lg font-bold text-ocu-blue mb-4">
                Where augmentation helps
              </h3>
              <ul className="space-y-2">
                {augmentUses.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-ocu-cyan mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Choose the Right DevOps Engagement Model" />
          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col"
              >
                <h3 className="text-xl font-bold text-ocu-blue mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {item.body}
                </p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {item.areas.map((area) => (
                    <li
                      key={area}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ocu-cyan shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-5 py-3 rounded-lg text-sm font-bold transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2"
                >
                  {item.cta}
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="From DevOps Assessment to Continuous Improvement" />
          <FlowPills
            items={["Assess", "Design", "Implement", "Enable", "Optimise"]}
          />
          <div className="grid md:grid-cols-5 gap-5 mt-12">
            {steps.map(({ number, title, body, Icon }) => (
              <article
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
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
            title="Modern DevOps Across Your Technology Stack"
            subtitle="Technology names indicate capability and typical tooling — not additional official vendor partnerships. AWS is shown with partner prominence because CloudHight is an AWS Advanced Tier Services Partner."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techGroups.map((group) => (
              <article
                key={group.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-lg font-bold text-ocu-blue mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="DevOps Built Around Business Outcomes" />
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

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Why CloudHight for DevOps & Platform Engineering?" />
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
                className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-gray-100"
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

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Not Sure Where to Start?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan mx-auto rounded-full mb-6" />
          <p className="text-gray-600 leading-relaxed mb-8">
            Start by understanding where your current DevOps capability stands.
            CloudHight can help assess your software delivery processes,
            automation, cloud infrastructure, security, tooling, developer
            experience and operational practices to identify gaps and develop a
            practical improvement roadmap.
          </p>
          <Link
            href={assessmentHref}
            className="inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2"
          >
            Request a DevOps Assessment
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Related Services" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            Ready to Accelerate Your DevOps Journey?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Whether you&apos;re modernising your software delivery process,
            building a new developer platform or adding specialist engineering
            capability to your team, CloudHight can help you move from strategy
            to implementation and continuous improvement.
          </p>
          <CtaButtons light />
        </div>
      </section>
    </div>
  );
}
