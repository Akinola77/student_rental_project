import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Boxes,
  Building2,
  Check,
  ChevronDown,
  Cloud,
  Compass,
  Database,
  Eye,
  GitBranch,
  Handshake,
  Headset,
  Layers,
  Lock,
  Network,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";
import HashScroll from "@/components/HashScroll";
import JsonLd from "@/components/JsonLd";
import { InsightCard } from "@/components/insights/InsightCard";
import AgenticHeroVisual from "@/components/agentic-ai/HeroVisual";
import AgenticIndustries from "@/components/agentic-ai/Industries";
import { AwsAgenticBadge } from "@/components/agentic-ai/AwsBadges";
import {
  getInsightsByTags,
  insights,
  toInsightCard,
} from "@/lib/insights";
import { absoluteUrl } from "@/lib/site";
import { site } from "@/lib/data";

const discoveryHref =
  "/contact?subject=" +
  encodeURIComponent("Book an Agentic AI Discovery Session");
const specialistHref =
  "/contact?subject=" +
  encodeURIComponent("Talk to an AWS Agentic AI Specialist");
const assessmentHref =
  "/contact?subject=" +
  encodeURIComponent("Book Your Agentic AI Assessment");
const aiTeamHref =
  "/contact?subject=" + encodeURIComponent("Talk to Our AI Team");
const useCaseHref =
  "/contact?subject=" + encodeURIComponent("Discuss Your Use Case");
const architectHref =
  "/contact?subject=" + encodeURIComponent("Talk to an AI Architect");
const programmeHref =
  "/contact?subject=" + encodeURIComponent("Discuss Your AI Programme");

const title = "Agentic AI Consulting Services on AWS | CloudHight Consulting";
const description =
  "Build secure, production-ready Agentic AI solutions on AWS with CloudHight Consulting, an AWS AI Services Competency Partner specialising in Agentic AI Consulting Services.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/agentic-ai-consulting-services" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/agentic-ai-consulting-services",
    images: [
      {
        url: "/photos/aws-partner-ai-services-competency-agentic-ai.png",
        alt: "AWS Partner — AI Services Competency — Agentic AI Consulting Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/photos/aws-partner-ai-services-competency-agentic-ai.png"],
  },
  robots: { index: true, follow: true },
  keywords: [
    "Agentic AI consulting",
    "Agentic AI consulting services",
    "AWS Agentic AI",
    "Amazon Bedrock consulting",
    "enterprise AI agents",
  ],
};

const trustItems = [
  { label: "AWS Advanced Tier Services Partner", Icon: BadgeCheck },
  { label: "AWS AI Services Competency", Icon: Cloud },
  { label: "Agentic AI Consulting Services", Icon: Bot },
  { label: "AWS Cloud & AI Expertise", Icon: Layers },
  { label: "Secure Enterprise Delivery", Icon: ShieldCheck },
];

const experimentVsProduction = {
  left: {
    title: "AI Experiment",
    items: [
      "Isolated prototype",
      "Limited data",
      "Manual workflows",
      "Minimal governance",
      "Difficult to scale",
      "Unclear ROI",
    ],
  },
  right: {
    title: "Production Agentic AI",
    items: [
      "Enterprise integration",
      "Governed access",
      "Secure tool use",
      "Observable workflows",
      "Scalable AWS architecture",
      "Measurable outcomes",
    ],
  },
};

const agentLoop = [
  "Understand",
  "Reason",
  "Plan",
  "Use Tools",
  "Act",
  "Learn / Improve",
];

