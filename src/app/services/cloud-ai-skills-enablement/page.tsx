import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Boxes,
  Brain,
  Check,
  ChevronDown,
  Cloud,
  Cpu,
  Eye,
  GitBranch,
  GraduationCap,
  Layers,
  LineChart,
  Lock,
  PenLine,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";
import { PageHero } from "@/components/Heros";

const discussHref =
  "/contact?subject=" +
  encodeURIComponent("Discuss Your Training Requirements");
const expertHref =
  "/contact?subject=" + encodeURIComponent("Talk to an Expert");
const aiHref =
  "/contact?subject=" + encodeURIComponent("Discuss AI Enablement");
const requirementsHref =
  "/contact?subject=" + encodeURIComponent("Discuss Your Requirements");

export const metadata: Metadata = {
  title: {
    absolute: "Cloud & AI Skills Enablement | CloudHight Consulting",
  },
  description:
    "Build practical cloud, DevOps, security and AI capability across your teams with tailored enterprise training, hands-on workshops and technology enablement from CloudHight.",
  alternates: { canonical: "/services/cloud-ai-skills-enablement" },
  openGraph: {
    title: "Cloud & AI Skills Enablement | CloudHight Consulting",
    description:
      "Build practical cloud, DevOps, security and AI capability across your teams with tailored enterprise training, hands-on workshops and technology enablement from CloudHight.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const challenges: { title: string; Icon: LucideIcon }[] = [
  { title: "Slow cloud adoption", Icon: Cloud },
  { title: "Skills gaps across engineering teams", Icon: Users },
  { title: "Over-reliance on external specialists", Icon: Wrench },
  { title: "Inconsistent DevOps and engineering practices", Icon: GitBranch },
  { title: "Security and governance gaps", Icon: Lock },
  { title: "Difficulty operationalising AI initiatives", Icon: Brain },
  { title: "Poor adoption of newly implemented platforms", Icon: Layers },
  { title: "Limited knowledge transfer after delivery", Icon: GraduationCap },
  { title: "Higher operational risk and technical debt", Icon: Eye },
];

const pillars: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Role-Based Enablement",
    body: "Develop learning pathways around the responsibilities of cloud engineers, developers, platform teams, security professionals, architects, operations teams and technical leaders.",
    Icon: Users,
  },
  {
    title: "Hands-On Learning",
    body: "Combine technical instruction with labs, workshops, scenarios, architecture exercises and practical engineering challenges.",
    Icon: Wrench,
  },
  {
    title: "Business-Aligned Programmes",
    body: "Align enablement with the organisation's cloud strategy, transformation roadmap, technology stack and business priorities.",
    Icon: LineChart,
  },
  {
    title: "Knowledge Transfer",
    body: "Help internal teams understand, operate and continuously improve the platforms and solutions CloudHight helps design and implement.",
    Icon: Sparkles,
  },
];

