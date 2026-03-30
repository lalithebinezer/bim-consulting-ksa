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
    color: "#F97316",
  },
  {
    icon: GitMerge,
    title: "Clash Detection & Constructability Analysis",
    description: "Multi-discipline coordination and clash detection that goes beyond listing clashes — we solve them according to consultant-defined principles and raise formal RFIs.",
    tags: ["Navisworks", "BIM 360", "RFI Management"],
    color: "#3B82F6",
  },
  {
    icon: Shield,
    title: "Construction Management (4D & 5D Simulation)",
    description: "4D time-linked and 5D cost-integrated BIM simulations using MS Project and Navisworks for pre-bid submissions, baseline scheduling and weekly progress reporting.",
    tags: ["4D Simulation", "5D Costing", "MS Project"],
    color: "#8B5CF6",
  },
  {
    icon: Cpu,
    title: "Visualization & Virtual Reality Solutions",
    description: "Rendered walkthroughs, VR presentations and construction methodology showcases that communicate design intent and logistics planning to clients and stakeholders.",
    tags: ["Virtual Reality", "Walkthrough", "Logistics"],
    color: "#10B981",
  },
  {
    icon: Ruler,
    title: "Cost & Quantity Estimation through BIM",
    description: "Model-based quantity take-offs and monthly quantity sheets generated directly from the BIM model, enabling accurate valuations of civil and MEP components.",
    tags: ["QTO", "Cost Estimation", "Dynamo"],
    color: "#F59E0B",
  },
  {
    icon: Users,
    title: "As-Built BIM Modelling via Laser Scanning",
    description: "Scan-to-BIM services using laser scanning point clouds to produce accurate as-built models for heritage buildings, renovations and facility management handover.",
    tags: ["Laser Scanning", "Scan-to-BIM", "Facility Mgmt"],
    color: "#EC4899",
  },
  {
    icon: HardHat,
    title: "Onsite CAD/BIM Services",
    description: "Dedicated onsite detailers and site engineers embedded in your project team — Architectural, Structural, MEP, Infrastructure, Oil & Gas (P&ID/PDS/PDMS), Landscape, Joinery and Steel Detailers.",
    tags: ["Onsite", "Oil & Gas", "Steel Detailing", "MEP"],
    color: "#06B6D4",
  },
  {
    icon: Wrench,
    title: "Turnkey CAD/BIM",
    description: "End-to-end CAD/BIM delivery for Architectural, Structural, Mechanical, Electrical, Fitout & Interior Design, Joinery, and Infrastructural (Dry & Wet Utilities) disciplines.",
    tags: ["Turnkey", "Fitout", "Infrastructure", "Utilities"],
    color: "#84CC16",
  },
  {
    icon: Monitor,
    title: "WorkEngin Workstations",
    description: "Custom-built engineering workstations designed for CAD, BIM/Revit, Visualization and Server/Render workloads. Tower, HPC, Laptop and Cloud options with leasing, 3-year warranty and quarterly preventive maintenance.",
    tags: ["CAD Stations", "BIM/Revit", "HPC", "Leasing"],
    color: "#A78BFA",
  },
];

function TiltCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current!.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width / 2;
    const cy = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: (cy / rect.height) * -10, y: (cx / rect.width) * 10 });
  }

  function onMouseLeave() {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: hovered ? "transform 0.1s ease" : "transform 0.4s ease",
      }}
      className={`relative group p-7 rounded-2xl border overflow-hidden cursor-default ${
        service.highlight
          ? "bg-orange-50 dark:bg-[#F97316]/8 border-orange-200 dark:border-[#F97316]/25"
          : "bg-white dark:bg-[#0E0E10] border-slate-200 dark:border-white/6"
      }`}
    >
      {/* Inner glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 40px ${service.color}20` }}
      />

      {/* Top accent line */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 right-0 h-[2px] origin-left rounded-t-2xl"
        style={{ background: service.color }}
      />

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `${service.color}18`,
          border: `1px solid ${service.color}30`,
          color: service.color,
        }}
      >
        <Icon size={22} strokeWidth={1.8} />
      </div>

      {service.highlight && (
        <span
          className="absolute top-4 right-4 font-mono text-[9px] px-2 py-1 rounded-full tracking-widest uppercase border"
          style={{ color: service.color, borderColor: `${service.color}40`, background: `${service.color}15` }}
        >
          Core
        </span>
      )}

      <h3
        className="text-xl font-bold mb-3 text-[#0F172A] dark:text-white tracking-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {service.title}
      </h3>
      <p className="text-slate-500 dark:text-[#64748B] text-sm leading-relaxed mb-6">{service.description}</p>

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] tracking-wider text-slate-500 dark:text-[#64748B] border border-slate-200 dark:border-white/8 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-white/[0.02]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] bg-[#F97316]/4 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-[#F97316] tracking-widest uppercase block mb-4"
          >
            {"// 01 — What We Do"}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,6rem)] font-bold tracking-tighter leading-none text-[#0F172A] dark:text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            OUR <span className="text-gradient">SERVICES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl text-slate-500 dark:text-[#64748B] text-lg leading-relaxed"
          >
            End-to-end BIM solutions for Hospitality, Mixed-Use, Industrial and Infrastructure projects across the GCC and beyond — from schematic design to facility management handover.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <TiltCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
