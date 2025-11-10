
import Navigation from "@/components/navigation";
import ImpactMetrics from "@/components/impact-metrics";
import { TrendingUp, Target, Sparkles, Users } from "lucide-react";

export default function Impact() {
  return (
    <div className="min-h-screen bg-page-plum text-ngo-neutral-dark">
      <Navigation />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96" style={{background: 'radial-gradient(circle, hsl(var(--plum-light) / 0.15), transparent)'}}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80" style={{background: 'radial-gradient(circle, hsl(var(--burgundy-light) / 0.12), transparent)'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 shadow-lg" style={{color: 'hsl(var(--plum-dark))'}}>
            <TrendingUp className="mr-2 h-5 w-5" />
            Measurable Results
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{background: 'linear-gradient(135deg, hsl(var(--plum-primary)), hsl(var(--burgundy-dark)))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed mb-12">
            Real numbers, real change. See how your support transforms communities worldwide
          </p>
          
          {/* Impact Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, title: "Community Reach", value: "150K+ Lives", description: "Directly impacted across 25 countries" },
              { icon: Target, title: "Program Success", value: "98%", description: "Efficiency rate in fund utilization" },
              { icon: Sparkles, title: "Active Programs", value: "45", description: "Ongoing initiatives worldwide" }
            ].map((highlight, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">{highlight.value}</div>
                <div className="font-semibold text-ngo-neutral-dark mb-2">{highlight.title}</div>
                <div className="text-sm text-ngo-neutral">{highlight.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ImpactMetrics />
    </div>
  );
}
