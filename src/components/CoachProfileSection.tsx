"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ShieldCheck, HeartPulse, Award, Sparkles } from "lucide-react";

interface CoachProfileSectionProps {
  onOpenModal: () => void;
}

export default function CoachProfileSection({ onOpenModal }: CoachProfileSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#1F5F5B] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Photo Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.3 }}
            className="w-full lg:w-5/12 flex flex-col items-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-[#174B48] to-[#123A37] border-2 border-white/20 overflow-hidden shadow-2xl flex items-center justify-center group">
              {/* Photo Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent z-10 pointer-events-none" />

              <Image
                src="/images/abhijit-nayyar.jpeg"
                alt="Abhijit Nayyar - Founder & Lead Coach"
                fill
                className="object-cover object-top z-0 transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 450px"
              />

              {/* Founder Tag floating on Photo */}
              <div className="absolute bottom-6 left-6 right-6 z-20 text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-[#E8704A] text-white text-xs font-black uppercase tracking-wider mb-1.5 shadow-md">
                  Founder & Lead Coach
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Abhijit Nayyar
                </h3>
                <p className="text-xs sm:text-sm text-[#D6E5E0] font-semibold">
                  Anxiety Reset Coach · Yoga and Mindfulness
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="w-full max-w-md mt-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-lg">
              <p className="text-xs sm:text-sm text-[#D6E5E0] italic font-medium leading-relaxed">
                “Anxiety is not a character flaw. It is an alarm in your body that is stuck on high. When the body learns to switch off, the mind follows.”
              </p>
            </div>
          </motion.div>

          {/* Text Story & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.3 }}
            className="w-full lg:w-7/12 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D6E5E0] text-xs sm:text-sm font-bold uppercase mb-4">
              <Sparkles className="w-4 h-4 text-[#E8704A]" />
              Meet the founder
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
              I was where you are
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#D6E5E0] leading-relaxed">
              <p>
                Before I became a coach, I spent years in corporate jobs, chasing deadlines and living on coffee. Anxiety, sleepless nights, acid reflux and back pain became normal for me.
              </p>
              <p>
                In 2018 I lost my job. For once I didn’t rush into the next role. In 2019 I found the Bhagavad Gita, and through it, yoga. I trained at Kaivalyadhama Yoga Institute, and the practice healed what years of pushing through had not.
              </p>
              <p>
                Most things people try work on the anxious moment. I built the 6-Axis Psycho-Somatic Reset to work on the body that keeps producing it, in a way that fits a full working day.
              </p>
            </div>

            {/* Credential Points */}
            <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-base font-black text-white">5,000+ people</div>
                <div className="text-xs text-[#D6E5E0] mt-0.5">Taught over 7 years</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-base font-black text-white">Kaivalyadhama</div>
                <div className="text-xs text-[#D6E5E0] mt-0.5">Trained at Yoga Institute</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-base font-black text-white">6-Axis Reset</div>
                <div className="text-xs text-[#D6E5E0] mt-0.5">Creator of Psycho-Somatic Method</div>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 text-xs sm:text-sm font-bold text-white">
              <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E8704A]" /> 100% Non-Pharmaceutical
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-[#E8704A]" /> Daily Somatic Desensitization
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-xl border border-white/15 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E8704A]" /> 3-Week Guaranteed Metric
              </span>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <button
                onClick={onOpenModal}
                className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-2xl bg-[#E8704A] hover:bg-[#D85E38] text-white px-8 sm:px-10 py-4 text-base sm:text-lg font-black shadow-xl shadow-black/20 transition-all hover:scale-105 active:scale-95 cursor-pointer border-b-4 border-[#014D82]"
              >
                <span>Book my free Anxiety-Breakdown Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
