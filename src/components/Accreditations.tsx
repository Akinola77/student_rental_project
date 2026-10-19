import { alliances } from "@/lib/data";

export default function Accreditations() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#ffffff] via-[#fafbfc] to-[#ffffff]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Accreditations & Partnerships
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-ocu-blue to-ocu-cyan mx-auto rounded-full" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {alliances.map((a, i) => {
            const inner = (
              <div
                className="animate-float bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 p-6 w-36 h-36 md:w-40 md:h-40 flex items-center justify-center transition-shadow"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                <img
                  alt={a.name}
                  src={a.logo}
                  className="w-full h-full object-contain"
                />
              </div>
            );
            return a.link ? (
              <a
                key={a.name}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={a.name}
                className="focus:outline-none focus:ring-2 focus:ring-ocu-blue/30 rounded-2xl"
              >
                {inner}
              </a>
            ) : (
              <div key={a.name}>{inner}</div>
            );
          })}
        </div>
        <div className="mt-14 flex justify-center">
          <img
            src="/photos/business-allstar-banner-2026.png"
            alt="Business All-Star — Global Cloud Consulting Company of the Year 2026"
            className="max-w-full md:max-w-xl h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
