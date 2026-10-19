import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { getOpenRole, openRoles } from "@/lib/careers";
import { site } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return openRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = getOpenRole(slug);
  return { title: role?.title ?? "Open Role" };
}

export default async function RolePage({ params }: Props) {
  const { slug } = await params;
  const role = getOpenRole(slug);
  if (!role) notFound();

  return (
    <div className="bg-white">
      <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-ocu-bg to-white">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/join-us#open-roles"
            className="text-sm font-semibold text-ocu-cyan hover:text-ocu-blue"
          >
            ← Back to open roles
          </Link>
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-ocu-blue tracking-tight">
              {role.title}
            </h1>
            <span className="text-xs bg-ocu-cyan/10 text-ocu-cyan px-3 py-1 rounded-full">
              {role.type}
            </span>
          </div>
          <p className="mt-3 text-gray-600">
            {role.department} · {role.location}
            <span className="text-gray-500"> (depending on project requirements)</span>
          </p>
          <Link
            href="#apply"
            className="inline-flex mt-8 items-center justify-center gap-2 px-6 py-3 bg-ocu-blue text-white rounded-lg text-sm font-semibold min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocu-cyan/40"
          >
            Apply now
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>
      </section>

      <article className="px-6 pb-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-ocu-blue mb-3">About the Role</h2>
            <p className="text-gray-600 leading-relaxed">{role.about}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ocu-blue mb-3">
              Key Responsibilities
            </h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 leading-relaxed">
              {role.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ocu-blue mb-3">Requirements</h2>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 leading-relaxed">
              {role.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-gray-600 leading-relaxed">
              <span className="font-semibold text-ocu-blue">Desirable:</span>{" "}
              {role.desirable}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ocu-blue mb-3">
              Why Join CloudHight?
            </h2>
            <p className="text-gray-600 leading-relaxed">{role.whyJoin}</p>
            <p className="mt-4 text-gray-700 font-medium">{role.closing}</p>
          </section>
        </div>
      </article>

      <section id="apply" className="py-16 px-6 scroll-mt-28 bg-ocu-bg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gradient mb-3">
            Apply for {role.title}
          </h2>
          <p className="text-gray-600 mb-8">
            Attach your CV and a short cover note. You can also email{" "}
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent(`Job application — ${role.title}`)}`}
              className="text-ocu-cyan font-semibold underline decoration-2 underline-offset-4"
            >
              {site.email}
            </a>{" "}
            with the role in the subject line.
          </p>
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
            <InquiryForm variant="job" defaultRole={role.title} />
          </div>
        </div>
      </section>
    </div>
  );
}
