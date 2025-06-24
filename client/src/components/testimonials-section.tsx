import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Community Leader, Guatemala",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The microfinance program gave me the opportunity to start my own bakery. Now I employ five women from my community and we're all supporting our families with dignity.",
      program: "Economic Empowerment",
      location: "Guatemala City"
    },
    {
      name: "David Chen",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Volunteering with Hope Together has been life-changing. The organization's approach to sustainable development really works, and I've seen communities transform firsthand.",
      program: "Volunteer Program",
      location: "New York, USA"
    },
    {
      name: "Ahmed Hassan",
      role: "Program Beneficiary, Kenya",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The education program helped me get my high school diploma at 28. Now I'm studying to become a teacher so I can give back to my community the way Hope Together gave to me.",
      program: "Education Access",
      location: "Nairobi, Kenya"
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100/50 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-sm font-semibold text-ngo-primary mb-6">
            <Quote className="mr-2 h-4 w-4" />
            Real Stories, Real Impact
          </div>
          <h2 className="text-5xl font-bold text-ngo-neutral-dark mb-6 section-divider pb-4">
            Stories of Impact
          </h2>
          <p className="text-xl text-ngo-neutral max-w-3xl mx-auto leading-relaxed">
            Hear from the communities and individuals whose lives have been transformed through our programs and the volunteers who make it all possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm shadow-xl border-0 rounded-3xl card-hover group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Header with quote icon */}
                <div className="bg-gradient-to-r from-ngo-primary to-indigo-600 p-6 relative">
                  <Quote className="h-8 w-8 text-white/60 absolute top-4 right-4" />
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.name} portrait`}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                    />
                    <div>
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-blue-100 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-ngo-neutral italic mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-ngo-primary">{testimonial.program}</div>
                      <div className="text-xs text-ngo-neutral">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-primary">4.9/5</div>
              <div className="text-sm text-ngo-neutral">Satisfaction Rate</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-accent">2,500+</div>
              <div className="text-sm text-ngo-neutral">Success Stories</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-secondary">95%</div>
              <div className="text-sm text-ngo-neutral">Program Completion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}