"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Sparkles, 
  MessageCircle,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  Clock,
  CalendarCheck,
  Video
} from "lucide-react";
import Footer from "@/components/Footer";
import contentData from "@/data/content.json";

const categories = ["All (11)", "WhatsApp messages", "Google reviews"] as const;

export default function ThankYouPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All (11)");
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const proofData = contentData.proofSection;

  const filteredImages = proofData.images.filter((img) => {
    if (selectedCategory === "All (11)") return true;
    if (selectedCategory === "WhatsApp messages") return img.category === "WhatsApp message";
    if (selectedCategory === "Google reviews") return img.category === "Google review";
    return true;
  });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = typeof window !== "undefined" && window.innerWidth < 768 ? 320 : 420;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FBFBFA]">
      {/* Header bar */}
      <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-md py-3.5 sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl overflow-hidden shadow-xs shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Wellness With Abhijit Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-sm text-[#0F172A] hidden sm:inline">
              Wellness With Abhijit
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#1F5F5B] hover:text-[#174946] bg-[#1F5F5B]/10 hover:bg-[#1F5F5B]/15 px-3.5 py-1.5 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to main site</span>
          </Link>
        </div>
      </header>

      {/* 1. Hero Confirmation: Your call is booked !!!! */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#1F5F5B]/10 via-transparent to-transparent relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-100 text-[#1F5F5B] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-600/10 border-4 border-white"
          >
            <CalendarCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[#1F5F5B]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#1F5F5B]/10 text-[#1F5F5B] text-xs font-black uppercase tracking-wider mb-4 border border-[#1F5F5B]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
              Confirmation Received
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#0F172A] tracking-tight mb-4">
              Your call is booked !!!!
            </h1>

            <p className="text-base sm:text-xl text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
              We have received your consultation booking. Our team will reach out to you directly on WhatsApp to confirm your preferred 1-on-1 private Zoom slot with Coach Abhijit.
            </p>
          </motion.div>

          {/* Quick Onboarding Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left"
          >
            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#1F5F5B] flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-4 h-4 text-[#1F5F5B]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">1. WhatsApp Message</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Expect a message from our team to finalize your preferred time.</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-100 text-[#E8704A] flex items-center justify-center shrink-0 mt-0.5">
                <Video className="w-4 h-4 text-[#E8704A]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">2. Private 1-on-1 Call</div>
                <div className="text-[11px] text-slate-500 mt-0.5">30–45 min private Zoom session directly with Coach Abhijit.</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1F5F5B]/10 text-[#1F5F5B] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-4 h-4 text-[#1F5F5B]" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">3. Root Cause Scan</div>
                <div className="text-[11px] text-slate-500 mt-0.5">GAD-7 score analysis, somatic tension map & personal reset plan.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Meet The Founder Section */}
      <section className="py-14 sm:py-20 bg-[#1F5F5B] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* Picture: Image of Abhijit */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="w-full lg:w-5/12 flex flex-col items-center"
            >
              <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 group">
                <Image
                  src="/images/abhijit-nayyar.jpeg"
                  alt="Abhijit Nayyar - Founder & Lead Coach"
                  fill
                  className="object-cover object-center z-0 transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                />

                {/* Floating Label */}
                <div className="absolute bottom-5 left-5 right-5 z-20 text-left bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent p-4 rounded-2xl border border-white/10">
                  <span className="inline-block px-3 py-0.5 rounded-full bg-[#E8704A] text-white text-[11px] font-black uppercase tracking-wider mb-1 shadow-xs">
                    Founder & Lead Coach
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Abhijit Nayyar
                  </h3>
                  <p className="text-xs text-[#D6E5E0] font-semibold">
                    Kaivalyadhama Trained Yoga & Anxiety Coach
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Content: Story & Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-full lg:w-7/12 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D6E5E0] text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
                MEET THE FOUNDER
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
                was where you are
              </h2>

              <div className="mb-6 p-3 rounded-2xl bg-white/5 border border-white/10 inline-flex items-center gap-3">
                <div className="text-left">
                  <div className="text-lg font-black text-white leading-tight">
                    Abhijit Nayyar
                  </div>
                  <div className="text-xs text-[#D6E5E0] font-semibold">
                    Founder & Lead Coach · Kaivalyadhama Trained
                  </div>
                </div>
              </div>

              {/* Exact Provided Story Text */}
              <div className="space-y-4 text-base sm:text-lg text-[#D6E5E0] leading-relaxed">
                <p>
                  Before I became a coach, I spent years in corporate jobs, chasing deadlines and living on coffee. Anxiety, sleepless nights, acid reflux and back pain became normal for me. In 2018 I lost my job. For once I didn’t rush into the next role. In 2019 I found the Bhagavad Gita, and through it, yoga. I trained at Kaivalyadhama Yoga Institute, and the practice healed what years of pushing through had not.
                </p>
                <p>
                  Most things people try work on the anxious moment. I built the 6-Axis Psycho-Somatic Reset to work on the body that keeps producing it, in a way that fits a full working day.
                </p>
              </div>

              {/* Credential Highlights */}
              <div className="mt-8 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-base font-black text-white">5,000+ Hours</div>
                  <div className="text-xs text-[#D6E5E0] mt-0.5">Teaching Experience</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-base font-black text-white">300+ People</div>
                  <div className="text-xs text-[#D6E5E0] mt-0.5">Clients Coached</div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-base font-black text-white">Kaivalyadhama</div>
                  <div className="text-xs text-[#D6E5E0] mt-0.5">Yoga Institute Trained</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Proof Section: Trusted by those who have tried everything */}
      <section className="py-14 sm:py-20 bg-[#123835] text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-[#D6E5E0] text-xs font-bold tracking-wide uppercase mb-3 border border-white/15">
              <CheckCircle2 className="w-4 h-4 text-[#E8704A]" />
              Real Client Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Trusted by those who have tried everything
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#D6E5E0] font-medium max-w-2xl mx-auto">
              Real WhatsApp messages and Google reviews from clients. Results differ from person to person.
            </p>

            {/* Filter Tabs */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#E8704A] text-white shadow-md shadow-[#E8704A]/30 scale-105"
                      : "bg-white/10 text-white/80 hover:bg-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Carousel / Reviews Container */}
          <div className="relative">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous review"
              className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-[#1F5F5B] items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next review"
              className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white text-[#1F5F5B] items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 pt-2 px-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {filteredImages.map((img) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setActiveImage(img.src)}
                  className="relative flex-none w-[280px] sm:w-[340px] md:w-[360px] snap-center rounded-2xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl group cursor-pointer flex flex-col transition-all hover:border-white/40 hover:scale-[1.01]"
                >
                  <div className="relative w-full h-[320px] sm:h-[380px] bg-slate-950 flex items-center justify-center p-2.5 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain p-2 transition-transform duration-300 group-hover:scale-102"
                      sizes="(max-width: 640px) 340px, 420px"
                    />

                    <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10 shadow-xs pointer-events-none">
                      <ZoomIn className="w-3 h-3 text-[#E8704A]" />
                      <span className="hidden sm:inline">Click to zoom</span>
                      <span className="sm:hidden">Tap to zoom</span>
                    </div>
                  </div>

                  {/* Always Visible Review Label & Caption */}
                  <div className="p-3.5 sm:p-4 bg-slate-900 border-t border-white/10 text-left flex flex-col justify-between flex-1 gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 bg-[#E8704A] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                        {img.category === "WhatsApp message" ? (
                          <MessageCircle className="w-3 h-3 shrink-0" />
                        ) : (
                          <CheckCircle2 className="w-3 h-3 shrink-0" />
                        )}
                        <span>{img.category}</span>
                      </span>
                      <span className="text-[11px] text-[#D6E5E0] font-medium">Verified Client</span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                      “{img.alt}”
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Reviews */}
      <AnimatePresence>
        {activeImage && (() => {
          const activeItem = proofData.images.find((img) => img.src === activeImage);
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <button
                onClick={() => setActiveImage(null)}
                aria-label="Close zoomed image"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              <div
                className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-[70vh] max-h-[700px]">
                  <Image
                    src={activeImage}
                    alt={activeItem?.alt || "Zoomed Review Screenshot"}
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
                {activeItem && (
                  <div className="mt-4 text-center max-w-xl">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#E8704A] text-white text-xs font-bold uppercase mb-2">
                      {activeItem.category}
                    </span>
                    <p className="text-sm sm:text-base text-white font-medium">
                      “{activeItem.alt}”
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* 4. Bottom Back to Home CTA */}
      <section className="py-12 bg-white border-t border-slate-200 text-center">
        <div className="mx-auto max-w-md px-4">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2.5 w-full rounded-2xl bg-[#1F5F5B] hover:bg-[#174946] px-8 py-4 text-base font-black text-white shadow-xl shadow-[#1F5F5B]/20 transition-all hover:scale-105 active:scale-95 border-b-4 border-[#014D82]"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Main Website</span>
          </Link>
          <p className="mt-2.5 text-xs text-slate-500 font-medium">
            Explore the 6-Axis Psycho-Somatic Reset methodology
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
