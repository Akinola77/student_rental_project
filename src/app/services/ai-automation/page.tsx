import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Bot,
  Brain,
  Building2,
  Check,
  ChevronDown,
  Cloud,
  Compass,
  Eye,
  FileSearch,
  Gauge,
  GitBranch,
  GraduationCap,
  Handshake,
  Layers,
  Lightbulb,
  LineChart,
  Lock,
  MessageSquare,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Users,
  Wallet,
  Workflow,
  Wrench,
} from "lucide-react";
import HashScroll from "@/components/HashScroll";

const discussHref =
  "/contact?subject=" + encodeURIComponent("Discuss Your AI Initiative");
const expertHref =
  "/contact?subject=" + encodeURIComponent("Talk to an AI Expert");

export const metadata: Metadata = {
  title: {
    absolute: "AI & Automation Consulting on AWS | CloudHight Consulting",
  },
  description:
    "Design, build and operationalise secure enterprise AI solutions on AWS with CloudHight across Generative AI, Agentic AI, intelligent automation, AIOps and AI governance.",
  alternates: { canonical: "/services/ai-automation" },
  openGraph: {
    title: "AI & Automation | CloudHight Consulting",
    description:
      "Move enterprise AI from experimentation to production with Generative AI, Agentic AI, intelligent automation and AWS-native engineering.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const pageNav = [
  { label: "Overview", href: "#overview" },
  { label: "Generative AI", href: "#generative-ai" },
  { label: "Agentic AI", href: "#agentic-ai" },
  { label: "Intelligent Automation", href: "#intelligent-automation" },
  { label: "AIOps", href: "#aiops" },
  { label: "AI Security", href: "#ai-security" },
  { label: "Engagement Models", href: "#engagement-models" },
];

const challenges = [
  "Which AI use cases will create meaningful value?",
  "Which models and architectures are appropriate?",
  "How should enterprise data be securely connected to AI?",
  "How should AI agents interact with systems and tools?",
  "How do we control access and protect sensitive information?",
  "How do we evaluate AI quality and reliability?",
  "How do we introduce appropriate safeguards?",
  "How do we monitor AI applications in production?",
  "How do we control cost and performance?",
  "How do we integrate AI into existing applications and workflows?",
  "How do we move successfully from prototype to production?",
];

const lifecycle = [
  {
    title: "Discover",
    body: "Identify high-value business problems and AI opportunities.",
  },
  {
    title: "Design",
    body: "Define architecture, data integration, security, model strategy and operating requirements.",
  },
  {
    title: "Prototype",
    body: "Rapidly build and test AI concepts against real business requirements.",
  },
  {
    title: "Validate",
    body: "Evaluate quality, feasibility, security, performance, user experience and business value.",
  },
  {
    title: "Productionise",
    body: "Engineer the solution for scalability, resilience, observability, security and integration.",
  },
  {
    title: "Operate",
    body: "Monitor quality, reliability, performance, cost and security in production.",
  },
  {
    title: "Scale",
    body: "Expand successful capabilities across workflows, teams and business units.",
  },
];

const capabilities: {
  title: string;
  body: string;
  examples?: string[];
  href: string;
  id?: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "Generative AI",
    body: "Build secure AI applications that combine foundation models with enterprise data, applications and workflows.",
    examples: [
      "Enterprise knowledge assistants",
      "Retrieval-Augmented Generation",
      "Conversational applications",
      "Document intelligence",
      "Content generation",
      "AI-enabled application features",
    ],
    href: "#generative-ai",
    Icon: Brain,
  },
  {
    title: "Agentic AI & AI Agents",
    body: "Design intelligent agents that can reason, access knowledge, use tools and coordinate actions across enterprise workflows.",
    examples: [
      "Workflow agents",
      "Service agents",
      "Knowledge agents",
      "Engineering agents",
      "Multi-step task automation",
      "Human-in-the-loop workflows",
    ],
    href: "#agentic-ai",
    Icon: Bot,
  },
  {
    title: "Intelligent Automation",
    body: "Combine AI with APIs, applications, data and business processes to automate knowledge-intensive workflows.",
    href: "#intelligent-automation",
    Icon: Workflow,
  },
  {
    title: "AI-Driven Operations",
    body: "Apply AI to observability, incident intelligence, anomaly detection, operational analysis and automation.",
    href: "#aiops",
    Icon: Eye,
  },
  {
    title: "AI Security & Governance",
    body: "Build safeguards, access controls, monitoring and governance into AI solutions from the beginning.",
    href: "#ai-security",
    Icon: ShieldCheck,
  },
  {
    title: "AI Strategy & Advisory",
    body: "Identify priority use cases, assess readiness and develop a practical path from AI opportunity to production.",
    href: "#ai-strategy",
    id: "ai-strategy",
    Icon: Compass,
  },
];

const genAiCaps = [
  "Enterprise knowledge assistants",
  "Retrieval-Augmented Generation (RAG)",
  "Document search and question answering",
  "Document intelligence",
  "Conversational AI",
  "AI-enabled application features",
  "Content generation",
  "Information extraction",
  "Summarisation",
  "Enterprise search",
  "Knowledge management",
  "Developer and engineering assistants",
];

