"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import SystemDetailsSection from "@/components/SystemDetailsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
// TestimonialSection hidden as requested by client
// import TestimonialSection from "@/components/TestimonialSection";
import ProofSection from "@/components/ProofSection";
import CoachProfileSection from "@/components/CoachProfileSection";
import NotForYouSection from "@/components/NotForYouSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ConsultationModal from "@/components/ConsultationModal";
import contentData from "@/data/content.json";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Listen for Tally form submission globally across the page
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const payload = typeof event.data === "string" ? JSON.parse(event.data) : event.data;
        if (payload?.event === "Tally.FormSubmitted") {
          window.location.href = "/thank-you";
        }
      } catch {
        if (typeof event.data === "string" && event.data.includes("Tally.FormSubmitted")) {
          window.location.href = "/thank-you";
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const handleOpenModal = () => {
    // If Tally script popup is available, trigger Tally full-screen popup directly
    const tally = (window as unknown as { Tally?: { openPopup: (id: string, opt?: object) => void } }).Tally;
    if (typeof tally !== "undefined" && typeof tally.openPopup === "function") {
      tally.openPopup("KppG7M", {
        layout: "default",
        autoClose: 1500,
        hideTitle: true,
        transparentBackground: true,
        onSubmitted: () => {
          window.location.href = "/thank-you";
        },
      });
    } else {
      // Fallback: open our full-screen modal with the embedded Tally form
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#FBFBFA] overflow-x-hidden selection:bg-[#E8704A]/20 selection:text-[#E8704A] pb-20 sm:pb-0">
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />

      {/* Navigation (Hidden on mobile, visible on desktop) */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <HeroSection
        data={contentData.hero}
        onOpenModal={handleOpenModal}
      />

      {/* Trust & Metric Strip */}
      <TrustStrip />

      {/* About Section ("About Wellness With Abhijit & Focus Areas") */}
      <AboutSection />

      {/* Methodology ("Introducing: The 6-Axis Psycho-Somatic Reset") */}
      <MethodologySection
        data={contentData.methodology}
        onOpenModal={handleOpenModal}
      />

      {/* Information About The System ("What You Get Inside The System") */}
      <SystemDetailsSection onOpenModal={handleOpenModal} />

      {/* Target Audience ("This Is For You If...") */}
      <TargetAudienceSection
        data={contentData.targetAudience}
        onOpenModal={handleOpenModal}
      />

      {/* Testimonials ("What Our Clients Say") - Hidden as requested */}
      {/* <TestimonialSection /> */}

      {/* Client Reviews & Transformation Gallery */}
      <ProofSection
        data={contentData.proofSection}
        onOpenModal={handleOpenModal}
      />

      {/* Coach Profile & Philosophy */}
      <CoachProfileSection onOpenModal={handleOpenModal} />

      {/* Exclusion Criteria ("This Is NOT For You If...") */}
      <NotForYouSection data={contentData.notForYou} />

      {/* Frequently Asked Questions */}
      <FAQSection
        faqs={contentData.faqs}
        onOpenModal={handleOpenModal}
      />

      {/* Footer */}
      <Footer />

      {/* Bottom Sticky CTA */}
      <StickyCTA onOpenModal={handleOpenModal} ctaText={contentData.hero.ctaText} />

      {/* Lead Capture Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={contentData.popupModal}
      />
    </main>
  );
}

