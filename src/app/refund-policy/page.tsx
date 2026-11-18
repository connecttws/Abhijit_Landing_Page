import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Wellness With Abhijit",
  description: "Cancellation and Refund Policy for online coaching sessions and wellness programs at Wellness With Abhijit.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout
      title="Cancellation & Refund Policy"
      lastUpdated="16 November 2026"
      description="At Wellness With Abhijit, we aim to provide a positive and transparent experience for everyone enrolling in our online wellness programs and coaching services. Please read this policy before making a payment."
    >
      <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">1</span>
            Cancellation Before Program Commencement
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Participants may request cancellation before the agreed program start date.</li>
            <li>Cancellation requests received before the program commences are eligible for a full refund.</li>
            <li>Requests must be submitted through our official WhatsApp number or business email.</li>
            <li>Participants should provide their registered name and payment transaction details.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">2</span>
            Cancellation After Program Commencement
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Once a program has started, refund requests will be assessed based on the services already delivered and the remaining undelivered portion.</li>
            <li>Where a refund is approved, the amount will be calculated fairly, taking into account sessions, consultations and personalised services already provided.</li>
            <li>Any refund decision will be communicated clearly to the participant.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">3</span>
            Individual Session Rescheduling
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Participants should provide at least 24 hours' notice when requesting a change to an individual session.</li>
            <li>Rescheduling requests made with less than 24 hours' notice may be treated as a missed session.</li>
            <li>Rescheduling is subject to coach availability.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">4</span>
            Missed Sessions
          </h2>
          <p>
            Participants are responsible for attending scheduled sessions. Missed sessions without sufficient prior notice will not automatically qualify for additional sessions or refunds. Where possible, alternative arrangements may be offered at our discretion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">5</span>
            Cancellation by Wellness With Abhijit
          </h2>
          <p>
            If we are unable to deliver an agreed session or program service, we will make reasonable efforts to reschedule it. If the service cannot be delivered, an appropriate refund or alternative arrangement will be offered for the undelivered service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">6</span>
            Refund Processing
          </h2>
          <p>
            Approved refunds will generally be initiated within 7–10 working days of approval. The actual time taken for the amount to reflect in the customer's account may depend on the payment provider and banking institution. Refunds will normally be made through the original payment method wherever possible.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">7</span>
            How to Request a Cancellation or Refund
          </h2>
          <p>
            Please contact us with your payment details and reason for the request. All cancellation and refund requests will be handled fairly and in accordance with applicable Indian consumer protection laws. Nothing in this policy limits any consumer rights available under applicable law.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
