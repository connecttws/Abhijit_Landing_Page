"use client";

import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />

      {/* Clean Header Bar */}
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md py-3.5 sticky top-0 z-30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl overflow-hidden shadow-xs shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-sm text-[#0F172A] hidden sm:inline">
              Wellness With Abhijit
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1F5F5B] hover:text-[#174946] bg-[#1F5F5B]/10 hover:bg-[#1F5F5B]/15 px-3.5 py-1.5 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to main site</span>
          </Link>
        </div>
      </header>

      {/* Main Body - Directly the Form Interface */}
      <div className="flex-grow py-4 sm:py-8 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-b from-[#1F5F5B]/5 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-2 sm:px-6">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden p-1 sm:p-4">
            <iframe
              src="https://tally.so/embed/KppG7M?hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="eager"
              width="100%"
              height="800"
              frameBorder="0"
              title="Pre-Consultation Intake Assessment"
              className="w-full min-h-[720px] sm:min-h-[820px] border-0"
            />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
