import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Shipping & Exchange Policy | Wellness With Abhijit",
  description: "Shipping and Exchange Policy for digital wellness programs and coaching sessions at Wellness With Abhijit.",
};

export default function ShippingPage() {
  return (
    <LegalPageLayout
      title="Shipping & Exchange Policy"
      lastUpdated="16 November 2026"
      description="Wellness With Abhijit provides digital wellness coaching services, online yoga sessions, meditation, pranayama, breathwork, workshops and personalised wellness programs."
    >
      <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">1</span>
            Physical Shipping
          </h2>
          <p>
            We do not sell or ship physical products through our website. All our services are delivered digitally through online platforms such as Zoom, WhatsApp, email or other designated communication channels. Therefore, physical shipping and delivery charges are not applicable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">2</span>
            Digital Service Delivery
          </h2>
          <p>
            After successful payment, customers will receive relevant onboarding instructions and program access details through their registered email address or WhatsApp number. The delivery timeline will depend on the service purchased and the agreed program commencement date. For scheduled programs, access and session details will be communicated before the commencement of the program.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">3</span>
            Exchange Policy
          </h2>
          <p>
            Since our offerings consist of digital services and personalised coaching programs, physical product exchanges are not applicable.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">4</span>
            Assistance with Service Access
          </h2>
          <p>
            If you experience any difficulty accessing a purchased service, joining a scheduled session or receiving program-related information, please contact us. We will make reasonable efforts to resolve the issue promptly.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