const capabilityAreas: {
  title: string;
  body: string;
  items: string[];
  Icon: LucideIcon;
}[] = [
  {
    title: "Cloud & AWS",
    body: "Build the architectural and operational fluency teams need to adopt and run modern cloud environments.",
    items: [
      "Cloud fundamentals",
      "AWS architecture",
      "AWS services",
      "Cloud migration",
      "Cloud-native architecture",
      "Infrastructure as Code",
      "Cloud operations",
      "Resilience and high availability",
      "Well-Architected principles",
      "Multi-account environments",
      "Cloud governance",
    ],
    Icon: Cloud,
  },
  {
    title: "DevOps & Platform Engineering",
    body: "Develop the practices and platforms that help engineering teams deliver software more consistently.",
    items: [
      "DevOps principles and operating models",
      "CI/CD",
      "Infrastructure as Code",
      "Containers",
      "Kubernetes",
      "Platform Engineering",
      "Developer platforms",
      "GitOps",
      "Automation",
      "Observability",
      "Engineering productivity",
    ],
    Icon: GitBranch,
  },
  {
    title: "Cloud Security & DevSecOps",
    body: "Embed security into architecture, delivery and operations rather than treating it as a late-stage checkpoint.",
    items: [
      "Cloud security fundamentals",
      "Identity and access management",
      "Secure cloud architecture",
      "DevSecOps",
      "Security automation",
      "Secrets management",
      "Cloud governance",
      "Security monitoring",
      "Secure software delivery",
      "Compliance-aware engineering",
    ],
    Icon: ShieldCheck,
  },
  {
    title: "SRE, Observability & AIOps",
    body: "Help operations and reliability teams see, respond to and improve production environments.",
    items: [
      "Site Reliability Engineering",
      "Reliability engineering",
      "SLOs and SLIs",
      "Incident management",
      "Monitoring and observability",
      "Operational automation",
      "AIOps",
      "Intelligent incident response",
      "Cloud operations optimisation",
    ],
    Icon: Eye,
  },
  {
    title: "Generative & Agentic AI",
    body: "Prepare teams to identify valuable use cases and move AI solutions from experiment to production.",
    items: [
      "Generative AI foundations",
      "Enterprise AI use cases",
      "Amazon Bedrock",
      "Foundation models",
      "Retrieval-Augmented Generation",
      "AI application architecture",
      "AI agents",
      "Agentic AI",
      "Responsible AI",
      "AI security and governance",
      "Production AI engineering",
    ],
    Icon: Brain,
  },
  {
    title: "FinOps & Cloud Economics",
    body: "Give engineering and leadership teams a shared language for cloud cost, accountability and optimisation.",
    items: [
      "Cloud financial management",
      "Cost visibility",
      "Cost allocation",
      "Rightsizing",
      "Resource optimisation",
      "FinOps operating models",
      "Engineering accountability",
      "Cloud economics",
    ],
    Icon: Wallet,
  },
  {
    title: "Cloud-Native Application Engineering",
    body: "Enable development teams to design, build and deliver applications suited to cloud environments.",
    items: [
      "Modern application architecture",
      "Microservices",
      "APIs",
      "Containers",
      "Serverless",
      "Application modernisation",
      "Modern software delivery",
      "Cloud-native development practices",
    ],
    Icon: Boxes,
  },
];

const formats: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Executive & Leadership Briefings",
    body: "Focused sessions helping technology and business leaders understand cloud, AI and modern engineering capabilities, opportunities, risks and operating implications.",
    Icon: Users,
  },
  {
    title: "Technical Workshops",
    body: "Hands-on sessions covering specific technologies, architectures or engineering practices.",
    Icon: Wrench,
  },
  {
    title: "Team Upskilling Programmes",
    body: "Structured programmes designed to build capability across engineering, cloud, DevOps, security or AI teams.",
    Icon: GraduationCap,
  },
  {
    title: "Role-Based Learning Pathways",
    body: "Tailored development pathways for architects, engineers, developers, platform teams, operations teams and technical leaders.",
    Icon: Layers,
  },
  {
    title: "Transformation Enablement",
    body: "Skills programmes aligned with cloud migrations, platform engineering, DevOps transformations, application modernisation or AI adoption.",
    Icon: Rocket,
  },
  {
    title: "Embedded Knowledge Transfer",
    body: "Enablement delivered alongside CloudHight consulting and engineering so customer teams can operate and improve the solutions being implemented.",
    Icon: Sparkles,
  },
];

const consultingSteps = [
  "Assess",
  "Design",
  "Implement",
  "Enable",
  "Transfer Knowledge",
  "Operate & Improve",
];

