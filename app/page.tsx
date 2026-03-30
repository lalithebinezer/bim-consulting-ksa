"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Services from "./_components/Services";
import Projects from "./_components/Projects";
import WhyUs from "./_components/WhyUs";
import ROICalculator from "./_components/ROICalculator";
import LeadMagnet from "./_components/LeadMagnet";
import Partnership from "./_components/Partnership";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

const Intro3D = dynamic(() => import("./_components/Intro3D"), { ssr: false });

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <Intro3D onComplete={() => setIntroComplete(true)} />}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <WhyUs />
        <ROICalculator />
        <LeadMagnet />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
