export interface BrandInfo {
  name: string;
  coach: string;
  title: string;
  tagline: string;
}

export interface HeroData {
  badge: string;
  headline: {
    prefix: string;
    highlight1: string;
    middle: string;
    highlight2: string;
    suffix: string;
    highlight3: string;
  };
  subheadline: string;
  ctaText: string;
  urgencyNote: string;
  trustBadges: string[];
}

export interface ProofStat {
  value: string;
  label: string;
}

export interface ProofImage {
  src: string;
  alt: string;
  category: string;
}

export interface ProofSectionData {
  title: string;
  subtitle: string;
  stats: ProofStat[];
  images: ProofImage[];
}

export interface TargetAudiencePoint {
  title: string;
  description: string;
}

export interface TargetAudienceData {
  title: string;
  subtitle: string;
  points: TargetAudiencePoint[];
  ctaText: string;
}

export interface StepHighlight {
  label: string;
  desc: string;
}

export interface MethodStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  highlights?: StepHighlight[];
  keyPoints?: string[];
}

export interface MethodologyData {
  title: string;
  subtitle: string;
  infographic: {
    src: string;
    alt: string;
  };
  steps: MethodStep[];
  ctaText: string;
}

export interface NotForYouPoint {
  text: string;
  emergency?: {
    service: string;
    helpline: string;
    available: string;
  };
}

export interface NotForYouData {
  title: string;
  subtitle: string;
  points: NotForYouPoint[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PopupField {
  name: string;
  label: string;
  placeholder: string;
  required: boolean;
  type: string;
}

export interface PopupModalData {
  stepBadge: string;
  title: string;
  subtitle: string;
  fields: PopupField[];
  submitText: string;
  subtext: string;
  privacy: string;
}

export interface ThankYouData {
  title: string;
  subtitle: string;
  tallyEmbedUrl: string;
  nextSteps: string[];
}

export interface LandingPageContent {
  brand: BrandInfo;
  hero: HeroData;
  proofSection: ProofSectionData;
  targetAudience: TargetAudienceData;
  methodology: MethodologyData;
  notForYou: NotForYouData;
  faqs: FAQItem[];
  popupModal: PopupModalData;
  thankYou: ThankYouData;
}