const capabilities: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Agentic AI Strategy & Readiness",
    body: "Identify high-value opportunities, assess organisational readiness and create a practical adoption roadmap.",
    Icon: Compass,
  },
  {
    title: "Agent & Multi-Agent Architecture",
    body: "Design intelligent agent architectures capable of reasoning, collaborating, using tools and orchestrating complex workflows.",
    Icon: Network,
  },
  {
    title: "Amazon Bedrock Solutions",
    body: "Build generative and Agentic AI applications using AWS services and foundation models available through Amazon Bedrock.",
    Icon: Cloud,
  },
  {
    title: "Enterprise AI Integration",
    body: "Connect AI agents securely with enterprise applications, APIs, databases, knowledge systems and business workflows.",
    Icon: GitBranch,
  },
  {
    title: "AI Proof-of-Concepts & MVPs",
    body: "Validate high-value use cases rapidly before committing to larger production implementations.",
    Icon: Rocket,
  },
  {
    title: "AI Workflow Automation",
    body: "Use agents to automate multi-step operational and knowledge workflows while maintaining appropriate human oversight.",
    Icon: Workflow,
  },
  {
    title: "Responsible AI, Security & Governance",
    body: "Implement access controls, guardrails, auditability, governance and security appropriate for enterprise AI environments.",
    Icon: ShieldCheck,
  },
  {
    title: "AgentOps & AI Operations",
    body: "Monitor, evaluate, optimise and continuously improve AI agents and production AI workloads.",
    Icon: Eye,
  },
];

const methodology = [
  {
    stage: "Discover",
    outcome: "Prioritised Agentic AI opportunities and roadmap.",
    activities: [
      "Executive discovery",
      "Business-process analysis",
      "Use-case identification",
      "AI readiness assessment",
      "Data assessment",
      "Risk and governance considerations",
    ],
  },
  {
    stage: "Validate",
    outcome: "Validated use case and implementation decision.",
    activities: [
      "Solution hypothesis",
      "Architecture",
      "Rapid prototype",
      "Proof-of-concept",
      "User validation",
      "Business-value assessment",
    ],
  },
  {
    stage: "Build",
    outcome: "Secure production-ready Agentic AI solution.",
    activities: [
      "Agent development",
      "Amazon Bedrock implementation",
      "Enterprise integrations",
      "Data integration",
      "Security controls",
      "Testing",
      "CI/CD",
    ],
  },
  {
    stage: "Scale",
    outcome: "Scalable enterprise Agentic AI capability.",
    activities: [
      "Platform architecture",
      "Reusable components",
      "Governance",
      "Security",
      "Observability",
      "Multi-agent architectures",
      "Enterprise rollout",
    ],
  },
  {
    stage: "Operate",
    outcome: "Reliable, continuously improving AI operations.",
    activities: [
      "Agent monitoring",
      "Evaluation",
      "Performance optimisation",
      "Cost optimisation",
      "Security monitoring",
      "Continuous improvement",
    ],
  },
];

const assessmentItems = [
  "Business objectives",
  "Candidate processes and workflows",
  "Agentic AI use cases",
  "Data availability",
  "Application and API landscape",
  "AWS/cloud readiness",
  "Security requirements",
  "Governance requirements",
  "Technical feasibility",
  "Expected business value",
];

const assessmentOutputs = [
  "Prioritised use-case portfolio",
  "Readiness assessment",
  "Recommended Agentic AI architecture",
  "Security and governance considerations",
  "Implementation roadmap",
  "Recommended PoC/MVP",
  "Indicative next steps",
];

const useCases: { title: string; body: string; examples: string[]; Icon: LucideIcon }[] = [
  {
    title: "Customer Operations",
    body: "AI agents that understand requests, retrieve customer context, interact with systems and help resolve complex enquiries.",
    examples: [
      "Customer support",
      "Case resolution",
      "Service operations",
      "Contact-centre augmentation",
    ],
    Icon: Headset,
  },
  {
    title: "Employee Knowledge",
    body: "Give employees intelligent access to organisational knowledge, policies, documents and business systems.",
    examples: ["Enterprise knowledge assistants", "HR support", "IT support", "Policy assistance"],
    Icon: Users,
  },
  {
    title: "Business Process Automation",
    body: "Automate multi-step workflows that previously required manual coordination across people and systems.",
    examples: ["Document processing", "Approvals", "Operations", "Back-office workflows"],
    Icon: Workflow,
  },
  {
    title: "Software & IT Operations",
    body: "Augment engineering and operations teams using intelligent agents.",
    examples: [
      "Incident investigation",
      "Operational troubleshooting",
      "Developer assistance",
      "AIOps",
      "Cloud operations",
    ],
    Icon: Wrench,
  },
  {
    title: "Sales & Customer Success",
    body: "Help teams research, prepare, respond and coordinate customer activities.",
    examples: [
      "Account intelligence",
      "Proposal assistance",
      "Customer onboarding",
      "Customer-success workflows",
    ],
    Icon: Handshake,
  },
  {
    title: "Data & Decision Support",
    body: "Use agents to gather information from multiple sources and support better decision-making.",
    examples: ["Research", "Reporting", "Data interrogation", "Operational intelligence"],
    Icon: Database,
  },
];

