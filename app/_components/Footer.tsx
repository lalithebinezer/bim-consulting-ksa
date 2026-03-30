"use client";



const LINKS = {
  Services: ["BIM Modelling", "Clash Detection", "4D/5D Simulation", "VR & Visualization", "QTO & Cost", "Scan-to-BIM"],
  Company: ["About Us", "Projects", "Partnership", "Careers", "www.cns-me.com"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#070707]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-[#F97316] rounded-lg flex items-center justify-center font-black text-black text-sm">
                GBS
              </div>
              <span className="font-bold text-lg tracking-tight text-[#0F172A] dark:text-white">
                Gulf business solution <span className="text-[#F97316]">(GBS)</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-[#475569] text-sm leading-relaxed mb-6 max-w-xs">
              Gulf Business Solutions (GBS) is the KSA entity of CNS — an ISO 9001:2015, ISO/IEC 20000-1:2018 &amp; ISO/IEC 27001:2022 certified BIM consulting firm. Your Digital Innovation Partner.
            </p>
            <div className="flex items-center gap-2">
              <div className="bg-[#0066CC] rounded px-3 py-1.5 text-[10px] font-bold text-white tracking-wider">
                AUTODESK
              </div>
              <span className="mono text-[10px] text-slate-500 dark:text-[#475569]">Authorized Partner</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="mono text-[11px] text-[#F97316] tracking-widest uppercase mb-4">{group}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-slate-500 dark:text-[#475569] hover:text-[#0F172A] dark:hover:text-white transition-colors duration-200 cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="mono text-xs text-slate-500 dark:text-[#334155]">
            © 2025 Gulf Business Solutions LLC (GBS) — CNS KSA Entity. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="mono text-[10px] text-slate-600 dark:text-[#1E3A5F] border border-slate-300 dark:border-[#1E3A5F]/50 px-3 py-1.5 rounded-full">
              ISO 9001:2015 Certified
            </span>
            <span className="mono text-[10px] text-slate-500 dark:text-[#334155]">www.cns-me.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
