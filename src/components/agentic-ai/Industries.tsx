"use client";

import { useId, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const discoveryHref =
  "/contact?subject=" + encodeURIComponent("Book an Agentic AI Discovery Session");

const industries = [
  {
    id: "financial-services",
    label: "Financial Services",
    intro:
      "Help financial institutions augment service, operations and knowledge work while keeping security, auditability and governance at the centre of the design.",
    cases: [
      "Customer-service augmentation",
      "Compliance workflow support",
      "Knowledge assistants",
      "Document analysis",
      "Operational automation",
      "Engineering productivity",
    ],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    intro:
      "Support administrative and operational workflows so clinical and operational teams can spend more time on care. These patterns are not intended for autonomous clinical diagnosis.",
    cases: [
      "Administrative workflow automation",
      "Patient-service support",
      "Scheduling operations",
      "Knowledge retrieval",
      "Clinical administrative support",
      "Operational intelligence",
    ],
  },
  {
    id: "retail",
    label: "Retail & eCommerce",
    intro:
      "Connect agents to customer, inventory and operations systems so teams can respond faster without losing control of brand, data or fulfilment processes.",
    cases: [
      "Customer-service agents",
      "Product assistance",
      "Inventory workflows",
      "Merchandising support",
      "Personalisation workflows",
      "Operations automation",
    ],
  },
  {
    id: "public-sector",
    label: "Public Sector",
    intro:
      "Help public organisations improve citizen and employee experiences with governed agents that work within existing case, document and knowledge systems.",
    cases: [
      "Citizen-service assistance",
      "Document workflows",
      "Internal knowledge",
      "Case-management augmentation",
      "Employee productivity",
    ],
  },
  {
    id: "education",
    label: "Education",
    intro:
      "Give students and staff timely support across admissions, learning, careers and administration — with appropriate controls around institutional knowledge.",
    cases: [
      "Student support",
      "Admissions",
      "Career support",
      "Learner engagement",
      "Knowledge assistants",
      "Administrative automation",
    ],
  },
  {
    id: "technology",
    label: "Technology",
    intro:
      "Augment product, support and cloud operations teams with agents that can investigate, retrieve technical knowledge and coordinate work across tools.",
    cases: [
      "Developer agents",
      "Customer support",
      "Cloud operations",
      "Incident management",
      "Technical knowledge",
      "SaaS workflow automation",
    ],
  },
];

export default function AgenticIndustries() {
  const [active, setActive] = useState(industries[0].id);
  const tabPrefix = useId();
  const current = industries.find((item) => item.id === active) ?? industries[0];
  const panelId = `${tabPrefix}-${current.id}-panel`;

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % industries.length
        : (index - 1 + industries.length) % industries.length;
    setActive(industries[next].id);
    document.getElementById(`${tabPrefix}-${industries[next].id}`)?.focus();
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Industries"
        className="flex gap-2 overflow-x-auto pb-2"
      >
        {industries.map((item) => {
          const selected = item.id === current.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${tabPrefix}-${item.id}`}
              aria-selected={selected}
              aria-controls={`${tabPrefix}-${item.id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(item.id)}
              onKeyDown={(event) => onTabKey(event, industries.indexOf(item))}
              className={`min-h-[44px] shrink-0 rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/50 ${
                selected
                  ? "bg-ocu-blue text-white"
                  : "bg-white text-ocu-blue border border-gray-200 hover:bg-ocu-bg"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={panelId}
        aria-labelledby={`${tabPrefix}-${current.id}`}
        className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-sm"
      >
        <h3 className="text-2xl font-bold text-ocu-blue">{current.label}</h3>
        <p className="mt-3 max-w-3xl text-gray-600 leading-relaxed">{current.intro}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {current.cases.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-gray-100 bg-ocu-bg px-4 py-3 text-sm font-medium text-ocu-blue"
            >
              {item}
            </li>
          ))}
        </ul>
        <Link
          href={discoveryHref}
          className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-ocu-blue hover:text-ocu-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40 rounded-sm"
        >
          Explore Agentic AI for {current.label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
