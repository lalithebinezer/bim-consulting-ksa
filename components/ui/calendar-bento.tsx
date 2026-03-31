"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default function CalendarBento() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  return (
    <section id="book-consultation" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-black text-[#0F172A] dark:text-white tracking-tighter mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            FREE CONSULTATION
          </motion.h2>
          <motion.p 
            className="text-slate-500 dark:text-[#64748B] text-lg leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Book a 30-minute discovery call with our BIM experts to discuss your project requirements and strategy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Calendar Card */}
          <motion.div 
            className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:border-[#00ADEF]/50 transition-colors duration-500 group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#00ADEF]/20 text-[#00ADEF] group-hover:bg-[#00ADEF] group-hover:text-black transition-all duration-500">
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-white uppercase tracking-tight">{monthName}</h3>
                  <p className="text-slate-500 dark:text-[#475569] text-xs tracking-widest">{currentDate.getFullYear()}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={prevMonth} className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 cursor-pointer">
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <button onClick={nextMonth} className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/10 cursor-pointer">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-[10px] font-bold text-slate-500 dark:text-[#334155] tracking-widest py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="h-12 w-full" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isSelected = selectedDay === day;
                const isToday = new Date().getDate() === day && new Date().getMonth() === currentDate.getMonth();
                const isPast = day < new Date().getDate() && currentDate.getMonth() === new Date().getMonth();

                return (
                  <motion.button
                    key={day}
                    onClick={() => !isPast && setSelectedDay(day)}
                    className={`h-12 w-full rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-300 relative overflow-hidden cursor-pointer
                      ${isPast ? "text-slate-300 dark:text-white/10 cursor-not-allowed" : "text-slate-600 dark:text-white/60 hover:bg-[#00ADEF]/10 hover:text-[#00ADEF]"}
                      ${isSelected ? "bg-[#00ADEF] text-black font-black" : "bg-slate-50 dark:bg-white/5"}
                      ${isToday && !isSelected ? "border border-[#00ADEF]/50 text-[#00ADEF]" : ""}
                    `}
                    whileHover={!isPast && !isSelected ? { scale: 1.05 } : {}}
                    whileTap={!isPast ? { scale: 0.95 } : {}}
                  >
                    {day}
                    {isToday && !isSelected && (
                      <div className="absolute bottom-1.5 w-1 h-1 rounded-full bg-[#00ADEF]" />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Booking Info Card */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex-1 group hover:border-[#1282C4]/50 transition-all duration-500">
              <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#1282C4] group-hover:text-black transition-all duration-500 text-[#1282C4]">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-2 uppercase tracking-tighter">30 Min Consultation</h3>
              <p className="text-slate-500 dark:text-[#64748B] text-sm leading-relaxed mb-6">
                Connect with our strategic advisors to analyze your BIM ROI, clash detection requirements, or digital twin potential.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Project Feasibility Audit",
                  "BIM Execution Plan (BEP) Review",
                  "Technical Workflow Architecture",
                  "Cost Breakdown Estimation"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-500 dark:text-[#94A3B8] text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00ADEF]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link 
                href="https://cal.com/aliimam/designali" 
                target="_blank"
                className="block"
              >
                <Button className="w-full bg-[#00ADEF] hover:bg-[#1282C4] text-black font-bold h-14 rounded-2xl transition-all duration-300 text-base flex items-center justify-between px-6 shadow-[0_0_20px_rgba(0,173,239,0.3)]">
                  BOOK APPOINTMENT
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-all">
                <span className="text-2xl font-black text-[#0F172A] dark:text-white mb-1 group-hover:text-[#00ADEF] transition-colors">99%</span>
                <span className="text-[10px] text-slate-500 dark:text-[#475569] uppercase tracking-widest font-bold">Accuracy</span>
              </div>
              <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-all">
                <span className="text-2xl font-black text-[#0F172A] dark:text-white mb-1 group-hover:text-[#00ADEF] transition-colors">24h</span>
                <span className="text-[10px] text-slate-500 dark:text-[#475569] uppercase tracking-widest font-bold">Response</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ADEF]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00ADEF]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />
    </section>
  );
}