const architectureLayers = [
  {
    title: "Users & Channels",
    items: ["Web", "Mobile", "Employee applications", "Customer applications", "Contact centre", "APIs"],
  },
  {
    title: "Agent Experience",
    items: ["AI Agent", "Supervisor / Orchestrator", "Multi-Agent Collaboration"],
  },
  {
    title: "Intelligence",
    items: ["Amazon Bedrock", "Foundation Models", "Knowledge / Retrieval", "Reasoning", "Memory / Context"],
  },
  {
    title: "Tools & Enterprise Systems",
    items: ["APIs", "CRM", "ERP", "Databases", "Documents", "Business applications", "AWS services"],
  },
  {
    title: "Security, Governance & Operations",
    items: [
      "Identity",
      "Permissions",
      "Guardrails",
      "Encryption",
      "Logging",
      "Monitoring",
      "Evaluation",
      "Observability",
    ],
  },
];

const principles: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Least-Privilege Access",
    body: "Agents receive only the permissions required for the workflow they are designed to support.",
    Icon: Lock,
  },
  {
    title: "Human-in-the-Loop",
    body: "Human approval is used where actions affect customers, systems, money or sensitive data.",
    Icon: Users,
  },
  {
    title: "Guardrails",
    body: "Policy, safety and content controls are designed into the agent experience from the start.",
    Icon: ShieldCheck,
  },
  {
    title: "Auditability",
    body: "Actions, tool use and decisions can be logged so teams can review what happened and why.",
    Icon: Eye,
  },
  {
    title: "Secure Data Access",
    body: "Enterprise knowledge and data are connected with appropriate identity, encryption and access controls.",
    Icon: Database,
  },
  {
    title: "Continuous Evaluation",
    body: "Quality, reliability, cost and security are monitored after go-live, not only during the prototype.",
    Icon: Scale,
  },
];

const differentiators: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "AWS-validated AI expertise",
    body: "AWS AI Services Competency in Agentic AI Consulting Services.",
    Icon: BadgeCheck,
  },
  {
    title: "AI + cloud engineering",
    body: "Agentic AI requires more than models. We combine AI engineering with AWS cloud architecture and infrastructure expertise.",
    Icon: Cloud,
  },
  {
    title: "DevOps & platform engineering",
    body: "Production AI needs automated deployment, testing, observability and reliable platforms.",
    Icon: GitBranch,
  },
  {
    title: "Security by design",
    body: "Security, identity, permissions and governance are considered throughout the AI lifecycle.",
    Icon: ShieldCheck,
  },
  {
    title: "From idea to operations",
    body: "We support the full journey from discovery and PoC through production implementation and ongoing optimisation.",
    Icon: Rocket,
  },
];

const engagements = [
  {
    title: "Agentic AI Discovery",
    body: "For organisations exploring where AI can create value.",
    cta: "Start a Discovery",
    href: discoveryHref,
    Icon: Search,
  },
  {
    title: "PoC / MVP Sprint",
    body: "For organisations with a defined use case that needs validation.",
    cta: "Discuss Your Use Case",
    href: useCaseHref,
    Icon: Rocket,
  },
  {
    title: "Production Implementation",
    body: "For organisations ready to engineer and deploy Agentic AI.",
    cta: "Talk to an AI Architect",
    href: architectHref,
    Icon: Boxes,
  },
  {
    title: "Enterprise AI Programme",
    body: "For organisations scaling AI across teams and business functions.",
    cta: "Discuss Your AI Programme",
    href: programmeHref,
    Icon: Building2,
  },
];

