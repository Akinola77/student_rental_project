"use client";

import { FormEvent, useState } from "react";
import { roleTitles } from "@/lib/careers";
import { site } from "@/lib/data";
import TurnstileField from "@/components/TurnstileField";

type Variant = "academy" | "partner" | "contact" | "event" | "job";

export default function InquiryForm({
  variant,
  defaultProgram,
  defaultSubject,
  defaultRole,
}: {
  variant: Variant;
  defaultProgram?: string;
  defaultSubject?: string;
  defaultRole?: string;
}) {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      data.set("variant", variant);
      const res = await fetch("/api/contact", { method: "POST", body: data });
      const payload = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;
      if (!res.ok || !payload?.ok) {
        setError(
          payload?.error ||
            `We could not send your message just now. Please email ${site.email} directly.`,
        );
        return;
      }
      setDone(true);
    } catch {
      setError(
        `We could not send your message just now. Please email ${site.email} directly.`,
      );
    } finally {
      setBusy(false);
    }
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
      <form onSubmit={onSubmit} className="relative space-y-5">
        <Honeypot />
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full Name" name="name" required />
          <Field label="Email Address" name="email" type="email" required />
          <Field label="Phone" name="phone" />
          <Field label="Company" name="company" />
        </div>
        <Field label="Subject" name="subject" defaultValue={defaultSubject} />
        <Field label="Message" name="message" textarea required />
        <TurnstileField resetKey={error} />
        <FormStatus busy={busy} error={error} label="Send Message" />
      </form>
    );
  }

  if (variant === "event") {
    return (
      <form onSubmit={onSubmit} className="relative space-y-5">
        <Honeypot />
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
        <TurnstileField resetKey={error} />
        <FormStatus
          busy={busy}
          error={error}
          label="Submit Request"
          className="w-full bg-[#0A2A5E] text-white py-3 rounded font-bold"
        />
      </form>
    );
  }

  if (variant === "job") {
    return (
      <form onSubmit={onSubmit} className="relative space-y-5">
        <Honeypot />
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" />
          <Select
            label="Role of Interest"
            name="role"
            required
            defaultValue={defaultRole}
            options={[...roleTitles, "Other / speculative application"]}
          />
        </div>
        <label className="block text-sm font-medium text-gray-700">
          CV (PDF or document) *
          <input
            type="file"
            name="resume"
            required
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            className="mt-1 block w-full text-sm"
          />
        </label>
        <Field label="Cover Letter" name="cover" textarea />
        <TurnstileField resetKey={error} />
        <FormStatus
          busy={busy}
          error={error}
          label="Submit Application"
          className="w-full bg-[#0A2A5E] text-white py-3 rounded font-bold"
        />
        <p className="text-sm text-gray-500">
          <strong className="font-semibold text-gray-600">What happens next?</strong>{" "}
          Our team will review your application and contact you if we would like
          to discuss the role further.
        </p>
      </form>
    );
  }

  const isPartner = variant === "partner";

  return (
    <form onSubmit={onSubmit} className="relative space-y-6">
      <Honeypot />
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
      <TurnstileField resetKey={error} />
      <FormStatus
        busy={busy}
        error={error}
        label={isPartner ? "Apply to Partner" : "Submit Inquiry"}
        className="w-full bg-[#0A2A5E] hover:bg-[#0d3678] text-white py-3 rounded font-bold transition-colors"
      />
      <p className="text-sm text-gray-500">
        <strong className="font-semibold text-gray-600">What happens next?</strong>{" "}
        {isPartner
          ? "Our partnerships team will review your request and contact your designated point of contact to arrange an initial discovery call."
          : "Our MotivaLogic Academy team will review your request and contact your designated point of contact to arrange an initial discussion."}
      </p>
    </form>
  );
}

function Honeypot() {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
      <label>
        Website
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </label>
    </div>
  );
}

function FormStatus({
  busy,
  error,
  label,
  className = "px-6 py-3 bg-ocu-cyan text-white rounded-lg font-bold hover:-translate-y-0.5 transition-all",
}: {
  busy: boolean;
  error: string;
  label: string;
  className?: string;
}) {
  return (
    <>
      {error ? (
        <p
          role="alert"
          className="text-sm text-red-700 bg-red-50 border border-red-100 rounded-lg p-3"
        >
          {error}
        </p>
      ) : null}
      <button disabled={busy} className={className}>
        {busy ? (label.startsWith("Send") ? "Sending…" : "Submitting…") : label}
      </button>
    </>
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
  required,
}: {
  label: string;
  name: string;
  options: string[];
  defaultValue?: string;
  required?: boolean;
}) {
  return (
    <label className="block text-sm font-medium text-gray-700">
      {label}
      {required ? " *" : ""}
      <select
        name={name}
        required={required}
        defaultValue={defaultValue ?? (required ? "" : undefined)}
        className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-ocu-cyan/30"
      >
        {required && !defaultValue ? (
          <option value="" disabled>
            Select a role
          </option>
        ) : null}
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
