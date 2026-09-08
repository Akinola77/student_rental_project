import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1 className="text-4xl font-extrabold text-ocu-blue mb-6">Privacy Policy</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          {site.name} (“we”, “us”) is committed to protecting the personal information
          you share with us through this website, including contact forms, partnership
          enquiries, academy enquiries, event requests and job applications.
        </p>
        <h2 className="text-2xl font-bold text-ocu-blue mt-10 mb-3">What we collect</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Name, email, phone, organisation details, and any information you choose to
          include in a message or uploaded CV. We also use cookies to understand site
          traffic when you accept the cookie banner.
        </p>
        <h2 className="text-2xl font-bold text-ocu-blue mt-10 mb-3">How we use it</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          To respond to your enquiry, administer partnership and academy programmes,
          evaluate applications, and improve the website. We do not sell personal data.
        </p>
        <h2 className="text-2xl font-bold text-ocu-blue mt-10 mb-3">Contact</h2>
        <p className="text-gray-600 leading-relaxed">
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${site.email}`} className="text-ocu-cyan">
            {site.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
