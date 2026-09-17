import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Boxes,
  Check,
  Cloud,
  Container,
  Database,
  Eye,
  EyeOff,
  Gauge,
  GitBranch,
  GitFork,
  Layers,
  LineChart,
  Lock,
  Network,
  PenLine,
  Plug,
  RefreshCw,
  Rocket,
  Search,
  ServerCrash,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench,
  Zap,
} from "lucide-react";
import { PageHero } from "@/components/Heros";

const consultHref =
  "/contact?subject=" +
  encodeURIComponent("Book an Application Consultation");
const expertHref =
  "/contact?subject=" + encodeURIComponent("Talk to an Expert");
const assessmentHref =
  "/contact?subject=" +
  encodeURIComponent("Application Modernisation Assessment");

export const metadata: Metadata = {
  title: {
    absolute:
      "Application Modernisation & Engineering Services | CloudHight Consulting",
  },
  description:
    "Modernise legacy applications and build secure, scalable cloud-native solutions with CloudHight Consulting. Application modernisation, APIs, containers, serverless, DevSecOps and cloud engineering.",
  alternates: { canonical: "/services/application-services" },
  openGraph: {
    title:
      "Application Modernisation & Engineering Services | CloudHight Consulting",
    description:
      "Modernise legacy applications and build secure, scalable cloud-native solutions with CloudHight Consulting. Application modernisation, APIs, containers, serverless, DevSecOps and cloud engineering.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const challenges: { title: string; Icon: LucideIcon }[] = [
  { title: "Legacy application architectures", Icon: ServerCrash },
  { title: "Accumulated technical debt", Icon: Layers },
  { title: "Slow release cycles", Icon: Workflow },
  { title: "High maintenance overhead", Icon: Wrench },
  { title: "Scaling limitations", Icon: Gauge },
  { title: "Application performance issues", Icon: Activity },
  { title: "Security vulnerabilities", Icon: ShieldAlert },
  { title: "Difficult integrations", Icon: GitFork },
  { title: "Monolithic architectures", Icon: Boxes },
  { title: "Ageing technology stacks", Icon: Settings },
  { title: "Limited observability", Icon: EyeOff },
  { title: "Cloud migration complexity", Icon: Cloud },
];

const assessmentCaps: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Application Discovery & Assessment",
    body: "Understand application architecture, dependencies, technology stacks, infrastructure, data and operational requirements.",
    Icon: Search,
  },
  {
    title: "Modernisation Roadmap",
    body: "Prioritise applications and develop a practical transformation roadmap aligned with business objectives.",
    Icon: LineChart,
  },
  {
    title: "Architecture Assessment",
    body: "Identify architectural constraints, technical debt, scalability issues and opportunities for modernisation.",
    Icon: Layers,
  },
  {
    title: "Cloud Readiness",
    body: "Assess whether applications are ready to migrate, require remediation or would benefit from architectural transformation.",
    Icon: Cloud,
  },
];

const strategies = [
  {
    title: "Retain",
    body: "Keep the application as-is when change would not improve business outcomes.",
  },
  {
    title: "Rehost",
    body: "Move the workload with minimal change where speed and continuity matter most.",
  },
  {
    title: "Replatform",
    body: "Make targeted changes so the application can take advantage of managed cloud services.",
  },
  {
    title: "Refactor / Re-architect",
    body: "Redesign parts of the application where architecture is limiting scale, delivery or resilience.",
  },
  {
    title: "Replace",
    body: "Adopt a new application or service where rebuilding would not be the better investment.",
  },
  {
    title: "Retire",
    body: "Decommission applications that no longer serve a clear business purpose.",
  },
];

const moderniseCaps = [
  "Legacy application modernisation",
  "Monolith decomposition where it is justified",
  "Application re-architecture",
  "Cloud-native adoption",
  "Runtime modernisation",
  "Framework modernisation",
  "Application dependency modernisation",
  "Containerisation",
  "Serverless adoption where appropriate",
  "Database and data-layer modernisation",
  "API enablement",
  "Performance optimisation",
];