const agentCaps = [
  "Single-agent architectures",
  "Multi-agent workflows where justified",
  "Tool-enabled agents",
  "Enterprise knowledge access",
  "API and application integration",
  "Workflow orchestration",
  "Human approval steps",
  "Task automation",
  "Agent observability",
  "Agent security",
  "Evaluation",
  "Guardrails",
  "Production deployment",
];

const awsCapabilities = [
  "Amazon Bedrock",
  "Amazon Bedrock Knowledge Bases",
  "Amazon Bedrock Guardrails",
  "Amazon Bedrock AgentCore",
  "Amazon SageMaker AI",
  "AWS Lambda",
  "Amazon API Gateway",
  "Amazon S3",
  "Amazon OpenSearch Service",
  "AWS IAM",
  "AWS KMS",
  "AWS Secrets Manager",
  "Amazon CloudWatch",
  "AWS Step Functions",
  "Amazon EventBridge",
  "Amazon ECS / AWS Fargate",
  "Amazon EKS",
];

const useCases: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "Enterprise Knowledge Assistants",
    body: "Enable employees or customers to interact with trusted organisational knowledge using natural language.",
    Icon: BookOpen,
  },
  {
    title: "Customer Service AI",
    body: "Support service teams with intelligent assistance, knowledge retrieval, summarisation and workflow automation.",
    Icon: MessageSquare,
  },
  {
    title: "Document Intelligence",
    body: "Extract, classify, summarise and reason across business documents and unstructured information.",
    Icon: FileSearch,
  },
  {
    title: "Intelligent Workflow Automation",
    body: "Use AI agents and automation to coordinate multi-step processes across enterprise systems.",
    Icon: Workflow,
  },
  {
    title: "AI-Enabled Applications",
    body: "Embed Generative AI and intelligent capabilities directly into existing or new digital products.",
    Icon: Sparkles,
  },
  {
    title: "Engineering & DevOps Assistants",
    body: "Apply AI to engineering knowledge, troubleshooting, operational analysis and software delivery workflows.",
    Icon: Wrench,
  },
  {
    title: "IT Operations Intelligence",
    body: "Use AI to analyse operational signals, incidents and system behaviour to support faster diagnosis and remediation.",
    Icon: Activity,
  },
  {
    title: "Enterprise Search & Knowledge Discovery",
    body: "Help teams find, understand and use information distributed across organisational knowledge sources.",
    Icon: Search,
  },
];

const prototypeNeeds = ["Model works", "Prompt works", "Demo works"];

const productionNeeds = [
  "Secure architecture",
  "Enterprise integration",
  "Identity & access",
  "Data protection",
  "Evaluation",
  "Guardrails",
  "Observability",
  "Reliability",
  "CI/CD",
  "Infrastructure as Code",
  "Performance",
  "Cost optimisation",
  "Operational ownership",
];

const productionStack = [
  "AI Engineering",
  "Cloud Architecture",
  "Application Engineering",
  "DevOps",
  "Security",
  "Observability",
  "FinOps",
];

const automationScenarios = [
  "Analyse incoming information",
  "Retrieve relevant enterprise knowledge",
  "Classify requests",
  "Summarise complex content",
  "Recommend next actions",
  "Generate structured outputs",
  "Trigger approved workflows",
  "Interact with APIs",
  "Update enterprise systems",
  "Escalate decisions to people",
  "Coordinate multi-step processes",
];

const aiopsAreas: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "AIOps",
    body: "Use intelligent analysis to identify patterns, anomalies and operational signals.",
    Icon: Activity,
  },
  {
    title: "Incident Intelligence",
    body: "Correlate operational information and help engineering teams understand incidents faster.",
    Icon: Eye,
  },
  {
    title: "Predictive Analytics",
    body: "Use historical and real-time data to identify patterns and emerging risks where appropriate.",
    Icon: LineChart,
  },
  {
    title: "Intelligent Remediation",
    body: "Automate defined operational responses where appropriate controls exist.",
    Icon: GitBranch,
  },
  {
    title: "AI-Assisted Troubleshooting",
    body: "Help engineering teams investigate logs, metrics, events and technical knowledge more efficiently.",
    Icon: Wrench,
  },
  {
    title: "FinOps Intelligence",
    body: "Use analytics and AI where appropriate to support cost anomaly detection, forecasting and optimisation insights.",
    Icon: Wallet,
  },
];

const securingAi = [
  "Identity and access controls",
  "Data protection",
  "Encryption",
  "Secrets management",
  "Network architecture",
  "Application security",
  "Prompt-injection considerations",
  "Sensitive information handling",
  "Model and application access",
  "Logging and monitoring",
];

const governingAi = [
  "Guardrails",
  "AI usage policies",
  "Model selection controls",
  "Evaluation",
  "Human oversight",
  "Auditability",
  "Responsible AI practices",
  "Monitoring",
  "Cost governance",
  "Lifecycle management",
];

