
import Navigation from "@/components/navigation";
import VolunteerSection from "@/components/volunteer-section";
import Footer from "@/components/footer";
import { UserPlus, Heart, Globe, Clock } from "lucide-react";

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-page-forest text-ngo-neutral-dark">
      <Navigation />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96" style={{background: 'radial-gradient(circle, hsl(var(--forest-light) / 0.15), transparent)'}}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80" style={{background: 'radial-gradient(circle, hsl(var(--teal-light) / 0.12), transparent)'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 shadow-lg" style={{color: 'hsl(var(--forest-dark))'}}>
            <UserPlus className="mr-2 h-5 w-5" />
            Join Our Mission
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text-nature">
            Become a Volunteer
          </h1>
          <p className="text-xl md:text-2xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed mb-12">
            Make a real difference in communities worldwide. Your time and skills can change lives
          </p>
          
          {/* Volunteer Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Heart, title: "Make Impact", description: "Create meaningful change in communities" },
              { icon: Globe, title: "Global Reach", description: "Opportunities in 25+ countries" },
              { icon: Clock, title: "Flexible", description: "Commitment options to fit your schedule" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <div className="font-bold text-xl text-ngo-neutral-dark mb-2">{benefit.title}</div>
                <div className="text-ngo-neutral">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <VolunteerSection />
      <Footer />
    </div>
  );
}
