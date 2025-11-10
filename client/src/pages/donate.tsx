
import Navigation from "@/components/navigation";
import DonationSection from "@/components/donation-section";
import GrantCTA from "@/components/grant-cta";
import { DollarSign, Heart, Shield, Star } from "lucide-react";

export default function Donate() {
  return (
    <div className="min-h-screen bg-page-amber text-ngo-neutral-dark">
      <Navigation />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96" style={{background: 'radial-gradient(circle, hsl(var(--amber-light) / 0.15), transparent)'}}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80" style={{background: 'radial-gradient(circle, hsl(var(--terracotta-light) / 0.12), transparent)'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 shadow-lg" style={{color: 'hsl(var(--amber-dark))'}}>
            <Heart className="mr-2 h-5 w-5" />
            Support Our Mission
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text-warm">
            Make a Donation
          </h1>
          <p className="text-xl md:text-2xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed mb-12">
            Your generosity creates lasting change. Every donation directly supports our programs and transforms lives worldwide.
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "100% Secure", description: "Bank-level encryption for all transactions" },
              { icon: Star, title: "Tax Deductible", description: "501(c)(3) registered nonprofit organization" },
              { icon: DollarSign, title: "98% Impact", description: "Of every dollar goes directly to programs" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <div className="font-bold text-xl text-ngo-neutral-dark mb-2">{feature.title}</div>
                <div className="text-ngo-neutral">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <GrantCTA />
      <DonationSection />
    </div>
  );
}