const industries: { title: string; areas: string[]; Icon: LucideIcon; note?: string }[] =
  [
    {
      title: "Financial Services",
      areas: [
        "Knowledge assistants",
        "Document processing",
        "Service operations",
        "Engineering productivity",
        "Operational intelligence",
        "Controlled workflow automation",
      ],
      Icon: Building2,
      note: "AI is applied to operational and knowledge workflows — not as a source of regulated financial advice.",
    },
    {
      title: "Healthcare",
      areas: [
        "Administrative workflow automation",
        "Knowledge discovery",
        "Document processing",
        "Operational analytics",
        "Patient-service support",
        "Technology operations",
      ],
      Icon: Stethoscope,
      note: "Focus remains on administrative, operational and technology use cases — not clinical decision-making.",
    },
    {
      title: "Retail & Ecommerce",
      areas: [
        "Customer assistance",
        "Product discovery",
        "Knowledge automation",
        "Content workflows",
        "Operational intelligence",
        "Internal productivity",
      ],
      Icon: ShoppingBag,
    },
    {
      title: "Public Sector",
      areas: [
        "Knowledge access",
        "Document intelligence",
        "Citizen-service support",
        "Process automation",
        "Internal productivity",
        "Secure AI adoption",
      ],
      Icon: Handshake,
    },
    {
      title: "Education",
      areas: [
        "Knowledge assistants",
        "Learner support",
        "Administrative automation",
        "Content workflows",
        "Internal knowledge management",
        "AI-enabled digital services",
      ],
      Icon: GraduationCap,
    },
    {
      title: "Technology / SaaS",
      areas: [
        "AI-enabled product features",
        "Engineering assistants",
        "Support automation",
        "Developer productivity",
        "AIOps",
        "Agentic workflows",
      ],
      Icon: Cloud,
    },
  ];

const whyPoints: { title: string; body: string; Icon: LucideIcon }[] = [
  {
    title: "AWS AI Expertise",
    body: "Verified AWS AI capability combined with broader AWS cloud engineering experience.",
    Icon: Cloud,
  },
  {
    title: "Production Engineering",
    body: "CloudHight approaches AI as a production engineering challenge, not simply a prototype exercise.",
    Icon: Rocket,
  },
  {
    title: "Cloud-Native Delivery",
    body: "AI solutions can be designed as part of secure, scalable AWS architectures.",
    Icon: Layers,
  },
  {
    title: "DevOps & Platform Engineering",
    body: "Apply modern delivery, automation, Infrastructure as Code and platform practices to AI workloads.",
    Icon: GitBranch,
  },
  {
    title: "Security & Governance",
    body: "Build security, controls and operational visibility into AI architectures.",
    Icon: Lock,
  },
  {
    title: "End-to-End Capability",
    body: "Support organisations from discovery and architecture through implementation, deployment and ongoing operations.",
    Icon: Users,
  },
];

const engagements: {
  title: string;
  intro: string;
  activities: string[];
  cta: string;
  href: string;
  Icon: LucideIcon;
}[] = [
  {
    title: "AI Discovery & Readiness",
    intro: "For organisations determining where AI can create value.",
    activities: [
      "Opportunity discovery",
      "Use-case prioritisation",
      "Readiness assessment",
      "Architecture considerations",
      "Security considerations",
      "Roadmap",
    ],
    cta: "Discuss AI Readiness",
    href: "/contact?subject=" + encodeURIComponent("Discuss AI Readiness"),
    Icon: Search,
  },
  {
    title: "AI Proof of Concept",
    intro: "Rapidly validate a defined AI opportunity.",
    activities: [
      "Architecture",
      "Prototype",
      "Data integration",
      "Model evaluation",
      "Business validation",
      "Production recommendations",
    ],
    cta: "Discuss an AI PoC",
    href: "/contact?subject=" + encodeURIComponent("Discuss an AI PoC"),
    Icon: Lightbulb,
  },
  {
    title: "AI Production Engineering",
    intro: "Turn a successful concept into a secure production solution.",
    activities: [
      "Production architecture",
      "Application engineering",
      "Security",
      "Infrastructure as Code",
      "CI/CD",
      "Integration",
      "Observability",
      "Performance",
      "Cost optimisation",
    ],
    cta: "Move AI Into Production",
    href: "/contact?subject=" + encodeURIComponent("Move AI Into Production"),
    Icon: Rocket,
  },
  {
    title: "Agentic AI Engagement",
    intro: "Design and implement controlled intelligent-agent workflows.",
    activities: [
      "Agent architecture",
      "Tool integration",
      "Knowledge integration",
      "Workflow design",
      "Human approval",
      "Security",
      "Evaluation",
      "Observability",
    ],
    cta: "Explore Agentic AI",
    href: "/contact?subject=" + encodeURIComponent("Explore Agentic AI"),
    Icon: Bot,
  },
  {
    title: "AI Operations & Optimisation",
    intro: "Support AI solutions after deployment.",
    activities: [
      "Monitoring",
      "Operational support",
      "Reliability",
      "Performance",
      "Cost",
      "Security",
      "Continuous improvement",
    ],
    cta: "Discuss AI Operations",
    href: "/contact?subject=" + encodeURIComponent("Discuss AI Operations"),
    Icon: Gauge,
  },
];

