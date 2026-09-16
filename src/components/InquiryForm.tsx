"use client";

import { FormEvent, useState } from "react";

type Variant = "academy" | "partner" | "contact" | "event" | "job";

export default function InquiryForm({
  variant,
  defaultProgram,
  defaultSubject,
}: {
  variant: Variant;
  defaultProgram?: string;
  defaultSubject?: string;
}) {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    await new Promise((r) => setTimeout(r, 400));
    setBusy(false);
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
        <h3 className="text-xl font-bold text-ocu-blue mb-2">Thank you</h3>
        <p className="text-gray-600">
          {variant === "contact"
            ? "Thanks for reaching out — a member of the CloudHight team will be in touch soon."
            : variant === "job"
              ? "Your application has been received. Our team will review it and get in touch."
              : variant === "event"
                ? "Your event request has been submitted. We will be in touch shortly."
                : "Our team will review your request and contact your designated point of contact to arrange an initial discussion."}
        </p>
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full Name" name="name" required />
          <Field label="Email Address" name="email" type="email" required />
          <Field label="Phone" name="phone" />
          <Field label="Company" name="company" />
        </div>
        <Field label="Subject" name="subject" defaultValue={defaultSubject} />
        <Field label="Message" name="message" textarea required />
        <button
          disabled={busy}
          className="px-6 py-3 bg-ocu-cyan text-white rounded-lg font-bold hover:-translate-y-0.5 transition-all"
        >
          {busy ? "Sending…" : "Send Message"}
        </button>
      </form>
    );
  }

  if (variant === "event") {
    return (
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Organisation" name="org" />
          <Field label="Proposed Event Title" name="title" required />
          <Field label="Preferred Date" name="date" type="date" />
          <Field label="Location / Format" name="location" />
          <Field label="Expected Attendees" name="attendees" />
        </div>
        <Field label="Additional Details" name="details" textarea />
        <button
          disabled={busy}
          className="w-full bg-[#0A2A5E] text-white py-3 rounded font-bold"
        >
          {busy ? "Submitting…" : "Submit Request"}
        </button>
      </form>
    );
  }

  if (variant === "job") {
    return (
      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" />
          <Field label="Role of Interest" name="role" />
        </div>
        <label className="block text-sm font-medium text-gray-700">
          CV (PDF or document)
          <input
            type="file"
            name="resume"
            required
            className="mt-1 block w-full text-sm"
          />
        </label>
        <Field label="Cover Letter" name="cover" textarea />
        <button
          disabled={busy}
          className="w-full bg-[#0A2A5E] text-white py-3 rounded font-bold"
        >
          {busy ? "Submitting…" : "Submit Application"}
        </button>
      </form>
    );
  }

  const isPartner = variant === "partner";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label={isPartner ? "Company Name" : "Institution Name"}
          name="org"
          required
        />
        <Select
          label={isPartner ? "Company Type" : "Institution Type"}
          name="type"
          options={
            isPartner
              ? [
                  "Consulting Firm",
                  "Independent Consultant",
                  "Technology Reseller",
                  "Startup",
                  "Other",
                ]
              : ["University", "College", "School", "Training Institute", "Other"]
          }
        />
        <Field
          label={isPartner ? "Country" : "City / Location"}
          name="location"
          required
        />
        <Select
          label={isPartner ? "Approximate Team Size" : "Approximate Student Population"}
          name="size"
          options={
            isPartner
              ? ["1–10", "11–50", "51–200", "201–500", "500+"]
              : ["Under 500", "500–1,000", "1,000–2,500", "2,500–5,000", "5,000+"]
          }
        />
      </div>
      <p className="text-sm text-gray-600">
        This person will serve as the primary contact for initial discussions and
        ongoing coordination regarding{" "}
        {isPartner ? "the Partnership Program" : "this MotivaLogic Academy program"}.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required />
        <Field label="Designation / Role" name="role" />
        <Field
          label={isPartner ? "Business Email" : "Official Email"}
          name="email"
          type="email"
          required
        />
        <Field label="Phone Number" name="phone" />
      </div>
      {!isPartner && (
        <>
          <Select
            label="Program of Interest"
            name="program"
            defaultValue={defaultProgram}
            options={[
              "AWS Certification Excellence",
              "Roadmap Session",
              "Certification Lobby",
              "Mock Examination",
              "Not Sure — Help Us Identify the Right Program",
            ]}
          />
          <Select
            label="Primary Objective"
            name="objective"
            options={[
              "Professional Certifications",
              "Industry Exposure for Students",
              "Technical Skills Development",
              "Internship & Career Opportunities",
              "Faculty Development",
              "Research & Innovation Collaboration",
              "Multiple Areas",
              "Exploring Possibilities",
            ]}
          />
          <Select
            label="Preferred Timeline"
            name="timeline"
            options={[
              "As Soon as Possible",
              "Within 1 Month",
              "Within 1–3 Months",
              "Next Academic Term/Semester",
              "Exploring for the Future",
              "Not Decided Yet",
            ]}
          />
        </>
      )}
      <Field label="Message / Requirements" name="message" textarea />
      <button
        disabled={busy}
        className="w-full bg-[#0A2A5E] hover:bg-[#0d3678] text-white py-3 rounded font-bold transition-colors"
      >
        {busy
          ? "Submitting…"
          : isPartner
            ? "Apply to Partner"
            : "Submit Inquiry"}
      </button>
      <p className="text-sm text-gray-500">
        <strong className="font-semibold text-gray-600">What happens next?</strong>{" "}
        {isPartner
          ? "Our partnerships team will review your request and contact your designated point of contact to arrange an initial discovery call."
          : "Our MotivaLogic Academy team will review your request and contact your designated point of contact to arrange an initial discussion."}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  defaultValue?: string;
}) {
  const cls =
    "mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ocu-cyan/30";
  return (
    <label className="block text-sm font-medium text-gray-700">
      {label}
      {required ? " *" : ""}
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          defaultValue={defaultValue}
          className={cls}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          defaultValue={defaultValue}
          className={cls}
        />
      )}
    </label>
  );
}

function Select({
  label,
  name,
  options,
  defaultValue,
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
}) {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {label}
      <select
        name={name}
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ocu-cyan/30"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
