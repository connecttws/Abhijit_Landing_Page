"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calendar, Sparkles, ArrowRight } from "lucide-react";

const CALENDLY_BASE_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

export default function BookSlotPage() {
  const router = useRouter();
  const [calendlyUrl, setCalendlyUrl] = useState(CALENDLY_BASE_URL);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const name = localStorage.getItem("lead_name") || "";
      const email = localStorage.getItem("lead_email") || "";
      if (name) setUserName(name.split(" ")[0]);

      if (CALENDLY_BASE_URL) {
        const separator = CALENDLY_BASE_URL.includes("?") ? "&" : "?";
        const params = new URLSearchParams();
        if (name) params.set("name", name);
        if (email) params.set("email", email);
        const query = params.toString();
        setCalendlyUrl(
          query ? `${CALENDLY_BASE_URL}${separator}${query}` : CALENDLY_BASE_URL
        );
      }
    }

    // Calendly emits calendly.event_scheduled via postMessage upon slot booking
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data &&
        typeof event.data === "object" &&
        event.data.event === "calendly.event_scheduled"
      ) {
        router.push("/thank-you");
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  return (
    <main className="min-h-screen w-full flex flex-col bg-[#FBFBFA]">
      {calendlyUrl && (
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      )}

      {/* Top Progress Header */}
      <header className="bg-[#1F5F5B] text-white px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm shrink-0 z-20">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg overflow-hidden bg-white/10 shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Wellness With Abhijit"
              width={28}
              height={28}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-sm sm:text-base tracking-tight">
            {userName
              ? `${userName}, choose your 1-on-1 call slot`
              : "Schedule Your 1-on-1 Call"}
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#D6E5E0] text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
          <span>Step 3 of 3</span>
        </div>
      </header>

      {/* Main Booking Container */}
      <div className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 py-6 sm:py-10 flex flex-col items-center justify-center">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Pick a Date &amp; Time with Coach Abhijit
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-xl mx-auto">
            Select a convenient slot below for your private 1-on-1 Anxiety-Breakdown Consultation.
          </p>
        </div>

        {calendlyUrl ? (
          <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[700px]">
            <div
              className="calendly-inline-widget w-full"
              data-url={calendlyUrl}
              style={{ minWidth: "320px", height: "720px" }}
            />
          </div>
        ) : (
          <div className="w-full max-w-lg bg-white rounded-3xl border-2 border-dashed border-[#1F5F5B]/30 p-8 text-center shadow-lg">
            <div className="w-14 h-14 rounded-2xl bg-[#1F5F5B]/10 text-[#1F5F5B] flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7" />
            </div>
            <h2 className="text-xl font-black text-[#0F172A] mb-2">
              Calendly Link Pending
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Add your Calendly event URL in <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">NEXT_PUBLIC_CALENDLY_URL</code> to activate live slot booking here.
            </p>
            <Link
              href="/thank-you"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#E8704A] hover:bg-[#D85E38] text-white px-6 py-3 text-sm font-black shadow-md transition-all border-b-4 border-[#014D82]"
            >
              <span>Preview Thank You Page</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
