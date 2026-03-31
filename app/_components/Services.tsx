"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Layers, GitMerge, Shield, Cpu, Ruler, Users, HardHat, Wrench, Monitor } from "lucide-react";

const SERVICES = [
  {
    icon: Layers,
    title: "Architectural, Structural & MEP BIM Modelling",
    description: "Precision 3D BIM models for architectural, structural and MEP disciplines. We deliver LOD 100–500 models from IFC drawings through to shop drawings and as-built documentation.",
    tags: ["Revit", "LOD 100–500", "Multidiscipline"],
    highlight: true,
    color: "#00ADEF",
  },
  {
    icon: GitMerge,
    title: "Clash Detection & Constructability Analysis",
    description: "Multi-discipline coordination and clash detection that goes beyond listing clashes — we solve them according to consultant-defined principles and raise formal RFIs.",
    tags: ["Navisworks", "BIM 360", "RFI Management"],
    color: "#1282C4",
  },
  {
    icon: Shield,
    title: "Construction Management (4D & 5D Simulation)",
    description: "4D time-linked and 5D cost-integrated BIM simulations using MS Project and Navisworks for pre-bid submissions, baseline scheduling and weekly progress reporting.",
    tags: ["4D Simulation", "5D Costing", "MS Project"],
    color: "#4A69BD",
  },
  {
    icon: Cpu,
    title: "Visualization & Virtual Reality Solutions",
    description: "Rendered walkthroughs, VR presentations and construction methodology showcases that communicate design intent and logistics planning to clients and stakeholders.",
    tags: ["Virtual Reality", "Walkthrough", "Logistics"],
    color: "#00ADEF",
  },
  {
    icon: Ruler,
    title: "Cost & Quantity Estimation through BIM",
    description: "Model-based quantity take-offs and monthly quantity sheets generated directly from the BIM model, enabling accurate valuations of civil and MEP components.",
    tags: ["QTO", "Cost Estimation", "Dynamo"],
    color: "#1282C4",
  },
  {
    icon: Users,
    title: "As-Built BIM Modelling via Laser Scanning",
    description: "Scan-to-BIM services using laser scanning point clouds to produce accurate as-built models for heritage buildings, renovations and facility management handover.",
    tags: ["Laser Scanning", "Scan-to-BIM", "Facility Mgmt"],
    color: "#4A69BD",
  },
  {
    icon: HardHat,
    title: "Onsite CAD/BIM Services",
    description: "Dedicated onsite detailers and site engineers embedded in your project team — Architectural, Structural, MEP, Infrastructure, Oil & Gas (P&ID/PDS/PDMS), Landscape, Joinery and Steel Detailers.",
    tags: ["Onsite", "Oil & Gas", "Steel Detailing", "MEP"],
    color: "#00ADEF",
  },
  {
    icon: Wrench,
    title: "Turnkey CAD/BIM",
    description: "End-to-end CAD/BIM delivery for Architectural, Structural, Mechanical, Electrical, Fitout & Interior Design, Joinery, and Infrastructural (Dry & Wet Utilities) disciplines.",
    tags: ["Turnkey", "Fitout", "Infrastructure", "Utilities"],
    color: "#1282C4",
  },
  {
    icon: Monitor,
    title: "WorkEngin Workstations",
    description: "Custom-built engineering workstations designed for CAD, BIM/Revit, Visualization and Server/Render workloads. Tower, HPC, Laptop and Cloud options with leasing, 3-year warranty and quarterly preventive maintenance.",
    tags: ["CAD Stations", "BIM/Revit", "HPC", "Leasing"],
    color: "#4A69BD",
  },
];

import { GlowCard } from "@/components/ui/spotlight-card";

export function ServiceCard({ service, i }: { service: typeof SERVICES[0]; i: number }) {
  const Icon = service.icon;
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-60px" });

  // Map hex colors to GlowCard theme colors
  const getGlowColor = (hex: string): 'blue' | 'purple' | 'green' | 'red' | 'orange' => {
    const h = hex.toLowerCase();
    if (h === "#f97316" || h === "#f59e0b") return "blue";
    if (h === "#3b82f6" || h === "#06b6d4") return "blue";
    if (h === "#8b5cf6" || h === "#a78bfa") return "purple";
    if (h === "#10b981" || h === "#84cc16") return "green";
    if (h === "#ec4899") return "red";
    return "blue";
  };

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="h-full"
    >
      <GlowCard 
        glowColor={getGlowColor(service.color)}
        customSize
        className={`h-full p-7 border overflow-hidden cursor-default transition-all duration-500 border-white/10 bg-white/5 backdrop-blur-2xl`}
      >
        <div className="relative z-10 h-full flex flex-col">
          {/* Top accent line */}
          <div 
            className="absolute -top-7 -left-7 -right-7 h-[2px]" 
            style={{ background: `linear-gradient(to right, ${service.color}, transparent)` }} 
          />

          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform duration-500 hover:scale-110"
            style={{
              background: `${service.color}15`,
              borderColor: `${service.color}30`,
              color: service.color,
            }}
          >
            <Icon size={22} strokeWidth={1.8} />
          </div>

          {service.highlight && (
            <span
              className="absolute top-0 right-0 font-mono text-[9px] px-2 py-1 rounded-full tracking-widest uppercase border"
              style={{ color: service.color, borderColor: `${service.color}40`, background: `${service.color}15` }}
            >
              Core
            </span>
          )}

          <h3 className="text-xl font-bold mb-3 text-white tracking-tight leading-tight">
            {service.title}
          </h3>
          <p className="text-slate-200 text-[13px] leading-relaxed mb-8 min-h-[80px] opacity-90">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] tracking-widest text-[#00ADEF] border border-[#00ADEF]/30 px-2 py-0.5 rounded-sm bg-[#00ADEF]/10 uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}


export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] bg-[#00ADEF]/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-[#00ADEF] tracking-widest uppercase block mb-4"
          >
            {/* 01 — What We Do */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,6rem)] font-bold tracking-tighter leading-none text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            OUR <span className="text-gradient">SERVICES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-slate-200 text-lg leading-relaxed"
          >
            End-to-end BIM solutions for Hospitality, Mixed-Use, Industrial and Infrastructure projects across the GCC and beyond — from schematic design to facility management handover.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
