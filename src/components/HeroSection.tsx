"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { HeroData } from "@/types/landing";

interface HeroSectionProps {
  data: HeroData;
  onOpenModal: () => void;
}

export default function HeroSection({ data, onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 bg-gradient-to-b from-[#F2F7F6] via-[#FAFDFD] to-[#FBFBFA]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#1F5F5B]/10 via-[#E8704A]/5 to-transparent rounded-full blur-3xl opacity-80" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#1F5F5B]/5 rounded-full blur-2xl" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#E8704A]/5 rounded-full blur-2xl" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f5f5b08_1px,transparent_1px),linear-gradient(to_bottom,#1f5f5b08_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#1F5F5B] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-[#1F5F5B]/15 uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
          <span>{data.badge}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-[#0F172A] leading-[1.25] sm:leading-[1.2] max-w-4xl mx-auto"
        >
          <span>{data.headline.prefix} </span>
          <span className="text-[#E8704A] underline decoration-[#E8704A]/30 decoration-wavy decoration-2">
            {data.headline.highlight1}
          </span>
          <span> {data.headline.middle} </span>
          <span className="text-[#1F5F5B] font-extrabold bg-[#1F5F5B]/10 px-2 py-0.5 rounded-lg inline-block">
            {data.headline.highlight2}
          </span>
          <span> {data.headline.suffix} </span>
          <span className="text-[#1F5F5B] underline decoration-[#1F5F5B] font-black">
            {data.headline.highlight3}
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto"
        >
          <strong className="text-[#0F172A] font-semibold">Fix your anxiety from the root, not just the symptoms.</strong>
          <span className="block mt-2 text-slate-600 sm:text-lg">
            We find what’s really driving it, then repair your gut-mind chemistry, sleep, posture, and stress-related body pain.
          </span>
        </motion.p>

        {/* VSL Video Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-8 sm:mt-12 relative w-full max-w-3xl sm:max-w-4xl mx-auto"
        >
          {/* Subtle Ambient Glow Behind Video Frame */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#1F5F5B]/30 via-[#E8704A]/25 to-[#1F5F5B]/30 rounded-3xl blur-xl opacity-75 pointer-events-none" />

          <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-4 border-white/90 bg-[#123835]">
            <iframe
              src={data.vslVideo?.url || "https://fast.wistia.net/embed/iframe/sppu5h7owc?seo=false&videoFoam=true"}
              title={data.vslVideo?.title || "How The 6-Axis Psycho-Somatic Reset Method Works"}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
            />
          </div>
        </motion.div>

        {/* CTA Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3"
        >
          <button
            onClick={onOpenModal}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-[#E8704A] to-[#F17E5B] px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl font-black text-white shadow-xl shadow-[#E8704A]/30 transition-all duration-300 hover:from-[#DF633D] hover:to-[#E8704A] hover:shadow-2xl hover:shadow-[#E8704A]/40 hover:-translate-y-1 active:translate-y-0 cursor-pointer border-b-4 border-[#014D82]"
          >
            <span>{data.ctaText}</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Urgency Note */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-4 py-1.5 rounded-full mt-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{data.urgencyNote}</span>
          </div>
        </motion.div>

        {/* Trust Value Props Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 sm:mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left"
        >
          {data.trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1F5F5B] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

