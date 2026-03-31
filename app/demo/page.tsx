import HeroShader from "@/components/ui/hero-shader";
import { GlowCard } from "@/components/ui/spotlight-card";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-black">
      <HeroShader />
      
      <div className="max-w-[1400px] mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white mb-12">Integrated Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlowCard className="p-8 h-64 flex items-center justify-center">
             <span className="text-white font-bold text-xl">Spotlight Card Integration</span>
          </GlowCard>
          <GlowCard glowColor="purple" className="p-8 h-64 flex items-center justify-center">
             <span className="text-white font-bold text-xl">Purple Variant</span>
          </GlowCard>
          <GlowCard glowColor="green" className="p-8 h-64 flex items-center justify-center">
             <span className="text-white font-bold text-xl">Green Variant</span>
          </GlowCard>
        </div>
      </div>
    </div>
  );
}
