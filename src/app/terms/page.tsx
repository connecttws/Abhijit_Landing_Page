import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Wellness With Abhijit",
  description: "Terms and Conditions governing the use of Wellness With Abhijit website, coaching sessions, and wellness programs.",
};

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      lastUpdated="16 November 2026"
      description="These Terms & Conditions govern your use of our website, online wellness services and programs. By accessing our website, booking a consultation or purchasing any service, you agree to these terms."
    >
      <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">1</span>
            About Our Business
          </h2>
          <p>
            Wellness With Abhijit is a sole proprietorship operated by Abhijit Nayyar, providing online yoga, meditation, pranayama, breathwork, wellness coaching and lifestyle guidance. Our services include individual coaching, group sessions, workshops and structured wellness programs, including the 6-Axis Psycho-Somatic Reset.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">2</span>
            Enrolment and Payments
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Enrolment is confirmed after successful payment.</li>
            <li>Program fees, duration, inclusions and payment terms will be communicated before purchase.</li>
            <li>Any applicable taxes will be displayed or communicated during checkout.</li>
            <li>Customers must provide accurate contact and enrolment information.</li>
            <li>Payments are processed through authorised payment gateways.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">3</span>
            Program Duration and Delivery
          </h2>
          <p>
            Program duration, session frequency and support arrangements will be communicated at the time of enrolment. Services may be delivered through Zoom, WhatsApp, email or other designated online platforms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">4</span>
            Participant Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate information about their health, lifestyle and physical limitations.</li>
            <li>Inform the coach about relevant injuries, medical conditions, medications or other health concerns.</li>
            <li>Practise within their comfort and physical ability.</li>
            <li>Attend scheduled sessions and follow program guidelines.</li>
            <li>Communicate any discomfort experienced during sessions.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">5</span>
            Health Disclaimer
          </h2>
          <p>
            Our services are intended for general wellness, fitness and lifestyle support. They are not a substitute for medical advice, diagnosis, psychotherapy or medical treatment. We do not diagnose, treat or cure anxiety disorders or other medical conditions. Participants should consult qualified healthcare professionals for medical or mental health concerns and must not discontinue prescribed medication or treatment without professional advice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">6</span>
            Results and Expectations
          </h2>
          <p>
            Individual results vary depending on personal circumstances, consistency, participation and other factors. We do not guarantee specific health outcomes or results within a particular timeframe.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">7</span>
            Cancellation and Refunds
          </h2>
          <p>
            All cancellation and refund requests are governed by our Cancellation & Refund Policy published on this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">8</span>
            Intellectual Property
          </h2>
          <p>
            All videos, course materials, documents, recordings, methods and resources provided by Wellness With Abhijit are intended for personal use only. Reproduction, redistribution, resale, recording or commercial use without prior written permission is prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">9</span>
            Privacy
          </h2>
          <p>
            Personal information is handled in accordance with our Privacy Policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">10</span>
            Changes to Services
          </h2>
          <p>
            We reserve the right to make reasonable changes to session schedules, delivery methods or program content when necessary. Participants will be informed of significant changes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">11</span>
            Grievance Redressal
          </h2>
          <p>
            For complaints or unresolved concerns, please contact the Grievance Officer using the contact details provided below. We aim to acknowledge complaints within 48 hours and resolve them within the applicable statutory timelines.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">12</span>
            Governing Law
          </h2>
          <p>
            These terms are governed by the laws of India. Disputes will be subject to the jurisdiction of competent courts in Pune, Maharashtra, subject to applicable consumer protection laws.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">13</span>
            Acceptance
          </h2>
          <p>
            By purchasing or using our services, you acknowledge that you have read and agreed to these Terms & Conditions, subject to applicable laws of India.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
