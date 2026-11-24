import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#123835] text-white/80 py-12 sm:py-16 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-10 border-b border-white/10">
          {/* Brand info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md shrink-0">
                <Image
                  src="/images/logo.svg"
                  alt="Wellness With Abhijit Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-black text-lg text-white block leading-tight">
                  Wellness With Abhijit
                </span>
                <span className="text-xs text-[#D6E5E0] font-medium uppercase tracking-wider">
                  6-Axis Psycho-Somatic Method
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Helping IT professionals who can’t switch off ease anxiety from the root, through yoga, breathwork and somatic movement.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Quick navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About Wellness With Abhijit
                </a>
              </li>
              <li>
                <a href="/#method" className="hover:text-white transition-colors">
                  The 6-axis method
                </a>
              </li>
              <li>
                <a href="/#system" className="hover:text-white transition-colors">
                  System deliverables
                </a>
              </li>
              <li>
                <a href="/#reviews" className="hover:text-white transition-colors">
                  Client reviews
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-white transition-colors">
                  Frequently asked questions
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Crisis Hotline Card */}
          <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E8704A] uppercase mb-2">
              <PhoneCall className="w-4 h-4" />
              24/7 crisis support
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              If you or someone you know is in acute distress or having thoughts of self-harm, please connect with professional emergency care:
            </p>
            <div className="text-sm font-bold text-white">
              Tele-MANAS (Govt. of India):{" "}
              <a href="tel:14416" className="text-[#E8704A] underline font-black">
                14416
              </a>{" "}
              or{" "}
              <a href="tel:18008914416" className="text-[#E8704A] underline font-black">
                1800-891-4416
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer, Policies & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <p className="max-w-2xl leading-relaxed">
            <strong>Disclaimer:</strong> The 6-Axis Psycho-Somatic Reset is a behavioral, somatic, and lifestyle coaching system. It is educational in nature and does not replace medical advice, diagnosis, or prescription medical treatments. Do not stop or change any prescribed medication without speaking to your doctor. Client reviews are individual experiences, and results differ from person to person.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-3 text-slate-400 font-medium">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <span>·</span>
              <Link href="/refund-policy" className="hover:text-white transition-colors">Refunds</Link>
              <span>·</span>
              <Link href="/shipping" className="hover:text-white transition-colors">Shipping</Link>
              <span>·</span>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
            <p>
              &copy; {new Date().getFullYear()} Wellness With Abhijit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

