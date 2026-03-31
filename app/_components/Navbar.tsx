"use client";
/* global window */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { asset } from "@/lib/utils";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "ROI Calculator", href: "#roi-calculator" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (typeof globalThis.window !== "undefined") {
      const onScroll = () => setScrolled(globalThis.window.scrollY > 40);
      globalThis.window.addEventListener("scroll", onScroll);
      return () => globalThis.window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#060C1A]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/8 shadow-lg shadow-slate-200/50 dark:shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 15 }}
            className="w-14 h-14 relative flex items-center justify-center -ml-2"
          >
            {/* Background circle of nodes - roomier viewBox to avoid cropping */}
            <svg viewBox="-10 -10 140 140" className="absolute inset-0 w-full h-full animate-slow-spin">
              <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-[#00ADEF]/30" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <circle 
                  key={i} 
                  cx={60 + 35 * Math.cos((angle * Math.PI) / 180)} 
                  cy={60 + 35 * Math.sin((angle * Math.PI) / 180)} 
                  r={i % 2 === 0 ? 4.5 : 2.8} 
                  fill={i % 3 === 0 ? "#1282C4" : "#00ADEF"} 
                />
              ))}
            </svg>
            <motion.div 
              className="absolute inset-0 flex items-center justify-center p-1"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={asset("/gbs-logo.png")} 
                alt="GBS Logo" 
                className="w-11 h-11 object-contain brightness-125 contrast-125 rounded-full"
              />
            </motion.div>
          </motion.div>
          <div className="flex flex-col -gap-1">
            <span className="font-bold text-lg leading-tight tracking-tight text-white uppercase" style={{ fontFamily: "var(--font-heading)" }}>
              BIM Consulting
            </span>
            <span className="font-mono text-[9px] text-[#00ADEF] tracking-[0.2em] uppercase opacity-80">
              Technical Excellence
            </span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onMouseEnter={() => setActive(link.href)}
                onMouseLeave={() => setActive("")}
                className="text-[13px] font-semibold text-white/50 hover:text-white transition-colors duration-300 cursor-pointer tracking-wider py-1 block uppercase"
              >
                {link.label}
              </a>
              <AnimatePresence>
                {active === link.href && (
                  <motion.div
                    layoutId="nav-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#00ADEF] rounded-full"
                  />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-[#00ADEF] hover:border-[#00ADEF]/40 transition-all duration-200 cursor-pointer bg-white/5 dark:bg-transparent"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          <a
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-[#00ADEF] to-[#1282C4] hover:from-[#1282C4] hover:to-[#4A69BD] text-white font-bold text-sm px-6 py-2.5 rounded-xl transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20"
          >
            Get Started
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-[#00ADEF] transition-all duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-white cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 dark:bg-[#060C1A]/95 backdrop-blur-2xl border-t border-slate-200 dark:border-white/8 rounded-b-2xl"
          >
            <ul className="px-6 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-white transition-colors cursor-pointer block py-2 border-b border-slate-100 dark:border-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center bg-gradient-to-r from-[#00ADEF] to-[#1282C4] text-white font-bold text-sm px-5 py-3 rounded-xl cursor-pointer"
                  >
                    Get Started
                  </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
