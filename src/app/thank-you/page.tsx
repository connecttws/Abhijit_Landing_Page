"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Calendar, 
  Activity, 
  Heart, 
  Apple, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare,
  Clock
} from "lucide-react";
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

      {/* Main Body */}
      <div className="flex-grow py-8 sm:py-14 relative overflow-hidden flex items-center justify-center">
        {/* Background Ambience */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#1F5F5B]/10 via-[#E8704A]/5 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1F5F5B]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-12 shadow-2xl shadow-slate-900/5 border border-slate-200/90 text-center"
          >
            {/* Animated Checkmark Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 220 }}
              className="w-20 h-20 bg-emerald-100 text-[#1F5F5B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner"
            >
              <CheckCircle2 className="w-10 h-10 text-[#1F5F5B]" />
            </motion.div>

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] text-xs font-black uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
              Session Request Confirmed
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-3">
              Thank You{userName ? `, ${userName}` : ""}!
            </h1>

            <p className="text-lg sm:text-xl text-[#E8704A] font-bold mb-2">
              Your consultation request has been received successfully.
            </p>

            <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto">
              Our team will reach out via WhatsApp on your registered number to confirm your preferred 1-on-1 private Zoom slot with Coach Abhijit.
            </p>

            {/* What to expect card */}
            <div className="bg-[#FAFDFD] rounded-2xl p-6 sm:p-8 text-left mb-8 border border-slate-200/80">
              <h2 className="text-lg sm:text-xl font-black text-[#0F172A] flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-[#1F5F5B]" />
                What We Will Cover in Your Free 1-on-1 Session:
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                A private 30 to 45-minute confidential session designed to uncover the biological drivers behind your stress loops.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Your current GAD-7 Anxiety Score & Root Cause Scan breakdown",
                  "Pinpointing where stress is stored in your gut, spine, and breath",
                  "One immediate somatic vagus nerve reset you can use today",
                  "A clear 90-day roadmap tailored for your daily working calendar",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      ✓
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="p-3.5 rounded-xl bg-white border border-[#1F5F5B]/20 flex items-center gap-2.5 text-xs text-slate-700 font-semibold">
                <Clock className="w-4 h-4 text-[#E8704A] shrink-0" />
                <span>Coach Abhijit personally conducts this session. Please keep a quiet, undisturbed space ready.</span>
              </div>
            </div>

            {/* Core Pillars Focus */}
            <div className="mb-8">
              <h3 className="text-xs font-bold tracking-widest text-[#1F5F5B] uppercase mb-4">
                What Our 6-Axis System Focuses On
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs font-bold text-slate-700">
                <span className="bg-slate-100 px-3.5 py-2 rounded-full border border-slate-200 flex items-center gap-1.5">
                  <Apple className="w-3.5 h-3.5 text-[#E8704A]" /> Gut-Brain Chemistry
                </span>
                <span className="bg-slate-100 px-3.5 py-2 rounded-full border border-slate-200 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#1F5F5B]" /> Vagal Breathing
                </span>
                <span className="bg-slate-100 px-3.5 py-2 rounded-full border border-slate-200 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#1F5F5B]" /> Spinal Tension Release
                </span>
                <span className="bg-slate-100 px-3.5 py-2 rounded-full border border-slate-200 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-[#E8704A]" /> Sleep Architecture
                </span>
                <span className="bg-slate-100 px-3.5 py-2 rounded-full border border-slate-200 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1F5F5B]" /> Somatic SOS Protocol
                </span>
              </div>
            </div>

            {/* Optional Intake Assessment Form */}
            <div className="mb-8 p-4 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left">
              <div className="mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E8704A] block">
                  Quick 60-Second Intake
                </span>
                <h4 className="text-base sm:text-lg font-black text-[#0F172A]">
                  Help Coach Abhijit prepare your Root Cause Scan
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Answer these quick questions so Coach Abhijit can evaluate your specific symptom triggers before your session:
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden">
                <iframe
                  src="https://tally.so/embed/KppG7M?hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="650"
                  frameBorder="0"
                  title="Pre-Consultation Intake Assessment"
                  className="w-full min-h-[550px] sm:min-h-[650px] border-0"
                />
              </div>
            </div>

            {/* Back to Website Button */}
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1F5F5B] hover:bg-[#174946] px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#1F5F5B]/20 transition-all hover:scale-105 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Website</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
