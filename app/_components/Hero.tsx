"use client";

import HeroShader from "@/components/ui/hero-shader";

/**
 * Hero component
 * Now uses the ASCII-driven high-fidelity animation system.
 * Previous 3D fiber implementation is archived.
 */
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen">
      <HeroShader />
    </section>
  );
}

/* 
// Previous implementation using @react-three/fiber
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const STATS = [
  { value: "200+", label: "Projects Delivered" },
  { value: "30+", label: "Years in IT Service" },
  { value: "320", label: "BIM Professionals" },
  { value: "3×", label: "ISO Certified" },
];

export default function OldHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      // ... (archived content)
    </section>
  );
}
*/
