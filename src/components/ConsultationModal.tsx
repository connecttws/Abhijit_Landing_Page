"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  User,
  Mail,
  Phone,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Loader2,
} from "lucide-react";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedPhone = formData.phone.trim();

    if (!trimmedName) {
      setError("Please enter your full name.");
      return;
    }
    if (!trimmedEmail || !trimmedEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!trimmedPhone || trimmedPhone.replace(/\D/g, "").length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("lead_name", trimmedName);
        localStorage.setItem("lead_email", trimmedEmail);
        localStorage.setItem("lead_phone", trimmedPhone);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          phone: trimmedPhone,
        }),
      });

      if (!res.ok) {
        const resData = await res.json().catch(() => ({}));
        // Allow step progression during staging/testing if Sheet ID is not yet set,
        // while logging so it is visible in diagnostics.
        if (
          res.status === 500 &&
          typeof resData?.error === "string" &&
          resData.error.includes("configuration is incomplete")
        ) {
          console.warn("[Google Sheets] GOOGLE_SHEET_ID not configured yet; proceeding to assessment.");
        } else {
          setError(resData?.error || "Something went wrong. Please try again.");
          setLoading(false);
          return;
        }
      }

      onClose();
      router.push("/assessment");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border-2 border-[#1F5F5B]/20 overflow-hidden z-10 my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Top Header Banner */}
          <div className="bg-gradient-to-r from-[#1F5F5B] to-[#27726D] text-white p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-[#D6E5E0] text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
              <span>{data.stepBadge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {data.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#D6E5E0] font-medium max-w-sm mx-auto">
              {data.subtitle}
            </p>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-8 bg-white">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label
                  htmlFor="lead-name"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Full Name <span className="text-[#E8704A]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="lead-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-[#0F172A] text-sm sm:text-base font-medium placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F5F5B] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="lead-email"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Email Address <span className="text-[#E8704A]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    id="lead-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Enter your best email address"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-[#0F172A] text-sm sm:text-base font-medium placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F5F5B] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="lead-phone"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Phone / WhatsApp Number <span className="text-[#E8704A]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    id="lead-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Enter 10-digit phone number"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-[#0F172A] text-sm sm:text-base font-medium placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1F5F5B] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Submit Button ("Continue") */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E8704A] hover:bg-[#D85E38] disabled:opacity-75 text-white py-4 px-6 text-base sm:text-lg font-black shadow-lg shadow-[#E8704A]/30 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer border-b-4 border-[#014D82]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Saving &amp; Continuing...</span>
                    </>
                  ) : (
                    <>
                      <span>{data.submitText}</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              {/* Urgency note */}
              <p className="text-center text-xs font-semibold text-amber-700 bg-amber-50/80 py-2 px-3 rounded-xl border border-amber-200/60">
                {data.subtext}
              </p>

              {/* Privacy badge */}
              <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-500 font-medium pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F5F5B]" />
                <span>{data.privacy}</span>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
