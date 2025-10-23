
import Navigation from "@/components/navigation";
import ProgramsSection from "@/components/programs-section";
import Footer from "@/components/footer";
import { GraduationCap, Heart, Briefcase, HandHeart } from "lucide-react";

export default function Programs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 text-ngo-neutral-dark">
      <Navigation />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-ngo-secondary mb-8 shadow-lg">
            <HandHeart className="mr-2 h-5 w-5" />
            Making a Difference
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed mb-12">
            Comprehensive initiatives addressing education, healthcare, economic empowerment, and emergency relief
          </p>
          
          {/* Program Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: GraduationCap, label: "Education", color: "from-blue-500 to-indigo-600" },
              { icon: Heart, label: "Healthcare", color: "from-green-500 to-emerald-600" },
              { icon: Briefcase, label: "Economic Growth", color: "from-orange-500 to-red-500" },
              { icon: HandHeart, label: "Emergency Relief", color: "from-red-500 to-pink-600" }
            ].map((program, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <div className="font-semibold text-ngo-neutral-dark">{program.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ProgramsSection />
      <Footer />
    </div>
  );
}
