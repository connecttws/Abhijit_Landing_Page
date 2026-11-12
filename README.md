# Wellness With Abhijit - Psycho-Somatic Anxiety Reset Landing Page

A high-converting, responsive Next.js landing page crafted for **Wellness With Abhijit (Abhijit Ghosh - Psycho-Somatic Wellness & Anxiety Reset Coach)**, featuring the 6-Axis Psycho-Somatic Method to address anxiety, sleep, gut-mind chemistry, and chronic stress without pills or conventional therapy.

## 🚀 Features

- **Modern & Responsive Stack**: Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.
- **Conversion-Optimized Modules**:
  - Hero Section with high-intent hook, trust badges, and direct consultation CTA
  - "Is This You?" Target Audience & Pain Point Diagnostics
  - The 6-Axis Psycho-Somatic Methodology Breakdown
  - Coach Profile, Credentials & Philosophy (Abhijit Ghosh)
  - Social Proof, Patient Transformations & Case Studies
  - "Who This Is NOT For" Qualifier Section
  - Interactive Consultation Booking Modal with instant confirmation & Thank You route
  - Comprehensive FAQs & Sticky CTAs
- **Lead Tracking**: Pre-configured dual client/server CRM tracking pipeline.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16 (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Animation**: [Framer Motion](https://motion.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📂 Project Structure

```text
├── public/                # Static assets, testimonials, and tracking scripts
│   └── crm-lead-tracker.js# Lead capture & analytics tracking
├── src/
│   ├── app/               # Next.js App Router (Layout, Home, and Thank You pages)
│   │   ├── globals.css    # Global Tailwind CSS configurations
│   │   ├── layout.tsx     # Root layout with fonts & metadata
│   │   ├── page.tsx       # Main landing page composition
│   │   └── thank-you/     # Post-booking confirmation page
│   ├── components/        # Modular UI and conversion components
│   │   ├── CoachProfileSection.tsx
│   │   ├── ConsultationModal.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── MethodologySection.tsx
│   │   ├── Navbar.tsx
│   │   ├── NotForYouSection.tsx
│   │   ├── ProofSection.tsx
│   │   ├── TargetAudienceSection.tsx
│   │   └── TrustStrip.tsx
│   ├── data/              # Content & copy JSON definitions
│   └── types/             # TypeScript interfaces
```

## 🏁 Getting Started

First, install dependencies:

```bash
pnpm install
# or
npm install
```

Run the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📦 Production Build

```bash
pnpm build
pnpm start
```
