"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const BENEFITS = [
  "Autodesk Silver Partner — AEC Collection reseller",
  "Assessment of Needs & Strategy Planning",
  "Implementation & Optimize Accelerator Delivery",
  "Pipeline Development & Process Automation",
  "Workflow Optimization for AEC teams",
  "Dedicated support: info@gbs-saudi.com",
];

const PRODUCTS = [
  { name: "AutoCAD", desc: "2D/3D drafting" },
  { name: "Revit", desc: "BIM authoring" },
  { name: "Forma", desc: "AI pre-design" },
  { name: "Navisworks", desc: "Clash detection" },
  { name: "Civil 3D", desc: "Infrastructure" },
  { name: "ReCap Pro", desc: "Reality capture" },
  { name: "Advance Steel", desc: "Steel detailing" },
  { name: "3ds Max", desc: "Visualization" },
  { name: "Autodesk Doc", desc: "CDE / ACC" },
];

// Autodesk logo as inline SVG (simplified wordmark)
// New Autodesk logo mark (Refined 2021 Brand Identity)
function AutodeskLogo() {
  return (
    <svg
      viewBox="0 0 250 50"
      xmlns="http://www.w3.org/2000/svg"
      className="w-48 h-10"
      aria-label="Autodesk logo"
    >
      <defs>
        <linearGradient id="autodeskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
      </defs>
      {/* Symbol (The New Slanted A) */}
      <path
        d="M26.4 5.4H0.5L3.8 0H29.7L26.4 5.4ZM23.1 10.9L19.8 16.3H45.7L49 10.9H23.1ZM13.2 27.2L0.5 48.3L3.8 53.7L16.5 32.6L13.2 27.2ZM36.3 32.6H13.8L10.5 38.1H33L36.3 32.6Z"
        fill="url(#autodeskGrad)"
        fillOpacity="1"
      />
      {/* AUTODESK text simplified as vector if possible, or using text */}
      <text
        x="55"
        y="38"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="34"
        fill="white"
        letterSpacing="-0.02em"
      >
        AUTODESK
      </text>
    </svg>
  );
}

export default function Partnership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partnership" className="py-32 relative">
      <div className="absolute top-0 left-6 right-6 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#1282C4]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#00ADEF]/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mono text-xs text-[#00ADEF] tracking-widest uppercase block mb-4"
        >
          {"// 04 — Official Partnership"}
        </motion.span>

        {/* Big badge card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl mb-8 shadow-2xl shadow-blue-900/20"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1282C4]/10 via-transparent to-[#00ADEF]/8 pointer-events-none" />

          <div className="relative grid md:grid-cols-2 gap-0">
            {/* Left: Autodesk badge */}
            <div className="flex flex-col justify-center items-center p-12 md:p-16 border-b md:border-b-0 md:border-r border-slate-200 dark:border-white/5">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col items-center gap-6 text-center"
              >
                {/* Autodesk logo */}
                <div className="bg-[#1282C4] rounded-2xl px-8 py-5 shadow-lg shadow-blue-900/30">
                  <AutodeskLogo />
                </div>

                <div>
                  <div className="mono text-xs text-[#00ADEF] tracking-widest uppercase mb-2">
                    Silver Partner
                  </div>
                  <h3 className="text-2xl font-black text-white mb-1">
                    Autodesk Silver Partner
                  </h3>
                  <p className="text-slate-100 text-sm opacity-90">AEC Collection · GCC Region</p>
                </div>

                <div className="animated-border rounded-xl px-5 py-3 text-center">
                  <p className="mono text-[10px] text-[#00ADEF] tracking-widest uppercase mb-1">Engineering on Demand</p>
                  <p className="text-xs text-slate-100 opacity-80">Bridging Your Ideas to Reality</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Benefits */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white mb-6">
                What This Means<br />
                <span className="text-gradient">For You</span>
              </h3>

              <ul className="flex flex-col gap-3 mb-8">
                {BENEFITS.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-slate-100 opacity-90"
                  >
                    <CheckCircle2 size={16} className="text-[#00ADEF] shrink-0 mt-0.5" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              {/* Products */}
              <div className="grid grid-cols-3 gap-2">
                {PRODUCTS.map((p, i) => (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/6 rounded-lg p-3 text-center hover:border-[#1282C4]/40 dark:hover:border-[#1282C4]/40 transition-colors duration-200 cursor-default"
                  >
                    <div className="font-bold text-xs text-white mb-0.5">
                      {p.name}
                    </div>
                    <div className="mono text-[9px] text-[#00ADEF] opacity-80">{p.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
