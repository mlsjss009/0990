
import Navigation from "@/components/navigation";
import ApplicationSection from "@/components/application-section";
import EligibilityChecker from "@/components/eligibility-checker";
import { FileText, CheckCircle, ClipboardList, UserCheck } from "lucide-react";

export default function Apply() {
  return (
    <div className="min-h-screen bg-page-plum text-ngo-neutral-dark">
      <Navigation />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96" style={{background: 'radial-gradient(circle, hsl(var(--plum-light) / 0.15), transparent)'}}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80" style={{background: 'radial-gradient(circle, hsl(var(--navy-light) / 0.12), transparent)'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 shadow-lg" style={{color: 'hsl(var(--plum-dark))'}}>
            <FileText className="mr-2 h-5 w-5" />
            Apply for Support
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{background: 'linear-gradient(135deg, hsl(var(--navy-primary)), hsl(var(--plum-dark)))', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
             Application
          </h1>
          <p className="text-xl md:text-2xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed mb-12">
            Check your eligibility and apply for our programs. We're here to support your community's growth and development.
          </p>
          
          {/* Application Process Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: ClipboardList, title: "Check Eligibility", description: "Quick 2-minute assessment" },
              { icon: FileText, title: "Submit Application", description: "Simple online form" },
              { icon: UserCheck, title: "Get Approved", description: "Instant Review" }
            ].map((step, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="font-bold text-xl text-ngo-neutral-dark mb-2">{step.title}</div>
                <div className="text-ngo-neutral">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div id="eligibility" className="py-12 px-4 sm:px-6 lg:px-8">
        <EligibilityChecker />
      </div>
      <ApplicationSection />
    </div>
  );
}
