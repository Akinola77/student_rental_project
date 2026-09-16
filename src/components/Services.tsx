import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Compass,
  Settings,
  ShieldCheck,
  TrendingDown,
  Workflow,
} from "lucide-react";
import { services } from "@/lib/data";

const icons = {
  cloud: Cloud,
  workflow: Workflow,
  shield: ShieldCheck,
  trending: TrendingDown,
  settings: Settings,
  compass: Compass,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-b from-[#ffffff] via-[#fafbfc] to-[#ffffff]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan mx-auto rounded-full" />
        </div>
        <div className="space-y-20 md:space-y-28">
          {services.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.id}
                id={s.id === 6 ? "ai-solutions" : undefined}
                className={`flex flex-col gap-10 md:gap-14 items-center scroll-mt-28 ${
                  reverse ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div
                    className={`group relative aspect-video rounded-2xl overflow-hidden shadow-xl ${
                      reverse ? "rounded-tl-[3rem]" : "rounded-tr-[3rem]"
                    }`}
                  >
                    <img
                      alt={s.title}
                      src={s.image}
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ocu-blue/40 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-ocu-blue to-ocu-cyan flex items-center justify-center shadow-md mb-5">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-ocu-blue mb-4">
                    {s.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-6 text-justify">
                    {s.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-ocu-blue font-semibold hover:text-ocu-cyan transition-colors underline decoration-2 underline-offset-4"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
