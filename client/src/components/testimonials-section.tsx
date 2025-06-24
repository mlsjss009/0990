import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Community Leader, Guatemala",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The microfinance program gave me the opportunity to start my own bakery. Now I employ five women from my community and we're all supporting our families with dignity."
    },
    {
      name: "David Chen",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Volunteering with Hope Together has been life-changing. The organization's approach to sustainable development really works, and I've seen communities transform firsthand."
    },
    {
      name: "Ahmed Hassan",
      role: "Program Beneficiary, Kenya",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The education program helped me get my high school diploma at 28. Now I'm studying to become a teacher so I can give back to my community the way Hope Together gave to me."
    },
  ];

  return (
    <section className="py-20 bg-ngo-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ngo-neutral-dark mb-4">Stories of Impact</h2>
          <p className="text-lg text-ngo-neutral">
            Hear from the communities and individuals whose lives have been transformed through our programs.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} portrait`}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-ngo-neutral-dark">{testimonial.name}</h4>
                    <p className="text-ngo-neutral text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-ngo-neutral italic mb-4">"{testimonial.quote}"</p>
                <div className="flex text-ngo-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
