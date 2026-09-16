import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Contact" };

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string }>;
}) {
  const { subject } = await searchParams;
  const defaultSubject =
    typeof subject === "string" && subject.trim() ? subject.trim() : undefined;

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-8 px-6 bg-gradient-to-b from-ocu-bg to-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-ocu-blue tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-xl">
            Have a question, a project in mind, or just want to say hello? Fill out
            the form below and our team will get back to you shortly.
          </p>
        </div>
      </section>
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-xl font-bold text-ocu-blue">Contact Information</h2>
            <div className="space-y-5">
              <a href={`mailto:${site.email}`} className="flex gap-3">
                <Mail className="w-5 h-5 text-ocu-cyan mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Email us</p>
                  <p className="text-sm text-gray-600">{site.email}</p>
                </div>
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex gap-3">
                <Phone className="w-5 h-5 text-ocu-cyan mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Call us</p>
                  <p className="text-sm text-gray-600">{site.phone}</p>
                </div>
              </a>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-ocu-cyan mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Location</p>
                  <p className="text-sm text-gray-600 whitespace-pre-line">
                    {site.address}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              We typically respond within 1–2 business days.
            </p>
          </div>
          <div className="lg:col-span-3 bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-ocu-blue mb-6">Send us a message</h2>
            <InquiryForm variant="contact" defaultSubject={defaultSubject} />
          </div>
        </div>
      </section>
    </div>
  );
}
