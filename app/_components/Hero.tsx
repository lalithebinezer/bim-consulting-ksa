"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "30+", label: "Years in IT Service" },
  { value: "320", label: "BIM Professionals" },
  { value: "3×", label: "ISO Certified" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">

      {/* 3D background canvas — parallax */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-60 dark:opacity-60 opacity-30">
          <Scene3D />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/70 via-[#F8FAFC]/40 to-[#F8FAFC] dark:from-[#060C1A]/60 dark:via-[#060C1A]/30 dark:to-[#060C1A]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249,115,22,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249,115,22,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-6 py-28 w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="animated-border font-mono text-xs text-[#F97316] px-5 py-2 rounded-full tracking-widest uppercase">
            ISO 9001:2015 · ISO/IEC 27001:2022 · Your Digital Innovation Partner
          </span>
        </motion.div>

        {/* Headline — staggered words */}
        <div className="overflow-hidden mb-8">
          {["BUILDING", "THE FUTURE", "WITH BIM"].map((word, i) => (
            <motion.div
              key={word}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.25 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`block font-bold leading-[0.9] tracking-tighter text-[clamp(3.5rem,10vw,10rem)] ${
                  i === 1 ? "text-gradient" : "text-[#0F172A] dark:text-white"
                }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="max-w-2xl text-slate-500 dark:text-[#94A3B8] text-lg md:text-xl leading-relaxed mb-12"
        >
          Gulf Business Solutions (GBS) helps AEC firms eliminate rework, resolve clashes before they hit site, and save millions — through expert BIM consulting and Autodesk Silver Partner solutions across Saudi Arabia and the GCC.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4 mb-24"
        >
          <a
            href="#roi-calculator"
            className="group flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/30"
          >
            Calculate Your BIM ROI
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-slate-300 dark:border-white/15 hover:border-[#F97316]/50 hover:text-[#F97316] text-[#0F172A] dark:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 cursor-pointer hover:bg-[#F97316]/5"
          >
            Start Your Project
          </a>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 max-w-2xl"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 + i * 0.08 }}
              className="bg-white dark:bg-[#0D0D0D]/80 backdrop-blur-sm px-6 py-5 flex flex-col gap-1 hover:bg-orange-50 dark:hover:bg-[#F97316]/8 transition-colors duration-300 cursor-default"
            >
              <span
                className="text-2xl md:text-3xl font-bold text-[#F97316]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 dark:text-[#64748B] font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-[#64748B]"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
