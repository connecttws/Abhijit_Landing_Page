"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, HeartPulse, Brain, Award, Sparkles } from "lucide-react";

interface CoachProfileSectionProps {
  onOpenModal: () => void;
}

export default function CoachProfileSection({ onOpenModal }: CoachProfileSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#1F5F5B] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative w-full max-w-md rounded-3xl bg-gradient-to-br from-[#174B48] to-[#123A37] p-8 border border-white/20 shadow-2xl text-center">
              {/* Avatar Icon / Emblem */}
              <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-[#E8704A] to-[#F39171] flex items-center justify-center text-white shadow-xl shadow-[#E8704A]/30 mb-6">
                <Brain className="w-12 h-12" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#D6E5E0] text-xs font-bold uppercase tracking-wider mb-2">
                Founder & Lead Coach
              </span>
              <h3 className="text-3xl font-black text-white">Abhijit Ghosh</h3>
              <p className="text-[#D6E5E0] font-semibold text-sm mt-1">
                Psycho-Somatic Anxiety Reset Coach
              </p>

              <div className="mt-8 pt-6 border-t border-white/15 space-y-3 text-left">
                <div className="flex items-center gap-3 text-sm text-[#D6E5E0]">
                  <div className="w-2 h-2 rounded-full bg-[#E8704A]" />
                  <span>1,200+ Chronic Stress Cases Evaluated</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#D6E5E0]">
                  <div className="w-2 h-2 rounded-full bg-[#E8704A]" />
                  <span>Specialist in Gut-Brain Microbiome & Vagus Nerve</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#D6E5E0]">
                  <div className="w-2 h-2 rounded-full bg-[#E8704A]" />
                  <span>Creator of the 6-Axis Somatic Protocol</span>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/80 italic">
                “Anxiety is not a character flaw. It is a biological alarm stuck on high. Once we fix the physical feedback loop, the calm takes care of itself.”
              </div>
            </div>
          </motion.div>

          {/* Text Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-7/12 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D6E5E0] text-xs sm:text-sm font-bold uppercase mb-4">
              <Sparkles className="w-4 h-4 text-[#E8704A]" />
              The Philosophy Behind The Method
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              Why Traditional Therapy & Pills Kept Falling Short
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#D6E5E0] leading-relaxed">
              <p>
                Most people dealing with persistent anxiety spend years talking about their stress in 50-minute therapy sessions, or relying on anti-anxiety pills that numb their senses while the root physical dysfunction stays untouched.
              </p>
              <p>
                The human nervous system does not live in an abstract cloud — it is anchored directly in your fascia, the spinal axis, your 3 PM cortisol spike, your gut bacteria producing 90% of your serotonin, and the rapid shallow breathing you do at your desk.
              </p>
              <p>
                Our <strong>6-Axis Psycho-Somatic Reset</strong> was born from a singular mission: to give busy professionals a fast, measurable, and drug-free way to reset their autonomic baseline without asking them to quit their jobs or become monks.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm font-bold text-white">
              <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E8704A]" /> 100% Non-Pharmaceutical
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-[#E8704A]" /> Daily Somatic Desensitization
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E8704A]" /> 3-Week Guaranteed Metric
              </span>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-[#E8704A] hover:bg-[#D85E38] text-white px-8 sm:px-10 py-4 text-base sm:text-lg font-black shadow-xl shadow-black/20 transition-all hover:scale-105 active:scale-95 cursor-pointer border-b-4 border-[#014D82]"
              >
                <span>Book my free Anxiety-Breakdown Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

