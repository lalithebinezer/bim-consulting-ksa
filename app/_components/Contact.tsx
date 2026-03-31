"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const OFFICES = [
  { city: "Saudi Arabia", address: "Al Safwah Trading Center, Prince Mamdoh Bin Abdul Aziz Str., Al Sulimaniah, Riyadh", phone: "+966 11 4644498" },
  { city: "Dubai", address: "Makeen Building, Airport Road, P.O. Box 52137, Dubai – UAE", phone: "+971 4 238 4400" },
  { city: "Abu Dhabi", address: "Madinat Zayed Office Tower, 12th Floor, Sultan Bin Zayed the First Street, P.O. Box 46144", phone: "+971 2 644 2888" },
  { city: "Kuwait", address: "Sharq, Ahmad Al Jaber Street, Dar Al Awadi, 2nd Floor, Office No. 5405, Safat 13160", phone: "+965 2232 2999" },
  { city: "Muscat", address: "Pearl Tower, Ground Floor, Ghala, Muscat, Sultanate of Oman, PO Box: 1718, PC 130 Azaiba", phone: "+968 2 411 1500" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute top-0 left-6 right-6 max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00ADEF]/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mono text-xs text-[#00ADEF] tracking-widest uppercase block mb-4"
        >
          {/* 05 — Get In Touch */}
        </motion.span>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: CTA text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,5.5rem)] font-black tracking-tighter leading-none text-white mb-6"
             
            >
              LET&apos;S BUILD
              <br />
              <span className="text-gradient">TOGETHER</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="max-w-xl text-slate-100 text-lg leading-relaxed mb-12 opacity-90"
            >
              Get a free BIM consultation and project assessment. Whether you&apos;re a contractor, consultant, or A&E firm looking to scale — our team responds within 24 hours.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 mb-10"
            >
              <a
                href="mailto:info@gbs-saudi.com"
                className="flex items-center gap-3 text-slate-300 hover:text-[#00ADEF] transition-colors duration-200 cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-lg bg-white dark:bg-[#111] border border-slate-200 dark:border-white/8 flex items-center justify-center group-hover:border-[#00ADEF]/40 dark:group-hover:border-[#00ADEF]/40 group-hover:bg-[#00ADEF]/10 transition-all duration-200">
                  <Mail size={14} />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-[#00ADEF]">info@gbs-saudi.com</span>
              </a>
              <a
                href="tel:+971505512006"
                className="flex items-center gap-3 text-slate-300 hover:text-[#00ADEF] transition-colors duration-200 cursor-pointer group"
              >
                <div className="w-9 h-9 rounded-lg bg-white dark:bg-[#111] border border-slate-200 dark:border-white/8 flex items-center justify-center group-hover:border-[#00ADEF]/40 dark:group-hover:border-[#00ADEF]/40 group-hover:bg-[#00ADEF]/10 transition-all duration-200">
                  <Phone size={14} />
                </div>
                <span className="text-sm font-medium text-slate-200 group-hover:text-[#00ADEF]">+971 50 551 2006 (Binil Kumar)</span>
              </a>
            </motion.div>

            {/* Offices */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {OFFICES.map((office) => (
                <div
                  key={office.city}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-[#00ADEF]/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={12} className="text-[#00ADEF]" />
                    <span className="font-bold text-sm text-white">
                      {office.city}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-100 leading-relaxed mb-1 opacity-80">{office.address}</p>
                  <p className="text-[10px] text-[#00ADEF] font-semibold opacity-90">{office.phone}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#00ADEF]/10 border border-[#00ADEF]/30 rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
              >
                <div className="w-16 h-16 bg-[#00ADEF] rounded-full flex items-center justify-center mb-6">
                  <Send size={24} className="text-black" />
                </div>
                <h3 className="text-2xl font-black text-white mb-3">
                  Message Sent!
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                  Our team will reach out within 24 hours to discuss your project
                  requirements and schedule a free consultation.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 flex flex-col gap-5 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ADEF] via-blue-500 to-[#1282C4] opacity-50" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="firstName" className="mono text-[11px] text-slate-300 tracking-wider uppercase">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Ahmed"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00ADEF]/50 transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="lastName" className="mono text-[11px] text-slate-300 tracking-wider uppercase">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Al-Rashidi"
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00ADEF]/50 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="mono text-[11px] text-slate-300 tracking-wider uppercase">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ahmed@company.com.sa"
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00ADEF]/50 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="mono text-[11px] text-slate-300 tracking-wider uppercase">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Saudi Contracting Co."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00ADEF]/50 transition-colors duration-200"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="mono text-[11px] text-slate-300 tracking-wider uppercase">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00ADEF]/50 transition-colors duration-200 cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="bim-modelling">Architectural / Structural / MEP BIM Modelling</option>
                    <option value="clash-detection">Clash Detection &amp; Constructability Analysis</option>
                    <option value="4d5d-simulation">Construction Management (4D &amp; 5D Simulation)</option>
                    <option value="visualization">Visualization &amp; Virtual Reality</option>
                    <option value="qto-cost">Cost &amp; Quantity Estimation through BIM</option>
                    <option value="scan-to-bim">As-Built BIM Modelling / Laser Scanning</option>
                    <option value="parametric">Parametric BIM Component Modelling</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="mono text-[11px] text-slate-300 tracking-wider uppercase">
                    Project Brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project, timeline, and key requirements..."
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#00ADEF]/50 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-2 w-full bg-[#00ADEF] hover:bg-[#1282C4] disabled:opacity-60 text-black font-bold text-base py-4 rounded-xl transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
