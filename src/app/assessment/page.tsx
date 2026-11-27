"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

const BASE_TALLY_URL =
  "https://tally.so/embed/KppG7M?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export default function AssessmentPage() {
  const router = useRouter();
  const [tallyUrl, setTallyUrl] = useState(BASE_TALLY_URL);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const name = localStorage.getItem("lead_name") || "";
      const email = localStorage.getItem("lead_email") || "";
      const phone = localStorage.getItem("lead_phone") || "";

      if (name) {
        setUserName(name.split(" ")[0]);
      }

      const params = new URLSearchParams();
      if (name) params.set("name", name);
      if (email) params.set("email", email);
      if (phone) params.set("phone", phone);

      const query = params.toString();
      if (query) {
        setTallyUrl(`${BASE_TALLY_URL}&${query}`);
      }
    }

    const handleMessage = (event: MessageEvent) => {
      try {
        const payload =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (payload?.event === "Tally.FormSubmitted") {
          router.push("/book-slot");
        }
      } catch {
        if (
          typeof event.data === "string" &&
          event.data.includes("Tally.FormSubmitted")
        ) {
          router.push("/book-slot");
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  return (
    <main className="h-screen w-screen flex flex-col bg-white overflow-hidden">
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          const tally = (
            window as unknown as { Tally?: { loadEmbeds: () => void } }
          ).Tally;
          if (tally && typeof tally.loadEmbeds === "function") {
            tally.loadEmbeds();
          }
        }}
      />

      {/* Minimal Top Progress Bar */}
      <header className="bg-[#1F5F5B] text-white px-4 sm:px-8 py-3 flex items-center justify-between shadow-sm shrink-0 z-20">
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
              ? `${userName}, complete your quick intake`
              : "Quick Pre-Consultation Intake"}
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#D6E5E0] text-xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#E8704A]" />
          <span>Step 2 of 3</span>
        </div>
      </header>

      {/* Full-Page Tally Embed */}
      <div className="flex-1 w-full h-full bg-white overflow-y-auto">
        <iframe
          src={tallyUrl}
          data-tally-src={tallyUrl}
          loading="eager"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Pre-Consultation Assessment"
          className="w-full h-full min-h-[calc(100vh-56px)] border-0"
        />
      </div>
    </main>
  );
}
