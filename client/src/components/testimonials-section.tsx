
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const allTestimonials = [
    {
      name: "Jennifer Martinez",
      role: "Community Center Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The CBNF grant allowed us to build a new community center that serves over 500 families. The application process was straightforward and the support team was incredible.",
      program: "Community Development Grant",
      location: "Portland, Oregon, USA"
    },
    {
      name: "Michael Thompson",
      role: "Youth Program Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our after-school program was struggling until we received CBNF funding. Now we're helping 200 kids stay off the streets and build their futures.",
      program: "Youth Development Grant",
      location: "Chicago, Illinois, USA"
    },
    {
      name: "Sarah Williams",
      role: "Environmental Project Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Thanks to CBNF, we installed solar panels on 50 low-income homes. It's making a real difference in our community's carbon footprint and energy costs.",
      program: "Environmental Sustainability Grant",
      location: "San Francisco, California, USA"
    },
    {
      name: "David Johnson",
      role: "Healthcare Initiative Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The mobile health clinic we funded through CBNF has provided free healthcare to over 1,000 underserved residents in our rural community.",
      program: "Healthcare Access Grant",
      location: "Rural Montana, USA"
    },
    {
      name: "Patricia Anderson",
      role: "Small Business Development",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "CBNF's economic empowerment grant helped me launch a training program that's taught 150 women valuable job skills. Many are now employed.",
      program: "Economic Empowerment Grant",
      location: "Detroit, Michigan, USA"
    },
    {
      name: "Robert Davis",
      role: "Education Program Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "With CBNF support, we provided laptops and internet access to 300 students from low-income families. Education equity is becoming a reality.",
      program: "Education Access Grant",
      location: "Houston, Texas, USA"
    },
    {
      name: "Linda Wilson",
      role: "Food Security Coordinator",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our community garden project, funded by CBNF, now feeds 75 families year-round. We've created a sustainable food source for our neighborhood.",
      program: "Food Security Grant",
      location: "Seattle, Washington, USA"
    },
    {
      name: "James Miller",
      role: "Emergency Relief Director",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "When the floods hit, CBNF's emergency grant helped us provide shelter and supplies to 400 displaced families. Their response was incredibly fast.",
      program: "Emergency Relief Grant",
      location: "New Orleans, Louisiana, USA"
    },
    {
      name: "Mary Garcia",
      role: "Senior Care Program Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The CBNF grant enabled us to provide in-home care services for 100 elderly residents, allowing them to age with dignity in their own homes.",
      program: "Elder Care Grant",
      location: "Miami, Florida, USA"
    },
    {
      name: "Christopher Brown",
      role: "Housing Initiative Director",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "CBNF funding helped us renovate 25 affordable housing units. Families who were on the brink of homelessness now have safe, stable homes.",
      program: "Affordable Housing Grant",
      location: "Boston, Massachusetts, USA"
    },
    {
      name: "Thomas Brown",
      role: "Mental Health Counselor",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our free mental health clinic, funded by CBNF, has provided counseling to 500 people. We're breaking down barriers to mental healthcare.",
      program: "Mental Health Support Grant",
      location: "Edinburgh, Scotland, UK"
    },
    {
      name: "Camille Moreau",
      role: "Women's Rights Advocate",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Thanks to CBNF, we opened a women's resource center offering job training, legal aid, and childcare. It's transformed lives in our community.",
      program: "Women's Empowerment Grant",
      location: "Paris, France"
    },
    {
      name: "Jessica Davis",
      role: "Food Security Coordinator",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our urban farming project with CBNF support produces fresh vegetables for 200 families while teaching sustainable agriculture practices.",
      program: "Food Security Grant",
      location: "Brisbane, Australia"
    },
    {
      name: "Christopher White",
      role: "Community Organizer",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "CBNF's grant helped us create a job placement program that's connected 150 unemployed residents with sustainable careers in green energy.",
      program: "Workforce Development Grant",
      location: "Portland, Oregon, USA"
    },
    {
      name: "Grace Williams",
      role: "Special Needs Educator",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "With CBNF funding, we launched an inclusive education program serving 80 children with special needs. Every child deserves quality education.",
      program: "Inclusive Education Grant",
      location: "London, UK"
    },
    {
      name: "Pierre Martin",
      role: "Urban Development Worker",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The CBNF grant transformed our neglected neighborhood park into a thriving community space with playgrounds, gardens, and sports facilities.",
      program: "Urban Development Grant",
      location: "Marseille, France"
    },
    {
      name: "Rachel Green",
      role: "Senior Care Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "CBNF funding allowed us to provide meal delivery and companionship services to 120 isolated seniors. It's restored their quality of life.",
      program: "Elder Care Grant",
      location: "Perth, Australia"
    },
    {
      name: "Kevin Anderson",
      role: "Addiction Recovery Counselor",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our addiction recovery center, supported by CBNF, has helped 200 individuals reclaim their lives. Recovery is possible with the right support.",
      program: "Addiction Recovery Grant",
      location: "Seattle, Washington, USA"
    },
    {
      name: "Helen Smith",
      role: "Domestic Violence Advocate",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Thanks to CBNF, we opened a safe house that's provided refuge for 75 domestic violence survivors and their children. We're saving lives.",
      program: "Domestic Violence Support Grant",
      location: "Glasgow, Scotland, UK"
    },
    {
      name: "Antoine Dubois",
      role: "Climate Action Coordinator",
      image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "CBNF's climate action grant funded our community recycling program. We've diverted 50 tons of waste from landfills in just six months.",
      program: "Climate Action Grant",
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
            Hear from grant recipients and community leaders who are making a real difference with CBNF funding across the USA, UK, France, and Australia.
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
              <div className="text-sm text-ngo-neutral">Grant Recipient Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-accent">5,000+</div>
              <div className="text-sm text-ngo-neutral">Funded Projects</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-secondary">95%</div>
              <div className="text-sm text-ngo-neutral">Project Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
