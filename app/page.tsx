"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Projects from "./_components/Projects";
import WhyUs from "./_components/WhyUs";
import ROICalculator from "./_components/ROICalculator";
import LeadMagnet from "./_components/LeadMagnet";
import Partnership from "./_components/Partnership";
import CalendarBento from "@/components/ui/calendar-bento";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { MeshGradient } from "@paper-design/shaders-react";

const Intro3D = dynamic(() => import("./_components/Intro3D"), { ssr: false });

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <Intro3D onComplete={() => setIntroComplete(true)} />}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <MeshGradient
          className="w-full h-full"
          colors={["#000000", "#00ADEF", "#1282C4", "#4A69BD", "#000000"]}
          speed={0.2}
        />
        <MeshGradient
          className="absolute inset-0 w-full h-full opacity-30"
          colors={["#000000", "#ffffff", "#00ADEF", "#1282C4"]}
          speed={0.15}
        />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <WhyUs />
        <ROICalculator />
        <LeadMagnet />
        <Partnership />
        <CalendarBento />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