const buildCaps = [
  "Cloud-native architecture",
  "Application architecture and design",
  "Backend services",
  "APIs",
  "Microservices where appropriate",
  "Event-driven architecture",
  "Serverless applications",
  "Containerised applications",
  "Managed cloud services",
  "Data integration",
  "Authentication and identity integration",
  "Automated application delivery",
];

const microCaps = [
  "Microservices architecture",
  "Domain-oriented service design",
  "Event-driven architecture",
  "Messaging and event processing",
  "Service communication",
  "API-based integration",
  "Independent deployment patterns",
  "Resilience patterns",
  "Service observability",
];

const containerCaps = [
  "Docker and containerisation",
  "Amazon ECS",
  "Amazon EKS",
  "Kubernetes",
  "Container registries",
  "Container security",
  "Automated deployment",
  "Scaling",
  "Observability",
];

const serverlessCaps = [
  "AWS Lambda",
  "Event-driven processing",
  "Serverless APIs",
  "Workflow automation",
  "Managed integrations",
  "Asynchronous processing",
  "Automated scaling",
];

const apiCaps = [
  "API strategy",
  "API design",
  "API development",
  "API management",
  "REST APIs",
  "Event-driven integration",
  "Application integration",
  "Cloud-to-cloud integration",
  "Hybrid integration",
  "Legacy system integration",
  "Third-party integration",
  "Authentication and authorisation",
  "Integration monitoring",
];

const dataCaps = [
  "Database assessment",
  "Database migration",
  "Relational database modernisation",
  "Managed database adoption",
  "NoSQL where appropriate",
  "Caching",
  "Search",
  "Data migration",
  "Data integration",
  "Application data architecture",
  "Backup and resilience",
];

const securityCaps = [
  "Secure software delivery practices",
  "CI/CD security integration",
  "Static analysis where appropriate",
  "Dependency scanning",
  "Secrets management",
  "Identity and access controls",
  "API security",
  "Container security",
  "Infrastructure security",
  "Security automation",
  "Logging and auditability",
  "Cloud security controls",
];

const deliveryCaps = [
  "CI/CD",
  "Automated testing",
  "Automated deployment",
  "Infrastructure as Code",
  "Environment provisioning",
  "Release automation",
  "Deployment strategies",
  "Configuration management",
  "Pipeline security",
  "Rollback approaches",
  "Delivery observability",
];

const observeCaps = [
  "Application monitoring",
  "Infrastructure monitoring",
  "Centralised logging",
  "Metrics",
  "Distributed tracing",
  "Dashboards",
  "Alerting",
  "Application performance monitoring",
  "Dependency visibility",
  "Performance optimisation",
  "Reliability engineering",
  "Incident investigation support",
];

const manageCaps = [
  "Application operational support",
  "Performance optimisation",
  "Reliability improvement",
  "Platform upgrades",
  "Cloud optimisation",
  "Security improvements",
  "Application monitoring",
  "Automation",
  "Architectural improvement",
  "Technical debt reduction",
  "Continuous modernisation",
];

const steps: { number: string; title: string; body: string; Icon: LucideIcon }[] =
  [
    {
      number: "01",
      title: "Assess",
      body: "Understand applications, architecture, dependencies, business requirements, technical debt and modernisation opportunities.",
      Icon: Search,
    },
    {
      number: "02",
      title: "Define",
      body: "Determine the appropriate modernisation strategy and prioritise workloads according to business value and technical considerations.",
      Icon: PenLine,
    },
    {
      number: "03",
      title: "Architect",
      body: "Design the target application, cloud, data, integration, security and operational architecture.",
      Icon: Layers,
    },
    {
      number: "04",
      title: "Modernise & Build",
      body: "Re-platform, refactor, containerise, integrate or build applications according to the agreed strategy.",
      Icon: Sparkles,
    },
    {
      number: "05",
      title: "Deploy & Enable",
      body: "Automate deployment, implement observability and support engineering teams with documentation and knowledge transfer.",
      Icon: Rocket,
    },
    {
      number: "06",
      title: "Optimise",
      body: "Continuously improve application performance, reliability, security, cost efficiency and architecture.",
      Icon: LineChart,
    },
  ];

