import type { Metadata } from "next";
import { team } from "@/lib/data";
import { PageHero } from "@/components/Heros";

export const metadata: Metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Meet Our Team"
        subtitle="The multi-skilled people behind every CloudHight engagement — from design through deployment to 24/7 operations."
      />
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gradient mb-4">Our Team</h2>
            <p className="text-gray-600">
              The people behind every CloudHight engagement
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m) => (
              <article
                key={m.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-wide text-ocu-cyan font-semibold mb-1">
                    Team
                  </p>
                  <h3 className="text-lg font-bold text-ocu-blue">{m.name}</h3>
                  <p className="text-sm text-ocu-light-blue mb-2">{m.role}</p>
                  <p className="text-sm text-gray-600">{m.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
