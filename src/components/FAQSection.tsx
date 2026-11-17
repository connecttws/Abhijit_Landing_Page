"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { FAQItem } from "@/types/landing";

interface FAQSectionProps {
  faqs: FAQItem[];
  onOpenModal: () => void;
}

export default function FAQSection({ faqs, onOpenModal }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FBFBFA] relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] text-xs sm:text-sm font-bold uppercase mb-3">
            <HelpCircle className="w-4 h-4 text-[#E8704A]" />
            Frequently asked questions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A]">
            Everything you need to know
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Clear, upfront answers about our methods, time commitment, and guarantee.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors hover:border-[#1F5F5B]/40"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#1F5F5B] text-white rotate-180"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom Card */}
        <div className="mt-12 sm:mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#1F5F5B] to-[#26726E] text-white text-center shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Still have questions?
          </h3>
          <p className="text-sm sm:text-base text-[#D6E5E0] max-w-xl mx-auto mb-6">
            Get personalized answers on your specific symptoms, daily schedule, and stress triggers during your complimentary consultation.
          </p>
          <button
            onClick={onOpenModal}
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#E8704A] hover:bg-[#D85E38] text-white px-8 sm:px-10 py-4 text-base sm:text-lg font-black shadow-lg shadow-black/20 transition-all hover:scale-105 active:scale-95 cursor-pointer border-b-4 border-[#014D82]"
          >
            <span>Book my free Anxiety-Breakdown Consultation</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

