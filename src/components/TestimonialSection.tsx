"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Vikram Sengupta",
    role: "Senior Engineering Manager · Fintech (Bengaluru)",
    metric: "GAD-7 Score: 18 (Severe) → 4 (Minimal)",
    duration: "12 Weeks Reset",
    quote:
      "I lived on 4 cups of black coffee, sleepless Sunday nights, and severe chest tightness before sprint reviews. Traditional talk therapy helped me understand why I was stressed, but my body remained in constant fight-or-flight. Abhijit’s 6-Axis method taught me to release tension from my thoracic spine and vagus nerve. By week 4, my 3 AM panic wake-ups stopped completely. Now, even high-pressure release cycles don’t shake my baseline.",
    highlight: "Sleepless nights & chest tightness completely gone",
  },
  {
    name: "Ritu Sharma",
    role: "Lead Consultant · Management Consulting (Gurugram)",
    metric: "Noticeable calm & 7.5 hrs deep sleep",
    duration: "90 Days Guided Program",
    quote:
      "Before starting with Abhijit, I had tried meditation apps, gym routines, and supplements. Anxiety always crept back with palpitations by 4 PM. The Root Cause Scan showed my shallow breathing and desk hunch were physically triggering my cortisol alarm. The 2-minute discreet desk resets between client calls are life savers. For the first time in 5 years, I feel light and centered in my own body.",
    highlight: "Calmer through high-stake client deliverables",
  },
  {
    name: "Rahul Venkatesh",
    role: "Principal Architect · Cloud Infrastructure (Hyderabad)",
    metric: "Palpitations stopped & backache resolved",
    duration: "10 Weeks Coaching",
    quote:
      "I was skeptical about somatic work because I thought anxiety was purely psychological. Abhijit explained the gut-brain physiology in a way that made complete scientific sense. Within 3 weeks of the dopamine swap and spinal release exercises, my chronic neck stiffness disappeared and my digestion stabilized. My energy through full 9-hour workdays is steady without afternoon crashes.",
    highlight: "Steady energy without afternoon coffee crashes",
  },
  {
    name: "Megha Kulkarni",
    role: "Product Operations Lead · E-commerce (Pune)",
    metric: "Overthinking reduced by 80%",
    duration: "90 Days Guided Program",
    quote:
      "I used to lie in bed replaying every conversation and wondering what my manager thought. With Abhijit’s daily WhatsApp check-in and guided somatic journaling, I learned the exact 90-second SOS protocol to deactivate anxiety when it strikes. I no longer dread Mondays, and my family noticed how much more present and relaxed I am.",
    highlight: "Effortless sleep & no more Sunday evening dread",
  },
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 320 : 420;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F2F7F6] relative overflow-hidden border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#E8704A]" />
            Client Transformations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
            What our clients say
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Real experiences from working professionals who resolved chronic tension, brain fog, and anxiety from the biological root.
          </p>
        </div>

        {/* Carousel & Controls */}
        <div className="relative">
          {/* Desktop Arrow Controls */}
          <button
            onClick={() => scroll("left")}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-[#1F5F5B] items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer border border-slate-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-[#1F5F5B] items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer border border-slate-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Cards Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="relative flex-none w-[300px] sm:w-[380px] md:w-[420px] snap-center rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-900/5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Stars + Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-[#1F5F5B] bg-[#1F5F5B]/10 px-2.5 py-0.5 rounded-full">
                      {item.duration}
                    </span>
                  </div>

                  {/* Highlight Pill */}
                  <div className="mb-4 p-2.5 rounded-xl bg-amber-50 border border-amber-200/60 text-xs font-bold text-amber-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E8704A] shrink-0" />
                    <span>{item.highlight}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-sm sm:text-base text-[#0F172A] leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                      {item.role}
                    </p>
                    <span className="inline-block text-[10px] font-bold text-[#1F5F5B] mt-1">
                      {item.metric}
                    </span>
                  </div>
                  <Quote className="w-8 h-8 text-[#1F5F5B]/15 shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="flex md:hidden justify-center items-center gap-4 mt-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white text-[#1F5F5B] flex items-center justify-center shadow-md active:bg-slate-100 border border-slate-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-slate-500 font-medium">Swipe or tap arrows</span>
            <button
              onClick={() => scroll("right")}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white text-[#1F5F5B] flex items-center justify-center shadow-md active:bg-slate-100 border border-slate-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
