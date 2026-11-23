"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, AlertCircle, Calendar } from "lucide-react";

interface StickyCTAProps {
  onOpenModal: () => void;
  ctaText?: string;
}

export default function StickyCTA({
  onOpenModal,
  ctaText = "Book my free Anxiety-Breakdown Consultation",
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (approx 350px)
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-40 p-2.5 sm:p-4 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"
        >
          <div className="mx-auto max-w-2xl flex flex-col items-center justify-center gap-1.5">
            <button
              onClick={onOpenModal}
              className="group relative inline-flex items-center justify-center gap-2.5 w-full rounded-2xl bg-gradient-to-r from-[#E8704A] to-[#F17E5B] px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base md:text-lg font-black text-white shadow-xl shadow-[#E8704A]/30 transition-all duration-300 hover:from-[#DF633D] hover:to-[#E8704A] hover:shadow-2xl hover:shadow-[#E8704A]/40 active:translate-y-0.5 cursor-pointer border-b-4 border-[#014D82]"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 shrink-0" />
              <span className="truncate">{ctaText}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 shrink-0" />
            </button>

            <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-amber-800">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>If slots are full, kindly try later • 100% Free Consultation</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