const relatedServices = [
  {
    title: "Cloud Implementation & Migration",
    body: "Build the secure, scalable AWS foundations required for modern applications and AI workloads.",
    href: "/services/cloud-implementation",
  },
  {
    title: "DevOps & Platform Engineering",
    body: "Create the automation, platforms and delivery practices required to move AI and applications reliably into production.",
    href: "/services/devops-platform-engineering",
  },
  {
    title: "Application Modernisation & Engineering",
    body: "Integrate AI capabilities into modern applications and digital products.",
    href: "/services/application-services",
  },
  {
    title: "Managed Cloud Services",
    body: "Operate, monitor and continuously improve the AWS environments supporting production workloads.",
    href: "/services/managed-cloud-services",
  },
  {
    title: "Cloud & AI Skills Enablement",
    body: "Build the internal capabilities teams need to adopt, govern and operate cloud and AI technologies.",
    href: "/services/cloud-ai-skills-enablement",
  },
];

const faqs: { q: string; a: string }[] = [
  {
    q: "What AI services does CloudHight provide?",
    a: "CloudHight helps organisations identify, design, build and operationalise enterprise AI solutions across Generative AI, agentic AI, intelligent automation, AI-driven operations and AI security and governance.",
  },
  {
    q: "Can CloudHight help us identify AI use cases?",
    a: "Yes. CloudHight can work with business and technology teams to identify, prioritise and assess AI opportunities based on potential value, technical feasibility, data availability, security and operational requirements.",
  },
  {
    q: "Can you build Generative AI solutions on AWS?",
    a: "Yes. CloudHight can design and implement Generative AI architectures on AWS, including solutions using Amazon Bedrock, foundation models, enterprise knowledge and Retrieval-Augmented Generation where appropriate.",
  },
  {
    q: "What is Agentic AI?",
    a: "Agentic AI refers to AI systems designed to reason across tasks, use tools, interact with systems and coordinate actions toward defined objectives. Enterprise implementations typically require appropriate permissions, security controls, monitoring and human oversight.",
  },
  {
    q: "Can CloudHight help move an AI prototype into production?",
    a: "Yes. CloudHight's cloud, application, DevOps, security and operational capabilities can support the engineering required to turn a validated AI prototype into a production-ready solution.",
  },
  {
    q: "What is Amazon Bedrock?",
    a: "Amazon Bedrock is an AWS service for building and scaling Generative AI applications using foundation models and managed AI capabilities. CloudHight can help organisations determine where Bedrock fits within their target AI architecture.",
  },
  {
    q: "How do you approach AI security and governance?",
    a: "CloudHight considers identity, data protection, application security, guardrails, evaluation, observability, access controls and human oversight as part of enterprise AI architecture.",
  },
  {
    q: "Can AI integrate with our existing applications?",
    a: "Yes. AI solutions can be integrated with existing applications, APIs, data sources and workflows where technically and operationally appropriate.",
  },
  {
    q: "How do we get started?",
    a: "Start with a conversation about the business problem, existing technology environment, available data and desired outcome. CloudHight can then help determine the appropriate discovery, proof-of-concept or implementation approach.",
  },
];

function SectionTitle({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-gradient"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-24 h-1 mx-auto rounded-full ${
          light
            ? "bg-cyan-300"
            : "bg-gradient-to-r from-ocu-blue to-ocu-cyan"
        }`}
      />
      {subtitle && (
        <p
          className={`mt-6 max-w-3xl mx-auto leading-relaxed ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
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
      <Link href={discussHref} className={primary}>
        Discuss Your AI Initiative
        <ArrowRight className="w-4 h-4" aria-hidden />
      </Link>
      <Link href={expertHref} className={secondary}>
        Talk to an AI Expert
      </Link>
    </div>
  );
}

