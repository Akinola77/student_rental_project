import type { Metadata } from "next";
import { PageHero } from "@/components/Heros";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Request an Event" };

export default function RequestEventPage() {
  return (
    <div className="bg-white">
      <PageHero
        title="Request an Event"
        subtitle="Invite CloudHight to host a briefing, workshop or community day for your organisation."
      />
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
          <InquiryForm variant="event" />
        </div>
      </section>
    </div>
  );
}
