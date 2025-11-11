import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import testimonial1 from "@assets/44027744_304511600367955_2819448633127075840_n_1762839339439.jpg";
import testimonial2 from "@assets/480528755_1725776954952983_8569738689432633017_n_1762839339443.jpg";
import testimonial3 from "@assets/51771353_315672362630123_7144159342156054528_n_1762839339446.jpg";
import testimonial4 from "@assets/537428585_10161262582146078_1721140242684191870_n_1762839339457.jpg";
import testimonial5 from "@assets/503597416_10226390344936336_6006097557636922140_n_1762839339461.jpg";

export default function TestimonialsSection() {
  const allTestimonials = [
    {
      name: "Emily Thompson",
      role: "Community Organizer, Australia",
      image: testimonial1,
      quote: "Starting our food bank changed everything. Now I see neighbors helping neighbors every single day.",
      program: "Community Development",
      location: "Sydney, Australia"
    },
    {
      name: "James Wilson",
      role: "Veteran Support Coordinator, USA",
      image: testimonial2,
      quote: "Helping veterans find homes again reminds me why I do this work. Every success story matters.",
      program: "Veteran Support",
      location: "Austin, Texas, USA"
    },
    {
      name: "Sarah Mitchell",
      role: "Education Advocate, UK",
      image: testimonial3,
      quote: "Learning to read as an adult changed my life. Now I help others find their voice too.",
      program: "Education Access",
      location: "Manchester, UK"
    },
    {
      name: "Marie Dubois",
      role: "Refugee Integration Specialist, France",
      image: testimonial4,
      quote: "Every refugee family I meet teaches me something new. Their resilience inspires me daily.",
      program: "Refugee Support",
      location: "Lyon, France"
    },
    {
      name: "Michael O'Brien",
      role: "Environmental Coordinator, Australia",
      image: testimonial5,
      quote: "Watching our coastline come back to life has been incredible. Nature is healing, and we're part of it.",
      program: "Environmental Protection",
      location: "Melbourne, Australia"
    },
    {
      name: "Lisa Rodriguez",
      role: "Small Business Owner, USA",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "This help gave me a chance when no one else would. Now I'm employing people from my own community many thanks to CBNF we are forever grateful.",
      program: "Economic Empowerment",
      location: "Denver, Colorado, USA"
    },
    {
      name: "David Clarke",
      role: "Youth Mentor, UK",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "These kids just needed someone to believe in them. Seeing them graduate fills my heart Kudos CBNF.",
      program: "Youth Development",
      location: "Birmingham, UK"
    },
    {
      name: "Isabelle Laurent",
      role: "Healthcare Worker, France",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Bringing healthcare to remote villages reminds me why I became a nurse. Everyone deserves care CBNF FOR THE FUTURE.",
      program: "Healthcare Access",
      location: "Toulouse, France"
    },
    {
      name: "Robert Taylor",
      role: "Indigenous Rights Advocate, Australia",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The Cbnf helping Preserving our culture for the next generation is everything to me. Our language lives on.",
      program: "Cultural Preservation",
      location: "Alice Springs, Australia"
    },
    {
      name: "Amanda Johnson",
      role: "Disaster Relief Coordinator, USA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "When disaster strikes, communities come together. I'm honored to be part of that. We are forever grateful.",
      program: "Emergency Relief",
      location: "New Orleans, Louisiana, USA"
    },
    {
      name: "Thomas Brown",
      role: "Mental Health Counselor, UK",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Talking openly about mental health saves lives. I've seen it happen over and over BIG THANK YOU CBNF.",
      program: "Mental Health Support",
      location: "Burnaby,British Columbia, Canada"
    },
    {
      name: "Camille Moreau",
      role: "Women's Rights Advocate, France",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Watching women build their dreams from scratch is pure joy. We lift each other up just as the CBNF has done.",
      program: "Women's Empowerment",
      location: "Paris, France"
    },
    {
      name: "Jessica Davis",
      role: "Food Security Coordinator, Australia",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Growing food together brought our neighborhood back to life. It's about more than vegetables This is real definition of hoping together.",
      program: "Food Security",
      location: "Brisbane, Australia"
    },
    {
      name: "Christopher White",
      role: "Senior Program Manager, Canada",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Real change happens when we work together. Thanks to the delivery team and Peter for the special delivery organised at the least expected time we are forever grateful never thought it would happen still this year.",
      program: "Special Delivery",
      location: "Toronto, Ontario, Canada"
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
      quote: "Our neighborhood went from forgotten to thriving. People have hope again CBNF D GREAT!.",
      program: "Urban Development",
      location: "Marseille, France"
    },
    {
      name: "Rachel Green",
      role: "Senior Care Specialist, Australia",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Thanks to CBNF and all other affiliated bodies for their support. We’ve been living the dream since receiving our funds, and it has truly been worth it.",
      program: "Elder Care",
      location: "Perth, Australia"
    },
    {
      name: "Kevin Anderson",
      role: "Addiction Recovery Counselor, USA",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Recovery is possible, and it's beautiful. These families are  heroes.",
      program: "Addiction Recovery",
      location: "Seattle, Washington, USA"
    },
    {
      name: "Helen Smith",
      role: "Domestic Violence Advocate, UK",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Seeing survivors reclaim their power never gets old. They're the bravest people I know thanks to cbnf for saying NO to domestic violence.",
      program: "Domestic Violence Support",
      location: "Glasgow, Scotland, UK"
    },
    {
      name: "Antoine Dubois",
      role: "Climate Action Coordinator, Canada",
      image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Fighting climate change starts at home. Together, we're making a real difference.",
      program: "Climate Action",
      location: "Regina, Saskatchewan, Canada"
    }
  ];

  const [displayedTestimonials, setDisplayedTestimonials] = useState<typeof allTestimonials>([]);

  useEffect(() => {
    const getRandomTestimonials = () => {
      const shuffled = [...allTestimonials].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 6);
    };

    setDisplayedTestimonials(getRandomTestimonials());

    const interval = setInterval(() => {
      setDisplayedTestimonials(getRandomTestimonials());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white shadow-lg rounded-full text-sm font-bold mb-6 border border-purple-100" data-testid="badge-real-stories">
            <Quote className="mr-2 h-5 w-5 text-purple-600" />
            <span className="gradient-text">Real Stories, Real Impact</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 section-divider pb-6" data-testid="heading-stories">
            <span className="gradient-text">Stories of Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="text-stories-description">
            Hear from communities and individuals whose lives have been transformed through our programs and the volunteers who make it all possible.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {displayedTestimonials.map((testimonial, index) => (
            <Card 
              key={`${testimonial.name}-${index}`} 
              className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-testimonial-${index}`}
            >
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                  <Quote className="h-10 w-10 text-white/40 absolute top-4 right-4" />
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} portrait`}
                        className="w-16 h-16 rounded-2xl object-cover border-4 border-white/30 shadow-lg"
                        data-testid={`img-testimonial-${index}`}
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg" data-testid={`text-name-${index}`}>{testimonial.name}</h4>
                      <p className="text-white/90 text-sm" data-testid={`text-role-${index}`}>{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-700 italic mb-6 text-lg leading-relaxed" data-testid={`text-quote-${index}`}>
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold gradient-text" data-testid={`text-program-${index}`}>{testimonial.program}</div>
                      <div className="text-xs text-gray-500" data-testid={`text-location-${index}`}>{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center border border-purple-100" data-testid="stat-satisfaction">
              <div className="text-5xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
              <div className="flex justify-center mt-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center border border-purple-100" data-testid="stat-success-stories">
              <div className="text-5xl font-bold gradient-text-warm mb-2">5,000+</div>
              <div className="text-gray-600 font-medium">Success Stories</div>
              <div className="text-purple-600 text-sm mt-2">And growing every day</div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center border border-purple-100" data-testid="stat-completion">
              <div className="text-5xl font-bold gradient-text mb-2">95%</div>
              <div className="text-gray-600 font-medium">Program Completion</div>
              <div className="text-purple-600 text-sm mt-2">Committed to success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