function FlowPills({ items, join = "→" }: { items: string[]; join?: string }) {
  return (
    <ol className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-sm font-semibold text-ocu-blue">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-2 sm:gap-3">
          <span className="px-3 py-1.5 rounded-full bg-white border border-ocu-blue/10">
            {item}
          </span>
          {i < items.length - 1 && (
            <span className="text-ocu-cyan" aria-hidden>
              {join}
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

function VerticalFlow({
  steps,
  dark = false,
}: {
  steps: string[];
  dark?: boolean;
}) {
  const node = dark
    ? "px-4 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-semibold text-center"
    : "px-4 py-2.5 rounded-xl bg-white border border-ocu-blue/10 text-ocu-blue text-xs sm:text-sm font-semibold text-center shadow-sm";
  const arrow = dark ? "text-cyan-200" : "text-ocu-cyan";

  return (
    <ol className="flex flex-col items-center gap-1.5">
      {steps.map((step, i) => (
        <li key={step} className="flex flex-col items-center gap-1.5 w-full max-w-xs">
          <span className={`${node} w-full`}>{step}</span>
          {i < steps.length - 1 && (
            <span className={`${arrow} font-bold`} aria-hidden>
              ↓
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function HeroArchitecture() {
  const node =
    "px-3 py-2 rounded-xl bg-white/10 border border-white/20 text-[11px] sm:text-xs font-semibold tracking-wide text-center";
  return (
    <figure className="rounded-3xl border border-white/15 bg-white/5 p-5 sm:p-6">
      <figcaption className="sr-only">
        Enterprise AI architecture: enterprise data flows into foundation
        models, then an AI and agent layer that uses knowledge, tools and
        actions to connect with enterprise systems and produce business
        outcomes.
      </figcaption>
      <div className="flex flex-col items-center gap-2 text-white" aria-hidden>
        <span className={`${node} w-full max-w-[14rem]`}>Enterprise Data</span>
        <span className="text-cyan-200 font-bold">↓</span>
        <span className={`${node} w-full max-w-[14rem]`}>Foundation Models</span>
        <span className="text-cyan-200 font-bold">↓</span>
        <span className="px-3 py-2 rounded-xl bg-ocu-cyan text-white text-[11px] sm:text-xs font-bold tracking-wide text-center w-full max-w-[14rem]">
          AI &amp; Agent Layer
        </span>
        <span className="text-cyan-200 font-bold">↓</span>
        <div className="grid grid-cols-3 gap-2 w-full max-w-md">
          <span className={node}>Knowledge</span>
          <span className={node}>Tools</span>
          <span className={node}>Actions</span>
        </div>
        <span className="text-cyan-200 font-bold">↓</span>
        <span className={`${node} w-full max-w-[14rem]`}>Enterprise Systems</span>
        <span className="text-cyan-200 font-bold">↓</span>
        <span className="px-3 py-2 rounded-xl bg-white text-ocu-blue text-[11px] sm:text-xs font-bold tracking-wide text-center w-full max-w-[14rem]">
          Business Outcomes
        </span>
      </div>
    </figure>
  );
}

function AgentArchitecture() {
  const node =
    "px-3 py-2 rounded-xl bg-white border border-ocu-blue/10 text-ocu-blue text-xs sm:text-sm font-semibold text-center shadow-sm";
  return (
    <figure className="rounded-3xl bg-ocu-bg border border-gray-100 p-5 sm:p-8">
      <figcaption className="sr-only">
        Controlled agent workflow: a user or event reaches an AI agent, which
        uses knowledge, tools and context to reason, propose an action, apply
        policy or approval, act, and then observe the result.
      </figcaption>
      <div className="flex flex-col items-center gap-2" aria-hidden>
        <span className={`${node} w-full max-w-[16rem]`}>User / Event</span>
        <span className="text-ocu-cyan font-bold">↓</span>
        <span className="px-3 py-2 rounded-xl bg-ocu-blue text-white text-xs sm:text-sm font-bold text-center w-full max-w-[16rem]">
          AI Agent
        </span>
        <span className="text-ocu-cyan font-bold">↓</span>
        <div className="grid grid-cols-3 gap-2 w-full max-w-lg">
          <span className={node}>Knowledge</span>
          <span className={node}>Tools</span>
          <span className={node}>Context</span>
        </div>
        <span className="text-ocu-cyan font-bold">↓</span>
        <span className={`${node} w-full max-w-[16rem]`}>Reason</span>
        <span className="text-ocu-cyan font-bold">↓</span>
        <span className={`${node} w-full max-w-[16rem]`}>Propose Action</span>
        <span className="text-ocu-cyan font-bold">↓</span>
        <span className="px-3 py-2 rounded-xl bg-ocu-cyan text-white text-xs sm:text-sm font-bold text-center w-full max-w-[16rem]">
          Policy / Approval
        </span>
        <span className="text-ocu-cyan font-bold">↓</span>
        <span className={`${node} w-full max-w-[16rem]`}>Act</span>
        <span className="text-ocu-cyan font-bold">↓</span>
        <span className={`${node} w-full max-w-[16rem]`}>Observe</span>
      </div>
    </figure>
  );
}

function AwsArchitecture() {
  return (
    <figure className="rounded-3xl bg-gradient-to-br from-ocu-blue to-[#123a7a] text-white p-6 sm:p-8">
      <figcaption className="sr-only">
        Conceptual AWS AI architecture: users and applications connect through
        an API and experience layer to an AI application or agent, which uses
        AWS AI capabilities such as foundation models, knowledge retrieval,
        agent runtime and tools, guardrails, and evaluation and observability.
        Those capabilities connect to enterprise data, APIs and systems, with
        security, monitoring and governance surrounding the solution.
      </figcaption>
      <div className="flex flex-col items-center gap-2 text-center" aria-hidden>
        <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-sm font-semibold w-full max-w-md">
          Users / Applications
        </span>
        <span className="text-cyan-200 font-bold">↓</span>
        <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-sm font-semibold w-full max-w-md">
          API / Experience Layer
        </span>
        <span className="text-cyan-200 font-bold">↓</span>
        <span className="px-4 py-2 rounded-xl bg-ocu-cyan text-sm font-bold w-full max-w-md">
          AI Application / Agent
        </span>
        <span className="text-cyan-200 font-bold">↓</span>
        <div className="w-full max-w-xl rounded-2xl border border-white/20 bg-white/5 p-4">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 mb-3">
            AWS AI Capabilities
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm">
            <li className="rounded-lg bg-white/10 px-3 py-2">Foundation Models</li>
            <li className="rounded-lg bg-white/10 px-3 py-2">
              Knowledge / Retrieval
            </li>
            <li className="rounded-lg bg-white/10 px-3 py-2">
              Agent Runtime / Tools
            </li>
            <li className="rounded-lg bg-white/10 px-3 py-2">Guardrails</li>
            <li className="rounded-lg bg-white/10 px-3 py-2 sm:col-span-2">
              Evaluation / Observability
            </li>
          </ul>
        </div>
        <span className="text-cyan-200 font-bold">↓</span>
        <span className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-sm font-semibold w-full max-w-md">
          Enterprise Data + APIs + Systems
        </span>
        <span className="text-cyan-200 font-bold">↓</span>
        <span className="px-4 py-2 rounded-xl bg-white text-ocu-blue text-sm font-bold w-full max-w-md">
          Security + Monitoring + Governance
        </span>
      </div>
    </figure>
  );
}

export default function AiAutomationPage() {
  return (
    <div className="bg-white">
      <HashScroll />
      <section className="relative overflow-hidden bg-[#070b1a] pt-32 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,111,237,0.28),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(10,42,94,0.55),transparent_45%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200 mb-4">
                AI &amp; Automation
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
                Turn Enterprise AI Into Real Business Capability
              </h1>
              <p className="text-lg text-white/85 leading-relaxed mb-4">
                CloudHight helps organisations move AI from experimentation to
                production — designing, building and operationalising secure,
                scalable AI solutions on AWS across Generative AI, intelligent
                agents, automation and AI-powered operations.
              </p>
              <p className="text-base text-white/70 leading-relaxed mb-8">
                Combine AI innovation with the cloud, engineering, security and
                operational foundations required to make it work at enterprise
                scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={discussHref}
                  className="inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Discuss Your AI Initiative
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
                <Link
                  href="#ai-capabilities"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 hover:bg-white/10 px-6 py-3.5 rounded-lg text-sm font-bold transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Explore Our AI Capabilities
                </Link>
              </div>
            </div>
            <HeroArchitecture />
          </div>
          <nav
            aria-label="On this page"
            className="mt-12 pt-8 border-t border-white/10"
          >
            <ul className="flex flex-wrap gap-2">
              {pageNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center px-3 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white hover:bg-white/20 min-h-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className="py-16 px-6 bg-ocu-bg">
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            title="AI Expertise Validated by AWS"
            subtitle="Building enterprise AI requires more than access to a foundation model. Organisations need secure architecture, cloud engineering, application integration, governance and operational capability. CloudHight combines AWS expertise with AI engineering to help organisations design and implement production-ready AI solutions."
          />
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <Image
              src="/photos/aws-badge-partner-advanced-tier-services.png"
              alt="AWS Partner — Advanced Tier Services"
              width={180}
              height={180}
              className="h-24 w-auto object-contain"
            />
            <Image
              src="/photos/aws-ai-services-competency.png"
              alt="AWS Partner — AI Services Competency"
              width={180}
              height={180}
              className="h-24 w-auto object-contain"
            />
          </div>
          <p className="text-center text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AWS AI Competency recognises validated AWS Partners with
            demonstrated technical expertise and customer experience in
            delivering AI solutions.
          </p>
        </div>
      </section>

      <section id="overview" className="py-20 px-6 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ocu-blue mb-6">
              The Challenge Isn&apos;t Starting AI. It&apos;s Making AI Work in
              Production.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              AI experimentation has become increasingly accessible.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The harder challenge is turning promising ideas and prototypes
              into secure, reliable and scalable solutions that integrate with
              real enterprise data, applications, workflows and operating
              environments.
            </p>
          </div>
          <p className="text-center text-ocu-blue font-semibold mb-6">
            Organisations must address questions around:
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
            {challenges.map((item) => (
              <li
                key={item}
                className="bg-ocu-bg rounded-2xl p-5 border border-gray-100 text-sm text-ocu-blue font-medium leading-snug"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CloudHight helps organisations address the complete engineering
            challenge — from opportunity identification and architecture through
            implementation, security, deployment and ongoing operations.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-ocu-blue to-[#123a7a] text-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="From AI Opportunity to Production"
            light
            subtitle="CloudHight can support individual stages or provide an end-to-end AI delivery engagement."
          />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {lifecycle.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl bg-white/10 border border-white/10 p-5"
              >
                <p className="text-cyan-200 font-extrabold text-xs tracking-widest mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="ai-capabilities" className="py-20 px-6 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Enterprise AI Capabilities Built for Production"
            subtitle="CloudHight brings together AI engineering, AWS cloud expertise and modern software delivery to help organisations build practical AI capabilities."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <article
                key={cap.title}
                id={cap.id}
                className={`bg-ocu-bg rounded-2xl p-6 border border-gray-100 h-full flex flex-col ${
                  cap.id ? "scroll-mt-28" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center mb-4">
                  <cap.Icon className="w-6 h-6 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ocu-blue mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                  {cap.body}
                </p>
                {cap.examples ? (
                  <ul className="text-xs text-ocu-blue font-medium space-y-1 mb-4">
                    {cap.examples.map((example) => (
                      <li key={example}>• {example}</li>
                    ))}
                  </ul>
                ) : null}
                <Link
                  href={cap.href}
                  className="inline-flex items-center gap-2 text-ocu-blue font-semibold hover:text-ocu-cyan transition-colors underline decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
                >
                  Explore this capability
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="generative-ai"
        className="py-20 px-6 bg-ocu-bg scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Build Generative AI Around Your Business
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              The greatest enterprise value from Generative AI often comes when
              foundation models are securely connected to organisational
              knowledge, applications and workflows.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              CloudHight can help organisations design and build Generative AI
              solutions that combine model capabilities with business context
              and enterprise data.
            </p>
            <p className="text-sm text-ocu-blue font-semibold mb-8">
              Enterprise Data + Foundation Models → Contextual AI Applications
            </p>
            <Pills items={genAiCaps} />
            <p className="text-sm text-gray-500 leading-relaxed mt-6">
              Retrieval-Augmented Generation can ground responses in enterprise
              knowledge, but it does not automatically eliminate hallucinations.
              Production solutions still need evaluation, safeguards and
              operational monitoring.
            </p>
          </div>
          <div className="rounded-3xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ocu-cyan mb-6 text-center">
              Grounded Generative AI
            </p>
            <VerticalFlow
              steps={[
                "Enterprise Data",
                "Ingest / Index",
                "Retrieve Context",
                "Foundation Model",
                "Grounded Response",
                "Enterprise User / Application",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="agentic-ai" className="py-20 px-6 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Move From AI That Answers to AI That Acts"
            subtitle="Agentic AI extends AI beyond generating responses. Properly designed AI agents can reason across tasks, access enterprise knowledge, use approved tools and coordinate actions across applications and workflows. CloudHight can help organisations explore and engineer agentic solutions with appropriate security, controls, observability and human oversight."
          />
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-10">
            <AgentArchitecture />
            <div>
              <Pills items={agentCaps} />
              <p className="text-sm text-gray-600 leading-relaxed mt-6">
                Agents should not be treated as fully autonomous by default.
                Enterprise designs typically include permissions, policy checks,
                observability and human approval where actions affect systems,
                data or customers.
              </p>
              <Link
                href="/agentic-ai-consulting-services"
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-ocu-blue hover:text-ocu-cyan underline decoration-2 underline-offset-4"
              >
                Explore Agentic AI Consulting Services
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="ai-bedrock" className="py-20 px-6 bg-ocu-bg scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Build Enterprise AI on AWS"
            subtitle="CloudHight uses AWS-native AI and cloud services to help organisations build secure, scalable AI architectures aligned with their existing AWS environments. Amazon Bedrock can provide access to foundation models and managed capabilities for building Generative AI and agentic applications without organisations having to manage underlying model infrastructure themselves."
          />
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-8">
            <AwsArchitecture />
            <div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Different solutions require different services. The capabilities
                below are used where they are technically appropriate — not as a
                mandatory architecture for every engagement.
              </p>
              <Pills items={awsCapabilities} />
              <p className="text-sm text-gray-600 leading-relaxed mt-6">
                For production agentic architectures, Amazon Bedrock AgentCore
                can provide managed runtime, tool and operational capabilities
                alongside Amazon Bedrock Knowledge Bases and Guardrails.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="What Can AI Actually Do for Your Organisation?"
            subtitle="These are example solution patterns. Each initiative is designed around your data, applications, security and operating environment."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item) => (
              <article
                key={item.title}
                className="bg-ocu-bg rounded-2xl p-6 border border-gray-100 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center mb-4">
                  <item.Icon className="w-6 h-6 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ocu-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-ocu-blue to-[#123a7a] text-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Don't Let Your AI Strategy Stop at the Proof of Concept"
            light
            subtitle="AI prototypes can demonstrate possibility quickly. Production systems require much more. Security, data architecture, integration, reliability, evaluation, observability, deployment automation, performance and cost all become critical when AI begins supporting real users and business processes. This is where CloudHight's broader engineering capability becomes important."
          />
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <article className="rounded-3xl bg-white/10 border border-white/10 p-6">
              <h3 className="text-xl font-bold mb-4">Prototype</h3>
              <ul className="space-y-2 text-sm text-white/80">
                {prototypeNeeds.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-cyan-200 mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl bg-white text-ocu-blue p-6">
              <h3 className="text-xl font-bold mb-4">Production AI</h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                {productionNeeds.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-ocu-cyan mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="rounded-3xl bg-white/10 border border-white/10 p-6 sm:p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">AI Production Engineering</h3>
            <p className="text-white/70 text-sm mb-6">
              CloudHight brings these disciplines together so AI solutions can
              move beyond experimentation and operate within real enterprise
              environments.
            </p>
            <FlowPills items={productionStack} join="+" />
            <p className="mt-6 text-cyan-200 font-bold">= Production-Ready AI</p>
          </div>
        </div>
      </section>

      <section
        id="intelligent-automation"
        className="py-20 px-6 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
              Connect AI to the Work Your Organisation Actually Does
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              AI creates greater value when it can work with the applications,
              data, APIs and workflows that already power the organisation.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              CloudHight can help integrate AI capabilities into business and
              technology processes to support intelligent automation.
            </p>
            <Pills items={automationScenarios} />
            <p className="text-sm text-gray-600 leading-relaxed mt-6">
              Automation should be designed around appropriate permissions,
              controls and human oversight — not autonomy for autonomy&apos;s
              sake.
            </p>
          </div>
          <div className="rounded-3xl bg-ocu-bg border border-gray-100 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ocu-cyan mb-6 text-center">
              Controlled Automation
            </p>
            <VerticalFlow
              steps={[
                "Event",
                "Understand",
                "Retrieve Context",
                "Reason",
                "Recommend / Decide",
                "Approval Where Required",
                "Act",
                "Log & Observe",
              ]}
            />
          </div>
        </div>
      </section>

      <section id="aiops" className="py-20 px-6 bg-ocu-bg scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Apply AI to Cloud & Technology Operations"
            subtitle="Modern technology environments generate enormous volumes of operational data. CloudHight helps organisations explore how AI, automation and observability can support faster detection, diagnosis and response across cloud and application environments."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiopsAreas.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center mb-4">
                  <item.Icon className="w-6 h-6 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ocu-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-center max-w-3xl mx-auto mt-8 leading-relaxed">
            FinOps remains a broader cost-management discipline; AI can support
            selected insights where it is useful. Automated remediation is
            applied only to defined operational responses with appropriate
            controls — not as unrestricted autonomy.
          </p>
        </div>
      </section>

      <section id="ai-security" className="py-20 px-6 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Build Trust Into AI From the Beginning"
            subtitle="Enterprise AI introduces new considerations around data, access, model behaviour, application security, monitoring and governance. Security and responsible AI should be part of the architecture from the beginning — not added after deployment."
          />
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <article className="rounded-3xl bg-ocu-bg border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-ocu-cyan" aria-hidden />
                <h3 className="text-xl font-bold text-ocu-blue">Securing AI</h3>
              </div>
              <ul className="space-y-2">
                {securingAi.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-ocu-cyan mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl bg-ocu-bg border border-gray-100 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="w-6 h-6 text-ocu-cyan" aria-hidden />
                <h3 className="text-xl font-bold text-ocu-blue">Governing AI</h3>
              </div>
              <ul className="space-y-2">
                {governingAi.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-ocu-cyan mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed mb-4">
              Amazon Bedrock Guardrails can help organisations apply configurable
              safeguards to AI application inputs and outputs. Guardrails reduce
              selected classes of risk; they do not eliminate all AI risk on
              their own.
            </p>
            <p className="text-ocu-blue font-semibold">
              Security + Governance + Observability + Human Oversight → Trusted
              Enterprise AI
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="AI Opportunities Across Your Industry"
            subtitle="Every AI initiative should be evaluated against the organisation's data, security, regulatory and operational requirements."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center mb-4">
                  <item.Icon className="w-6 h-6 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ocu-blue mb-3">
                  {item.title}
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 flex-1">
                  {item.areas.map((area) => (
                    <li key={area}>• {area}</li>
                  ))}
                </ul>
                {item.note ? (
                  <p className="text-xs text-gray-500 leading-relaxed mt-4">
                    {item.note}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="AI Engineering Backed by Cloud & Operational Expertise" />
          <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
            <Image
              src="/photos/aws-badge-partner-advanced-tier-services.png"
              alt="AWS Partner — Advanced Tier Services"
              width={160}
              height={160}
              className="h-20 w-auto object-contain"
            />
            <Image
              src="/photos/aws-ai-services-competency.png"
              alt="AWS Partner — AI Services Competency"
              width={160}
              height={160}
              className="h-20 w-auto object-contain"
            />
            <Image
              src="/photos/business-allstar-2026.png"
              alt="Business All-Star 2026 Accredited"
              width={160}
              height={160}
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((item) => (
              <article
                key={item.title}
                className="bg-ocu-bg rounded-2xl p-6 border border-gray-100 h-full"
              >
                <item.Icon className="w-7 h-7 text-ocu-cyan mb-3" aria-hidden />
                <h3 className="text-lg font-bold text-ocu-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="engagement-models"
        className="py-20 px-6 bg-ocu-bg scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Start Where Your AI Journey Is Today" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagements.map((item) => (
              <article
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center mb-4">
                  <item.Icon className="w-6 h-6 text-white" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-ocu-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {item.intro}
                </p>
                <ul className="text-sm text-gray-600 space-y-1 flex-1 mb-5">
                  {item.activities.map((activity) => (
                    <li key={activity}>• {activity}</li>
                  ))}
                </ul>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-ocu-blue font-semibold hover:text-ocu-cyan transition-colors underline decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm min-h-[44px]"
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
          <SectionTitle title="AI Works Best With the Right Technology Foundations" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((item) => (
              <article
                key={item.title}
                className="bg-ocu-bg rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
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

      <section className="py-20 px-6 bg-ocu-bg">
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="AI & Automation FAQs" />
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-gray-100 bg-white px-5 py-2"
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
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200 mb-4">
            From AI Idea to Production
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Turn AI Into Real Business Capability?
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Whether you&apos;re exploring Generative AI, designing intelligent
            agents, automating enterprise workflows or moving an AI proof of
            concept into production, CloudHight can help you build securely on
            AWS.
          </p>
          <CtaButtons light />
          <p className="text-cyan-200 text-sm font-semibold mt-8">
            Discover. Build. Deploy. Operate. Scale.
          </p>
        </div>
      </section>
    </div>
  );
}
