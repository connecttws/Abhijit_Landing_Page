"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

const DEFAULT_CALENDLY_URL =
  "https://calendly.com/wellnesswithabhijit-team/anxiety-breakdown-consultation-with-abhijit";

const CALENDLY_BASE_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || DEFAULT_CALENDLY_URL;

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export default function BookSlotPage() {
  const router = useRouter();
  const widgetRef = useRef<HTMLDivElement>(null);
  const redirectedRef = useRef(false);
  const [calendlyUrl, setCalendlyUrl] = useState<string | null>(null);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let resolvedUrl = CALENDLY_BASE_URL;

    if (typeof window !== "undefined") {
      const name = localStorage.getItem("lead_name") || "";
      const email = localStorage.getItem("lead_email") || "";
      if (name) setUserName(name.split(" ")[0]);

      const separator = CALENDLY_BASE_URL.includes("?") ? "&" : "?";
      const params = new URLSearchParams();
      if (name) params.set("name", name);
      if (email) params.set("email", email);
      const query = params.toString();
      if (query) {
        resolvedUrl = `${CALENDLY_BASE_URL}${separator}${query}`;
      }
    }

    setCalendlyUrl(resolvedUrl);

    // Calendly emits calendly.event_scheduled via postMessage upon slot booking
    const handleMessage = (event: MessageEvent) => {
      try {
        const data =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (data?.event === "calendly.event_scheduled" && !redirectedRef.current) {
          redirectedRef.current = true;
          router.push("/thank-you");
        }
      } catch {
        // Ignore non-JSON messages from unrelated scripts
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  // Ensure Calendly widget initializes reliably even on Next.js client-side navigation
  useEffect(() => {
    if (!calendlyUrl || !widgetRef.current) return;
    if (
      typeof window !== "undefined" &&
      window.Calendly &&
      typeof window.Calendly.initInlineWidget === "function" &&
      !widgetRef.current.querySelector("iframe")
    ) {
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: widgetRef.current,
      });
    }
  }, [calendlyUrl]);

  return (
    <main className="min-h-screen w-full flex flex-col bg-[#FBFBFA]">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (
            calendlyUrl &&
            widgetRef.current &&
            window.Calendly &&
            typeof window.Calendly.initInlineWidget === "function" &&
            !widgetRef.current.querySelector("iframe")
          ) {
            window.Calendly.initInlineWidget({
              url: calendlyUrl,
              parentElement: widgetRef.current,
            });
          }
        }}
      />

      {/* Top Progress Header */}
      <header className="bg-[#1F5F5B] text-white px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm shrink-0 sticky top-0 z-20">
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
      <div className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-8 py-6 sm:py-10 flex flex-col items-center">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Pick a Date &amp; Time with Coach Abhijit
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-xl mx-auto">
            Select a convenient slot below for your private 1-on-1 Anxiety-Breakdown Consultation.
          </p>
        </div>

        <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[700px]">
          {calendlyUrl && (
            <div
              ref={widgetRef}
              className="calendly-inline-widget w-full"
              data-url={calendlyUrl}
              style={{ minWidth: "320px", height: "700px" }}
            />
          )}
        </div>
      </div>
    </main>
  );
}
