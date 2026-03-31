"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const PROJECTS = [
  {
    id: "01",
    title: "Jabal Al Qrayn Cultural District — Diriyah",
    location: "Diriyah, Saudi Arabia",
    year: "Completed",
    category: "Cultural",
    description:
      "Saudi's premier lifestyle destination spanning 14 km² for DGCL. LOD 200–350 architecture, interior detailing, lease drawings, clash detection and COBie/ABS parameter entry. Consultant: Arcadis.",
    tags: ["LOD 200–350", "Cultural", "COBie", "Arcadis"],
    roi: { metric: "14 km²", label: "Development Area" },
    color: "#00ADEF",
  },
  {
    id: "02",
    title: "Diriyah Gate",
    location: "Diriyah, Saudi Arabia",
    year: "Ongoing",
    category: "Mixed-Use",
    description:
      "SAR 64 billion, 7 km² mixed-use heritage destination. LOD 400 full-discipline modelling, monthly quantity sheets, 4D/5D simulation, as-built and on-site BIM Coordinator. Client: Parsons Middle East.",
    tags: ["LOD 400", "4D/5D", "SAR 64B", "Parsons"],
    roi: { metric: "SAR 64B", label: "Project Value" },
    color: "#1282C4",
  },
  {
    id: "03",
    title: "Gate Avenue — Dubai",
    location: "Dubai, UAE",
    year: "Completed",
    category: "Commercial",
    description:
      "700,000 sq.ft. award-winning commercial development (Best Retail Design, Cityscape Global 2017). LOD 300–500 modelling, 4D/5D simulation, BIM for facility management. PM: Turner.",
    tags: ["LOD 300–500", "4D/5D", "Award-Winning", "Turner"],
    roi: { metric: "700K sq.ft.", label: "Retail Development" },
    color: "#4A69BD",
  },
  {
    id: "04",
    title: "North South Corridor — Singapore",
    location: "Singapore",
    year: "Ongoing",
    category: "Infrastructure",
    description:
      "24 km tunnel and highway on EPC basis, 6-year duration. LOD 300 model, planned baseline schedule, 4D simulation for pre-bid submission — enabling a winning bid.",
    tags: ["LOD 300", "Tunnel", "EPC", "4D Simulation"],
    roi: { metric: "24 km", label: "Tunnel & Highway" },
    color: "#00ADEF",
  },
  {
    id: "05",
    title: "Birla Century Mills",
    location: "Mumbai, India",
    year: "Ongoing",
    category: "Mixed-Use",
    description:
      "2.5M sq.ft. mixed-use landmark — two G+80 towers. Full BIM consultancy: BEP, CDE setup, LOD 300–500, 4D/5D and facility management. Architectural Consultant: Foster & Partners.",
    tags: ["LOD 500", "BEP", "CDE", "Foster & Partners"],
    roi: { metric: "2.5M sq.ft.", label: "G+80 Twin Towers" },
    color: "#1282C4",
  },
  {
    id: "06",
    title: "Bidkin Industrial Area",
    location: "India",
    year: "Completed",
    category: "Infrastructure",
    description:
      "900-hectare Greenfield Smart City — 47 km of roads, 144 km of utility networks. 3D BIM modelling, spatial coordination, clash detection, 4D/5D simulation and as-built for FM. Part of India's USD 90B Delhi–Mumbai Industrial Corridor.",
    tags: ["900 ha", "Smart City", "Utilities", "4D/5D"],
    roi: { metric: "144 km", label: "Utility Networks" },
    color: "#4A69BD",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#00ADEF]/4 rounded-full blur-[120px] -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={ref} className="mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mono text-xs text-[#00ADEF] tracking-widest uppercase block mb-4"
          >
            {/* 02 — Featured Work */}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,6rem)] font-black tracking-tighter leading-none text-white mb-6"
           
          >
            LANDMARK <span className="text-gradient">PROJECTS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-slate-100 text-lg opacity-90"
          >
            From Saudi cultural landmarks to Singapore metro stations — 200+ projects delivered across Hospitality, Commercial, Industrial and Infrastructure sectors worldwide.
          </motion.p>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-4 bg-transparent rounded-2xl overflow-hidden">
          {PROJECTS.map((project, i) => {
            const getGlowColor = (hex: string): 'blue' | 'purple' | 'green' | 'red' | 'orange' => {
              const h = hex.toLowerCase();
              if (h === "#f97316" || h === "#f59e0b") return "blue";
              if (h === "#3b82f6") return "blue";
              if (h === "#10b981") return "green";
              if (h === "#ec4899") return "red";
              if (h === "#8b5cf6") return "purple";
              return "blue";
            };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <GlowCard
                  glowColor={getGlowColor(project.color)}
                  customSize
                  className="w-full bg-white/5 backdrop-blur-2xl hover:bg-white/10 transition-all duration-500 cursor-default p-8 flex flex-col md:flex-row md:items-center gap-6 border border-white/10 rounded-xl mb-4"
                >
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 w-full">
                    {/* Number */}
                    <span
                      className="mono text-5xl font-bold opacity-20 group-hover:opacity-40 transition-opacity duration-300 shrink-0 w-16"
                      style={{ color: project.color }}
                    >
                      {project.id}
                    </span>

                    {/* Main info */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00ADEF] transition-colors duration-300 font-heading">
                          {project.title}
                        </h3>
                        <span
                          className="mono text-[10px] tracking-wider px-2.5 py-1 rounded-full border"
                          style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}10` }}
                        >
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mb-3 text-sm text-slate-100/70 font-mono tracking-wide">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} className="text-[#00ADEF]" />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-[#00ADEF]" />
                          {project.year}
                        </span>
                      </div>

                      <div className="backdrop-blur-2xl blur-none">
                        <div data-glow />
                      </div>
                      <p className="text-slate-100 text-lg leading-relaxed max-w-2xl opacity-90">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="mono text-[10px] text-white/80 border border-white/10 px-2.5 py-1 rounded-md bg-white/[0.04]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ROI metric badge */}
                    <div className="shrink-0 flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-center min-w-[80px] group-hover:border-[#00ADEF]/40 transition-all duration-300">
                      <span className="font-bold text-sm text-[#00ADEF] font-heading">{project.roi.metric}</span>
                      <span className="font-mono text-[9px] text-white/40 mt-0.5 leading-tight">{project.roi.label}</span>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
