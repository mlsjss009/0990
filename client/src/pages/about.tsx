
import Navigation from "@/components/navigation";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";
import { Users, Globe, Heart, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-page-navy text-ngo-neutral-dark">
      <Navigation />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96" style={{background: 'radial-gradient(circle, hsl(var(--navy-light) / 0.15), transparent)'}}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80" style={{background: 'radial-gradient(circle, hsl(var(--teal-light) / 0.12), transparent)'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 shadow-lg" style={{color: 'hsl(var(--navy-primary))'}}>
            <Users className="mr-2 h-5 w-5" />
            Our Story & Mission
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text-cool">
            About Hope Together
          </h1>
          <p className="text-xl md:text-2xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed">
            Building bridges to a better tomorrow through community-driven solutions and sustainable impact
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {[
              { icon: Globe, value: "25+", label: "Countries" },
              { icon: Users, value: "150K+", label: "Lives Impacted" },
              { icon: Heart, value: "45", label: "Programs" },
              { icon: Award, value: "15+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <stat.icon className="h-8 w-8 text-ngo-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-ngo-primary mb-1">{stat.value}</div>
                <div className="text-sm text-ngo-neutral">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <AboutSection />
      <Footer />
    </div>
  );
}
