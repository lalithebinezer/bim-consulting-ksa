import { GlowCard } from "@/components/ui/spotlight-card";
import { Layout, Palette, Shield, Sparkles } from "lucide-react";

export default function GlowDemoPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-10 font-mono">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-[#F97316]">GLOW CARD SYSTEM</h1>
          <p className="text-gray-400 max-w-2xl">
            Interactive spotlight cards designed for the GBS design system. 
            Features dynamic pointer tracking, HSL color shifting, and backdrop blurring.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center">
          {/* Blue - Default/Professional */}
          <div className="flex flex-col items-center gap-4">
            <GlowCard glowColor="blue">
              <div className="flex flex-col h-full justify-between p-2">
                <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Secure Data</h3>
                  <p className="text-sm text-gray-400 leading-relaxed uppercase text-[10px] tracking-widest">
                    ISO/IEC 27001 COMPLIANT ARCHITECTURE
                  </p>
                </div>
              </div>
            </GlowCard>
            <span className="text-[10px] text-blue-500 tracking-[0.3em]">THEME_BLUE</span>
          </div>

          {/* Orange - Brand/Innovation */}
          <div className="flex flex-col items-center gap-4">
            <GlowCard glowColor="orange" size="lg">
              <div className="flex flex-col h-full justify-between p-2">
                <div className="w-12 h-12 bg-[#F97316]/20 border border-[#F97316]/30 rounded-xl flex items-center justify-center text-[#F97316]">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">BIM Core</h3>
                  <p className="text-sm text-gray-400 leading-relaxed uppercase text-[10px] tracking-widest">
                    REVOLUTIONIZING AEC WORKFLOWS
                  </p>
                </div>
              </div>
            </GlowCard>
            <span className="text-[10px] text-[#F97316] tracking-[0.3em]">THEME_GBS_ORANGE</span>
          </div>

          {/* Purple - Visionary */}
          <div className="flex flex-col items-center gap-4">
            <GlowCard glowColor="purple">
              <div className="flex flex-col h-full justify-between p-2">
                <div className="w-12 h-12 bg-purple-500/20 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400">
                  <Palette size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Creative VR</h3>
                  <p className="text-sm text-gray-400 leading-relaxed uppercase text-[10px] tracking-widest">
                    IMMERSIVE PROJECT VISUALIZATION
                  </p>
                </div>
              </div>
            </GlowCard>
            <span className="text-[10px] text-purple-500 tracking-[0.3em]">THEME_PURPLE</span>
          </div>
        </div>

        <section className="mt-32">
          <h2 className="text-xl font-bold mb-8 border-b border-white/10 pb-4 tracking-tighter">CUSTOM SIZING & LAYOUTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <GlowCard customSize className="w-full h-40" glowColor="green">
                <div className="flex items-center gap-6 h-full p-4">
                   <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-full text-green-500">
                      <Layout size={32} />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">Wide Format</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">Custom aspect ratio for banners</p>
                   </div>
                </div>
             </GlowCard>

             <GlowCard customSize className="w-full h-40" glowColor="red">
                <div className="flex items-center gap-6 h-full p-4">
                   <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-full text-red-500">
                      <Sparkles size={32} />
                   </div>
                   <div>
                      <h4 className="font-bold text-lg">Alert State</h4>
                      <p className="text-xs text-gray-500 uppercase tracking-widest">High visibility warning variant</p>
                   </div>
                </div>
             </GlowCard>
          </div>
        </section>
      </div>
    </div>
  );
}
