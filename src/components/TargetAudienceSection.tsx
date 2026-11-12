"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  CalendarX, 
  Coffee, 
  Activity, 
  Moon, 
  Repeat, 
  HeartCrack, 
  ShieldAlert, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { TargetAudienceData } from "@/types/landing";

interface TargetAudienceSectionProps {
  data: TargetAudienceData;
  onOpenModal: () => void;
}

const icons = [
  Sparkles,
  CalendarX,
  Coffee,
  Activity,
  Moon,
  Repeat,
  HeartCrack,
  ShieldAlert,
];

export default function TargetAudienceSection({
  data,
  onOpenModal,
}: TargetAudienceSectionProps) {
  return (
    <section id="for-you" className="py-16 sm:py-24 bg-[#FBFBFA] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#1F5F5B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E8704A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <CheckCircle2 className="w-4 h-4 text-[#E8704A]" />
            Relatable Patterns
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A]">
            {data.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            {data.subtitle}
          </p>
        </div>

        {/* 8 Pain Point Cards in 2-column or 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {data.points.map((point, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md shadow-slate-900/5 hover:border-[#1F5F5B]/40 hover:shadow-xl hover:shadow-[#1F5F5B]/10 transition-all duration-300"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#1F5F5B]/10 to-[#1F5F5B]/5 text-[#1F5F5B] flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#1F5F5B] group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#1F5F5B] transition-colors mb-1.5 flex items-center gap-2">
                    <span>{point.title}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-[#1F5F5B] via-[#E8704A] to-[#1F5F5B]">
            <div className="bg-white rounded-[22px] px-6 sm:px-10 py-6 sm:py-8 text-center max-w-2xl">
              <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] mb-2">
                Don’t spend another month surviving in survival mode.
              </h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6">
                Your body was not designed to carry chronic stress 24/7. Let’s identify exactly what’s keeping your nervous system trapped.
              </p>
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-[#E8704A] hover:bg-[#D85E38] text-white px-8 sm:px-10 py-4 text-base sm:text-lg font-bold shadow-lg shadow-[#E8704A]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer border-b-4 border-[#014D82]"
              >
                <span>{data.ctaText}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

