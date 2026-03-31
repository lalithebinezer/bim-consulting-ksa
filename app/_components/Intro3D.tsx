"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { asset } from "@/lib/utils";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const LOADING_STEPS = [
  "Initializing BIM environment...",
  "Loading project data...",
  "Rendering 3D model...",
  "Ready.",
];

export default function Intro3D({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Animate progress bar
    const progInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(progInterval); return 100; }
        return p + 1.2;
      });
    }, 28);

    // Cycle loading steps
    const stepIntervals = [600, 1400, 2200].map((delay, i) =>
      setTimeout(() => setStep(i + 1), delay)
    );

    // Trigger exit
    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 900);
    }, 3400);

    return () => {
      clearInterval(progInterval);
      stepIntervals.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#060608] flex flex-col overflow-hidden"
        >
          {/* Scanline effect */}
          <div
            className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 4px)",
              backgroundSize: "100% 4px",
            }}
          />

          {/* Corner brackets */}
          {[
            "top-6 left-6 border-t-2 border-l-2",
            "top-6 right-6 border-t-2 border-r-2",
            "bottom-6 left-6 border-b-2 border-l-2",
            "bottom-6 right-6 border-b-2 border-r-2",
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className={`absolute w-8 h-8 border-[#00ADEF]/60 ${cls}`}
            />
          ))}

          {/* 3D Canvas fills the screen */}
          <div className="absolute inset-0">
            <Scene3D />
          </div>

          {/* Top HUD bar */}
          <div className="relative z-20 flex items-center justify-between px-8 pt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#00ADEF]/30 bg-black flex items-center justify-center">
                <img src={asset("/gbs-logo.png")} alt="GBS" className="w-6 h-6 object-contain" />
              </div>
              <span className="font-mono text-xs text-[#00ADEF] tracking-widest uppercase">
                GBS — Future Built
              </span>
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono text-[10px] text-[#334155] tracking-wider"
            >
              v2.5.0 · ISO 19650
            </motion.span>
          </div>

          {/* Centre overlay: company name */}
          <div className="relative z-20 flex-1 flex flex-col items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="font-mono text-[10px] text-[#00ADEF] tracking-[0.5em] uppercase mb-4 opacity-70">
                AEC Innovation · Since 1995
              </div>
              <h1
                className="text-[clamp(2.5rem,6vw,4rem)] font-black tracking-tighter leading-tight text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                GULF BUSINESS SOLUTIONS
              </h1>
              <div className="font-mono text-xs text-[#00ADEF]/60 mt-1 tracking-[0.8em] uppercase">
                Future Built
              </div>
            </motion.div>
          </div>

          {/* Bottom HUD: progress */}
          <div className="relative z-20 px-8 pb-8 flex flex-col gap-4">
            {/* Step text */}
            <div className="h-5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={step}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-[11px] text-[#475569] tracking-wider"
                >
                  {LOADING_STEPS[step]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Progress bar */}
            <div className="w-full h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00ADEF] via-[#1282C4] to-[#4A69BD] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-[#2c4e7d]">
                RIYADH · JEDDAH · KSA
              </span>
              <span className="font-mono text-[10px] text-[#00ADEF]">
                {Math.min(100, Math.round(progress))}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
