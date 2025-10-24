import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Gift, Zap, Sparkles, Award, Users, TrendingUp } from "lucide-react";
import { executeAction } from "@/lib/actions";

export default function GrantSection() {
  return (
    <section id="grant-section" className="py-24 relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-600 to-purple-600"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-6 shadow-xl" data-testid="badge-cbnf-program">
            <Zap className="mr-2 h-5 w-5 text-yellow-200" />
            <span className="text-white">2025 CBNF Program</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 section-divider pb-6" data-testid="heading-grant">
            Transform Your Community Project
          </h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-medium" data-testid="text-grant-subtitle">
            Access Substantial Funding Opportunities
          </p>
        </div>

        {/* Main Info Card */}
        <div className="glass-effect rounded-3xl p-10 lg:p-14 mb-16 max-w-5xl mx-auto shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }} data-testid="card-grant-info">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-6 shadow-xl">
              <Award className="h-12 w-12 text-yellow-200" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">$900,000,000 Available</h3>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Bring your vision to life and make a real difference in your community. Our 2025 CBNF Program offers substantial funding opportunities for qualifying community projects.
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-lg text-white/95 leading-relaxed space-y-6">
            <div>
              <h4 className="font-bold text-2xl mb-3 text-yellow-200">Community Impact</h4>
              <p>
                We believe in empowering individuals and organizations to create lasting positive change. Whether you're improving local infrastructure, supporting youth development, enhancing healthcare, or promoting environmental sustainability, our funding can help turn your ideas into reality.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-2xl mb-3 text-yellow-200">Full Support</h4>
              <p>
                You're not alone in the process. Our team provides comprehensive assistance throughout the entire application journey — from proposal preparation to project execution. We offer personalized guidance, expert review, and ongoing support to help you achieve success.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-2xl mb-3 text-yellow-200">Why Apply?</h4>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="mr-3 text-yellow-300">•</span>
                  Access to a share of $900 million in available funding for eligible projects
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-yellow-300">•</span>
                  Opportunities to collaborate with local and international partners
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-yellow-300">•</span>
                  Professional mentorship and administrative support from start to finish
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-yellow-300">•</span>
                  The ability to make a measurable, lasting difference in your community
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <p className="text-center text-xl font-semibold">
                Take the next step toward building a better future. Apply today and join the 2025 CBNF Program in driving meaningful, sustainable community transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Grant Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="glass-effect rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition-all duration-300" data-testid="benefit-community">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="h-10 w-10 text-yellow-200" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Community Impact</h4>
            <p className="text-white/90 text-lg leading-relaxed">
              Direct funding for projects that create lasting positive change in your local community
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition-all duration-300" data-testid="benefit-environment">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Sparkles className="h-10 w-10 text-yellow-200" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Environmental & Sustainability</h4>
            <p className="text-white/90 text-lg leading-relaxed">
              Fund renewable energy projects, conservation programs, and environmental protection research
            </p>
          </div>

          <div className="glass-effect rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition-all duration-300" data-testid="benefit-emergency">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Zap className="h-10 w-10 text-yellow-200" />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white">Emergency Assistance</h4>
            <p className="text-white/90 text-lg leading-relaxed">
              Support for individuals or businesses affected by natural or economic disasters to rebuild and recover
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => executeAction('grant_application')}
            className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-8 rounded-2xl text-xl font-bold h-auto shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            data-testid="button-apply-grant"
          >
            <Gift className="mr-3 h-7 w-7" />
            Apply for Grant Funding Now
          </Button>
          <p className="text-white/90 mt-6 text-lg">Join thousands of successful applicants worldwide</p>
        </div>
      </div>
    </section>
  );
}
