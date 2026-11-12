"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ProofSection from "@/components/ProofSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import MethodologySection from "@/components/MethodologySection";
import CoachProfileSection from "@/components/CoachProfileSection";
import NotForYouSection from "@/components/NotForYouSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import contentData from "@/data/content.json";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#FBFBFA] overflow-x-hidden selection:bg-[#E8704A]/20 selection:text-[#E8704A]">
      {/* Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <HeroSection
        data={contentData.hero}
        onOpenModal={handleOpenModal}
      />

      {/* Trust & Metric Strip */}
      <TrustStrip />

      {/* Proof & Transformation Gallery */}
      <ProofSection
        data={contentData.proofSection}
        onOpenModal={handleOpenModal}
      />

      {/* Target Audience ("This Is For You If...") */}
      <TargetAudienceSection
        data={contentData.targetAudience}
        onOpenModal={handleOpenModal}
      />

      {/* Methodology ("Introducing: The 6-Axis Psycho-Somatic Reset") */}
      <MethodologySection
        data={contentData.methodology}
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

      {/* Lead Capture Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        data={contentData.popupModal}
      />
    </main>
  );
}

