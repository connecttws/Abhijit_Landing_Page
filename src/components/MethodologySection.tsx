"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Compass, 
  Search, 
  Apple, 
  Activity, 
  ShieldCheck, 
  Check, 
  ArrowRight,
  ZoomIn,
  X,
  Sparkles
} from "lucide-react";
import { MethodologyData } from "@/types/landing";

interface MethodologySectionProps {
  data: MethodologyData;
  onOpenModal: () => void;
}

const stepIcons = [Search, Apple, Activity, ShieldCheck];

export default function MethodologySection({
  data,
  onOpenModal,
}: MethodologySectionProps) {
  const [zoomInfographic, setZoomInfographic] = useState(false);

  return (
    <section id="method" className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F4F9F8] to-[#FFFFFF] relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#1F5F5B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#E8704A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F5F5B] text-white text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 shadow-md shadow-[#1F5F5B]/15">
            <Compass className="w-4 h-4 text-[#E8704A]" />
            The breakthrough protocol
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
            {data.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>
        </div>

        {/* Infographic Spotlight Banner */}
        <div className="mx-auto max-w-4xl mb-14 sm:mb-20">
          <div className="bg-gradient-to-tr from-[#1F5F5B] to-[#2B7772] rounded-3xl p-6 sm:p-10 shadow-2xl text-white relative overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D6E5E0] text-xs font-bold uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
                  Proprietary framework
                </div>
                <h3 className="text-2xl sm:text-3xl font-black mb-3">
                  The 6 biological axes of anxiety
                </h3>
                <p className="text-sm sm:text-base text-[#D6E5E0] leading-relaxed mb-6">
                  Anxiety is not only in your head. It shows up in your gut, your breath, your spine, your sleep and your daily habits. Our 6-Axis methodology systematically resets each layer.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">1. Gut-Brain Chemistry</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">2. Vagal Breathing</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">3. Spinal Release</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">4. Sleep Architecture</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">5. Dopamine Balance</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full border border-white/15">6. Somatic SOS</span>
                </div>
              </div>
              <div className="md:col-span-5 flex justify-center">
                <div
                  onClick={() => setZoomInfographic(true)}
                  className="relative group cursor-pointer w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden bg-white/95 p-3 shadow-xl border-2 border-white/40 transition-transform hover:scale-105"
                >
                  <Image
                    src={data.infographic.src}
                    alt={data.infographic.alt}
                    fill
                    className="object-contain p-2"
                    sizes="280px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold gap-1.5 backdrop-blur-xs">
                    <ZoomIn className="w-4 h-4" />
                    <span>View Full Diagram</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 4 Distinct Steps */}
        <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
          {data.steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            const isEven = idx % 2 === 1;

            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25 }}
                className={`flex flex-col md:flex-row gap-6 sm:gap-10 items-stretch p-6 sm:p-10 rounded-3xl border transition-all duration-300 ${
                  isEven
                    ? "bg-[#1F5F5B] text-white border-[#1F5F5B] shadow-xl"
                    : "bg-white text-[#0F172A] border-slate-200/80 shadow-xl shadow-slate-900/5 hover:border-[#1F5F5B]/30"
                }`}
              >
                {/* Step badge & icon */}
                <div className="flex md:flex-col items-center md:items-start gap-4 md:w-48 shrink-0">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-md font-black text-xl shrink-0 ${
                      isEven
                        ? "bg-[#E8704A] text-white"
                        : "bg-[#1F5F5B] text-white"
                    }`}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <span
                      className={`text-xs font-extrabold uppercase tracking-widest block ${
                        isEven ? "text-[#D6E5E0]" : "text-[#E8704A]"
                      }`}
                    >
                      PHASE 0{step.stepNumber}
                    </span>
                    <span
                      className={`text-sm font-bold block ${
                        isEven ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      {step.subtitle}
                    </span>
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <h3
                    className={`text-2xl sm:text-3xl font-black mb-3 ${
                      isEven ? "text-white" : "text-[#0F172A]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-base sm:text-lg mb-6 leading-relaxed ${
                      isEven ? "text-[#D6E5E0]" : "text-slate-600"
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Highlights (Step 1) or Key Points (Steps 2-4) */}
                  {step.highlights && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {step.highlights.map((h, i) => (
                        <div
                          key={i}
                          className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                            isEven
                              ? "bg-white/10 border-white/15"
                              : "bg-[#FAFDFD] border-slate-200/80"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isEven
                                ? "bg-[#E8704A] text-white"
                                : "bg-[#1F5F5B] text-white"
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <div>
                            <span
                              className={`text-xs sm:text-sm font-bold block ${
                                isEven ? "text-white" : "text-[#0F172A]"
                              }`}
                            >
                              {h.label}
                            </span>
                            <span
                              className={`text-xs leading-normal block ${
                                isEven ? "text-[#D6E5E0]" : "text-slate-500"
                              }`}
                            >
                              {h.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {step.keyPoints && (
                    <ul className="space-y-3 pt-2">
                      {step.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                              isEven
                                ? "bg-[#E8704A] text-white"
                                : "bg-[#1F5F5B] text-white"
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span
                            className={`text-sm sm:text-base font-medium leading-relaxed ${
                              isEven ? "text-white/95" : "text-slate-700"
                            }`}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 sm:mt-20 text-center">
          <button
            onClick={onOpenModal}
            data-tally-open="KppG7M"
            data-tally-layout="default"
            data-tally-auto-close="1500"
            data-tally-hide-title="1"
            data-tally-transparent-background="1"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-[#E8704A] hover:bg-[#D85E38] text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl font-black shadow-xl shadow-[#E8704A]/30 transition-all hover:scale-105 active:scale-95 cursor-pointer border-b-4 border-[#014D82]"
          >
            <span>{data.ctaText}</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Infographic Full Modal */}
      <AnimatePresence>
        {zoomInfographic && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomInfographic(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setZoomInfographic(false)}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full aspect-square rounded-3xl overflow-hidden bg-white p-4 shadow-2xl"
            >
              <Image
                src={data.infographic.src}
                alt={data.infographic.alt}
                fill
                className="object-contain p-4"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