const roles: { title: string; body: string }[] = [
  {
    title: "Cloud & Solution Architects",
    body: "Architecture, cloud design, governance, resilience, security and modernisation.",
  },
  {
    title: "Cloud / DevOps Engineers",
    body: "AWS, automation, Infrastructure as Code, CI/CD, containers, observability and cloud operations.",
  },
  {
    title: "Platform Engineers",
    body: "Internal developer platforms, Kubernetes, GitOps, automation, platform architecture and developer experience.",
  },
  {
    title: "Software Engineers",
    body: "Cloud-native application development, APIs, serverless, containers, DevSecOps and modern software delivery.",
  },
  {
    title: "Security Teams",
    body: "Cloud security, identity, DevSecOps, governance, threat detection and secure architecture.",
  },
  {
    title: "SRE & Operations Teams",
    body: "Reliability engineering, observability, incident management, automation, SLOs and AIOps.",
  },
  {
    title: "Data & AI Teams",
    body: "Generative AI, Amazon Bedrock, AI application architecture, RAG, agents, governance and production AI.",
  },
  {
    title: "Technology Leaders",
    body: "Cloud strategy, AI strategy, operating models, governance, FinOps, organisational capability and technology transformation.",
  },
];

const aiAreas = [
  "Generative AI fundamentals",
  "AI opportunity identification",
  "Amazon Bedrock",
  "Foundation model selection",
  "Prompt engineering",
  "Retrieval-Augmented Generation",
  "AI application architecture",
  "Agentic AI",
  "AI agents and tool use",
  "AI security",
  "Responsible AI",
  "AI governance",
  "Evaluation and observability",
  "Production AI engineering",
  "AI-enabled DevOps and operations",
];

const handsOn = [
  "Guided labs",
  "Architecture exercises",
  "Engineering workshops",
  "Cloud environments",
  "Deployment exercises",
  "Infrastructure as Code",
  "CI/CD implementation",
  "Security scenarios",
  "Troubleshooting exercises",
  "AI prototypes",
  "Architecture reviews",
  "Team challenges",
  "Real-world case studies",
];

const customSteps: {
  number: string;
  title: string;
  body: string;
  Icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Discover",
    body: "Understand your business objectives, technology environment, transformation roadmap and capability challenges.",
    Icon: Search,
  },
  {
    number: "02",
    title: "Assess",
    body: "Identify skills gaps, target roles and priority capability areas.",
    Icon: Eye,
  },
  {
    number: "03",
    title: "Design",
    body: "Develop a tailored enablement programme combining the appropriate learning, workshops, labs and knowledge-transfer activities.",
    Icon: PenLine,
  },
  {
    number: "04",
    title: "Deliver",
    body: "Deliver instructor-led, workshop-based and hands-on enablement for relevant teams.",
    Icon: Rocket,
  },
  {
    number: "05",
    title: "Embed",
    body: "Support knowledge transfer and practical adoption so teams can apply new capabilities in day-to-day environments.",
    Icon: Sparkles,
  },
];

const adoptionUses = [
  "Preparing teams before an AWS migration",
  "Upskilling engineers during cloud modernisation",
  "Enabling teams to manage newly deployed AWS environments",
  "Establishing DevOps practices",
  "Building platform engineering capability",
  "Introducing Infrastructure as Code",
  "Strengthening cloud security practices",
  "Developing SRE capability",
  "Improving FinOps awareness",
  "Preparing engineering teams for AI adoption",
];

const audiences = [
  "Enterprise technology organisations",
  "Mid-market organisations",
  "Cloud and infrastructure teams",
  "Engineering organisations",
  "Digital transformation teams",
  "Security teams",
  "Data and AI teams",
  "Public sector technology teams",
  "Technology leadership teams",
];

const industries = [
  "Financial Services",
  "Healthcare",
  "Retail & eCommerce",
  "Public Sector",
  "Education",
  "Technology / SaaS",
];

