'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

/**
 * HeroASCIIOne component (V2 Integrated)
 * Merges high-fidelity ASCII background animations with GBS business content.
 * Integrates Framer Motion for text ingress and matches site design tokens.
 */
export default function HeroASCIIOne() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const embedScript = document.createElement('script');
    embedScript.type = 'text/javascript';
    embedScript.textContent = `
      !function(){
        if(!window.UnicornStudio){
          window.UnicornStudio={isInitialized:!1};
          var i=document.createElement("script");
          i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js";
          i.onload=function(){
            window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
          };
          (document.head || document.body).appendChild(i)
        }
      }();
    `;
    document.head.appendChild(embedScript);

    const style = document.createElement('style');
    style.textContent = `
      [data-us-project] {
        position: relative !important;
        overflow: hidden !important;
      }
      [data-us-project] canvas {
        clip-path: inset(0 0 10% 0) !important;
      }
      [data-us-project] * {
        pointer-events: none !important;
      }
      [data-us-project] a[href*="unicorn"],
      [data-us-project] button[title*="unicorn"],
      [data-us-project] div[title*="Made with"],
      [data-us-project] .unicorn-brand,
      [data-us-project] [class*="brand"],
      [data-us-project] [class*="credit"],
      [data-us-project] [class*="watermark"] {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        position: absolute !important;
        left: -9999px !important;
        top: -9999px !important;
      }
    `;
    document.head.appendChild(style);

    const hideBranding = () => {
      const selectors = ['[data-us-project]', '.unicorn-studio-container', 'canvas[aria-label*="Unicorn"]'];
      selectors.forEach(selector => {
        const containers = document.querySelectorAll(selector);
        containers.forEach(container => {
          container.querySelectorAll('*').forEach(el => {
            const text = (el.textContent || '').toLowerCase();
            const title = (el.getAttribute('title') || '').toLowerCase();
            const href = (el.getAttribute('href') || '').toLowerCase();
            if (text.includes('made with') || text.includes('unicorn') || title.includes('made with') || title.includes('unicorn') || href.includes('unicorn.studio')) {
              try {
                (el as HTMLElement).style.display = 'none';
                el.remove();
              } catch(e) {}
            }
          });
        });
      });
    };

    hideBranding();
    const interval = setInterval(hideBranding, 100);
    return () => {
      clearInterval(interval);
      try {
        document.head.removeChild(embedScript);
        document.head.removeChild(style);
      } catch (e) {}
    };
  }, []);

  const stats = [
    { value: "200+", label: "PROJECTS DELIVERED" },
    { value: "30+", label: "YEARS IN SERVICE" },
    { value: "320", label: "BIM PROFESSIONALS" },
    { value: "3×", label: "ISO CERTIFIED" },
  ];

  return (
    <main ref={containerRef} className="relative min-h-screen overflow-hidden bg-black text-white font-mono">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full hidden lg:block opacity-60">
        <div 
          data-us-project="OMzqyUv6M3kSnv0JeAtC" 
          style={{ width: '100%', height: '100%', minHeight: '100vh' }}
        />
      </div>

      {/* Mobile stars background */}
      <div className="absolute inset-0 w-full h-full lg:hidden stars-bg opacity-20"></div>

      {/* Full Viewport Frame Accents */}
      <div className="absolute top-20 left-4 w-12 h-12 border-t-2 border-l-2 border-[#F97316]/30 z-10"></div>
      <div className="absolute top-20 right-4 w-12 h-12 border-t-2 border-r-2 border-[#F97316]/30 z-10"></div>
      <div className="absolute bottom-32 left-4 w-12 h-12 border-b-2 border-l-2 border-[#F97316]/30 z-10"></div>
      <div className="absolute bottom-32 right-4 w-12 h-12 border-b-2 border-r-2 border-[#F97316]/30 z-10"></div>

      {/* CTA Content Container */}
      <div className="relative z-10 flex min-h-screen items-center justify-end px-6 lg:px-16 pt-32 pb-40">
        <div className="w-full lg:w-1/2 max-w-xl lg:pr-[5%]">
          
          {/* Animated ISO Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-8"
          >
            <div className="animated-border px-4 py-2 rounded-full text-[10px] tracking-widest text-[#F97316] uppercase bg-black/40 backdrop-blur-sm border border-[#F97316]/20">
              ISO 9001:2015 · ISO/IEC 27001:2022
            </div>
          </motion.div>

          {/* Headline Section */}
          <div className="relative mb-6">
            <div className="hidden lg:block absolute -right-4 top-0 bottom-0 w-1 dither-pattern opacity-30"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-tight mb-2">
                BUILDING THE <span className="text-white">FUTURE</span>
              </h1>
              <h2 className="text-2xl lg:text-4xl font-bold text-[#F97316] tracking-widest uppercase">
                WITH BIM
              </h2>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <p className="text-xs lg:text-sm text-gray-400 mb-8 leading-relaxed max-w-lg opacity-90 border-l-2 border-[#F97316]/40 pl-4 bg-gradient-to-r from-[#F97316]/5 to-transparent py-2">
              Gulf Business Solutions (GBS) helps AEC firms eliminate rework, resolve clashes before they hit site, and save millions — through expert BIM consulting and Autodesk Silver Partner solutions.
            </p>
            
            <div className="hidden lg:block absolute -left-6 top-1/2 w-4 h-px bg-[#F97316] opacity-40"></div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="relative px-6 py-3 bg-[#F97316] text-black font-bold text-xs lg:text-sm tracking-wider uppercase hover:bg-transparent hover:text-[#F97316] border border-[#F97316] transition-all duration-300 group shadow-lg shadow-orange-500/10">
              Calculate BIM ROI
              <ArrowRight className="inline ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-6 py-3 bg-transparent border border-white/20 text-white font-bold text-xs lg:text-sm tracking-wider uppercase hover:border-[#F97316] hover:text-[#F97316] transition-all duration-300">
              Start Your Project
            </button>
          </motion.div>

          {/* System Protocol Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex items-center gap-3 text-[9px] tracking-widest text-[#F97316]"
          >
            <span className="w-8 h-px bg-[#F97316]"></span>
            <span>GBS.BIM_PROTOCOL_V.4.0</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </motion.div>
        </div>
      </div>

      {/* Technical Footer (Stats Grid) */}
      <div className="absolute left-0 right-0 bottom-0 z-20 border-t border-white/10 bg-black/60 backdrop-blur-md">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                className="flex flex-col border-l border-white/10 pl-4 hover:border-[#F97316]/50 transition-colors"
              >
                <span className="text-xl lg:text-2xl font-bold text-[#F97316]">{stat.value}</span>
                <span className="text-[8px] lg:text-[9px] text-white/40 tracking-wider uppercase mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[8px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-[#F97316]" />
        </motion.div>
      </motion.div>

      <style jsx>{`
        .dither-pattern {
          background-image: 
            repeating-linear-gradient(0deg, transparent 0px, transparent 1px, #F97316 1px, #F97316 2px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 1px, #F97316 1px, #F97316 2px);
          background-size: 4px 4px;
        }
        .stars-bg {
          background-image: 
            radial-gradient(1px 1px at 20% 30%, #F97316, transparent),
            radial-gradient(1px 1px at 60% 70%, white, transparent),
            radial-gradient(1px 1px at 50% 50%, #F97316, transparent),
            radial-gradient(1px 1px at 80% 10%, white, transparent);
          background-size: 200% 200%;
          animation: drift 60s linear infinite;
        }
        @keyframes drift {
          from { background-position: 0% 0%; }
          to { background-position: 100% 100%; }
        }
      `}</style>
    </main>
  );
}