const outcomes: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Accelerate Innovation",
    body: "Modern application architectures enable organisations to introduce new capabilities and digital services more rapidly.",
    Icon: Rocket,
  },
  {
    title: "Improve Scalability",
    body: "Design applications and platforms capable of adapting to changing business demand.",
    Icon: Gauge,
  },
  {
    title: "Increase Engineering Agility",
    body: "Reduce application complexity and automate delivery processes to help engineering teams move faster.",
    Icon: Workflow,
  },
  {
    title: "Strengthen Security",
    body: "Integrate security throughout application architecture and software delivery.",
    Icon: ShieldCheck,
  },
  {
    title: "Improve Reliability",
    body: "Use modern architectures, observability and operational practices to create more resilient applications.",
    Icon: Activity,
  },
  {
    title: "Reduce Technical Debt",
    body: "Modernise ageing applications and technology incrementally to create a more sustainable technology estate.",
    Icon: RefreshCw,
  },
];

const whyPoints = [
  "AWS Advanced Tier Services Partner",
  "Cloud architecture expertise",
  "Application modernisation capability",
  "Cloud-native engineering",
  "DevOps & Platform Engineering",
  "DevSecOps",
  "Infrastructure as Code",
  "Containers and Kubernetes",
  "Serverless architecture",
  "Cloud security",
  "Observability and SRE",
  "Managed cloud operations",
  "Multi-cloud capability across AWS, Azure and Google Cloud",
  "Business All-Star recognition — Global Cloud Consulting Company of the Year 2026",
  "Support across the lifecycle from cloud strategy and implementation through application modernisation and ongoing operations",
];

const relatedServices = [
  {
    title: "Cloud Implementation & Migration",
    body: "Build the secure and scalable cloud foundation required for modern applications.",
    href: "/services/cloud-implementation",
  },
  {
    title: "DevOps & Platform Engineering",
    body: "Automate application delivery and create modern engineering platforms using CI/CD, Infrastructure as Code and DevSecOps.",
    href: "/services/devops-platform-engineering",
  },
  {
    title: "Managed Cloud Services",
    body: "Operate, monitor, secure and continuously optimise applications and their cloud environments.",
    href: "/services/managed-cloud-services",
  },
  {
    title: "AI & Automation",
    body: "Integrate Generative AI and intelligent capabilities into modern applications and digital products.",
    href: "/services/ai-automation",
  },
  {
    title: "Cloud & AI Skills Enablement",
    body: "Enable engineering teams to adopt cloud-native development, delivery and AI practices.",
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
        Book an Application Consultation
        <ArrowRight className="w-4 h-4" aria-hidden />
      </Link>
      <Link href={expertHref} className={secondary}>
        Talk to an Expert
      </Link>
    </div>
  );
}

function FlowPills({ items }: { items: string[] }) {
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
    </ol>
  );
}

