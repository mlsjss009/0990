
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const allTestimonials = [
    {
      name: "Emily Thompson",
      role: "Community Organizer, Australia",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The community development program helped us establish a food bank that now serves over 500 families weekly. We've created a network of support that's transforming our neighborhood.",
      program: "Community Development",
      location: "Sydney, Australia"
    },
    {
      name: "James Wilson",
      role: "Veteran Support Coordinator, USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Working with homeless veterans through this program has been incredibly rewarding. We've helped 200+ veterans find stable housing and meaningful employment opportunities.",
      program: "Veteran Support",
      location: "Austin, Texas, USA"
    },
    {
      name: "Sarah Mitchell",
      role: "Education Advocate, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The adult literacy program gave me the confidence to pursue my teaching certification. Now I run workshops for other adults who want to improve their reading and writing skills.",
      program: "Education Access",
      location: "Manchester, UK"
    },
    {
      name: "Marie Dubois",
      role: "Refugee Integration Specialist, France",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Helping refugee families integrate into French society has shown me the power of compassion and community. Every family we support brings unique strengths to our neighborhoods.",
      program: "Refugee Support",
      location: "Lyon, France"
    },
    {
      name: "Michael O'Brien",
      role: "Environmental Coordinator, Australia",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The coastal restoration project has planted over 10,000 native trees and restored 50 hectares of wetlands. Local wildlife populations have increased by 40% in just two years.",
      program: "Environmental Protection",
      location: "Melbourne, Australia"
    },
    {
      name: "Lisa Rodriguez",
      role: "Small Business Owner, USA",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The microfinance program enabled me to start my catering business during the pandemic. I now employ 8 people and we've catered over 300 community events.",
      program: "Economic Empowerment",
      location: "Denver, Colorado, USA"
    },
    {
      name: "David Clarke",
      role: "Youth Mentor, UK",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Mentoring at-risk youth has been transformative for both them and me. We've seen a 70% reduction in school dropout rates among program participants over the past three years.",
      program: "Youth Development",
      location: "Birmingham, UK"
    },
    {
      name: "Isabelle Laurent",
      role: "Healthcare Worker, France",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our mobile health clinic serves rural communities that previously had no access to healthcare. We've provided medical care to over 3,000 people in remote areas.",
      program: "Healthcare Access",
      location: "Toulouse, France"
    },
    {
      name: "Robert Taylor",
      role: "Indigenous Rights Advocate, Australia",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Working to preserve Aboriginal culture and language has connected our community with its roots. We've established three cultural centers and trained 50 young people as cultural ambassadors.",
      program: "Cultural Preservation",
      location: "Alice Springs, Australia"
    },
    {
      name: "Amanda Johnson",
      role: "Disaster Relief Coordinator, USA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Leading hurricane relief efforts has taught me about community resilience. We coordinated aid for 5,000 families and helped rebuild 200 homes after the last major storm.",
      program: "Emergency Relief",
      location: "New Orleans, Louisiana, USA"
    },
    {
      name: "Thomas Brown",
      role: "Mental Health Counselor, UK",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Providing mental health support during the pandemic showed me how crucial community care is. We've helped over 1,000 people access counseling services when they needed it most.",
      program: "Mental Health Support",
      location: "Edinburgh, Scotland, UK"
    },
    {
      name: "Camille Moreau",
      role: "Women's Rights Advocate, France",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The women's empowerment workshops have helped 300+ women start their own businesses. We've created a support network that's breaking barriers and changing lives across France.",
      program: "Women's Empowerment",
      location: "Paris, France"
    },
    {
      name: "Jessica Davis",
      role: "Food Security Coordinator, Australia",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our urban farming initiative has created 20 community gardens and trained 500 families in sustainable food production. Food insecurity in our region has dropped by 35%.",
      program: "Food Security",
      location: "Brisbane, Australia"
    },
    {
      name: "Christopher White",
      role: "Senior Program Manager, USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Overseeing multiple community programs has shown me the interconnected nature of social challenges. Our holistic approach has improved outcomes for over 2,000 families.",
      program: "Community Development",
      location: "Portland, Oregon, USA"
    },
    {
      name: "Grace Williams",
      role: "Special Needs Educator, UK",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Creating inclusive education programs for children with disabilities has been my passion. We've integrated 150 special needs students into mainstream schools with remarkable success.",
      program: "Inclusive Education",
      location: "London, UK"
    },
    {
      name: "Pierre Martin",
      role: "Community Development Worker, France",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Revitalizing underserved neighborhoods has taught me about the power of grassroots organizing. We've established community centers in 10 areas and created 200 local jobs.",
      program: "Urban Development",
      location: "Marseille, France"
    },
    {
      name: "Rachel Green",
      role: "Senior Care Specialist, Australia",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our aging-in-place program has enabled 400 seniors to remain in their homes safely. We've created a support network that provides both practical help and meaningful social connections.",
      program: "Elder Care",
      location: "Perth, Australia"
    },
    {
      name: "Kevin Anderson",
      role: "Addiction Recovery Counselor, USA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Working in addiction recovery has shown me the incredible strength of the human spirit. Our program has achieved a 65% long-term recovery rate and reunited countless families.",
      program: "Addiction Recovery",
      location: "Seattle, Washington, USA"
    },
    {
      name: "Helen Smith",
      role: "Domestic Violence Advocate, UK",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Supporting survivors of domestic violence requires both compassion and systemic change. We've helped 250 women and children find safety and rebuild their lives with dignity.",
      program: "Domestic Violence Support",
      location: "Glasgow, Scotland, UK"
    },
    {
      name: "Antoine Dubois",
      role: "Climate Action Coordinator, France",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Leading climate action initiatives has mobilized 1,000+ volunteers across France. We've reduced community carbon emissions by 25% and installed solar panels on 100 public buildings.",
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
