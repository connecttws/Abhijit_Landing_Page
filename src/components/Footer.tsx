import { Activity, PhoneCall, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#123835] text-white/80 py-12 sm:py-16 border-t border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 pb-10 border-b border-white/10">
          {/* Brand info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8704A] flex items-center justify-center text-white shadow-md">
                <Activity className="w-5 h-5 text-white" />
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
              Helping busy professionals, executives, and high-stress individuals resolve chronic anxiety, insomnia, and somatic tension from the root cause — completely drug-free.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a href="#method" className="hover:text-white transition-colors">
                  The 6-Axis Method
                </a>
              </li>
              <li>
                <a href="#proof" className="hover:text-white transition-colors">
                  Client Results & Proof
                </a>
              </li>
              <li>
                <a href="#for-you" className="hover:text-white transition-colors">
                  Who This Is For
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Crisis Hotline Card */}
          <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E8704A] uppercase mb-2">
              <PhoneCall className="w-4 h-4" />
              24/7 Crisis Support
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              If you or someone you know is in acute distress or having thoughts of self-harm, please connect with professional emergency care:
            </p>
            <div className="text-sm font-bold text-white">
              Tele-MANAS (GOI):{" "}
              <a href="tel:18008914416" className="text-[#E8704A] underline font-black">
                1800-891-4416
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <p className="max-w-2xl leading-relaxed">
            <strong>Disclaimer:</strong> The 6-Axis Psycho-Somatic Reset is a behavioral, somatic, and lifestyle coaching system. It is educational in nature and does not replace medical advice, diagnosis, or prescription medical treatments.
          </p>
          <p className="shrink-0">
            &copy; {new Date().getFullYear()} Wellness With Abhijit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

