
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const allTestimonials = [
    {
      name: "Emily Thompson",
      role: "Community Organizer, Australia",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Starting our food bank changed everything. Now I see neighbors helping neighbors every single day.",
      program: "Community Development",
      location: "Sydney, Australia"
    },
    {
      name: "James Wilson",
      role: "Veteran Support Coordinator, USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Helping veterans find homes again reminds me why I do this work. Every success story matters.",
      program: "Veteran Support",
      location: "Austin, Texas, USA"
    },
    {
      name: "Sarah Mitchell",
      role: "Education Advocate, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Learning to read as an adult changed my life. Now I help others find their voice too.",
      program: "Education Access",
      location: "Manchester, UK"
    },
    {
      name: "Marie Dubois",
      role: "Refugee Integration Specialist, France",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Every refugee family I meet teaches me something new. Their resilience inspires me daily.",
      program: "Refugee Support",
      location: "Lyon, France"
    },
    {
      name: "Michael O'Brien",
      role: "Environmental Coordinator, Australia",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Watching our coastline come back to life has been incredible. Nature is healing, and we're part of it.",
      program: "Environmental Protection",
      location: "Melbourne, Australia"
    },
    {
      name: "Lisa Rodriguez",
      role: "Small Business Owner, USA",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "This loan gave me a chance when no one else would. Now I'm employing people from my own community.",
      program: "Economic Empowerment",
      location: "Denver, Colorado, USA"
    },
    {
      name: "David Clarke",
      role: "Youth Mentor, UK",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "These kids just needed someone to believe in them. Seeing them graduate fills my heart.",
      program: "Youth Development",
      location: "Birmingham, UK"
    },
    {
      name: "Isabelle Laurent",
      role: "Healthcare Worker, France",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Bringing healthcare to remote villages reminds me why I became a nurse. Everyone deserves care.",
      program: "Healthcare Access",
      location: "Toulouse, France"
    },
    {
      name: "Robert Taylor",
      role: "Indigenous Rights Advocate, Australia",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Preserving our culture for the next generation is everything to me. Our language lives on.",
      program: "Cultural Preservation",
      location: "Alice Springs, Australia"
    },
    {
      name: "Amanda Johnson",
      role: "Disaster Relief Coordinator, USA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "When disaster strikes, communities come together. I'm honored to be part of that.",
      program: "Emergency Relief",
      location: "New Orleans, Louisiana, USA"
    },
    {
      name: "Thomas Brown",
      role: "Mental Health Counselor, UK",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Talking openly about mental health saves lives. I've seen it happen over and over.",
      program: "Mental Health Support",
      location: "Edinburgh, Scotland, UK"
    },
    {
      name: "Camille Moreau",
      role: "Women's Rights Advocate, France",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Watching women build their dreams from scratch is pure joy. We lift each other up.",
      program: "Women's Empowerment",
      location: "Paris, France"
    },
    {
      name: "Jessica Davis",
      role: "Food Security Coordinator, Australia",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Growing food together brought our neighborhood back to life. It's about more than vegetables.",
      program: "Food Security",
      location: "Brisbane, Australia"
    },
    {
      name: "Christopher White",
      role: "Senior Program Manager, USA",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Real change happens when we work together. I see it in every family we support.",
      program: "Community Development",
      location: "Portland, Oregon, USA"
    },
    {
      name: "Grace Williams",
      role: "Special Needs Educator, UK",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Every child deserves to learn. Seeing these kids thrive makes everything worth it.",
      program: "Inclusive Education",
      location: "London, UK"
    },
    {
      name: "Pierre Martin",
      role: "Community Development Worker, France",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our neighborhood went from forgotten to thriving. People have hope again.",
      program: "Urban Development",
      location: "Marseille, France"
    },
    {
      name: "Rachel Green",
      role: "Senior Care Specialist, Australia",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Helping seniors stay home with dignity is sacred work. They've earned it.",
      program: "Elder Care",
      location: "Perth, Australia"
    },
    {
      name: "Kevin Anderson",
      role: "Addiction Recovery Counselor, USA",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Recovery is possible, and it's beautiful. These families are my heroes.",
      program: "Addiction Recovery",
      location: "Seattle, Washington, USA"
    },
    {
      name: "Helen Smith",
      role: "Domestic Violence Advocate, UK",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Seeing survivors reclaim their power never gets old. They're the bravest people I know.",
      program: "Domestic Violence Support",
      location: "Glasgow, Scotland, UK"
    },
    {
      name: "Antoine Dubois",
      role: "Climate Action Coordinator, France",
      image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Fighting climate change starts at home. Together, we're making a real difference.",
      program: "Climate Action",
      location: "Bordeaux, France"
    }
  ];

  const [displayedTestimonials, setDisplayedTestimonials] = useState<typeof allTestimonials>([]);

  useEffect(() => {
    // Function to get 6 random testimonials
    const getRandomTestimonials = () => {
      const shuffled = [...allTestimonials].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 6);
    };

    // Set initial testimonials
    setDisplayedTestimonials(getRandomTestimonials());

    // Auto-shuffle every 5 seconds
    const interval = setInterval(() => {
      setDisplayedTestimonials(getRandomTestimonials());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
            Hear from communities and individuals across Australia, USA, UK, and France whose lives have been transformed through our programs and the volunteers who make it all possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.name}-${index}`} 
              className="bg-white/80 backdrop-blur-sm shadow-xl border-0 rounded-3xl card-hover group overflow-hidden transition-all duration-500 ease-in-out"
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
              <div className="text-2xl font-bold text-ngo-accent">5,000+</div>
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
