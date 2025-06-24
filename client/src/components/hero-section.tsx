import { Button } from "@/components/ui/button";
import { Heart, Play, Sparkles, Globe } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-20 bg-blue-600 text-white relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-8 glass-effect">
              <Sparkles className="mr-2 h-4 w-4" />
              Making a difference since 2010
            </div>
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Transforming Lives Through{" "}
              <span className="text-yellow-400">
                Community Action
              </span>
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed max-w-xl">
              Join us in creating lasting change for vulnerable communities worldwide. Together, we can build a future where everyone has access to basic needs, education, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 rounded-full text-lg font-bold h-auto">
                <Heart className="mr-3 h-6 w-6" />
                Make a Donation
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-6 rounded-full text-lg font-bold h-auto"
              >
                <Play className="mr-3 h-6 w-6" />
                Watch Our Story
              </Button>
            </div>
            <div className="flex items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">150K+</div>
                <div className="text-white text-sm">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">45</div>
                <div className="text-white text-sm">Active Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">25</div>
                <div className="text-white text-sm">Countries</div>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Diverse group of volunteers working together in community"
                className="rounded-3xl shadow-2xl w-full h-auto card-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-effect rounded-2xl p-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-6 w-6 text-white" />
                    <div>
                      <div className="text-white font-semibold">Global Impact</div>
                      <div className="text-white text-sm">Active in 25 countries worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg floating-animation">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg floating-animation" style={{ animationDelay: "1s" }}>
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}