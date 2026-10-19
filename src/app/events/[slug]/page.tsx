import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { events } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ev = events.find((e) => e.slug === slug);
  return { title: ev?.title ?? "Event" };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const ev = events.find((e) => e.slug === slug);
  if (!ev) notFound();

  const ctaHref = ev.ctaHref ?? "/request-event";
  const ctaLabel = ev.ctaLabel ?? "Request a Similar Event";

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-ocu-cyan text-sm font-semibold uppercase mb-2">
          {ev.status} event
        </p>
        <h1 className="text-4xl font-extrabold text-ocu-blue mb-4">{ev.title}</h1>
        {ev.subtitle ? (
          <p className="text-xl text-gray-600 mb-4">{ev.subtitle}</p>
        ) : null}
        <p className="text-gray-500 mb-8">
          {[ev.dateLabel ?? `${ev.month} ${ev.day}`, ev.format, ev.location, ev.attendees]
            .filter(Boolean)
            .join(" · ")}
        </p>

        {ev.about?.length ? (
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-12">
            {ev.about.map((para) => (
              <p key={para.slice(0, 48)}>{para}</p>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-700 leading-relaxed mb-10 whitespace-pre-line">
            {ev.body ?? ev.summary}
          </p>
        )}

        {ev.demoSteps?.length ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ocu-blue mb-2">
              What You&apos;ll Experience
            </h2>
            {ev.experienceTitle ? (
              <h3 className="text-lg font-semibold text-ocu-blue mb-3">
                {ev.experienceTitle}
              </h3>
            ) : null}
            {ev.experienceIntro ? (
              <p className="text-gray-700 leading-relaxed mb-6">
                {ev.experienceIntro}
              </p>
            ) : null}
            <ol className="space-y-4">
              {ev.demoSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-gray-100 bg-ocu-bg p-5"
                >
                  <span className="shrink-0 w-8 h-8 rounded-full bg-ocu-blue text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-bold text-ocu-blue mb-1">{step.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            {ev.experienceOutro ? (
              <p className="text-gray-700 leading-relaxed mt-6">
                {ev.experienceOutro}
              </p>
            ) : null}
          </section>
        ) : null}

        {ev.takeaways?.length ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ocu-blue mb-4">
              Key Takeaways
            </h2>
            <p className="text-gray-700 mb-4">
              By attending this session, you&apos;ll discover:
            </p>
            <ol className="space-y-3">
              {ev.takeaways.map((item, i) => (
                <li key={item} className="flex gap-3 text-gray-700 leading-relaxed">
                  <span className="shrink-0 font-bold text-ocu-cyan">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {ev.audience?.length ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ocu-blue mb-4">
              Who Should Attend?
            </h2>
            <p className="text-gray-700 mb-4">This event is designed for:</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {ev.audience.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-gray-100 bg-ocu-bg px-4 py-3 text-sm text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {ev.whyAttend?.length ? (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-ocu-blue mb-4">Why Attend?</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {ev.whyAttend.map((para) => (
                <p key={para.slice(0, 48)}>{para}</p>
              ))}
            </div>
          </section>
        ) : null}

        <Link
          href={ctaHref}
          className="inline-flex px-6 py-3 bg-ocu-blue text-white rounded-lg font-bold"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
