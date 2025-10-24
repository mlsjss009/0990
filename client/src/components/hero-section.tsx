import { Button } from "@/components/ui/button";
import { Heart, CheckCircle, Sparkles, Globe, Users, TrendingUp, Award } from "lucide-react";
import { executeAction } from "@/lib/actions";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 shadow-lg border border-purple-100" data-testid="badge-since-2010">
              <Sparkles className="mr-2 h-4 w-4 text-purple-600" />
              <span className="gradient-text">Making a difference since 2010</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8" data-testid="heading-hero">
              Transforming Lives Through{" "}
              <span className="gradient-text-warm">
                Community Action
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl" data-testid="text-hero-description">
              Join us in creating lasting change for vulnerable communities worldwide. Together, we can build a future where everyone has access to basic needs, education, and opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Button
                onClick={() => {
                  const element = document.getElementById('eligibility');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-gradient text-white px-10 py-7 rounded-2xl text-lg font-bold h-auto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
                data-testid="button-check-eligibility"
              >
                <CheckCircle className="mr-3 h-6 w-6" />
                Check Eligibility Now
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-purple-100 transform hover:scale-105 transition-all duration-300" data-testid="stat-lives-impacted">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-3 mx-auto">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text text-center">150K+</div>
                <div className="text-gray-600 text-sm text-center mt-1">Lives Impacted</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-purple-100 transform hover:scale-105 transition-all duration-300" data-testid="stat-active-programs">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl mb-3 mx-auto">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text-warm text-center">45</div>
                <div className="text-gray-600 text-sm text-center mt-1">Active Programs</div>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-purple-100 transform hover:scale-105 transition-all duration-300" data-testid="stat-countries">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mb-3 mx-auto">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text text-center">25</div>
                <div className="text-gray-600 text-sm text-center mt-1">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Diverse group of volunteers working together in community"
                  className="w-full h-auto"
                  data-testid="img-hero"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-2xl p-5 shadow-xl">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <Globe className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">Global Impact</div>
                        <div className="text-white/90 text-sm">Active in 25 countries worldwide</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl floating-animation transform rotate-12">
                <Heart className="h-10 w-10 text-white" />
              </div>

              {/* Floating Badge - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl floating-animation transform -rotate-12" style={{ animationDelay: '1.5s' }}>
                <Award className="h-8 w-8 text-white" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-400/30 to-indigo-400/30 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg className="w-full h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
