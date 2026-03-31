"use client";
import { asset } from "@/lib/utils";



const LINKS = {
  Services: ["BIM Modelling", "Clash Detection", "4D/5D Simulation", "VR & Visualization", "QTO & Cost", "Scan-to-BIM"],
  Company: ["About Us", "Projects", "Partnership", "Careers", "www.cns-me.com"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 backdrop-blur-3xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00ADEF]/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative flex items-center justify-center -ml-1">
                <svg viewBox="-10 -10 140 140" className="absolute inset-0 w-full h-full animate-slow-spin">
                  <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-[#00ADEF]/30" />
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <circle 
                      key={i} 
                      cx={60 + 35 * Math.cos((angle * Math.PI) / 180)} 
                      cy={60 + 35 * Math.sin((angle * Math.PI) / 180)} 
                      r={i % 2 === 0 ? 4.5 : 2.8} 
                      fill={i % 3 === 0 ? "#1282C4" : "#00ADEF"} 
                    />
                  ))}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center p-1.5">
                  <img 
                    src={asset("/gbs-logo.png")} 
                    alt="GBS Logo" 
                    className="w-full h-full object-contain brightness-110"
                  />
                </div>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                Gulf Business Solutions <span className="text-[#00ADEF]">(GBS)</span>
              </span>
            </div>
            <p className="text-slate-100/70 text-sm leading-relaxed mb-6 max-w-xs">
              Gulf Business Solutions (GBS) is the KSA entity of CNS — an ISO 9001:2015, ISO/IEC 20000-1:2018 & ISO/IEC 27001:2022 certified BIM consulting firm. Your Digital Innovation Partner.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 bg-white/10 rounded px-3 py-2 border border-white/10">
                <img 
                  src={asset("/autodesk-logo.png")} 
                  alt="Autodesk Partner" 
                  className="h-3 w-auto invert filter brightness-200 contrast-150" 
                />
                <span className="text-[9px] font-black text-white tracking-widest uppercase opacity-90">Partner</span>
              </div>
              <span className="mono text-[10px] text-[#00ADEF] opacity-80">Authorized Partner</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="mono text-[11px] text-[#00ADEF] tracking-widest uppercase mb-4">{group}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-100/60 hover:text-[#00ADEF] transition-colors duration-200 cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mono text-xs text-slate-100 opacity-60">
            © 2025 Gulf Business Solutions LLC (GBS) — CNS KSA Entity. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="mono text-[10px] text-[#00ADEF] border border-[#00ADEF]/30 px-3 py-1.5 rounded-full bg-[#00ADEF]/5">
              ISO 9001:2015 Certified
            </span>
            <span className="mono text-[10px] text-slate-100 opacity-60 hover:text-[#00ADEF] transition-colors">www.cns-me.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
