"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import { Calculator, ArrowRight, ShieldCheck, Award } from "lucide-react"
import { asset } from "@/lib/utils"

const STATS = [
  { label: "PROJECTS DELIVERED", value: "200+" },
  { label: "YEARS IN SERVICE", value: "30+" },
  { label: "BIM PROFESSIONALS", value: "320" },
  { label: "ISO CERTIFIED", value: "3×" },
]

export default function HeroShader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-transparent relative overflow-hidden font-sans">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="logo-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ADEF" />
            <stop offset="50%" stopColor="#1282C4" />
            <stop offset="100%" stopColor="#4A69BD" />
          </linearGradient>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#00ADEF" />
            <stop offset="70%" stopColor="#1282C4" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Gradient moved to global state in page.tsx */}



      <main className="relative z-20 max-w-[1400px] mx-auto px-6 pt-24 md:pt-32 lg:pt-40">
        <div className="text-left max-w-4xl">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-md mb-8 relative border border-white/10 shadow-2xl"
            style={{
              filter: "url(#glass-effect)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-[#00ADEF] to-transparent rounded-full" />
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 group/autodesk transition-all">
                  <div className="h-6 w-auto flex items-center">
                    <img src={asset("/autodesk-logo.png")} alt="Autodesk Logo" className="h-full invert filter brightness-200 contrast-150" />
                  </div>
                  <span className="text-[11px] font-black text-white/60 group-hover/autodesk:text-[#00ADEF] tracking-widest transition-colors duration-300 uppercase">AUTODESK PARTNER</span>
                </div>
               <div className="w-px h-3 bg-white/20" />
               <span className="text-white/80 text-[10px] md:text-xs font-semibold relative z-10 tracking-[0.05em] uppercase">
                 Official Silver Partner · ISO Certified
               </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9] tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block font-light text-slate-400 dark:text-white/70 text-4xl md:text-5xl lg:text-7xl mb-4 tracking-tight"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              BUILDING THE
            </motion.span>
            <motion.span
              className="block font-black text-white"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #00ADEF 30%, #1282C4 70%, #4A69BD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              FUTURE <span className="font-light italic text-white/90">WITH</span> BIM
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl font-light text-white/80 mb-12 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Gulf Business Solutions (GBS) helps AEC firms eliminate rework, 
            resolve clashes before they hit site, and save millions — 
            through expert BIM consulting and digital twin solutions.
          </motion.p>

          <motion.div
            className="flex items-center gap-6 flex-wrap mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.button
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#00ADEF] to-[#1282C4] text-white font-bold text-sm tracking-tight transition-all duration-300 hover:from-[#00ADEF] hover:to-[#4A69BD] cursor-pointer shadow-[0_0_30px_rgba(0,173,239,0.3)] hover:shadow-[0_0_40px_rgba(0,173,239,0.5)] flex items-center gap-2 group/btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="px-10 py-4 rounded-full bg-white/5 border border-white/20 text-white font-medium text-sm transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 hover:text-cyan-100 cursor-pointer backdrop-blur-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Our Methodology
            </motion.button>
          </motion.div>

          {/* Business Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-white/40 tracking-[0.2em] uppercase leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Floating Decorative Core Element */}
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 z-30 hidden xl:block">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <PulsingBorder
            colors={["#00ADEF", "#1282C4", "#4A69BD", "#00ADEF", "#ffffff", "#0c4a6e", "#ffffff"]}
            colorBack="#00000000"
            speed={1.2}
            roundness={1}
            thickness={0.08}
            softness={0.15}
            intensity={4}
            spots={4}
            spotSize={0.08}
            pulse={0.12}
            smoke={0.4}
            smokeSize={3}
            scale={0.8}
            rotation={0}
            frame={9161408}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
             <div className="size-full border border-dashed border-white/10 rounded-full scale-150" />
             <div className="size-full border border-dashed border-white/5 rounded-full scale-[2.2]" />
          </motion.div>

          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transform: "scale(2.2)" }}
          >
            <defs>
              <path id="circle-path" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-[5px] fill-white/40 font-bold uppercase tracking-[0.3em]">
              <textPath href="#circle-path" startOffset="0%">
                GBS BIM TECHNOLOGY • STRATEGIC PARTNERSHIP • TECHNICAL EXCELLENCE • 
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>

      {/* Floating Technical Elements (Dither/Dots) */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
    </div>
  )
}