const differentiators: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Practitioner-Led",
    body: "Enablement informed by real cloud, DevOps, security, application and AI delivery experience.",
    Icon: Wrench,
  },
  {
    title: "Consulting-Led",
    body: "Training can be connected directly to architecture, implementation and transformation programmes.",
    Icon: Layers,
  },
  {
    title: "Hands-On",
    body: "Focus on practical capability and engineering application rather than theory alone.",
    Icon: Cpu,
  },
  {
    title: "Tailored to Your Environment",
    body: "Programmes can reflect your technology stack, operating model, team structure and transformation objectives.",
    Icon: PenLine,
  },
  {
    title: "Role-Based",
    body: "Enablement can be aligned to the responsibilities and skills required by different technical and leadership roles.",
    Icon: Users,
  },
  {
    title: "Built for Sustainable Capability",
    body: "The objective is to help organisations reduce knowledge gaps and develop stronger internal technology capability.",
    Icon: Sparkles,
  },
];

const whyPoints = [
  "AWS Advanced Tier Services Partner",
  "AWS AI Services Competency",
  "Cloud architecture and engineering expertise",
  "DevOps, Platform Engineering and DevSecOps capability",
  "Application modernisation and cloud-native engineering",
  "Managed cloud operations and SRE",
  "Multi-cloud capability across AWS, Azure and Google Cloud",
  "Business All-Star recognition — Global Cloud Consulting Company of the Year 2026",
  "Ability to combine advisory, implementation and enablement in one engagement",
];

const engagements: { title: string; body: string }[] = [
  {
    title: "Team Workshop",
    body: "Focused enablement around a particular technology, challenge or use case.",
  },
  {
    title: "Custom Training Programme",
    body: "A structured programme designed around defined team capability requirements.",
  },
  {
    title: "Transformation Enablement",
    body: "Training and knowledge transfer integrated into a broader CloudHight consulting or engineering programme.",
  },
  {
    title: "Enterprise Skills Initiative",
    body: "A broader multi-team capability-building programme spanning multiple technologies, roles or business units.",
  },
  {
    title: "Executive AI / Cloud Briefing",
    body: "Focused strategic enablement for senior technology and business stakeholders.",
  },
];

const useCases: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Migrating to AWS",
    body: "Prepare engineering and operations teams to adopt, manage and optimise the target cloud environment.",
    Icon: Cloud,
  },
  {
    title: "Building a DevOps Capability",
    body: "Develop practical skills around CI/CD, automation, Infrastructure as Code, observability and modern delivery practices.",
    Icon: GitBranch,
  },
  {
    title: "Establishing Platform Engineering",
    body: "Help teams understand platform operating models, Kubernetes, developer platforms, GitOps and engineering automation.",
    Icon: Layers,
  },
  {
    title: "Adopting Generative AI",
    body: "Build practical understanding of enterprise AI, Amazon Bedrock, RAG, agents, security and production architecture.",
    Icon: Brain,
  },
  {
    title: "Strengthening Cloud Security",
    body: "Develop capability around secure architecture, IAM, DevSecOps, governance and security automation.",
    Icon: ShieldCheck,
  },
  {
    title: "Reducing Cloud Costs",
    body: "Improve FinOps understanding and establish greater engineering accountability for cloud consumption.",
    Icon: Wallet,
  },
  {
    title: "Modernising Applications",
    body: "Enable development teams around cloud-native architectures, containers, serverless, APIs and modern software delivery.",
    Icon: Boxes,
  },
  {
    title: "Building SRE Capability",
    body: "Develop reliability engineering, observability, incident management and operational automation practices.",
    Icon: Eye,
  },
];

