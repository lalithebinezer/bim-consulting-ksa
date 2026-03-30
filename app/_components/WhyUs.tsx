"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Zap, HeadphonesIcon, TrendingUp, Lock, Users } from "lucide-react";

const REASONS = [
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock support for clients with a dedicated service team — we're not going anywhere.",
  },
  {
    icon: Award,
    title: "30+ Years in IT Service",
    description:
      "Unmatched experience delivering premium pre- and after-sale service to the GCC region and surrounds. Backed by the Ghobash Group.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "A list of distinguished clients continue to benefit from our ever-improving expertise, innovative thinking, and unique foresight across 200+ projects.",
  },
  {
    icon: Users,
    title: "320 BIM Professionals",
    description:
      "A robust team of 200+ BIM professionals supported by civil/structural engineers, architects and MEP specialists with the digital expertise to solve any mission-critical challenge.",
  },
  {
    icon: Zap,
    title: "In-House Software Team",
    description:
      "Innovative digital solutions built by some of the most creative technical minds — including plug-ins and extensions based on Dynamo, Revit API and Autodesk Forge.",
  },
  {
    icon: Lock,
    title: "Triple ISO Certified",
    description:
      "ISO 9001:2015, ISO/IEC 20000-1:2018 and ISO/IEC 27001:2022 certified — your projects meet the highest international standards for quality, service management and information security.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-32 relative">
      {/* Divider line */}
      <div className="absolute top-0 left-6 right-6 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#F97316]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mono text-xs text-[#F97316] tracking-widest uppercase block mb-4"
            >
              {"// 03 — Why Choose Us"}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tighter leading-none text-[#0F172A] dark:text-white mb-8"
             
            >
              THE GBS
              <br />
              <span className="text-gradient">ADVANTAGE</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-500 dark:text-[#64748B] text-lg leading-relaxed mb-10"
            >
              We extend BIM beyond clash detection into engineered visualization,
              quantity estimation and virtual project management — making us a single source of truth for every stakeholder.
            </motion.p>

            {/* Big metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="inline-block bg-[#F97316]/10 border border-[#F97316]/25 rounded-2xl px-8 py-6"
            >
              <div className="text-6xl font-black text-[#F97316] mb-1">
                200+
              </div>
              <div className="text-sm text-slate-500 dark:text-[#64748B] font-medium">Projects successfully delivered<br />across the GCC &amp; globe</div>
            </motion.div>
          </div>

          {/* Right: Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REASONS.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group bg-white dark:bg-[#111111] hover:bg-slate-50 dark:hover:bg-[#161616] border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/12 rounded-xl p-6 transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-[#1A1A1A] flex items-center justify-center text-[#F97316] mb-4 group-hover:bg-orange-50 dark:group-hover:bg-[#F97316]/15 group-hover:scale-110 transition-all duration-300">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] dark:text-white mb-2 tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-slate-500 dark:text-[#64748B] text-xs leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
