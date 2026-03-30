"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calculator, TrendingDown, Clock, AlertTriangle, ArrowRight } from "lucide-react";

const DISCIPLINE_CLASH_RATE = 12; // avg clashes per 1000 sqm
const COST_PER_CLASH_REWORK = 4200; // USD
const BIM_CLASH_REDUCTION = 0.72;
const MANHOURS_SAVED_PER_1000SQM = 380;
const HOURLY_RATE = 85;
const DESIGN_ERROR_REDUCTION = 0.35;
const DESIGN_ERROR_COST_PCT = 0.06; // 6% of project cost

function fmt(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1000)}K`;
  return `$${Math.round(n)}`;
}

export default function ROICalculator() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [area, setArea] = useState(10000);
  const [budget, setBudget] = useState(5000000);
  const [disciplines, setDisciplines] = useState(3);
  const [months, setMonths] = useState(18);
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  // Calculations
  const areaSqm = area;
  const clashesTotal = Math.round((areaSqm / 1000) * DISCIPLINE_CLASH_RATE * disciplines);
  const clashesResolved = Math.round(clashesTotal * BIM_CLASH_REDUCTION);
  const clashSavings = Math.round(clashesResolved * COST_PER_CLASH_REWORK);
  const manHoursSaved = Math.round((areaSqm / 1000) * MANHOURS_SAVED_PER_1000SQM * (disciplines / 3));
  const labourSavings = Math.round(manHoursSaved * HOURLY_RATE);
  const designErrorSavings = Math.round(budget * DESIGN_ERROR_COST_PCT * DESIGN_ERROR_REDUCTION);
  const totalSavings = clashSavings + labourSavings + designErrorSavings;
  const roi = Math.round((totalSavings / (budget * 0.01)) * 100) / 100; // BIM costs ~1% of project

  const results = [
    { label: "Clash Rework Savings", value: fmt(clashSavings), sub: `${clashesResolved} clashes resolved`, color: "#F97316", icon: AlertTriangle },
    { label: "Man-Hours Saved", value: `${manHoursSaved.toLocaleString()} hrs`, sub: fmt(labourSavings) + " labour value", color: "#10B981", icon: Clock },
    { label: "Design Error Reduction", value: fmt(designErrorSavings), sub: `35% fewer errors`, color: "#3B82F6", icon: TrendingDown },
  ];

  return (
    <section id="roi-calculator" className="py-32 relative">
      <div className="absolute top-0 left-6 right-6 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#F97316]/4 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-[#F97316] tracking-widest uppercase block mb-4"
        >
          // Free Tool — Instant Results
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading + inputs */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tighter leading-none text-[#0F172A] dark:text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              BIM ROI
              <br />
              <span className="text-gradient">CALCULATOR</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-500 dark:text-[#64748B] text-lg leading-relaxed mb-10 max-w-md"
            >
              Estimate how much your project saves with BIM — clash rework, man-hours, and design error costs. Adjust your project parameters below.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-6"
            >
              {/* Area */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="font-mono text-[11px] text-slate-500 dark:text-[#64748B] tracking-wider uppercase">Project Area</label>
                  <span className="font-bold text-[#F97316] text-sm font-mono">{area.toLocaleString()} m²</span>
                </div>
                <input
                  type="range" min={500} max={100000} step={500} value={area}
                  onChange={e => setArea(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-[#F97316]"
                />
                <div className="flex justify-between font-mono text-[9px] text-slate-500 dark:text-[#334155]"><span>500 m²</span><span>100,000 m²</span></div>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="font-mono text-[11px] text-slate-500 dark:text-[#64748B] tracking-wider uppercase">Project Budget</label>
                  <span className="font-bold text-[#F97316] text-sm font-mono">{fmt(budget)}</span>
                </div>
                <input
                  type="range" min={500000} max={100000000} step={500000} value={budget}
                  onChange={e => setBudget(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-[#F97316]"
                />
                <div className="flex justify-between font-mono text-[9px] text-slate-500 dark:text-[#334155]"><span>$500K</span><span>$100M</span></div>
              </div>

              {/* Disciplines */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="font-mono text-[11px] text-slate-500 dark:text-[#64748B] tracking-wider uppercase">No. of Disciplines</label>
                  <span className="font-bold text-[#F97316] text-sm font-mono">{disciplines}</span>
                </div>
                <input
                  type="range" min={1} max={6} step={1} value={disciplines}
                  onChange={e => setDisciplines(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-[#F97316]"
                />
                <div className="flex justify-between font-mono text-[9px] text-slate-500 dark:text-[#334155]"><span>1 (Arch)</span><span>6 (Full)</span></div>
              </div>

              {/* Duration */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="font-mono text-[11px] text-slate-500 dark:text-[#64748B] tracking-wider uppercase">Project Duration</label>
                  <span className="font-bold text-[#F97316] text-sm font-mono">{months} months</span>
                </div>
                <input
                  type="range" min={3} max={60} step={1} value={months}
                  onChange={e => setMonths(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full appearance-none cursor-pointer accent-[#F97316]"
                />
                <div className="flex justify-between font-mono text-[9px] text-slate-500 dark:text-[#334155]"><span>3 mo</span><span>60 mo</span></div>
              </div>
            </motion.div>
          </div>

          {/* Right: Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            {/* Total */}
            <div className="bg-gradient-to-br from-[#F97316]/15 to-[#F97316]/5 border border-[#F97316]/30 rounded-2xl p-8 text-center">
              <div className="font-mono text-xs text-[#F97316] tracking-widest uppercase mb-2">Estimated Total Savings</div>
              <div
                className="text-6xl font-black text-[#0F172A] dark:text-white mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {fmt(totalSavings)}
              </div>
              <div className="text-sm text-slate-500 dark:text-[#64748B]">
                <span className="text-[#10B981] font-bold">{roi}×</span> estimated ROI on BIM investment
              </div>
            </div>

            {/* Breakdown */}
            {results.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={r.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-slate-50 dark:bg-[#0E0E10] border border-slate-200 dark:border-white/6 rounded-xl p-5 flex items-center gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${r.color}18`, color: r.color, border: `1px solid ${r.color}30` }}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-500 dark:text-[#64748B] mb-0.5">{r.label}</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-[#0F172A] dark:text-white">{r.value}</span>
                      <span className="text-[10px] text-slate-500 dark:text-[#475569]">{r.sub}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA — email gate */}
            <div className="bg-white dark:bg-[#0D0D0D] border border-slate-200 dark:border-white/8 rounded-xl p-5">
              {sent ? (
                <div className="text-center py-2">
                  <div className="text-[#10B981] font-bold text-sm mb-1">Report sent!</div>
                  <p className="text-slate-500 dark:text-[#64748B] text-xs">Check your inbox for the full BIM ROI breakdown PDF.</p>
                </div>
              ) : showEmail ? (
                <div className="flex flex-col gap-3">
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8]">Enter your email to receive the full detailed report:</p>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/8 rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-[#333] focus:outline-none focus:border-orange-200 dark:focus:border-[#F97316]/50 transition-colors"
                  />
                  <button
                    onClick={() => email && setSent(true)}
                    className="group flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-bold text-sm py-3 rounded-xl transition-all duration-200"
                  >
                    Send My Report
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowEmail(true)}
                  className="group w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-bold text-sm py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  <Calculator size={16} />
                  Get Full Detailed Report
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>

            <p className="text-[10px] text-slate-500 dark:text-[#334155] text-center font-mono">
              Estimates based on industry benchmarks. Actual savings vary by project complexity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