const relatedServices = [
  {
    title: "Cloud Implementation & Migration",
    body: "Modernise and migrate workloads while building the internal capability to operate your cloud environment.",
    href: "/services/cloud-implementation",
  },
  {
    title: "DevOps & Platform Engineering",
    body: "Transform software delivery and build modern engineering platforms, practices and team capability.",
    href: "/services/devops-platform-engineering",
  },
  {
    title: "Application Modernisation & Engineering",
    body: "Modernise applications and enable engineering teams to adopt cloud-native development practices.",
    href: "/services/application-services",
  },
  {
    title: "AI & Automation",
    body: "Turn AI opportunities into production solutions while building the internal capability to adopt, govern and operate them.",
    href: "/services/ai-automation",
  },
  {
    title: "Managed Cloud Services",
    body: "Combine operational support with knowledge transfer and continuous capability improvement.",
    href: "/services/managed-cloud-services",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What is Cloud & AI Skills Enablement?",
    a: "Cloud & AI Skills Enablement is CloudHight's enterprise capability-building service designed to help organisations develop practical skills across cloud, DevOps, security, platform engineering, operations and AI. Programmes can be tailored around your technology environment, roles and transformation priorities.",
  },
  {
    q: "Is this the same as public cloud training?",
    a: "No. The primary focus is bespoke enterprise enablement for organisations and technology teams. Programmes are designed around business objectives, team roles, technology environments and transformation initiatives rather than a fixed public course catalogue.",
  },
  {
    q: "Can training be customised for our organisation?",
    a: "Yes. CloudHight can tailor the content, format, technical depth, practical exercises and learning pathway around your organisation's requirements.",
  },
  {
    q: "Can CloudHight train teams while implementing a project?",
    a: "Yes. Skills enablement and knowledge transfer can be integrated into CloudHight consulting and engineering engagements, helping internal teams develop the capability to operate and improve the solutions being delivered.",
  },
  {
    q: "Do you provide hands-on technical workshops?",
    a: "Yes. Depending on the engagement, programmes can include guided labs, engineering workshops, architecture exercises, deployment scenarios, troubleshooting activities and other practical learning experiences.",
  },
  {
    q: "Do you provide AI training for enterprise teams?",
    a: "Yes. CloudHight can provide enterprise AI enablement covering areas such as Generative AI, Amazon Bedrock, RAG, AI agents, Agentic AI, AI application architecture, governance, security and production AI engineering.",
  },
  {
    q: "Can programmes support different roles and experience levels?",
    a: "Yes. Programmes can be designed around different roles, responsibilities and levels of technical maturity, from leadership briefings through to deep technical engineering workshops.",
  },
  {
    q: "Can you support teams outside Ireland?",
    a: "CloudHight can support enterprise teams through delivery models appropriate to the engagement, including remote and, where agreed, instructor-led sessions. Specific locations and formats are confirmed as part of scoping.",
  },
  {
    q: "How do we get started?",
    a: "Start by discussing your technology environment, transformation objectives and capability requirements with CloudHight. We can then help identify priority skills gaps and recommend an appropriate enablement approach.",
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

function CtaButtons({
  light = false,
  primaryHref = discussHref,
  primaryLabel = "Discuss Your Training Requirements",
}: {
  light?: boolean;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  const primary = light
    ? "inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocu-blue"
    : "inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 focus-visible:ring-offset-2";
  const secondary = light
    ? "inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 hover:bg-white/10 px-6 py-3.5 rounded-lg text-sm font-bold transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocu-blue"
    : "inline-flex items-center justify-center gap-2 bg-white text-ocu-blue border border-ocu-blue/15 hover:bg-ocu-bg px-6 py-3.5 rounded-lg text-sm font-bold transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 focus-visible:ring-offset-2";

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href={primaryHref} className={primary}>
        {primaryLabel}
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

function Pills({ items, onDark = false }: { items: string[]; onDark?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item) => (
        <li
          key={item}
          className={
            onDark
              ? "px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-white font-medium"
              : "px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm text-sm text-ocu-blue font-medium"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function EnablementJourney() {
  return (
    <figure className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-10">
      <figcaption className="sr-only">
        Skills enablement journey from people and teams through cloud, DevOps,
        security and AI into hands-on enablement, practical capability and
        technology adoption.
      </figcaption>
      <p className="text-center text-xs font-bold uppercase tracking-widest text-cyan-200 mb-6">
        From people to sustainable adoption
      </p>
      <div className="max-w-3xl mx-auto space-y-3">
        <div className="rounded-2xl bg-white text-center px-5 py-4">
          <p className="font-bold text-ocu-blue">People / Teams</p>
          <p className="text-sm text-gray-500 mt-1">
            Engineering, operations, security, architecture and leadership
          </p>
        </div>
        <p className="text-center text-cyan-200 font-bold" aria-hidden>
          ↓
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Cloud", "DevOps", "Security", "AI"].map((item) => (
            <li
              key={item}
              className="rounded-xl bg-ocu-cyan/15 border border-cyan-200/20 text-white text-center text-sm font-semibold py-3 px-2"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-center text-cyan-200 font-bold" aria-hidden>
          ↓
        </p>
        <div className="rounded-2xl bg-white text-center px-5 py-4">
          <p className="font-bold text-ocu-blue">Hands-On Enablement</p>
          <p className="text-sm text-gray-500 mt-1">
            Workshops, labs and knowledge transfer — not a public course catalogue
          </p>
        </div>
        <p className="text-center text-cyan-200 font-bold" aria-hidden>
          ↓
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white text-center px-5 py-4">
            <p className="font-bold text-ocu-blue">Practical Capability</p>
          </div>
          <div className="rounded-2xl bg-ocu-cyan text-white text-center px-5 py-4">
            <p className="font-bold">Technology Adoption</p>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default function CloudAiSkillsEnablementPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Build the Cloud & AI Skills Your Teams Need"
        subtitle="Technology transformation succeeds when people have the skills and confidence to use it effectively. CloudHight delivers tailored enterprise training and hands-on enablement across cloud, DevOps, security and AI — helping technology teams build practical capabilities aligned with real business environments."
        image="/photos/skills-enablement.png"
        imageAlt="Enterprise technology team collaborating on cloud, DevOps, security and AI capability"
        primary={{
          href: discussHref,
          label: "Discuss Your Training Requirements",
        }}
        secondary={{ href: expertHref, label: "Talk to an Expert" }}
      />

      <section className="py-16 px-6 bg-gradient-to-b from-ocu-blue to-[#123a7a] text-white">
        <div className="max-w-5xl mx-auto">
          <EnablementJourney />
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ocu-blue mb-6">
              Technology Transformation Requires Skills Transformation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Organisations are investing rapidly in cloud, automation,
              cybersecurity and AI, but technology alone does not create
              transformation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Teams need the skills, practical experience and operating
              confidence to adopt new platforms, modernise existing environments
              and manage increasingly complex technology estates.
            </p>
            <p className="text-gray-600 leading-relaxed">
              CloudHight helps organisations close these capability gaps through
              tailored, practical and consulting-led technology enablement —
              aligned with technology strategy, architecture, platforms,
              engineering practices and transformation objectives.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            title="From Technology Skills to Organisational Capability"
            subtitle="Effective technology enablement goes beyond completing courses or earning certifications. CloudHight focuses on helping teams develop capabilities they can apply directly within their working environments. The objective is not simply to transfer knowledge — it is to create sustainable internal capability."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(({ title, body, Icon }) => (
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
            title="Build Capability Across the Modern Technology Stack"
            subtitle="CloudHight can design enterprise enablement programmes across the technologies, engineering practices and operating models required for modern cloud environments. These are examples of capability areas — not a fixed public course catalogue. Programmes can be tailored to your technology environment, team roles, maturity level and transformation priorities."
          />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {capabilityAreas.map(({ title, body, items, Icon }) => (
              <article
                key={title}
                className="bg-ocu-bg rounded-2xl p-6 border border-gray-100 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-ocu-blue">{title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {body}
                </p>
                <Pills items={items} />
              </article>
            ))}
          </div>
          <div className="mt-12">
            <CtaButtons />
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Flexible Enablement for Different Teams and Transformation Goals"
            subtitle="Organisations have different skills requirements. CloudHight can structure engagements around leadership briefings, technical workshops, team programmes or knowledge transfer embedded in delivery."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map(({ title, body, Icon }) => (
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
            title="Technology Implementation and Skills Enablement — Together"
            subtitle="Many transformation programmes fail to create lasting value when knowledge remains concentrated with external delivery teams. CloudHight can integrate skills enablement directly into consulting and engineering engagements, helping customer teams understand the architecture, tooling, operating practices and decisions behind the solutions being delivered."
          />
          <div className="rounded-3xl border border-ocu-blue/10 bg-ocu-bg p-6 md:p-10 mb-10">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-ocu-cyan mb-5">
              Consult + implement + enable
            </p>
            <FlowPills items={consultingSteps} />
            <p className="mt-8 text-center text-lg font-bold text-ocu-blue">
              Sustainable transformation
            </p>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            Whether CloudHight is helping migrate workloads to AWS, establish a
            DevOps platform, modernise applications, strengthen cloud security
            or deploy AI solutions, enablement can be built into the engagement
            from the beginning. This reduces dependency, accelerates adoption
            and helps create sustainable internal capability.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Enable the Right Skills for the Right Roles"
            subtitle="These are examples of audiences CloudHight can support — not rigid training packages. Pathways are shaped around responsibilities, maturity and the work teams actually need to do."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {roles.map((role) => (
              <article
                key={role.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="text-base font-bold text-ocu-blue mb-2">
                  {role.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {role.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-ocu-blue to-[#123a7a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prepare Your Teams for Enterprise AI
            </h2>
            <div className="w-24 h-1 bg-ocu-cyan mx-auto rounded-full" />
            <p className="text-white/80 mt-6 max-w-3xl mx-auto leading-relaxed">
              Generative and agentic AI are creating new opportunities across
              software engineering, operations, customer experience, knowledge
              management and business processes. Organisations need more than
              access to AI tools — teams need to identify valuable use cases,
              design secure architectures, work with foundation models and move
              solutions responsibly into production.
            </p>
          </div>
          <div className="flex justify-center mb-10">
            <Image
              src="/photos/aws-ai-services-competency.png"
              alt="AWS Partner — AI Services Competency"
              width={220}
              height={120}
              className="h-24 w-auto object-contain bg-white rounded-xl p-3"
            />
          </div>
          <div className="flex justify-center mb-10">
            <Pills items={aiAreas} onDark />
          </div>
          <div className="text-center">
            <Link
              href={aiHref}
              className="inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocu-blue"
            >
              Discuss AI Enablement
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ocu-blue mb-4">
              Learn by Building, Not Just Watching
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Technical capability develops fastest when teams can apply
              concepts in realistic environments. CloudHight programmes can
              combine expert instruction with hands-on activities designed
              around practical engineering scenarios.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Not every engagement includes every activity. Format is selected
              according to the team, the environment and the outcome required.
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-6">
              {["Practical", "Role-relevant", "Scenario-based", "Technology-focused"].map(
                (item) => (
                  <li
                    key={item}
                    className="rounded-xl bg-ocu-bg border border-gray-100 px-4 py-3 text-sm font-semibold text-ocu-blue text-center"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
            <Pills items={handsOn} />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ocu-blue mb-4">
              Built Around Your Environment — Not a Generic Curriculum
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-8">
              Every organisation has a different technology estate, maturity
              level and transformation roadmap. CloudHight can tailor programmes
              around the technologies your teams actually use and the
              capabilities they need to develop.
            </p>
            <ol className="space-y-4">
              {customSteps.map(({ number, title, body, Icon }) => (
                <li
                  key={title}
                  className="flex gap-4 bg-ocu-bg rounded-2xl p-4 border border-gray-100"
                >
                  <div className="shrink-0">
                    <p className="text-ocu-cyan font-extrabold text-xs tracking-widest">
                      {number}
                    </p>
                    <div className="w-9 h-9 rounded-full bg-ocu-cyan text-white flex items-center justify-center mt-1">
                      <Icon className="w-4 h-4" aria-hidden />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-ocu-blue">{title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mt-1">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <CtaButtons />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Build Skills Alongside Your Cloud Transformation"
            subtitle="When technology transformation and skills transformation happen together, organisations are better positioned to adopt new platforms, reduce operational dependency and sustain improvements over time."
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {adoptionUses.map((item) => (
              <li
                key={item}
                className="bg-white rounded-2xl p-4 border border-gray-100 text-sm font-medium text-ocu-blue leading-snug"
              >
                {item}
              </li>
            ))}
          </ul>
          <SectionTitle title="Where Skills Enablement Creates Business Value" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map(({ title, body, Icon }) => (
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
          <SectionTitle title="Enterprise Enablement Across Teams and Industries" />
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-ocu-blue mb-4">
                Who we support
              </h3>
              <ul className="flex flex-wrap gap-3">
                {audiences.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 rounded-full bg-ocu-bg border border-gray-100 text-sm text-ocu-blue font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-ocu-blue mb-4">
                Industries
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {industries.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-gray-100 bg-ocu-bg px-4 py-3 text-sm font-semibold text-ocu-blue"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                Industry categories reflect CloudHight&apos;s broader market
                positioning. This page does not list named customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Enablement Grounded in Real-World Engineering"
            subtitle="CloudHight is an engineering and consulting partner that can also build internal capability — not a public training academy."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {differentiators.map(({ title, body, Icon }) => (
              <article
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <Icon className="w-7 h-7 text-ocu-cyan mb-3" aria-hidden />
                <h3 className="text-lg font-bold text-ocu-blue mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <Image
              src="/photos/aws-badge-partner-advanced-tier-services.png"
              alt="AWS Partner — Advanced Tier Services"
              width={200}
              height={200}
              className="h-28 w-auto object-contain"
            />
            <Image
              src="/photos/aws-ai-services-competency.png"
              alt="AWS Partner — AI Services Competency"
              width={220}
              height={120}
              className="h-20 w-auto object-contain bg-white rounded-xl p-3"
            />
            <Image
              src="/photos/business-allstar-2026.png"
              alt="Business All-Star 2026 Accredited"
              width={200}
              height={200}
              className="h-28 w-auto object-contain"
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
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Choose the Right Enablement Model"
            subtitle="Engagements are scoped around outcomes, not a public price list or off-the-shelf course catalogue."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {engagements.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-ocu-bg p-6"
              >
                <h3 className="text-lg font-bold text-ocu-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <CtaButtons
            primaryHref={requirementsHref}
            primaryLabel="Discuss Your Requirements"
          />
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Combine Skills Enablement with CloudHight Services" />
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

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="Cloud & AI Skills Enablement FAQs" />
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-100 bg-ocu-bg px-5 py-2"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 min-h-[44px] font-semibold text-ocu-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <ChevronDown
                    className="w-5 h-5 shrink-0 text-ocu-cyan transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="text-sm text-gray-600 leading-relaxed pb-4 pr-8">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-blue text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build the Capability Behind Your Technology Transformation
          </h2>
          <p className="text-white/80 mb-4 leading-relaxed">
            Whether you&apos;re migrating to cloud, modernising applications,
            transforming software delivery or preparing your organisation for
            AI, CloudHight can help your teams build the practical skills needed
            to succeed.
          </p>
          <p className="text-cyan-200 text-sm font-semibold mb-8">
            Technology transformation is more sustainable when your people have
            the capability to own what comes next.
          </p>
          <CtaButtons light />
        </div>
      </section>
    </div>
  );
}
