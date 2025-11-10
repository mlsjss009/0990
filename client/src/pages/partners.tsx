
import Navigation from "@/components/navigation";
import PartnersSection from "@/components/partners-section";
import { Handshake, Globe, Building, Award } from "lucide-react";

export default function Partners() {
  return (
    <div className="min-h-screen bg-page-slate text-ngo-neutral-dark">
      <Navigation />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96" style={{background: 'radial-gradient(circle, hsl(var(--slate-light) / 0.15), transparent)'}}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80" style={{background: 'radial-gradient(circle, hsl(var(--navy-light) / 0.12), transparent)'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 shadow-lg" style={{color: 'hsl(var(--slate-dark))'}}>
            <Handshake className="mr-2 h-5 w-5" />
            Global Collaboration
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            Our Partners
          </h1>
          <p className="text-xl md:text-2xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed mb-12">
            Working together with leading organizations worldwide to amplify our impact and reach more communities in need
          </p>
          
          {/* Partnership Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Globe, title: "100+", description: "Global partner organizations" },
              { icon: Building, title: "50+", description: "Corporate sponsors" },
              { icon: Award, title: "25", description: "International NGOs" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.title}</div>
                <div className="text-ngo-neutral">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <PartnersSection />
    </div>
  );
}
