"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";

const TOPICS = [
  "Digital Twin lifecycle integration & facility management automation",
  "ISO 19650 compliance roadmap for Saudi Vision 2030 projects",
  "BIM ROI benchmarks: data from 50+ GCC construction projects",
  "Clash detection to zero-rework: a step-by-step framework",
];

const CONTENT_STREAM = [
  { type: "BLOG SERIES", title: "Autodesk Hacks: Revit & Dynamo", color: "#F97316" },
  { type: "LINKEDIN LIVE", title: "BIM Expert Q&A Sessions", color: "#0EA5E9" },
  { type: "WEEKLY SERIES", title: '"Clash of the Week" Breakdown', color: "#10B981" },
  { type: "TEAM SPOTLIGHT", title: "Meet the BIM Technical Team", color: "#8B5CF6" },
];

export default function LeadMagnet() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="resources" className="py-32 relative">
      <div className="absolute top-0 left-6 right-6 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#0EA5E9]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#F97316]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs text-[#F97316] tracking-widest uppercase block mb-4"
        >
          // Premium Content — Free Download
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* White Paper card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-gradient-to-br from-[#0EA5E9]/10 via-white dark:via-[#0D0D0D] to-[#F97316]/8 border border-slate-200 dark:border-white/8 rounded-3xl p-8 overflow-hidden flex flex-col justify-between min-h-[420px]"
          >
            {/* Big FM watermark */}
            <div className="absolute top-4 right-6 text-[120px] font-black opacity-[0.04] leading-none select-none pointer-events-none"
              style={{ fontFamily: "var(--font-heading)" }}>
              FM
            </div>

            <div>
              <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 rounded-full px-4 py-1.5 mb-6">
                <BookOpen size={12} className="text-[#0EA5E9]" />
                <span className="font-mono text-[10px] text-[#0EA5E9] tracking-widest uppercase">White Paper</span>
              </div>
              <h3
                className="text-3xl font-bold text-[#0F172A] dark:text-white tracking-tight leading-tight mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The Future of
                <br />
                <span className="text-gradient">Digital Twins</span>
              </h3>
              <p className="text-slate-500 dark:text-[#64748B] text-sm leading-relaxed mb-6">
                Deep dive into facility management integration and long-term asset lifecycle automation — what every AEC decision-maker needs to know.
              </p>
              <ul className="flex flex-col gap-2 mb-8">
                {TOPICS.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-xs text-slate-500 dark:text-[#94A3B8]">
                    <CheckCircle2 size={13} className="text-[#0EA5E9] shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {submitted ? (
              <div className="bg-[#10B981]/10 border border-[#10B981]/30 rounded-xl p-4 text-center">
                <div className="text-[#10B981] font-bold text-sm mb-1">White Paper on its way!</div>
                <p className="text-slate-500 dark:text-[#64748B] text-xs">Check your inbox — we&apos;ll send the PDF within minutes.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@company.com"
                  className="bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[#0F172A] dark:text-white placeholder-slate-400 dark:placeholder-[#333] focus:outline-none focus:border-blue-300 dark:focus:border-[#0EA5E9]/50 transition-colors"
                />
                <button
                  onClick={() => email && setSubmitted(true)}
                  className="group flex items-center justify-center gap-2 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold text-sm py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download size={15} />
                  Download Free White Paper
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[9px] text-slate-500 dark:text-[#334155] text-center font-mono">No spam. Unsubscribe anytime.</p>
              </div>
            )}
          </motion.div>

          {/* Partnership Alliance CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white dark:bg-[#0E0E10] border border-slate-200 dark:border-white/6 rounded-2xl p-8">
              <div className="inline-flex items-center gap-2 bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 rounded-full px-4 py-1.5 mb-6">
                <span className="font-mono text-[10px] text-[#8B5CF6] tracking-widest uppercase">Strategic Alliances</span>
              </div>
              <h3
                className="text-2xl font-bold text-[#0F172A] dark:text-white tracking-tight mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Is Your Firm Ready for BIM?
              </h3>
              <p className="text-slate-500 dark:text-[#64748B] text-sm leading-relaxed mb-6">
                We partner with A&E firms that lack high-end BIM infrastructure to provide a seamless, white-labelled BIM capability. Steady referral pipeline. Zero capital investment on your end.
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {["Steady referral stream with low sales headcount", "Win-win scaling for both parties", "Pilot implementation with 3 projects before full rollout"].map(b => (
                  <li key={b} className="flex items-start gap-2 text-xs text-slate-500 dark:text-[#94A3B8]">
                    <CheckCircle2 size={13} className="text-[#8B5CF6] shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="group flex items-center gap-2 border border-[#8B5CF6]/40 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 text-[#8B5CF6] font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 w-fit"
              >
                Explore Partnership
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Upcoming Content Stream */}
            <div className="bg-white dark:bg-[#0E0E10] border border-slate-200 dark:border-white/6 rounded-2xl p-6">
              <h4 className="font-mono text-xs text-[#F97316] tracking-widest uppercase mb-4">// Upcoming Content Stream</h4>
              <div className="grid grid-cols-2 gap-3">
                {CONTENT_STREAM.map((item) => (
                  <div key={item.title} className="bg-slate-50 dark:bg-[#111] border border-slate-200 dark:border-white/5 rounded-xl p-3 hover:border-slate-300 dark:hover:border-white/15 transition-colors cursor-default">
                    <p className="font-mono text-[9px] mb-1.5" style={{ color: item.color }}>{item.type}</p>
                    <p className="text-xs font-semibold text-[#0F172A] dark:text-white leading-snug">{item.title}</p>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-500 dark:text-[#334155] mt-4 font-mono text-center">
                Follow us on LinkedIn for live sessions &amp; weekly breakdowns
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
