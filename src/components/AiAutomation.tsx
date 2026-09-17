import Link from "next/link";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Bot, Brain, Eye, ShieldCheck } from "lucide-react";

const discussHref =
  "/contact?subject=" + encodeURIComponent("Discuss Your AI Initiative");

const exploreHref = "/services/ai-automation";

const cards: {
  id: string;
  title: string;
  body: string;
  visual: string[];
  visualJoin: string;
  result?: string;
  cta: string;
  href: string;
  Icon: LucideIcon;
}[] = [
  {
    id: "ai-generative",
    title: "Generative AI",
    body: "Design and build secure enterprise AI applications using foundation models, Retrieval-Augmented Generation and Amazon Bedrock.",
    visual: ["Foundation Model", "Enterprise Data", "Generative AI Application"],
    visualJoin: "+",
    cta: "Explore Generative AI",
    href: "/services/ai-automation#generative-ai",
    Icon: Brain,
  },
  {
    id: "ai-agentic",
    title: "Agentic AI & Intelligent Automation",
    body: "Build intelligent agents that can reason, use tools, access enterprise systems and automate complex workflows across your organisation.",
    visual: ["AI Agent", "Reason", "Use Tools", "Take Action"],
    visualJoin: "→",
    cta: "Explore Agentic AI",
    href: "/services/ai-automation#agentic-ai",
    Icon: Bot,
  },
  {
    id: "ai-aiops",
    title: "AI-Driven Operations",
    body: "Apply AIOps, predictive analytics and intelligent automation to improve observability, detect issues earlier and optimise cloud operations.",
    visual: ["Observe", "Detect", "Predict", "Automate", "Improve"],
    visualJoin: "→",
    cta: "Explore AI-Driven Operations",
    href: "/services/ai-automation#aiops",
    Icon: Eye,
  },
  {
    id: "ai-security",
    title: "AI Security & Governance",
    body: "Establish the security, controls, observability and governance required to adopt enterprise AI responsibly and at scale — using AI for security, and securing AI systems.",
    visual: ["AI", "Security", "Governance"],
    visualJoin: "+",
    result: "Trusted Enterprise AI",
    cta: "Explore AI Security",
    href: "/services/ai-automation#ai-security",
    Icon: ShieldCheck,
  },
];

const secondary = [
  { label: "Amazon Bedrock", href: "/services/ai-automation#ai-bedrock" },
  { label: "Retrieval-Augmented Generation", href: "/services/ai-automation#generative-ai" },
  { label: "AI Agents", href: "/services/ai-automation#agentic-ai" },
  { label: "Predictive Analytics", href: "/services/ai-automation#aiops" },
  { label: "AI-Powered DevOps", href: "/services/ai-automation#aiops" },
  { label: "AI Observability", href: "/services/ai-automation#aiops" },
  { label: "FinOps Intelligence", href: "/services/ai-automation#aiops" },
  { label: "Responsible AI", href: "/services/ai-automation#ai-security" },
];

const journey = [
  { title: "Discover", body: "Identify high-value AI opportunities." },
  { title: "Design", body: "Create secure, scalable AI architectures." },
  { title: "Build", body: "Develop AI applications, agents and automation." },
  { title: "Deploy", body: "Move solutions into production on AWS." },
  { title: "Operate", body: "Monitor, govern and continuously improve AI systems." },
];

export default function AiAutomation() {
  return (
    <section
      id="ai-automation"
      className="py-24 px-6 bg-gradient-to-b from-ocu-blue to-[#123a7a] text-white scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-cyan-200 mb-4">
          AI &amp; Automation
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
          Turn Enterprise AI Into Real Business Capability
        </h2>
        <div className="w-24 h-1 bg-ocu-cyan mx-auto rounded-full mb-8" />
        <div className="max-w-3xl mx-auto text-center text-white/80 leading-relaxed space-y-4 mb-14">
          <p>Move AI from experimentation to production.</p>
          <p>
            CloudHight helps organisations design, build and operationalise
            secure, scalable AI solutions on AWS — from Generative AI and
            intelligent agents to AI-powered cloud operations, automation and
            governance.
          </p>
          <p>
            Our approach combines AI strategy, cloud engineering and operational
            expertise to help organisations turn emerging AI capabilities into
            practical business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {cards.map((card) => (
            <article
              key={card.id}
              id={card.id}
              className="rounded-3xl bg-white text-ocu-blue p-7 shadow-xl border border-white/10 scroll-mt-28"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center mb-4">
                <card.Icon className="w-6 h-6 text-white" aria-hidden />
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                {card.body}
              </p>
              <p className="sr-only">
                {card.visual.join(` ${card.visualJoin} `)}
              </p>
              <ol className="flex flex-wrap items-center gap-2 mb-6 text-xs font-semibold">
                {card.visual.map((step, i) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-ocu-bg border border-ocu-blue/10">
                      {step}
                    </span>
                    {i < card.visual.length - 1 && (
                      <span className="text-ocu-cyan" aria-hidden>
                        {card.visualJoin}
                      </span>
                    )}
                  </li>
                ))}
                {"result" in card && card.result ? (
                  <li className="flex items-center gap-2">
                    <span className="text-ocu-cyan" aria-hidden>
                      =
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-ocu-blue text-white">
                      {card.result}
                    </span>
                  </li>
                ) : null}
              </ol>
              <Link
                href={card.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ocu-blue hover:text-ocu-cyan underline decoration-2 underline-offset-4 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
              >
                {card.cta}
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </article>
          ))}
        </div>

        <div
          id="ai-bedrock"
          className="rounded-3xl border border-white/15 bg-white/5 p-6 md:p-8 mb-10 scroll-mt-28"
        >
          <p className="text-center text-sm text-white/85 max-w-3xl mx-auto leading-relaxed">
            Build secure Generative AI applications and intelligent agents using
            Amazon Bedrock and AWS-native services — as part of a broader
            enterprise AI architecture, not a single-product proposition.
          </p>
          <ul className="flex flex-wrap justify-center gap-2 mt-6">
            {secondary.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="inline-flex px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-white hover:bg-white/20 min-h-[36px] items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-14">
          <h3 className="text-2xl font-bold text-center mb-3">
            From AI Opportunity to Production
          </h3>
          <p className="text-center text-white/70 text-sm mb-8">
            CloudHight is an implementation partner — from opportunity through
            architecture, delivery, operations and governance.
          </p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {journey.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl bg-white/10 border border-white/10 p-5"
              >
                <p className="text-cyan-200 font-extrabold text-xs tracking-widest mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-white/75 leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Move AI Into Production?
          </h3>
          <p className="text-white/80 leading-relaxed mb-8">
            Whether you&apos;re exploring Generative AI, building intelligent
            agents or applying AI to cloud operations, CloudHight can help turn
            your AI strategy into secure, production-ready solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={exploreHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-ocu-blue hover:bg-ocu-bg px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocu-blue"
            >
              Explore AI &amp; Automation
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <Link
              href={discussHref}
              className="inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ocu-blue"
            >
              Discuss Your AI Initiative
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <Image
              src="/photos/aws-ai-services-competency.png"
              alt="AWS Partner — AI Services Competency"
              width={180}
              height={90}
              className="h-16 w-auto object-contain bg-white rounded-lg p-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
