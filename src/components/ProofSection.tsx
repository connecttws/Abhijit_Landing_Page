"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn, ArrowRight, MessageCircle, FileText, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ProofSectionData } from "@/types/landing";

interface ProofSectionProps {
  data: ProofSectionData;
  onOpenModal: () => void;
}

export default function ProofSection({ data, onOpenModal }: ProofSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All (11)");
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = ["All (11)", "WhatsApp messages", "Google reviews"];

  const filteredImages = data.images.filter((img) => {
    if (selectedCategory === "All (11)") return true;
    if (selectedCategory === "WhatsApp messages") return img.category === "WhatsApp message";
    if (selectedCategory === "Google reviews") return img.category === "Google review";
    return true;
  });

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
    <section id="reviews" className="py-14 sm:py-24 bg-[#1F5F5B] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8704A] rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-[#D6E5E0] text-xs sm:text-sm font-bold tracking-wide uppercase mb-3 border border-white/15">
            <CheckCircle2 className="w-4 h-4 text-[#E8704A]" />
            Real transformations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            {data.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#D6E5E0] font-medium max-w-2xl mx-auto">
            {data.subtitle}
          </p>

          {/* Filter Pills */}
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Navigation Buttons (Desktop) */}
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

          {/* Scrollable Gallery */}
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
                className="relative flex-none w-[280px] sm:w-[340px] md:w-[360px] snap-center rounded-2xl overflow-hidden bg-slate-900/90 border border-white/20 shadow-2xl group cursor-pointer flex flex-col transition-all hover:border-white/40 hover:scale-[1.01]"
              >
                {/* Screenshot Image Container */}
                <div className="relative w-full h-[320px] sm:h-[380px] bg-slate-950/80 flex items-center justify-center p-2.5 overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-102"
                    sizes="(max-width: 640px) 340px, 420px"
                  />

                  {/* Always-Visible Zoom Hint */}
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10 shadow-xs pointer-events-none">
                    <ZoomIn className="w-3 h-3 text-[#E8704A]" />
                    <span className="hidden sm:inline">Click to zoom</span>
                    <span className="sm:hidden">Tap to zoom</span>
                  </div>
                </div>

                {/* Always-Visible Review Label & Caption (Shown on both Mobile and Desktop directly) */}
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
                  <p className="text-xs sm:text-sm font-semibold text-white leading-snug line-clamp-2">
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Arrows */}
          <div className="flex md:hidden justify-center items-center gap-4 mt-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center active:bg-white/30"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-white/70">Swipe or tap arrows</span>
            <button
              onClick={() => scroll("right")}
              aria-label="Next review"
              className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center active:bg-white/30"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={onOpenModal}
            className="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-[#E8704A] hover:bg-[#D85E38] text-white px-8 sm:px-10 py-4 text-base sm:text-lg font-black shadow-xl shadow-black/20 transition-all hover:scale-105 active:scale-95 cursor-pointer border-b-4 border-[#014D82]"
          >
            <span>Book my free Anxiety-Breakdown Consultation</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-xs sm:text-sm text-[#D6E5E0]">
            Join 5,000+ people who stopped masking symptoms and worked on the root cause.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (() => {
          const activeItem = data.images.find((img) => img.src === activeImage);
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
                aria-label="Close modal"
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer z-30"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl max-h-[88vh] w-full h-[85vh] rounded-2xl overflow-hidden bg-slate-950 flex flex-col items-center justify-center p-2 shadow-2xl border border-white/10"
              >
                <div className="relative w-full h-full flex-1">
                  <Image
                    src={activeImage}
                    alt={activeItem?.alt || "Client Review Enlarged"}
                    fill
                    className="object-contain"
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                </div>
                {activeItem && (
                  <div className="w-full bg-slate-900/95 border-t border-white/10 px-4 py-3 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-[#E8704A] text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                        {activeItem.category}
                      </span>
                      <span className="text-xs sm:text-sm text-white font-semibold">
                        {activeItem.alt}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400">Tap outside to close</span>
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}