function Pills({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
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

function ArchitectureJourney() {
  const layers = [
    { label: "Legacy Applications", note: "Existing systems and workloads" },
    { label: "Modernisation", note: "Strategy selected per application" },
    {
      label: "Cloud-Native Architecture",
      note: "Designed for today's cloud environments",
    },
  ];

  return (
    <figure className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
      <figcaption className="sr-only">
        Application modernisation journey from legacy applications through
        modernisation and cloud-native architecture to secure, scalable digital
        services.
      </figcaption>
      <p className="text-center text-xs font-bold uppercase tracking-widest text-cyan-200 mb-6">
        Application modernisation journey
      </p>
      <div className="max-w-2xl mx-auto space-y-3">
        {layers.map((layer) => (
          <div key={layer.label}>
            <div className="rounded-2xl bg-white text-center px-5 py-4">
              <p className="font-bold text-ocu-blue">{layer.label}</p>
              <p className="text-sm text-gray-500 mt-1">{layer.note}</p>
            </div>
            <p className="text-center text-cyan-200 font-bold py-1" aria-hidden>
              ↓
            </p>
          </div>
        ))}
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Containers", "Serverless", "APIs", "Microservices"].map((item) => (
            <li
              key={item}
              className="rounded-xl bg-ocu-cyan/15 border border-cyan-200/20 text-white text-center text-sm font-semibold py-3 px-2"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-center text-cyan-200 font-bold py-1" aria-hidden>
          ↓
        </p>
        <div className="rounded-2xl bg-ocu-cyan text-white text-center px-5 py-4">
          <p className="font-bold">Secure, Scalable Digital Services</p>
          <p className="text-sm text-white/80 mt-1">
            Architecture selected according to the workload — not a single
            prescribed stack
          </p>
        </div>
      </div>
    </figure>
  );
}

export default function ApplicationServicesPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Application Modernisation & Engineering"
        subtitle="Modernise legacy applications and build secure, scalable digital solutions designed for the cloud. CloudHight helps organisations transform applications through modern architectures, cloud-native engineering, APIs, containers, serverless technologies and DevSecOps."
        image="/photos/architecturedesign.png"
        imageAlt="Application architecture and modernisation workshop"
        primary={{
          href: consultHref,
          label: "Book an Application Consultation",
        }}
        secondary={{ href: expertHref, label: "Talk to an Expert" }}
      />

      <section className="py-16 px-6 bg-gradient-to-b from-ocu-blue to-[#123a7a] text-white">
        <div className="max-w-5xl mx-auto">
          <ArchitectureJourney />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ocu-blue mb-6">
              Modern Applications for a Changing Business
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Applications sit at the heart of many organisations, but legacy
              architectures, ageing technology and tightly coupled systems can
              make it difficult to innovate, scale and respond quickly to
              changing customer expectations.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Application modernisation is not simply about rewriting software.
              The right strategy depends on the application, business
              objectives, technical constraints, security requirements and
              economics of change.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CloudHight helps organisations understand their application
              landscape and determine the right modernisation approach for each
              workload.
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
            title="Modernise with the Right Strategy"
            subtitle="Not every application needs to be rebuilt. CloudHight helps organisations assess application portfolios and determine the most appropriate transformation approach based on business value, technical complexity, risk and future requirements."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {assessmentCaps.map(({ title, body, Icon }) => (
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
          <div className="rounded-3xl border border-ocu-blue/10 bg-white p-6 md:p-10">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-ocu-cyan mb-3">
              Strategic options
            </p>
            <h3 className="text-center text-xl font-bold text-ocu-blue mb-2">
              Choose the approach that fits each application
            </h3>
            <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto mb-8">
              These are options, not a sequence every application must follow.
              CloudHight selects an approach based on business requirements,
              technical constraints, security, cost and operational needs.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {strategies.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-ocu-bg p-5"
                >
                  <h4 className="font-bold text-ocu-blue mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Modernise Existing Applications. Build What Comes Next."
            subtitle="CloudHight helps organisations transform current systems and engineer new cloud-native services — selecting architectures according to the workload rather than a predetermined technology stack."
          />
          <div className="grid lg:grid-cols-2 gap-8">
            <article className="rounded-3xl border border-gray-100 bg-ocu-bg p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-white" aria-hidden />
                </div>
                <h3 className="text-2xl font-bold text-ocu-blue">
                  Transform Legacy Applications for the Cloud
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Legacy applications can restrict innovation when architectures
                and technology stacks are no longer aligned with modern business
                requirements.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                CloudHight helps organisations modernise applications
                incrementally or comprehensively depending on business
                priorities, technical constraints and risk. Microservices are
                used where they fit — not as a default for every monolith.
              </p>
              <Pills items={moderniseCaps} />
            </article>
            <article className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" aria-hidden />
                </div>
                <h3 className="text-2xl font-bold text-ocu-blue">
                  Build Applications Designed for the Cloud
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cloud-native applications can take advantage of elastic
                infrastructure, managed services, automation and modern software
                delivery practices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                CloudHight designs and engineers applications around business
                requirements, with emphasis on architecture, engineering
                quality, cloud integration, automation, security and operational
                readiness — not commodity software production.
              </p>
              <Pills items={buildCaps} />
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Architectures Selected for the Workload"
            subtitle="For appropriate workloads, loosely coupled services, containers and serverless compute can reduce coupling, scale individual capabilities and accelerate delivery. CloudHight helps organisations determine when these patterns are appropriate and implement them using modern cloud services."
          />
          <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center shrink-0">
                <Network className="w-6 h-6 text-white" aria-hidden />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-ocu-blue mb-2">
                  Build Loosely Coupled, Scalable Architectures
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Microservices and event-driven architectures can help
                  organisations scale capabilities independently and evolve
                  services more rapidly — when the application, team model and
                  operational maturity support them. Where AWS examples help
                  explain the solution, CloudHight may use services such as
                  Amazon API Gateway, AWS Lambda, Amazon EventBridge, Amazon SQS
                  and Amazon SNS.
                </p>
              </div>
            </div>
            <Pills items={microCaps} />
          </article>
          <h3 className="text-2xl font-bold text-ocu-blue text-center mb-8">
            Modern Compute for Modern Applications
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <Container className="w-8 h-8 text-ocu-cyan" aria-hidden />
                <h4 className="text-xl font-bold text-ocu-blue">Containers</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                CloudHight helps organisations containerise applications and
                implement scalable container platforms when portability,
                consistency and orchestration are the better fit.
              </p>
              <Pills items={containerCaps} />
            </article>
            <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-ocu-cyan" aria-hidden />
                <h4 className="text-xl font-bold text-ocu-blue">Serverless</h4>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                CloudHight helps organisations use serverless architectures
                where they provide appropriate business and technical benefits,
                including event-driven processing and automated scaling.
              </p>
              <Pills items={serverlessCaps} />
            </article>
          </div>
          <p className="mt-8 text-center text-sm text-gray-600 max-w-3xl mx-auto">
            Containers and serverless are complementary compute models, not
            competing choices. Architecture should be selected according to
            workload requirements, operational constraints and cost — not every
            application needs Kubernetes, and not every workload belongs on
            Lambda.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Connect Applications, Data and Business Systems"
            subtitle="Modern digital services rarely operate in isolation. Applications need to communicate securely with internal systems, cloud services, partners, customers and data platforms. CloudHight helps organisations design and implement integration architectures that enable applications and services to exchange data reliably and securely."
          />
          <div
            className="rounded-3xl border border-ocu-blue/10 bg-ocu-bg p-6 md:p-10 mb-10"
            role="img"
            aria-label="Applications connect through APIs and an integration layer to data, SaaS, enterprise systems and cloud services."
          >
            <p className="text-center text-xs font-bold uppercase tracking-widest text-ocu-cyan mb-5">
              Integration architecture
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-sm font-semibold text-ocu-blue">
              {[
                "Applications",
                "APIs",
                "Integration Layer",
                "Data / SaaS / Enterprise Systems / Cloud Services",
              ].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-2 sm:gap-3">
                  <span className="px-4 py-2 rounded-2xl bg-white border border-gray-100 shadow-sm text-center">
                    {item}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-ocu-cyan" aria-hidden>
                      ↔
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <article>
              <div className="flex items-center gap-3 mb-4">
                <Plug className="w-7 h-7 text-ocu-cyan" aria-hidden />
                <h3 className="text-xl font-bold text-ocu-blue">
                  API & Integration Services
                </h3>
              </div>
              <Pills items={apiCaps} />
            </article>
            <article>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-7 h-7 text-ocu-cyan" aria-hidden />
                <h3 className="text-xl font-bold text-ocu-blue">
                  Modernise the Data Behind Your Applications
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Application modernisation often requires changes to the
                underlying data architecture. CloudHight helps organisations
                evaluate and modernise application data layers to support
                scalability, performance, resilience and new application
                architectures. Not every application needs to move to NoSQL or a
                particular database model.
              </p>
              <Pills items={dataCaps} />
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Secure Delivery from Code to Production"
            subtitle="Application security should be integrated throughout the software delivery lifecycle rather than treated as a final checkpoint before deployment. CloudHight combines application engineering with DevSecOps practices to help organisations identify security issues earlier and create more consistent delivery processes — without unsupported security or compliance guarantees."
          />
          <div className="rounded-3xl border border-ocu-blue/10 bg-white p-6 md:p-10 mb-10">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-ocu-cyan mb-5">
              Security across the application lifecycle
            </p>
            <FlowPills
              items={[
                "Plan",
                "Code",
                "Build",
                "Test",
                "Secure",
                "Deploy",
                "Operate",
                "Monitor",
              ]}
            />
            <div
              className="mt-6 h-2 rounded-full bg-gradient-to-r from-ocu-blue via-ocu-cyan to-ocu-blue"
              aria-hidden
            />
            <p className="mt-3 text-center text-sm text-gray-600">
              Security is designed into engineering and delivery — not left as a
              late-stage gate.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-3">
                <Lock className="w-7 h-7 text-ocu-cyan" aria-hidden />
                <h3 className="text-xl font-bold text-ocu-blue">
                  Security Built into Application Engineering
                </h3>
              </div>
              <Pills items={securityCaps} />
            </article>
            <article className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-3">
                <GitBranch className="w-7 h-7 text-ocu-cyan" aria-hidden />
                <h3 className="text-xl font-bold text-ocu-blue">
                  Move from Code to Production with Confidence
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                CloudHight integrates DevOps principles, automation and
                Infrastructure as Code into application delivery so engineering
                teams can release changes more consistently. This is the
                application-engineering view of delivery — deeper platform
                capability lives on our{" "}
                <Link
                  href="/services/devops-platform-engineering"
                  className="font-semibold text-ocu-blue underline decoration-2 underline-offset-4 hover:text-ocu-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
                >
                  DevOps & Platform Engineering
                </Link>{" "}
                page.
              </p>
              <Pills items={deliveryCaps} />
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Know How Your Applications Are Performing — Then Keep Improving Them"
            subtitle="Modern application engineering does not end when software reaches production. Applications need visibility across performance, availability, dependencies and user-facing services, and a path to maintain, monitor, optimise and evolve them as requirements change."
          />
          <div className="grid lg:grid-cols-2 gap-8">
            <article className="rounded-3xl border border-gray-100 bg-ocu-bg p-8">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="w-7 h-7 text-ocu-cyan" aria-hidden />
                <h3 className="text-xl font-bold text-ocu-blue">
                  Observability, Performance & Reliability
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                CloudHight helps organisations implement observability and
                reliability practices across modern application environments.
                Ongoing operational support can continue through{" "}
                <Link
                  href="/services/managed-cloud-services"
                  className="font-semibold text-ocu-blue underline decoration-2 underline-offset-4 hover:text-ocu-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
                >
                  Managed Cloud Services
                </Link>
                .
              </p>
              <Pills items={observeCaps} />
            </article>
            <article className="rounded-3xl border border-gray-100 bg-white shadow-sm p-8">
              <div className="flex items-center gap-3 mb-3">
                <Settings className="w-7 h-7 text-ocu-cyan" aria-hidden />
                <h3 className="text-xl font-bold text-ocu-blue">
                  Support Applications Beyond Go-Live
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Application modernisation should create a foundation for
                continuous improvement rather than end at deployment. CloudHight
                can help maintain, monitor, optimise and evolve cloud
                applications as business and technical requirements change.
              </p>
              <Pills items={manageCaps} />
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="From Application Assessment to Continuous Improvement" />
          <FlowPills
            items={[
              "Assess",
              "Define",
              "Architect",
              "Modernise & Build",
              "Deploy & Enable",
              "Optimise",
            ]}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 mt-12">
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

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Application Modernisation Built Around Business Outcomes" />
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
          <SectionTitle title="Why CloudHight for Application Modernisation?" />
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
            Not Sure How to Modernise Your Applications?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan mx-auto rounded-full mb-6" />
          <p className="text-gray-600 leading-relaxed mb-4">
            Start by understanding your existing application estate.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            CloudHight can help assess application architecture, dependencies,
            cloud readiness, technical debt, security and operational
            requirements to identify practical modernisation opportunities and
            develop a transformation roadmap.
          </p>
          <Link
            href={assessmentHref}
            className="inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2"
          >
            Request an Application Assessment
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
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
            Ready to Modernise Your Applications?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Whether you&apos;re modernising legacy applications, building new
            cloud-native services or improving the way applications are
            delivered and operated, CloudHight can help you move from assessment
            and architecture through implementation and continuous improvement.
          </p>
          <CtaButtons light />
        </div>
      </section>
    </div>
  );
}
