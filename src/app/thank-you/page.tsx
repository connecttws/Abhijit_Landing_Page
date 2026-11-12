"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft, Calendar, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lead_name");
      if (stored) {
        setUserName(stored.split(" ")[0]);
      }
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-[#FBFBFA]">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="lazyOnload"
      />

      {/* Header bar */}
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-md py-4 sticky top-0 z-30">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1F5F5B] hover:text-[#174946] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Page</span>
          </Link>
          <div className="text-xs font-semibold text-slate-500">
            Step 3 of 3: Pre-Consultation Assessment
          </div>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-grow py-8 sm:py-12 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#1F5F5B]/10 to-transparent blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
          {/* Success Banner Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80 text-center mb-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-[#1F5F5B] rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
              Session Request Confirmed
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight mb-3">
              {userName ? `${userName}, you're` : "You're"} One Step Away From Complete Calm!
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Your consultation request has been logged. Please take <strong>60 seconds</strong> to complete the confidential intake questions below. This allows Coach Abhijit to analyze your specific symptom triggers before your session.
            </p>

            {/* Reassurance pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold text-slate-700">
              <span className="bg-slate-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1F5F5B]" /> 100% Confidential
              </span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#1F5F5B]" /> Verified 1-on-1 Consultation
              </span>
              <span className="bg-slate-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-[#E8704A]" /> 6-Axis Personalized Report
              </span>
            </div>
          </motion.div>

          {/* Embedded Tally Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden p-2 sm:p-6"
          >
            <iframe
              src="https://tally.so/embed/KppG7M?hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="800"
              frameBorder="0"
              title="Pre-Consultation Intake Assessment"
              className="w-full min-h-[650px] sm:min-h-[750px] border-0"
            />
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

