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
function AutodeskLogo() {
  return (
    <svg
      viewBox="0 0 240 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-48 h-12"
      aria-label="Autodesk logo"
    >
      {/* A mark */}
      <path d="M0 48L18 6h8l18 42h-10l-3.5-8.5H13.5L10 48H0zm16-16h12l-6-15-6 15z" fill="white" />
      {/* UTODESK wordmark */}
      <text
        x="50"
        y="42"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="white"
        letterSpacing="1"
      >
        UTODESK
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
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#0066CC]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#F97316]/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mono text-xs text-[#F97316] tracking-widest uppercase block mb-4"
        >
          {"// 04 — Official Partnership"}
        </motion.span>

        {/* Big badge card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/8 bg-white dark:bg-[#0D0D0D] mb-8"
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/10 via-transparent to-[#F97316]/8 pointer-events-none" />

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
                <div className="bg-[#0066CC] rounded-2xl px-8 py-5 shadow-lg shadow-blue-900/30">
                  <AutodeskLogo />
                </div>

                <div>
                  <div className="mono text-xs text-[#0099FF] tracking-widest uppercase mb-2">
                    Silver Partner
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A] dark:text-white mb-1">
                    Autodesk Silver Partner
                  </h3>
                  <p className="text-slate-500 dark:text-[#64748B] text-sm">AEC Collection · GCC Region</p>
                </div>

                <div className="animated-border rounded-xl px-5 py-3 text-center">
                  <p className="mono text-[10px] text-[#F97316] tracking-widest uppercase mb-1">Engineering on Demand</p>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Bridging Your Ideas to Reality</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Benefits */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-[#0F172A] dark:text-white mb-6">
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
                    className="flex items-start gap-3 text-sm text-slate-500 dark:text-[#94A3B8]"
                  >
                    <CheckCircle2 size={16} className="text-[#F97316] shrink-0 mt-0.5" />
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
                    className="bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/6 rounded-lg p-3 text-center hover:border-blue-300 dark:hover:border-[#0066CC]/40 transition-colors duration-200 cursor-default"
                  >
                    <div className="font-bold text-xs text-[#0F172A] dark:text-white mb-0.5">
                      {p.name}
                    </div>
                    <div className="mono text-[9px] text-slate-500 dark:text-[#475569]">{p.desc}</div>
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
