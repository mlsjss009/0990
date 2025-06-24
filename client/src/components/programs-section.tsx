import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Briefcase, HandHeart, ArrowRight } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "Providing quality education, school supplies, and digital literacy programs to underserved communities.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Children learning in classroom",
      iconColor: "text-ngo-primary",
      bgColor: "bg-blue-50",
      gradient: "from-blue-500 to-indigo-600",
      stats: "15K+ Students",
      impact: "Building futures through education"
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Mobile clinics, preventive care, and health education programs reaching remote communities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Healthcare workers in community clinic",
      iconColor: "text-ngo-accent",
      bgColor: "bg-green-50",
      gradient: "from-green-500 to-emerald-600",
      stats: "50K+ Treated",
      impact: "Saving lives through healthcare"
    },
    {
      icon: Briefcase,
      title: "Economic Empowerment",
      description: "Microfinance, skills training, and entrepreneurship programs to create sustainable livelihoods.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Small business entrepreneurs working",
      iconColor: "text-ngo-secondary",
      bgColor: "bg-orange-50",
      gradient: "from-orange-500 to-red-500",
      stats: "8K+ Businesses",
      impact: "Creating economic opportunities"
    },
    {
      icon: HandHeart,
      title: "Emergency Relief",
      description: "Rapid response to natural disasters and humanitarian crises with essential supplies and support.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Emergency relief aid distribution",
      iconColor: "text-red-600",
      bgColor: "bg-red-50",
      gradient: "from-red-500 to-pink-600",
      stats: "25+ Disasters",
      impact: "Emergency response when needed"
    },
  ];

  return (
    <section id="programs" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-sm font-semibold text-ngo-secondary mb-6">
            <HandHeart className="mr-2 h-4 w-4" />
            Our Mission Areas
          </div>
          <h2 className="text-5xl font-bold text-ngo-neutral-dark mb-6 section-divider pb-4">
            Core Programs
          </h2>
          <p className="text-xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed">
            We focus on four key areas that create the foundation for thriving communities: education, healthcare, economic empowerment, and emergency relief.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-xl overflow-hidden card-hover border-0 rounded-3xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${program.gradient} opacity-80`}></div>
                <div className="absolute top-6 left-6">
                  <div className={`w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center`}>
                    <program.icon className="text-white h-7 w-7" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-white font-bold text-sm mb-1">{program.stats}</div>
                  <div className="text-white/90 text-xs">{program.impact}</div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-ngo-neutral-dark mb-4 group-hover:text-ngo-primary transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-ngo-neutral mb-6 leading-relaxed">{program.description}</p>
                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center text-ngo-primary font-semibold hover:text-ngo-primary-dark transition-colors group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className={`w-10 h-10 ${program.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className={`${program.iconColor} h-5 w-5`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-lg font-bold text-ngo-neutral-dark">All Programs</div>
              <div className="text-sm text-ngo-neutral">Integrated approach</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-ngo-neutral-dark">Local Partners</div>
              <div className="text-sm text-ngo-neutral">Community-driven</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-lg font-bold text-ngo-neutral-dark">Sustainable</div>
              <div className="text-sm text-ngo-neutral">Long-term impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}