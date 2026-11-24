"use client";

import { motion } from "framer-motion";
import { 
  ClipboardCheck, 
  Video, 
  Activity, 
  Apple, 
  MessageSquare, 
  BookOpen, 
  LineChart, 
  ShieldCheck, 
  Trophy, 
  ArrowRight,
  Sparkles
} from "lucide-react";

interface SystemDetailsSectionProps {
  onOpenModal: () => void;
}

const systemDeliverables = [
  {
    title: "Personalized Root Cause Scan",
    description: "Detailed 11-point diagnostic across your triggers, body tension patterns, posture hunch, sleep cycle, and dietary gaps.",
    icon: ClipboardCheck,
    tag: "Day 1 Diagnostic",
  },
  {
    title: "1-on-1 Private Live Zoom Calls",
    description: "Weekly private live sessions directly with Coach Abhijit for real-time somatic bio-feedback and postural adjustments.",
    icon: Video,
    tag: "Private Coaching",
  },
  {
    title: "Targeted Somatic Vagus Resets",
    description: "10-minute morning routine combined with discreet 2-minute desk resets you can practice right between Zoom calls.",
    icon: Activity,
    tag: "Office-Friendly",
  },
  {
    title: "Gut-Brain & Sleep Restoration Plan",
    description: "Practical swaps for afternoon caffeine crashes, acid reflux, late-night dinners, and midnight screen habits.",
    icon: Apple,
    tag: "Nutritional Swaps",
  },
  {
    title: "Daily WhatsApp Coach Guidance",
    description: "Direct daily check-ins on your sleep, somatic practice, and mood so you never lose momentum when work gets busy.",
    icon: MessageSquare,
    tag: "Daily Accountability",
  },
  {
    title: "Somatic Journaling & 90-Sec SOS Protocol",
    description: "Pinpoint mental loops like 'I keep replaying difficult conversations' and run emergency protocols when acute panic strikes.",
    icon: BookOpen,
    tag: "Emergency SOS",
  },
  {
    title: "Clinical GAD-7 Score Tracking",
    description: "Objective anxiety progress measurements on Day 1, Day 21, Day 45, and Day 90 so you can clearly see the physical shift.",
    icon: LineChart,
    tag: "Scientific Metric",
  },
  {
    title: "Lifetime Nervous System Independence",
    description: "Master permanent autonomic nervous system regulation so you never need to rely on long-term pills or endless therapy.",
    icon: ShieldCheck,
    tag: "Sustainable Calm",
  },
  {
    title: "Continuous Coaching Guarantee",
    description: "If you follow your customized daily protocols and do not see measurable progress in your anxiety score, we keep working with you for free.",
    icon: Trophy,
    tag: "Risk-Free",
  },
];

export default function SystemDetailsSection({ onOpenModal }: SystemDetailsSectionProps) {
  return (
    <section id="system" className="py-16 sm:py-24 bg-[#123835] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8704A] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1F5F5B] rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#D6E5E0] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
            Complete System Breakdown
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            What you get inside the 6-axis psycho-somatic reset system
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D6E5E0] font-medium leading-relaxed max-w-2xl mx-auto">
            A comprehensive, all-inclusive approach to resolving anxiety from the root cause, designed specifically for high-stress professionals.
          </p>
        </div>

        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {systemDeliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8704A] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6E5E0] bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#D6E5E0] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={onOpenModal}
            data-tally-open="KppG7M"
            data-tally-layout="modal"
            data-tally-width="700"
            data-tally-auto-close="1500"
            data-tally-hide-title="1"
            data-tally-transparent-background="1"
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-[#E8704A] hover:bg-[#D85E38] text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-xl font-black shadow-xl shadow-black/30 transition-all hover:scale-105 active:scale-95 cursor-pointer border-b-4 border-[#014D82]"
          >
            <span>Book my free Anxiety-Breakdown Consultation</span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-xs sm:text-sm text-[#D6E5E0]">
            Private 1-on-1 Zoom call with Abhijit • Limited consultation slots each week
          </p>
        </div>
      </div>
    </section>
  );
}
