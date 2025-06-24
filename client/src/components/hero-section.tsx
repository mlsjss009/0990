import { Button } from "@/components/ui/button";
import { Heart, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-ngo-primary to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Community Boost Nationwide Foundation{" "}
              <span className="text-ngo-secondary">(CBNF)</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Empowering communities across the nation through comprehensive support programs. Join CBNF in creating sustainable change and building stronger communities nationwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-ngo-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold h-auto">
                <Heart className="mr-2 h-5 w-5" />
                Make a Donation
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-ngo-primary px-8 py-4 rounded-full text-lg font-semibold h-auto"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Diverse group of volunteers working together in community"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
