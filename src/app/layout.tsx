import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reset Your Anxiety in 90 Days | 6-Axis Psycho-Somatic Reset | Abhijit Nayyar",
  description:
    "Fix your anxiety from the root, not just symptoms. A 90-day psycho-somatic reset repairing gut-mind chemistry, sleep, posture, and stress-related tension.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <Script
          src="/crm-lead-tracker.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#FBFBFA] text-[#0F172A] selection:bg-[#E8704A]/20 selection:text-[#E8704A]">
        {children}
      </body>
    </html>
  );
}
