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

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-ocu-cyan text-sm font-semibold uppercase mb-2">
          {ev.status} event
        </p>
        <h1 className="text-4xl font-extrabold text-ocu-blue mb-4">{ev.title}</h1>
        <p className="text-gray-500 mb-6">
          {ev.month} {ev.day} · {ev.location} · {ev.attendees}
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">{ev.summary}</p>
        <Link
          href="/request-event"
          className="inline-flex px-6 py-3 bg-ocu-blue text-white rounded-lg font-bold"
        >
          Request a Similar Event
        </Link>
      </div>
    </div>
  );
}
