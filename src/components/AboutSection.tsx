"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  Moon, 
  Apple, 
  Compass, 
  Clock, 
  CheckCircle2, 
  Target, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";

const focusAreas = [
  {
    name: "Autonomic Nervous System & Vagus Nerve",
    desc: "Switching your body out of chronic 'fight-or-flight' into restorative rest.",
    icon: Activity,
  },
  {
    name: "Deep Restorative Sleep Architecture",
    desc: "Ending 3 AM wake-ups and late-night racing mind without sedatives.",
    icon: Moon,
  },
  {
    name: "Gut-Brain Axis & Cortisol Chemistry",
    desc: "Fixing afternoon energy crashes, acid reflux, and stress cravings naturally.",
    icon: Apple,
  },
  {
    name: "Postural Realignment & Thoracic Spine",
    desc: "Easing tight shoulders, a tense upper back, and desk hunching.",
    icon: Compass,
  },
  {
    name: "10-Min Office-Friendly Somatic Habits",
    desc: "Practical 2-minute desk resets you can do discreetly between Zoom calls.",
    icon: Clock,
  },
  {
    name: "Measurable GAD-7 Anxiety Score Reduction",
    desc: "Objective clinical progress checks on Day 1, Day 21, Day 45, and Day 90.",
    icon: Target,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#1F5F5B]/5 rounded-l-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E8704A]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Brand Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
              About Wellness With Abhijit
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
              Natural anxiety & stress reset with <span className="text-[#E8704A] block mt-1">Abhijit Nayyar</span>
            </h2>

            <div className="h-1 w-20 bg-[#E8704A] rounded-full mx-auto lg:mx-0 mb-6" />

            <h3 className="text-lg sm:text-xl font-bold text-[#1F5F5B] mb-4 leading-snug">
              Body-First Physiology. Mind-Gut Chemistry. Lasting Calm.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              At <strong className="text-[#0F172A] font-bold">Wellness With Abhijit</strong>, we believe that real freedom from chronic anxiety, panic, and brain fog is not about fighting your thoughts, taking lifelong sedatives, or practicing temporary breathing tricks.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              It is about understanding your biological alarm system, resetting the gut-vagus loop, and building realistic physical habits that fit effortlessly into a demanding professional calendar.
            </p>

            <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-[#F2F7F6] border border-[#1F5F5B]/20 text-left">
              <ShieldCheck className="w-6 h-6 text-[#1F5F5B] shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-[#0F172A] block">100% Drug-Free & Science-Backed</span>
                <span className="text-slate-500">Trained at Kaivalyadhama Yoga Institute • 5,000+ hours teaching • 300+ people coached</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 6 Focus Area Cards */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="lg:col-span-7 bg-[#FAFDFD] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-900/5 relative"
          >
            <div className="mb-6 flex items-center justify-between border-b border-slate-200/80 pb-4">
              <h4 className="text-xl sm:text-2xl font-black text-[#0F172A] flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-xl bg-[#1F5F5B] text-white flex items-center justify-center shadow-md">
                  <Target className="w-5 h-5 text-[#E8704A]" />
                </span>
                What We Focus On:
              </h4>
              <span className="text-xs font-bold text-[#1F5F5B] bg-[#1F5F5B]/10 px-3 py-1 rounded-full uppercase">
                6 Core Pillars
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#1F5F5B]/40 hover:shadow-md transition-all flex items-start gap-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#1F5F5B]/10 text-[#1F5F5B] flex items-center justify-center shrink-0 group-hover:bg-[#1F5F5B] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-sm text-[#0F172A] group-hover:text-[#1F5F5B] transition-colors leading-tight mb-1">
                        {area.name}
                      </h5>
                      <p className="text-xs text-slate-500 leading-normal">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
