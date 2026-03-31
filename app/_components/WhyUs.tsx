"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Zap, HeadphonesIcon, TrendingUp, Lock, Users } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00ADEF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading */}
          <div className="lg:sticky lg:top-32">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mono text-xs text-[#00ADEF] tracking-widest uppercase block mb-4"
            >
              {/* 03 — Why Choose Us */}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,5rem)] font-black tracking-tighter leading-none text-white mb-8"
            >
              THE GBS
              <br />
              <span className="bg-gradient-to-r from-[#00ADEF] via-[#A5F3FC] to-white bg-clip-text text-transparent">ADVANTAGE</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-slate-300 text-lg leading-relaxed mb-10"
            >
              We extend BIM beyond clash detection into engineered visualization,
              quantity estimation and virtual project management — making us a single source of truth for every stakeholder.
            </motion.p>

            {/* Big metric */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-6"
            >
              <div className="text-6xl font-black text-[#00ADEF] mb-1">
                200+
              </div>
              <div className="text-sm text-slate-100 font-medium">Projects successfully delivered<br />across the GCC &amp; globe</div>
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
                  className="h-full"
                >
                  <GlowCard 
                    glowColor="blue" 
                    customSize 
                    className="h-full group bg-white/5 backdrop-blur-2xl border border-white/10 p-6 transition-all duration-300 cursor-default"
                  >
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-[#1A1A1A] flex items-center justify-center text-[#00ADEF] mb-4 group-hover:bg-[#00ADEF]/5 dark:group-hover:bg-[#00ADEF]/15 group-hover:scale-110 transition-all duration-300">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>
                      <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                        {reason.title}
                      </h3>
                      <p className="text-slate-200 text-xs leading-relaxed opacity-90">{reason.description}</p>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
