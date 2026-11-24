"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Sparkles, 
  MessageCircle,
  Clock,
  CalendarCheck,
  Video
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FBFBFA]">
      {/* Header bar */}
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md py-3.5 sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between">
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

      {/* 1. Hero Confirmation: Your call is booked !!!! */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#1F5F5B]/10 via-transparent to-transparent relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-100 text-[#1F5F5B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-600/10 border-4 border-white"
          >
            <CalendarCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[#1F5F5B]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] text-xs font-black uppercase tracking-wider mb-4 border border-[#1F5F5B]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
              Confirmation Received
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-4">
              Your call is booked !!!!
            </h1>

            <p className="text-base sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
              We have received your consultation booking. Our team will reach out to you directly on WhatsApp to confirm your preferred 1-on-1 private Zoom slot with Coach Abhijit.
            </p>
          </motion.div>

          {/* Quick Onboarding Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left"
          >
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#1F5F5B] flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-4 h-4 text-[#1F5F5B]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">1. WhatsApp Message</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Expect a message from our team to finalize your preferred time.</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#E8704A] flex items-center justify-center shrink-0 mt-0.5">
                <Video className="w-4 h-4 text-[#E8704A]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">2. Private 1-on-1 Call</div>
                <div className="text-[11px] text-slate-500 mt-0.5">30–45 min private Zoom session directly with Coach Abhijit.</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1F5F5B]/10 text-[#1F5F5B] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-[#1F5F5B]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">3. Root Cause Scan</div>
                <div className="text-[11px] text-slate-500 mt-0.5">GAD-7 score analysis, somatic tension map & personal reset plan.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Meet The Founder Section */}
      <section className="py-14 sm:py-20 bg-[#1F5F5B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Picture: Image of Abhijit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-5/12 flex flex-col items-center"
            >
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 group">
                <Image
                  src="/images/abhijit-nayyar.jpeg"
                  alt="Abhijit Nayyar - Founder & Lead Coach"
                  fill
                  className="object-cover object-center z-0 transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                />

                {/* Floating Label */}
                <div className="absolute bottom-5 left-5 right-5 z-20 text-left bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-4 rounded-2xl border border-white/10">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#E8704A] text-white text-[11px] font-black uppercase tracking-wider mb-1 shadow-xs">
                    Founder & Lead Coach
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Abhijit Nayyar
                  </h3>
                  <p className="text-xs text-[#D6E5E0] font-semibold">
                    Kaivalyadhama Trained Yoga & Anxiety Coach
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content: Story & Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full lg:w-7/12 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D6E5E0] text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
                MEET THE FOUNDER
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
                I was where you are
              </h2>

              <div className="mb-6 p-3 rounded-2xl bg-white/5 border border-white/10 inline-flex items-center gap-3">
                <div className="text-left">
                  <div className="text-lg font-black text-white leading-tight">
                    Abhijit Nayyar
                  </div>
                  <div className="text-xs text-[#D6E5E0] font-semibold">
                    Founder & Lead Coach · Kaivalyadhama Trained
                  </div>
                </div>
              </div>

              {/* Exact Provided Story Text */}
              <div className="space-y-4 text-base sm:text-lg text-[#D6E5E0] leading-relaxed">
                <p>
                  Before I became a coach, I spent years in corporate jobs, chasing deadlines and living on coffee. Anxiety, sleepless nights, acid reflux and back pain became normal for me. In 2018 I lost my job. For once I didn’t rush into the next role. In 2019 I found the Bhagavad Gita, and through it, yoga. I trained at Kaivalyadhama Yoga Institute, and the practice healed what years of pushing through had not.
                </p>
                <p>
                  Most things people try work on the anxious moment. I built the 6-Axis Psycho-Somatic Reset to work on the body that keeps producing it, in a way that fits a full working day.
                </p>
              </div>

              {/* Credential Highlights */}
              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-base font-black text-white">5,000+ Hours</div>
                  <div className="text-xs text-[#D6E5E0] mt-0.5">Teaching Experience</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-base font-black text-white">300+ People</div>
                  <div className="text-xs text-[#D6E5E0] mt-0.5">Clients Coached</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-base font-black text-white">Kaivalyadhama</div>
                  <div className="text-xs text-[#D6E5E0] mt-0.5">Yoga Institute Trained</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Back to Home CTA */}
      <section className="py-12 bg-white border-t border-slate-200 text-center">
        <div className="mx-auto max-w-md px-4">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2.5 w-full rounded-2xl bg-[#1F5F5B] hover:bg-[#174946] px-8 py-4 text-base font-black text-white shadow-xl shadow-[#1F5F5B]/20 transition-all hover:scale-105 active:scale-95 border-b-4 border-[#014D82]"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Main Website</span>
          </Link>
          <p className="mt-2.5 text-xs text-slate-500 font-medium">
            Explore the 6-Axis Psycho-Somatic Reset methodology
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
