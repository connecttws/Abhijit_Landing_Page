"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-md shadow-[#1F5F5B]/20 group-hover:scale-105 transition-transform shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Wellness With Abhijit Logo"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg text-[#0F172A] tracking-tight leading-tight flex items-center gap-1.5">
              Wellness With Abhijit
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-[#1F5F5B]/10 text-[#1F5F5B]">
                6-Axis
              </span>
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
              Psycho-Somatic Anxiety Reset
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-700">
          <a
            href="#method"
            className="hover:text-[#1F5F5B] transition-colors relative py-1 hover:border-b-2 hover:border-[#1F5F5B]"
          >
            6-Axis method
          </a>
          <a
            href="#reviews"
            className="hover:text-[#1F5F5B] transition-colors relative py-1 hover:border-b-2 hover:border-[#1F5F5B]"
          >
            Client reviews
          </a>
          <a
            href="#for-you"
            className="hover:text-[#1F5F5B] transition-colors relative py-1 hover:border-b-2 hover:border-[#1F5F5B]"
          >
            Who it’s for
          </a>
          <a
            href="#faq"
            className="hover:text-[#1F5F5B] transition-colors relative py-1 hover:border-b-2 hover:border-[#1F5F5B]"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenModal}
            className="relative inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1F5F5B] hover:bg-[#174946] text-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-[#1F5F5B]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#E8704A]" />
            <span>Book free consultation</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}

