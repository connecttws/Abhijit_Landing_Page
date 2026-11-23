"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import SystemDetailsSection from "@/components/SystemDetailsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import TestimonialSection from "@/components/TestimonialSection";
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

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#FBFBFA] overflow-x-hidden selection:bg-[#E8704A]/20 selection:text-[#E8704A] pb-20 sm:pb-0">
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

      {/* Testimonials ("What Our Clients Say") */}
      <TestimonialSection />

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

