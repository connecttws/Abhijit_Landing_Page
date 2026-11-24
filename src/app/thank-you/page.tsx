"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lead_name");
      if (stored) {
        setUserName(stored.split(" ")[0]);
      }

      // Initialize Tally embeds
      const initTally = () => {
        if (typeof (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally !== "undefined") {
          (window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds();
        } else {
          document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((el) => {
            const iframe = el as HTMLIFrameElement;
            if (iframe.dataset.tallySrc) {
              iframe.src = iframe.dataset.tallySrc;
            }
          });
        }
      };

      if (typeof (window as unknown as { Tally?: unknown }).Tally !== "undefined") {
        initTally();
      } else {
        const scriptId = "tally-js";
        if (!document.getElementById(scriptId)) {
          const s = document.createElement("script");
          s.id = scriptId;
          s.src = "https://tally.so/widgets/embed.js";
          s.onload = initTally;
          s.onerror = initTally;
          document.body.appendChild(s);
        }
      }
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally !== "undefined") {
            (window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds();
          }
        }}
      />

      {/* Header bar */}
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md py-3.5 sticky top-0 z-30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl overflow-hidden shadow-xs shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Wellness With Abhijit Logo"
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

      {/* Main Body - Directly provides the form interface as requested */}
      <div className="flex-grow py-6 sm:py-10 relative overflow-hidden flex items-center justify-center">
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#1F5F5B]/10 via-[#E8704A]/5 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1F5F5B]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-5 sm:p-8 shadow-2xl shadow-slate-900/5 border border-slate-200/90 text-center"
          >
            {/* Direct Form Interface Header */}
            <div className="mb-4 text-center">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] text-xs font-black uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
                Intake Assessment
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
                {userName ? `Welcome, ${userName}!` : "Pre-Consultation Intake"}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg mx-auto">
                Please complete this quick 60-second assessment so Coach Abhijit can evaluate your symptom triggers before your private 1-on-1 session.
              </p>
            </div>

            {/* Exact Tally Embed Interface */}
            <div className="w-full bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs mb-6">
              <iframe
                data-tally-src="https://tally.so/embed/KppG7M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Pre-Consultation Intake Assessment"
                className="w-full min-h-[750px] border-0"
              />
            </div>

            {/* Back to Website CTA */}
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1F5F5B] hover:bg-[#174946] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#1F5F5B]/20 transition-all hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Main Website</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
