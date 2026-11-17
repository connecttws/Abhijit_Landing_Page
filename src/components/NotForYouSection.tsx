"use client";

import { motion } from "framer-motion";
import { XCircle, AlertTriangle, PhoneCall, ShieldAlert } from "lucide-react";
import { NotForYouData } from "@/types/landing";

interface NotForYouSectionProps {
  data: NotForYouData;
}

export default function NotForYouSection({ data }: NotForYouSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-[#F4F6F6] border-y border-slate-200/80 relative">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold tracking-wide uppercase mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            Important candid notice
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
            {data.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            {data.subtitle}
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {data.points.map((point, idx) => {
            const isEmergency = Boolean(point.emergency);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25 }}
                className={`p-6 rounded-2xl border transition-all ${
                  isEmergency
                    ? "bg-amber-50/90 border-amber-300 md:col-span-2 shadow-sm"
                    : "bg-white border-slate-200 shadow-xs hover:border-slate-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                      isEmergency
                        ? "bg-amber-500 text-white"
                        : "bg-red-50 text-red-600"
                    }`}
                  >
                    {isEmergency ? (
                      <PhoneCall className="w-5 h-5" />
                    ) : (
                      <XCircle className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-sm sm:text-base font-semibold leading-relaxed ${
                        isEmergency ? "text-amber-950 font-bold" : "text-slate-800"
                      }`}
                    >
                      {point.text}
                    </p>

                    {point.emergency && (
                      <div className="mt-4 p-4 rounded-xl bg-white border border-amber-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="text-xs uppercase tracking-wider font-extrabold text-amber-800">
                            {point.emergency.service}
                          </div>
                          <div className="text-lg sm:text-xl font-black text-[#0F172A]">
                            Helpline: {point.emergency.helpline}
                          </div>
                        </div>
                        <a
                          href={`tel:${point.emergency.helpline.replace(/-/g, "")}`}
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors"
                        >
                          <PhoneCall className="w-4 h-4" />
                          <span>Call 1800-891-4416 (Free)</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

