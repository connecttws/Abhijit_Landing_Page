"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { PopupModalData } from "@/types/landing";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PopupModalData;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  data,
}: ConsultationModalProps) {
  const router = useRouter();

  // Listen for Tally form submission and initialize Tally iframe
  useEffect(() => {
    if (!isOpen) return;

    // Initialize Tally embeds
    const initTally = () => {
      if (typeof (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally !== "undefined") {
        (window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((el) => {
          const iframe = el as HTMLIFrameElement;
          if (iframe.dataset.tallySrc) {
            iframe.src = iframe.dataset.tallySrc;
          }
        });
      }
    };

    if (typeof (window as unknown as { Tally?: unknown }).Tally !== "undefined") {
      initTally();
    } else {
      const scriptId = "tally-modal-js";
      if (!document.getElementById(scriptId)) {
        const s = document.createElement("script");
        s.id = scriptId;
        s.src = "https://tally.so/widgets/embed.js";
        s.onload = initTally;
        s.onerror = initTally;
        document.body.appendChild(s);
      } else {
        initTally();
      }
    }

    // Listen for form completion event from Tally iframe
    const handleMessage = (event: MessageEvent) => {
      try {
        const payload = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (payload?.event === "Tally.FormSubmitted") {
          onClose();
          router.push("/thank-you");
        }
      } catch {
        if (typeof event.data === "string" && event.data.includes("Tally.FormSubmitted")) {
          onClose();
          router.push("/thank-you");
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [isOpen, onClose, router]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 w-full h-full bg-white flex flex-col overflow-hidden"
      >
        {/* Full-Screen Top Header Bar */}
        <div className="bg-[#1F5F5B] text-white px-4 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between shadow-md shrink-0 z-30 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="font-black text-base sm:text-lg text-white tracking-tight">
              Wellness With Abhijit
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 text-[#D6E5E0] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#E8704A]" />
              Free Consultation
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <span>Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 100% Full-Screen Iframe Container */}
        <div className="flex-1 w-full h-full bg-white overflow-hidden relative">
          <iframe
            src="https://tally.so/embed/KppG7M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            data-tally-src="https://tally.so/embed/KppG7M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Book Consultation"
            className="w-full h-full border-0"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
