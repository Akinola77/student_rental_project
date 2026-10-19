"use client";

const flow = [
  { title: "User / Business Goal", detail: "A defined outcome, not an open-ended prompt." },
  { title: "AI Agent", detail: "Reasons toward the goal within approved guardrails." },
  { title: "Reasoning / Planning", detail: "Breaks work into steps and decides what to do next." },
  { title: "Tools + Data + Applications", detail: "Amazon Bedrock, knowledge bases, APIs and business systems." },
  { title: "Actions / Outcomes", detail: "Assisted work, completed workflows and measurable results." },
];

const concepts = [
  "Amazon Bedrock",
  "Enterprise Data",
  "APIs",
  "Business Applications",
  "Knowledge Bases",
  "Security",
  "Observability",
];

export default function AgenticHeroVisual() {
  return (
    <figure
      className="rounded-3xl border border-white/15 bg-white/5 p-5 md:p-7 backdrop-blur-sm"
      aria-label="Agentic AI flow from business goal through an AI agent, reasoning, tools and enterprise systems to actions and outcomes"
    >
      <ol className="space-y-2">
        {flow.map((step, index) => (
          <li
            key={step.title}
            className="animate-fade-up"
            style={{ animationDelay: `${index * 140}ms` }}
          >
            <div className="rounded-2xl border border-white/15 bg-[#0b1a3a]/80 px-4 py-3">
              <div className="flex items-start gap-3">
                <span
                  className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-ocu-cyan animate-agent-activate"
                  style={{ animationDelay: `${index * 0.45}s` }}
                  aria-hidden
                />
                <div>
                  <p className="text-sm font-semibold text-white">{step.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/70">
                    {step.detail}
                  </p>
                </div>
              </div>
            </div>
            {index < flow.length - 1 ? (
              <p className="py-1 text-center text-cyan-200" aria-hidden>
                ↓
              </p>
            ) : null}
          </li>
        ))}
      </ol>
      <ul
        className="mt-5 flex flex-wrap gap-2"
        aria-label="AWS-oriented concepts in Agentic AI solutions"
      >
        {concepts.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-cyan-100"
          >
            {item}
          </li>
        ))}
      </ul>
    </figure>
  );
}
