"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
            whileHover={{ scale: 1.12, rotate: 3 }}
            className="w-9 h-9 bg-[#F97316] rounded-lg flex items-center justify-center font-bold text-black text-xs"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            GBS
          </motion.div>
          <span className="font-bold text-lg tracking-tight text-[#0F172A] dark:text-white" style={{ fontFamily: "var(--font-heading)" }}>
            Gulf business solution <span className="text-[#F97316]">(GBS)</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onMouseEnter={() => setActive(link.href)}
                onMouseLeave={() => setActive("")}
                className="text-sm font-medium text-slate-500 dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white transition-colors duration-200 cursor-pointer tracking-wide py-1 block"
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
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#F97316] rounded-full"
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
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-[#94A3B8] hover:text-[#F97316] dark:hover:text-[#F97316] hover:border-[#F97316]/40 dark:hover:border-[#F97316]/40 transition-all duration-200 cursor-pointer bg-white dark:bg-transparent"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}

          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-black font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-md shadow-orange-500/20"
          >
            Get Started
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 text-slate-500 dark:text-[#94A3B8] hover:text-[#F97316] transition-all duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-[#0F172A] dark:text-white cursor-pointer"
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
                    className="text-base font-medium text-slate-600 dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white transition-colors cursor-pointer block py-2 border-b border-slate-100 dark:border-white/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center bg-[#F97316] text-black font-bold text-sm px-5 py-3 rounded-xl cursor-pointer"
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
