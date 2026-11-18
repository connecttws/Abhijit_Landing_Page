import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Wellness With Abhijit",
  description: "Privacy Policy explaining how Wellness With Abhijit collects, protects, and handles personal data and health information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="16 November 2026"
      description="At Wellness With Abhijit, we respect your privacy and are committed to protecting the personal information you share with us. This policy explains how we collect, use, store and protect your information when you visit our website or use our services."
    >
      <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">1</span>
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email address and mobile number.</li>
            <li>Payment and transaction details.</li>
            <li>Age and general lifestyle information.</li>
            <li>Wellness assessment and questionnaire responses.</li>
            <li>Information about sleep, stress, physical activity and daily habits.</li>
            <li>Relevant health information voluntarily shared for personalised wellness guidance.</li>
            <li>Posture photographs, body measurements and relevant reports, where voluntarily provided.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">2</span>
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and personalise wellness programs.</li>
            <li>Conduct initial assessments and monitor progress.</li>
            <li>Schedule sessions and communicate program updates.</li>
            <li>Process payments and maintain transaction records.</li>
            <li>Respond to enquiries and customer support requests.</li>
            <li>Improve our services and website.</li>
            <li>Meet applicable legal and regulatory obligations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">3</span>
            Payment Information
          </h2>
          <p>
            Payments are processed through authorised payment service providers such as Razorpay. We do not intentionally collect or store complete credit or debit card details on our website. Payment processing is subject to the respective provider's privacy and security policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">4</span>
            Sharing of Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not sell or rent your personal information.</li>
            <li>Information may be shared with service providers supporting our website, communication and program delivery.</li>
            <li>Information may be shared with payment gateways for processing transactions.</li>
            <li>Information may be shared with coaches or professionals directly involved in delivering your program, where necessary.</li>
            <li>Information may be disclosed to government authorities or regulators where legally required.</li>
            <li>We aim to share only the information necessary for the relevant purpose.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">5</span>
            Health Information and Photographs
          </h2>
          <p>
            Health-related information, assessments, photographs and reports are used only for the agreed wellness services and related purposes. We will obtain separate permission before using identifiable testimonials, photographs, videos or personal experiences for marketing or promotional purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">6</span>
            Data Security and Retention
          </h2>
          <p>
            We take reasonable measures to protect personal information against unauthorised access, disclosure, alteration or loss. Information is retained only for as long as reasonably necessary for service delivery, legal compliance and legitimate business requirements. Where information is no longer required, we will take appropriate steps to delete or anonymise it, subject to legal retention obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">7</span>
            Cookies and Website Analytics
          </h2>
          <p>
            Our website may use cookies and analytics tools to understand website traffic, improve user experience and measure marketing performance. You may manage cookies through your browser settings where available.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">8</span>
            Your Privacy Rights
          </h2>
          <p>
            Subject to applicable law, you may request access to, correction of or deletion of your personal information, withdraw consent where processing is based on consent, or raise concerns about how your information is handled. We will provide an appropriate response to such requests in accordance with applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">9</span>
            Third-Party Platforms
          </h2>
          <p>
            Our services may use third-party platforms such as Zoom, WhatsApp, payment gateways and website hosting providers. Their handling of information is governed by their respective privacy policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">10</span>
            Children's Privacy
          </h2>
          <p>
            Our services are primarily intended for adults. We do not knowingly collect children's personal information without appropriate authorisation and consent where required by law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">11</span>
            Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The latest version will be published on our website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">12</span>
            Contact for Privacy Requests
          </h2>
          <p>
            For privacy-related questions, requests or concerns, contact Abhijit Nayyar at{" "}
            <a href="mailto:wellnesswithabhijit@gmail.com" className="text-[#1F5F5B] font-bold underline">
              wellnesswithabhijit@gmail.com
            </a>{" "}
            or through WhatsApp at{" "}
            <a href="https://wa.me/919011459588" className="text-[#1F5F5B] font-bold underline">
              +91-9011459588
            </a>.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
