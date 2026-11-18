import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { Mail, Phone, MapPin, Clock, MessageSquare, ShieldAlert, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Wellness With Abhijit",
  description: "Contact Wellness With Abhijit for program enquiries, session scheduling, payment support, and grievance redressal.",
};

export default function ContactPage() {
  return (
    <LegalPageLayout
      title="Contact Us"
      lastUpdated="16 November 2026"
      description="We are here to help you with enquiries about our online yoga sessions, wellness coaching programs, payments, enrolments and ongoing support."
    >
      <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        {/* Business Information */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">1</span>
            Business Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase block">Business Name</span>
              <span className="text-base font-bold text-[#0F172A]">Wellness With Abhijit</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase block">Legal Proprietor</span>
              <span className="text-base font-bold text-[#0F172A]">Abhijit Nayyar</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase block">Business Type</span>
              <span className="text-base font-bold text-[#0F172A]">Sole Proprietorship</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-500 uppercase block">Official Website</span>
              <a href="https://wellnesswithabhijit.com" className="text-base font-bold text-[#1F5F5B] hover:underline">
                https://wellnesswithabhijit.com
              </a>
            </div>
          </div>
        </section>

        {/* Customer Support */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">2</span>
            Customer Support
          </h2>
          <p>
            For assistance with program details and enrolment, payment-related queries, session scheduling and rescheduling, program access and technical difficulties, cancellation and refund requests, or general feedback and complaints, please contact us through WhatsApp or email:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <a
              href="mailto:wellnesswithabhijit@gmail.com"
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1F5F5B] hover:shadow-md transition-all flex items-start gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1F5F5B]/10 text-[#1F5F5B] flex items-center justify-center shrink-0 group-hover:bg-[#1F5F5B] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase block">Email Support</span>
                <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#1F5F5B] transition-colors">
                  wellnesswithabhijit@gmail.com
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">Response within 1–2 business days</span>
              </div>
            </a>

            <a
              href="https://wa.me/919011459588"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#1F5F5B] hover:shadow-md transition-all flex items-start gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase block">WhatsApp / Phone Support</span>
                <span className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#1F5F5B] transition-colors">
                  +91-9011459588
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">Direct chat with our support team</span>
              </div>
            </a>
          </div>
        </section>

        {/* Customer Support Hours */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">3</span>
            Customer Support Hours
          </h2>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#1F5F5B] shrink-0" />
            <div>
              <p className="font-bold text-[#0F172A]">Monday to Saturday: 9:00 AM to 6:00 PM IST</p>
              <p className="text-xs text-slate-500 mt-0.5">We aim to respond to customer enquiries within 1–2 business days.</p>
            </div>
          </div>
        </section>

        {/* Grievance Redressal */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">4</span>
            Grievance Redressal
          </h2>
          <p>
            For complaints, service-related concerns or unresolved issues, please contact our Grievance Officer:
          </p>
          <div className="p-5 rounded-2xl bg-[#FAFDFD] border border-[#1F5F5B]/30 space-y-2 text-sm">
            <p><strong>Grievance Officer:</strong> Abhijit Nayyar</p>
            <p><strong>Designation:</strong> Proprietor</p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:wellnesswithabhijit@gmail.com" className="text-[#1F5F5B] font-bold underline">
                wellnesswithabhijit@gmail.com
              </a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/919011459588" className="text-[#1F5F5B] font-bold underline">
                +91-9011459588
              </a>
            </p>
            <p className="text-xs text-slate-500 pt-1">
              We aim to acknowledge consumer complaints within 48 hours of receipt and resolve them within one month, in accordance with applicable statutory requirements.
            </p>
          </div>
        </section>

        {/* Business Address */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#1F5F5B]/10 text-[#1F5F5B] text-sm flex items-center justify-center font-bold">5</span>
            Business Address
          </h2>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#1F5F5B] shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-[#0F172A]">Wellness With Abhijit</p>
              <p className="text-slate-600">Kalyani Nagar, Pune, Maharashtra – 411014, India.</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 pt-2 italic">
            We value your feedback and are committed to providing transparent, reliable and professional wellness services.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
