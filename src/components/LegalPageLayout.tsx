"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowLeft, Mail, Phone, MapPin, Clock, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  description?: string;
  children: React.ReactNode;
}

const policyTabs = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cancellation & Refunds", href: "/refund-policy" },
  { label: "Shipping & Exchange", href: "/shipping" },
  { label: "Contact Us", href: "/contact" },
];

export default function LegalPageLayout({
  title,
  lastUpdated,
  description,
  children,
}: LegalPageLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#0F172A]">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3.5 sm:py-4">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-md shadow-[#1F5F5B]/20 group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Wellness With Abhijit Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm sm:text-base text-[#0F172A] tracking-tight leading-tight">
                Wellness With Abhijit
              </span>
              <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                Official Website Policies
              </span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1F5F5B] hover:text-[#174946] bg-[#1F5F5B]/10 hover:bg-[#1F5F5B]/15 px-3.5 py-2 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to main site</span>
          </Link>
        </div>
      </header>

      {/* Policy Navigation Tabs */}
      <nav className="bg-slate-100/80 border-b border-slate-200/80 overflow-x-auto py-2.5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center gap-2 whitespace-nowrap min-w-max">
          {policyTabs.map((tab) => {
            const isActive = pathname === tab.href || (tab.href === "/refund-policy" && pathname === "/refunds");
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={`text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#1F5F5B] text-white shadow-sm"
                    : "text-slate-600 hover:text-[#1F5F5B] hover:bg-white/80"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 py-10 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header Banner */}
          <div className="mb-10 pb-8 border-b border-slate-200">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] text-xs font-bold uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5 text-[#E8704A]" />
              Legal & Compliance
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight">
              {title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 font-medium">
              <span>Brand: <strong>Wellness With Abhijit</strong></span>
              <span>•</span>
              <span>Proprietor: <strong>Abhijit Nayyar</strong></span>
              <span>•</span>
              <span>Last updated: <strong>{lastUpdated}</strong></span>
            </div>
            {description && (
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Children Content */}
          <div className="legal-content">
            {children}
          </div>

          {/* Official Contact Info Card at Bottom */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
            <h3 className="text-xl font-black text-[#0F172A] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#1F5F5B]" />
              Business & Support Information
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              For any queries, service clarifications, or grievance redressal regarding our policies, please contact us:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Business Entity</div>
                <div className="font-bold text-[#0F172A] mt-0.5">Wellness With Abhijit</div>
                <div className="text-slate-600 text-xs">Proprietor: Abhijit Nayyar (Sole Proprietorship)</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#1F5F5B]" /> Email Support
                </div>
                <a href="mailto:wellnesswithabhijit@gmail.com" className="font-bold text-[#1F5F5B] hover:underline mt-0.5 block">
                  wellnesswithabhijit@gmail.com
                </a>
                <div className="text-slate-500 text-xs">Response within 1–2 business days</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#1F5F5B]" /> WhatsApp / Phone
                </div>
                <a href="https://wa.me/919011459588" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1F5F5B] hover:underline mt-0.5 block">
                  +91-9011459588
                </a>
                <div className="text-slate-500 text-xs">Mon–Sat, 9:00 AM – 6:00 PM IST</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1F5F5B]" /> Registered Address
                </div>
                <div className="font-bold text-[#0F172A] mt-0.5">Kalyani Nagar, Pune</div>
                <div className="text-slate-600 text-xs">Maharashtra – 411014, India</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
