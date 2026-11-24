"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, CheckCircle2, AlertCircle, Sparkles, Play } from "lucide-react";
import { HeroData } from "@/types/landing";

interface HeroSectionProps {
  data: HeroData;
  onOpenModal: () => void;
}

export default function HeroSection({ data, onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-10 pb-14 md:pt-36 sm:pb-20 bg-gradient-to-b from-[#F2F7F6] via-[#FAFDFD] to-[#FBFBFA]">
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#1F5F5B] text-white text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-[#1F5F5B]/15 uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
          <span>{data.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-[#0F172A] leading-[1.25] sm:leading-[1.2] max-w-4xl mx-auto">
          <span>Lower your </span>
          <span className="text-[#E8704A] underline decoration-[#E8704A]/30 decoration-wavy decoration-2">
            anxiety score
          </span>
          <span> in 90 days without therapy and pills, using our 6-axis psycho-somatic method, or we keep working with you for free</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 sm:mt-8 text-base sm:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
          <strong className="text-[#0F172A] font-semibold">Fix your anxiety from the root, not just the symptoms.</strong>
          <span className="block mt-2 text-slate-600 sm:text-lg">
            We measure your progress on the GAD-7 anxiety scale. Your first score check is on day 21.
          </span>
        </p>

        {/* VSL Video Frame */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 sm:mt-12 relative w-full max-w-3xl sm:max-w-4xl mx-auto"
        >
          {/* Subtle Ambient Glow Behind Video Frame */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#1F5F5B]/30 via-[#E8704A]/25 to-[#1F5F5B]/30 rounded-3xl blur-xl opacity-75 pointer-events-none" />

          <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border-4 border-white/90 bg-[#123835]">
            {data.vslVideo?.url ? (
              <iframe
                src={data.vslVideo.url}
                title={data.vslVideo.title || "Video"}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#123835] via-[#0F2D2A] to-[#0A1F1D] text-white p-6 text-center">
                {/* Subtle Grid overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl shadow-black/40">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 text-[#E8704A] ml-1 fill-[#E8704A]" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* CTA Container */}
        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3">
          <button
            onClick={onOpenModal}
            data-tally-open="KppG7M"
            data-tally-layout="modal"
            data-tally-width="700"
            data-tally-auto-close="1500"
            data-tally-hide-title="1"
            data-tally-transparent-background="1"
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
        </div>

        {/* Trust Value Props Strip */}
        <div className="mt-10 sm:mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
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
        </div>
      </div>
    </section>
  );
}

