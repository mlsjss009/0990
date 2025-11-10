
import Navigation from "@/components/navigation";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";
import { Quote, Users, Heart, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-page-burgundy text-ngo-neutral-dark">
      <Navigation />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96" style={{background: 'radial-gradient(circle, hsl(var(--burgundy-light) / 0.15), transparent)'}}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80" style={{background: 'radial-gradient(circle, hsl(var(--plum-light) / 0.12), transparent)'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 shadow-lg" style={{color: 'hsl(var(--burgundy-dark))'}}>
            <Quote className="mr-2 h-5 w-5" />
            Community Voices
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{background: 'linear-gradient(135deg, hsl(var(--burgundy-primary)), hsl(var(--plum-dark)))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Testimonials
          </h1>
          <p className="text-xl md:text-2xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed mb-12">
            Real stories from real people whose lives have been transformed through our programs and community support
          </p>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, title: "5,000+", description: "Success stories and counting" },
              { icon: Star, title: "4.9/5", description: "Average satisfaction rating" },
              { icon: Heart, title: "95%", description: "Would recommend to others" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-pink-600 mb-2">{stat.title}</div>
                <div className="text-ngo-neutral">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