const relatedServices = [
  {
    title: "AI & Automation",
    href: "/services/ai-automation",
    body: "Generative AI, intelligent automation, AIOps and AI governance on AWS.",
  },
  {
    title: "Cloud Implementation & Migration",
    href: "/services/cloud-implementation",
    body: "Secure, scalable AWS foundations for production AI workloads.",
  },
  {
    title: "DevOps & Platform Engineering",
    href: "/services/devops-platform-engineering",
    body: "CI/CD, platforms and delivery practices for production AI.",
  },
  {
    title: "Managed Cloud Services",
    href: "/services/managed-cloud-services",
    body: "Operate, monitor and improve the AWS environments that run AI.",
  },
];

const faqs = [
  {
    q: "What is Agentic AI?",
    a: "Agentic AI refers to AI systems that can work toward defined goals. They can reason through multi-step tasks, retrieve relevant information, use approved tools, interact with enterprise applications and execute workflows within defined guardrails.",
  },
  {
    q: "How is Agentic AI different from Generative AI?",
    a: "Generative AI primarily produces content in response to a prompt. Agentic AI uses generative models as part of a wider system that can plan, use tools and take permitted actions. Most enterprise designs combine both, with security and human oversight around what the agent is allowed to do.",
  },
  {
    q: "What can an AI agent do?",
    a: "Depending on the design, an agent can retrieve knowledge, call APIs, draft or complete workflow steps, coordinate across systems and ask for human approval where needed. Capability should be limited to the tools, data and actions the organisation has authorised.",
  },
  {
    q: "What is Amazon Bedrock?",
    a: "Amazon Bedrock is an AWS service for building and scaling generative and Agentic AI applications using foundation models and managed AI capabilities. CloudHight uses Bedrock where it is a good fit for the architecture, security model and operating requirements.",
  },
  {
    q: "Can Agentic AI integrate with our existing applications?",
    a: "Yes. Agents can be connected to existing applications, APIs, databases, documents and business workflows where technically and operationally appropriate. Integration is designed around identity, permissions and the systems of record you already use.",
  },
  {
    q: "How do you secure Agentic AI systems?",
    a: "Security is treated as part of the architecture: identity, least-privilege access, encryption, guardrails, logging, monitoring and human approval for sensitive actions. CloudHight designs these controls with your existing AWS and enterprise security practices.",
  },
  {
    q: "Do we need to migrate everything to AWS before using Agentic AI?",
    a: "No. Some organisations start with a focused use case on AWS while other systems remain in place. Others prefer to strengthen AWS foundations first. The right path depends on the use case, data location, integration needs and security requirements.",
  },
  {
    q: "How do we identify the right Agentic AI use case?",
    a: "Start with a business problem that is valuable, repeatable and constrained enough to govern. CloudHight's Agentic AI Discovery & Readiness Assessment is designed to identify candidate processes, assess feasibility and recommend a practical first use case.",
  },
  {
    q: "Can CloudHight build a proof-of-concept before a full implementation?",
    a: "Yes. A PoC or MVP sprint can validate architecture, data access, user experience and business value before a larger production implementation.",
  },
  {
    q: "What happens after an Agentic AI solution goes into production?",
    a: "Production AI still needs monitoring, evaluation, cost control, security review and improvement. CloudHight can support AgentOps and wider AWS operations so the solution remains reliable after go-live.",
  },
];

function SectionEyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.2em] mb-4 ${
        light ? "text-cyan-200" : "text-ocu-cyan"
      }`}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  title: heading,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl mb-12">
      <SectionEyebrow light={light}>{eyebrow}</SectionEyebrow>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-gradient"
        }`}
      >
        {heading}
      </h2>
      {subtitle ? (
        <p className={`leading-relaxed ${light ? "text-white/80" : "text-gray-600"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryCta({
  href = discoveryHref,
  label = "Book an Agentic AI Discovery Session",
  light = false,
}: {
  href?: string;
  label?: string;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        light
          ? "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-ocu-cyan px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#1D54C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          : "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-ocu-cyan px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#1D54C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50"
      }
    >
      {label}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

export default function AgenticAiConsultingPage() {
  const relatedInsights = getInsightsByTags(insights, [
    "Agentic AI",
    "Amazon Bedrock",
    "Generative AI",
    "AWS",
  ]).map(toInsightCard);

  const pageUrl = absoluteUrl("/agentic-ai-consulting-services");
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="bg-white">
      <HashScroll />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Agentic AI Consulting Services",
          serviceType: "Agentic AI consulting on AWS",
          description,
          url: pageUrl,
          provider: {
            "@type": "Organization",
            name: site.name,
            url: absoluteUrl("/"),
          },
          areaServed: ["Ireland", "United Kingdom", "European Union"],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            {
              "@type": "ListItem",
              position: 2,
              name: "AI & Automation",
              item: absoluteUrl("/services/ai-automation"),
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Agentic AI Consulting Services",
              item: pageUrl,
            },
          ],
        }}
      />
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-[#070b1a] pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,111,237,0.32),transparent_52%),radial-gradient(ellipse_at_bottom_left,rgba(10,42,94,0.6),transparent_46%)]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="animate-fade-up">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                AWS AI Services Competency | Agentic AI Consulting Services
              </p>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Build Agentic AI That Works in the Real World
              </h1>
              <p className="mb-4 text-lg leading-relaxed text-white/85">
                Move beyond AI experiments.
              </p>
              <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/75">
                CloudHight helps organisations identify, design, build and operate
                secure, production-ready Agentic AI solutions on AWS — connecting
                intelligent agents with your data, applications, workflows and
                people to deliver measurable business outcomes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <PrimaryCta light />
                <Link
                  href="#capabilities"
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Explore Our Agentic AI Capabilities
                </Link>
              </div>
              <p className="mt-5 text-sm text-white/60">
                From strategy and proof-of-concept to enterprise deployment and
                ongoing optimisation.
              </p>
              <div className="mt-8 max-w-xs rounded-2xl bg-white p-4">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ocu-blue">
                  Validated AWS Expertise
                </p>
                <AwsAgenticBadge size="lg" priority />
              </div>
            </div>
            <AgenticHeroVisual />
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-ocu-bg px-6 py-8">
        <ul className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm"
            >
              <item.Icon className="h-5 w-5 shrink-0 text-ocu-cyan" aria-hidden />
              <span className="text-sm font-semibold text-ocu-blue">{item.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Beyond AI Experimentation"
            title="AI Experiments Are Easy. Production AI Is Hard."
            subtitle="Generative AI has made it easier than ever to build impressive demonstrations. But enterprise AI requires much more. Organisations must connect AI securely to business data, applications and workflows while addressing governance, security, reliability, observability, integration and operational control."
          />
          <p className="mb-10 max-w-3xl text-gray-600 leading-relaxed">
            Agentic AI adds another level of complexity. When AI systems can
            reason, use tools and take actions, organisations need robust
            engineering and governance around what agents can access, what
            actions they can perform and how their behaviour is monitored.
            CloudHight helps bridge the gap between experimentation and
            production.
          </p>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="text-xl font-bold text-gray-500">
                {experimentVsProduction.left.title}
              </h3>
              <ul className="mt-5 space-y-3 text-gray-600">
                {experimentVsProduction.left.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-ocu-cyan/30 bg-ocu-blue p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold">
                {experimentVsProduction.right.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {experimentVsProduction.right.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ocu-bg px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Agentic AI Explained"
            title="From AI That Responds to AI That Acts"
            subtitle="Traditional generative AI primarily responds to prompts. Agentic AI goes further. AI agents can work towards defined goals, reason through multi-step tasks, retrieve relevant information, use approved tools, interact with enterprise applications and execute workflows within defined guardrails."
          />
          <ol className="mb-8 flex flex-wrap items-center justify-center gap-2">
            {agentLoop.map((item, index) => (
              <li key={item} className="flex items-center gap-2">
                <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-ocu-blue shadow-sm">
                  {item}
                </span>
                {index < agentLoop.length - 1 ? (
                  <span className="text-ocu-cyan" aria-hidden>
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="mx-auto max-w-3xl text-center text-gray-600 leading-relaxed">
            The goal is not autonomy for its own sake. The goal is to create
            intelligent systems that help people and organisations achieve
            better outcomes safely, reliably and efficiently.
          </p>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-28 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Capabilities"
            title="Agentic AI, From Strategy to Production"
            subtitle="CloudHight brings together AI engineering, AWS architecture, DevOps, security and cloud operations to help organisations build Agentic AI systems that can operate reliably in real enterprise environments."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan">
                  <item.Icon className="h-6 w-6 text-white" aria-hidden />
                </div>
                <h3 className="mb-2 text-lg font-bold text-ocu-blue">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="aws-competency" className="scroll-mt-28 bg-[#070b1a] px-6 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-white p-8">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-ocu-blue">
              Official AWS credential
            </p>
            <AwsAgenticBadge size="lg" />
          </div>
          <div>
            <SectionEyebrow light>AWS-validated expertise</SectionEyebrow>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              AWS AI Services Competency
              <span className="mt-2 block text-cyan-200">
                Agentic AI Consulting Services
              </span>
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed">
              CloudHight Consulting has achieved the AWS AI Services Competency
              in Agentic AI Consulting Services. The designation recognises AWS
              Partners with demonstrated technical expertise and experience
              supporting customers with Agentic AI initiatives.
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">
              For customers, this provides additional confidence when selecting
              a partner to help design and implement Agentic AI solutions on AWS.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Our Agentic AI capabilities combine AI engineering with
              CloudHight&apos;s wider expertise across AWS cloud architecture,
              DevOps, platform engineering, security, AIOps and managed cloud
              services.
            </p>
            <div className="mt-8">
              <PrimaryCta href={specialistHref} label="Talk to an AWS Agentic AI Specialist" light />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="How We Work"
            title="From Opportunity to Production"
          />
          <p className="mb-10 text-sm font-semibold uppercase tracking-[0.16em] text-ocu-cyan">
            Discover → Validate → Build → Scale → Operate
          </p>
          <ol className="grid gap-5 lg:grid-cols-5">
            {methodology.map((item, index) => (
              <li
                key={item.stage}
                className="rounded-2xl border border-gray-100 bg-ocu-bg p-5"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-ocu-cyan">
                  {String(index + 1).padStart(2, "0")} — {item.stage}
                </p>
                <h3 className="mt-3 text-lg font-bold text-ocu-blue">{item.stage}</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {item.activities.map((activity) => (
                    <li key={activity}>• {activity}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-ocu-blue">
                  Outcome: {item.outcome}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="assessment" className="scroll-mt-28 bg-ocu-bg px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Not sure where to start?"
            title="Start with an Agentic AI Discovery & Readiness Assessment"
            subtitle="You don't need to start with a large AI transformation programme. CloudHight's Agentic AI Discovery & Readiness Assessment helps organisations identify where Agentic AI can create genuine business value and what is required to implement it successfully."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-ocu-blue">What we assess</h3>
              <ul className="mt-5 space-y-3">
                {assessmentItems.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-700">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-ocu-cyan" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl bg-ocu-blue p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold">What you receive</h3>
              <ul className="mt-5 space-y-3">
                {assessmentOutputs.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <PrimaryCta
                  href={assessmentHref}
                  label="Book Your Agentic AI Assessment"
                  light
                />
              </div>
              <p className="mt-4 text-sm text-white/70">
                Talk to our team about your AI objectives — no obligation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="What can Agentic AI do?"
            title="Turn Complex Workflows into Intelligent Experiences"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan">
                  <item.Icon className="h-6 w-6 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ocu-blue">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {item.body}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.examples.map((example) => (
                    <li
                      key={example}
                      className="rounded-full bg-ocu-bg px-3 py-1 text-xs font-semibold text-ocu-blue"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocu-bg px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Built for your industry"
            title="Agentic AI Applied to Real Business Challenges"
          />
          <AgenticIndustries />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Built on AWS"
            title="Enterprise Agentic AI Architecture"
            subtitle="CloudHight designs Agentic AI solutions as part of your wider enterprise architecture — not as isolated AI experiments. Our approach considers security, data, integrations, infrastructure, deployment, observability and operations from the beginning."
          />
          <p className="mb-8 text-sm text-gray-500">
            This is a conceptual architecture. Services are used where they are
            appropriate for the use case — not as a mandatory stack.
          </p>
          <ol className="space-y-4">
            {architectureLayers.map((layer, index) => (
              <li key={layer.title}>
                <article className="rounded-2xl border border-gray-100 bg-ocu-bg p-5 md:p-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-ocu-cyan">
                    Layer {index + 1} — {layer.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ocu-blue shadow-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                {index < architectureLayers.length - 1 ? (
                  <p className="py-2 text-center text-ocu-cyan" aria-hidden>
                    ↓
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ocu-bg px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="AI with appropriate control"
            title="Build Agents You Can Trust"
            subtitle="As AI systems gain the ability to interact with enterprise data and take actions, security and governance must be designed into the architecture. CloudHight helps organisations establish appropriate controls around what agents can access, which tools they can use, what actions they can perform and where human approval is required."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6"
              >
                <item.Icon className="mb-4 h-7 w-7 text-ocu-cyan" aria-hidden />
                <h3 className="text-lg font-bold text-ocu-blue">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-gray-600 leading-relaxed">
            The objective is controlled autonomy — giving agents enough
            capability to create value while maintaining appropriate
            organisational oversight.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Why CloudHight?"
              title="AI Expertise Meets Cloud Engineering"
            />
            <div className="rounded-2xl bg-white p-4 shadow-sm lg:mb-12">
              <AwsAgenticBadge size="sm" />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-ocu-bg p-6"
              >
                <item.Icon className="mb-4 h-7 w-7 text-ocu-cyan" aria-hidden />
                <h3 className="text-lg font-bold text-ocu-blue">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="engagement" className="scroll-mt-28 bg-ocu-bg px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Ways to work with us" title="Start Where You Are" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {engagements.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <item.Icon className="mb-4 h-7 w-7 text-ocu-cyan" aria-hidden />
                <h3 className="text-lg font-bold text-ocu-blue">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {item.body}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-ocu-blue hover:text-ocu-cyan"
                >
                  {item.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedInsights.length > 0 ? (
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <SectionTitle
                eyebrow="Agentic AI Insights"
                title="Explore Our Thinking"
              />
              <Link
                href="/blogs"
                className="mb-12 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-ocu-blue hover:text-ocu-cyan"
              >
                View All Insights
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedInsights.map((article) => (
                <InsightCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-ocu-bg px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-gradient md:text-4xl">
            Agentic AI Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-100 bg-white px-5 py-2"
              >
                <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ocu-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <ChevronDown
                    className="h-5 w-5 shrink-0 text-ocu-cyan transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="pb-4 pr-8 text-sm leading-relaxed text-gray-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold text-ocu-blue">Related CloudHight Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-ocu-cyan/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50"
              >
                <h3 className="font-bold text-ocu-blue">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ocu-blue px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <SectionEyebrow light>
            Your next AI breakthrough may already be inside your business
          </SectionEyebrow>
          <h2 className="text-4xl font-bold md:text-5xl">Let&apos;s Find It.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-white/80 leading-relaxed">
            Whether you&apos;re exploring Agentic AI for the first time,
            validating a specific use case or preparing to take an existing AI
            solution into production, CloudHight can help you determine the
            right next step.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryCta light />
            <Link
              href={aiTeamHref}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10"
            >
              Talk to Our AI Team
            </Link>
          </div>
          <div className="mx-auto mt-10 max-w-[220px] rounded-2xl bg-white p-4">
            <AwsAgenticBadge size="md" />
          </div>
          <p className="mt-6 text-sm font-semibold text-cyan-200">
            AWS Advanced Tier Services Partner
            <span className="mx-2 text-white/40">|</span>
            AWS AI Services Competency — Agentic AI Consulting Services
          </p>
        </div>
      </section>
    </div>
  );
}
