"use client";

import { useMemo, useState } from "react";
import { blogs } from "@/lib/data";
import { PageHero } from "@/components/Heros";

const cats = ["All", "Partnerships", "AIOps", "DevOps", "Cloud Migration", "FinOps"];

export default function BlogsPage() {
  const [cat, setCat] = useState("All");
  const list = useMemo(
    () => (cat === "All" ? blogs : blogs.filter((b) => b.category === cat)),
    [cat],
  );

  return (
    <div className="bg-white">
      <PageHero
        title="Explore Latest Blogs"
        subtitle="Stay updated with the latest insights, tutorials, and best practices in cloud computing, DevOps and AI operations"
      />
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold ${
                  cat === c ? "bg-ocu-blue text-white" : "bg-gray-100 text-gray-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {list.map((b) => (
              <article
                key={b.slug}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white"
              >
                <div className="aspect-video bg-ocu-bg">
                  <img src={b.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-ocu-cyan font-semibold uppercase">
                    {b.category}
                  </p>
                  <h3 className="text-lg font-bold text-ocu-blue mt-1 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{b.excerpt}</p>
                  <p className="text-xs text-gray-400">{b.date}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
