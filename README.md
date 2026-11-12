# Wellness With Abhijit - Psycho-Somatic Anxiety Reset Landing Page

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.3.1-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-black?style=flat&logo=framer)](https://motion.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](LICENSE)

A high-converting, responsive Next.js landing page crafted for **Wellness With Abhijit (Abhijit Ghosh - Psycho-Somatic Wellness & Anxiety Reset Coach)**. It showcases the science-backed Psycho-Somatic Reset Method to systematically address chronic anxiety, gut-brain dysregulation, sleep disturbances, and autonomic stress responses without dependency on pills or talk-only therapies.

---

## 🌟 Key Highlights & Methodology

- **Root-Cause Resolution**: Targets autonomic nervous system hyper-arousal, vagal tone, and gut-mind biochemical signals rather than temporary symptom suppression.
- **The 4-Pillar Psycho-Somatic Roadmap**:
  1. *Root Cause Assessment*: In-depth somatic biomarker & autonomic profile evaluation.
  2. *Gut-Brain Biochemistry*: Nutrient restoration, gut microbiome rebalancing, and inflammatory reduction.
  3. *Vagal Nerve & Somatic Reset*: Somatic release practices, diaphragm reset, and physiological safety signaling.
  4. *Sustainable Neuroplastic Conditioning*: Long-term neural pathways for calm resilience and emotional self-regulation.
- **High-Intent Conversion UX**: Interactive consultation booking modal, qualifying filters, video proof testimonials, and verified client transformations.

---

## 🚀 Features & Modules

### 1. Navigation & Sticky Value Bar
- **Header**: Responsive navbar with section anchors (`#audience`, `#method`, `#proof`, `#coach`, `#faq`) and high-contrast CTA button.
- **Trust Strip**: Fast social proof banner displaying 500+ recovered clients, 94% success rate, and 100% natural protocol credentials.

### 2. Diagnosis & Target Audience ("Is This You?")
- **Symptom Self-Checklist**: Identifies chronic fatigue, panic attacks, chest tightness, brain fog, erratic sleep, and IBS-related gut distress.
- **Root Cause Education**: Compares temporary surface fixes (sedatives, coping techniques) with deep psycho-somatic reset.

### 3. Interactive Methodology & Visual Blueprint
- **Step-by-Step Architecture**: Clear 4-phase framework with expandable details and interactive infographics.
- **Infographic Zoom Modal**: High-definition walkthrough of the nervous system reset workflow.

### 4. Verified Transformations & Social Proof
- **Case Studies**: Real transformations showing before/after biometric improvements and anxiety reduction metrics.
- **Review Cards**: Verified client testimonials with rating breakdowns and specific symptom relief timelines.

### 5. Qualification Section ("Who This Is NOT For")
- **High-Intent Filtering**: Candid qualifiers ensuring only serious candidates who value root-cause somatic healing apply for 1-on-1 consultations.

### 6. Interactive Consultation Booking & Thank You Flow
- **Consultation Modal**: Seamless multi-field booking modal with name, phone, email, primary challenge, and preferred consultation mode.
- **Dedicated Confirmation Route**: Instant client routing to `/thank-you` page upon successful booking.
- **Lead Capture Pipeline**: Integrated with the BooClient CRM Lead Tracker script for zero-leakage lead attribution.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technology |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) 16 (App Router with Webpack) |
| **UI Library** | [React](https://react.dev/) 19 |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS |
| **Animations** | [Framer Motion](https://motion.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Analytics & CRM** | BooClient CRM Lead Tracker |

---

## 📂 Project Structure

```text
Abhijit_Landing_Page/
├── public/
│   ├── crm-lead-tracker.js    # Client-side analytics & CRM tracking
│   └── images/                # Coach portraits, infographics & case study assets
├── src/
│   ├── app/
│   │   ├── globals.css        # Global CSS & Tailwind design tokens
│   │   ├── layout.tsx         # Root layout with Inter font and CRM tracker
│   │   ├── page.tsx           # Assembled single-page landing architecture
│   │   └── thank-you/         # Post-booking confirmation & onboarding page
│   ├── components/
│   │   ├── Navbar.tsx         # Responsive header with live consultation CTA
│   │   ├── HeroSection.tsx    # Impactful hero with trust badges & primary CTA
│   │   ├── TrustStrip.tsx     # Metrics banner (clients recovered, success rate)
│   │   ├── TargetAudienceSection.tsx # "Is This You?" somatic symptom checklist
│   │   ├── MethodologySection.tsx    # 4-Pillar Psycho-Somatic Reset methodology
│   │   ├── CoachProfileSection.tsx   # Abhijit Ghosh credentials & philosophy
│   │   ├── ProofSection.tsx          # Real case studies, metrics & testimonials
│   │   ├── NotForYouSection.tsx      # Audience qualifier & expectation setting
│   │   ├── FAQSection.tsx            # Expandable accordion FAQs
│   │   ├── ConsultationModal.tsx     # Interactive consultation booking modal
│   │   └── Footer.tsx                # Compliance, disclaimer & navigation
│   ├── data/
│   │   └── landing-content.json # Centralized copy and structured section data
│   └── types/
│       └── landing.ts         # TypeScript interfaces for sections and forms
├── visual-data/               # Extracted design assets and content schema
├── next.config.ts             # Next.js configuration
├── package.json               # Dependencies and scripts
├── pnpm-lock.yaml             # Lockfile
└── README.md                  # Comprehensive project documentation
```

---

## 🏁 Getting Started

### Prerequisites

- **Node.js**: `v18.18+` or `v20+`
- **Package Manager**: `pnpm` (recommended) or `npm`

### Installation

1. Clone the repository:
   ```bash
   git clone git@github-tws:connecttws/Abhijit_Landing_Page.git
   cd Abhijit_Landing_Page
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Production Build & Deployment

```bash
# Production compilation
pnpm build

# Start production server
pnpm start
```

### Deploy to Vercel

1. Push your repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/).
3. Framework preset will automatically configure Next.js settings (`pnpm build`).
4. Click **Deploy**.

---

## 📊 CRM Lead Tracking Setup

The page includes native integration with the **BooClient CRM Lead Tracker**:
- Script path: `public/crm-lead-tracker.js`.
- Automatically injected asynchronously in `src/app/layout.tsx`.
- Form inputs in `src/components/ConsultationModal.tsx` include semantic `name` and `data-question` attributes for complete lead capture into your CRM pipeline.

---

## 📄 License

This project is licensed under the MIT License — feel free to customize and extend for your coaching & wellness marketing needs.
