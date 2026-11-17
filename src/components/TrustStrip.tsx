"use client";

import { motion } from "framer-motion";
import { Users, Clock, ShieldCheck, Award, HeartPulse } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "5,000+",
    label: "People taught",
    subtext: "Over 7 years of coaching",
  },
  {
    icon: Clock,
    value: "3 Weeks",
    label: "Anxiety Relief",
    subtext: "Noticeable calm & deep sleep",
  },
  {
    icon: ShieldCheck,
    value: "Zero pills",
    label: "Body-first method",
    subtext: "Breath, movement, sleep and food habits",
  },
  {
    icon: HeartPulse,
    value: "90 days",
    label: "Guided program",
    subtext: "One private live session every week",
  },
];

export default function TrustStrip() {
  return (
    <div className="relative z-10 bg-white border-y border-slate-200/80 py-8 shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2.5 sm:gap-4 p-1.5 sm:p-3 rounded-2xl hover:bg-slate-50/80 transition-colors"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-[#1F5F5B]/10 text-[#1F5F5B] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-base sm:text-xl lg:text-2xl font-black text-[#0F172A] leading-tight whitespace-nowrap truncate">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-sm font-bold text-[#1F5F5B] leading-tight truncate">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight line-clamp-1 sm:line-clamp-none">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

