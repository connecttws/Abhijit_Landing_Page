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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl border-2 border-[#1F5F5B]/20 overflow-hidden z-10 my-4 max-h-[92vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-30"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="bg-gradient-to-r from-[#1F5F5B] to-[#27726D] text-white p-5 sm:p-6 text-center relative overflow-hidden shrink-0">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-[#D6E5E0] text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
              <span>{data.stepBadge || "Free 1-on-1 Consultation"}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {data.title || "Book Your Free Consultation"}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#D6E5E0] font-medium max-w-md mx-auto">
              {data.subtitle || "Complete your details below to schedule your private call with Abhijit."}
            </p>
          </div>

          {/* Embedded Tally Form Container */}
          <div className="flex-1 w-full overflow-y-auto bg-white p-2 sm:p-4 min-h-[550px] sm:min-h-[650px]">
            <iframe
              data-tally-src="https://tally.so/embed/KppG7M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="650"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Book Consultation"
              className="w-full min-h-[550px] sm:min-h-[650px] border-0"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
