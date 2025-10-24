import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Briefcase, HandHeart, ArrowRight, Users, TrendingUp, Award } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "Providing quality education, school supplies, and digital literacy programs to underserved communities.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Children learning in classroom",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      stats: "15K+ Students",
      impact: "Building futures through education",
      color: "indigo"
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Mobile clinics, preventive care, and health education programs reaching remote communities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Healthcare workers in community clinic",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      stats: "50K+ Treated",
      impact: "Saving lives through healthcare",
      color: "emerald"
    },
    {
      icon: Briefcase,
      title: "Economic Empowerment",
      description: "Microfinance, skills training, and entrepreneurship programs to create sustainable livelihoods.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Small business entrepreneurs working",
      gradient: "from-orange-500 via-rose-500 to-pink-500",
      stats: "8K+ Businesses",
      impact: "Creating economic opportunities",
      color: "orange"
    },
    {
      icon: HandHeart,
      title: "Emergency Relief",
      description: "Rapid response to natural disasters and humanitarian crises with essential supplies and support.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Emergency relief aid distribution",
      gradient: "from-red-500 via-pink-500 to-purple-500",
      stats: "25+ Disasters",
      impact: "Emergency response when needed",
      color: "red"
    },
  ];

  return (
    <section id="programs" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white shadow-lg rounded-full text-sm font-bold mb-6 border border-purple-100" data-testid="badge-mission-areas">
            <HandHeart className="mr-2 h-5 w-5 text-purple-600" />
            <span className="gradient-text">Our Mission Areas</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 section-divider pb-6" data-testid="heading-core-programs">
            <span className="gradient-text">Core Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" data-testid="text-programs-description">
            We focus on four key areas that create the foundation for thriving communities: education, healthcare, economic empowerment, and emergency relief.
          </p>
        </div>
        
        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-xl overflow-hidden border-0 rounded-3xl group hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-program-${index}`}
            >
              {/* Program Image with Gradient Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.alt}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  data-testid={`img-program-${index}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}></div>
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <program.icon className="text-white h-8 w-8" />
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-2xl p-4 transform group-hover:scale-105 transition-all duration-300">
                    <div className="text-white font-bold text-lg mb-1" data-testid={`text-stat-${index}`}>{program.stats}</div>
                    <div className="text-white/95 text-sm" data-testid={`text-impact-${index}`}>{program.impact}</div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 gradient-text group-hover:scale-105 inline-block transition-transform duration-300" data-testid={`heading-program-${index}`}>
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg" data-testid={`text-description-${index}`}>
                  {program.description}
                </p>
                <div className="flex items-center justify-between">
                  <button 
                    className="inline-flex items-center font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all group/btn"
                    data-testid={`button-learn-more-${index}`}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 text-purple-600 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                  <div className={`w-12 h-12 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <program.icon className="text-white h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Bottom Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100" data-testid="feature-integrated">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold gradient-text mb-3">Integrated Approach</h4>
              <p className="text-gray-600 leading-relaxed">All programs work together for comprehensive community development and sustainable impact.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100" data-testid="feature-community">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold gradient-text-warm mb-3">Community-Driven</h4>
              <p className="text-gray-600 leading-relaxed">Working with local partners to ensure programs meet genuine community needs and priorities.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100" data-testid="feature-sustainable">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold gradient-text mb-3">Long-Term Impact</h4>
              <p className="text-gray-600 leading-relaxed">Building sustainable solutions that create lasting positive change for generations to come.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
