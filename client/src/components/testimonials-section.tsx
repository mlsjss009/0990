
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const allTestimonials = [
    {
      name: "Jennifer Martinez",
      role: "Single Mother & Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The CBNF grant changed my life. As a single mom going back to school, I was struggling to pay for childcare and tuition. This support allowed me to finish my degree and now I have a career in nursing.",
      program: "Education Assistance Grant",
      location: "Portland, Oregon, USA"
    },
    {
      name: "Michael Thompson",
      role: "Former Homeless Veteran",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "After serving my country, I found myself on the streets with nowhere to turn. CBNF gave me housing assistance and helped me get back on my feet. Today, I have my own apartment and a stable job.",
      program: "Housing Support Grant",
      location: "Chicago, Illinois, USA"
    },
    {
      name: "Sarah Williams",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "I had a dream to start my own bakery but no capital. CBNF's small business grant gave me the startup funds I needed. Two years later, my bakery is thriving and I've hired three employees.",
      program: "Small Business Development Grant",
      location: "San Francisco, California, USA"
    },
    {
      name: "David Johnson",
      role: "Cancer Survivor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "When I was diagnosed with cancer, the medical bills piled up fast. CBNF's healthcare assistance grant covered my treatment costs and allowed me to focus on beating cancer instead of worrying about bankruptcy.",
      program: "Medical Assistance Grant",
      location: "Rural Montana, USA"
    },
    {
      name: "Patricia Anderson",
      role: "Career Transition Professional",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "At 45, I lost my job and felt too old to start over. CBNF's job training grant helped me learn coding skills. Now I work as a web developer earning more than ever before.",
      program: "Workforce Retraining Grant",
      location: "Detroit, Michigan, USA"
    },
    {
      name: "Robert Davis",
      role: "College Graduate",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Growing up in poverty, college seemed impossible. CBNF's scholarship grant paid for my tuition and books. I just graduated with honors and have a job offer as an engineer.",
      program: "Higher Education Grant",
      location: "Houston, Texas, USA"
    },
    {
      name: "Linda Wilson",
      role: "Disability Rights Advocate",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Living with a disability, I faced constant barriers to employment. CBNF funded adaptive equipment for my home office. Now I run a successful consulting business from home.",
      program: "Disability Support Grant",
      location: "Seattle, Washington, USA"
    },
    {
      name: "James Miller",
      role: "Flood Survivor",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "I lost everything in the floods - my home, my belongings, my savings. CBNF's emergency relief grant provided immediate shelter and helped me rebuild. Their fast response saved my life.",
      program: "Emergency Relief Grant",
      location: "New Orleans, Louisiana, USA"
    },
    {
      name: "Mary Garcia",
      role: "Elderly Care Recipient",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "At 78, I wanted to stay in my own home but needed help with daily tasks. CBNF's senior care grant pays for a caregiver who visits me daily. I'm aging with dignity and independence.",
      program: "Elder Care Grant",
      location: "Miami, Florida, USA"
    },
    {
      name: "Christopher Brown",
      role: "First-Time Homeowner",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "I was paying outrageous rent with nothing to show for it. CBNF's down payment assistance grant helped me buy my first home. It's incredible to finally have something that's mine.",
      program: "Homeownership Grant",
      location: "Boston, Massachusetts, USA"
    },
    {
      name: "Thomas Brown",
      role: "Mental Health Recovery",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "I struggled with depression for years but couldn't afford therapy. CBNF's mental health grant covered my counseling sessions. I'm finally getting the help I need and my life has turned around.",
      program: "Mental Health Support Grant",
      location: "Edinburgh, Scotland, UK"
    },
    {
      name: "Camille Moreau",
      role: "Domestic Violence Survivor",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Escaping an abusive relationship left me with nothing. CBNF's survivor support grant gave me a fresh start with temporary housing and job training. I'm now independent and thriving.",
      program: "Survivor Support Grant",
      location: "Paris, France"
    },
    {
      name: "Jessica Davis",
      role: "Organic Farmer",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "I wanted to start an urban farm but lacked the resources. CBNF's agricultural grant provided seeds, tools, and training. Now I grow fresh produce that I sell at local markets and it's my full-time income.",
      program: "Agricultural Development Grant",
      location: "Brisbane, Australia"
    },
    {
      name: "Christopher White",
      role: "Green Energy Technician",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "I was unemployed for 18 months before CBNF's job training grant taught me solar panel installation. Within weeks of completing the program, I had a well-paying job in renewable energy.",
      program: "Green Jobs Training Grant",
      location: "Portland, Oregon, USA"
    },
    {
      name: "Grace Williams",
      role: "Parent of Child with Autism",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "My son needed specialized therapy that insurance wouldn't cover. CBNF's special needs grant made it possible. He's making incredible progress and I finally have hope for his future.",
      program: "Special Needs Support Grant",
      location: "London, UK"
    },
    {
      name: "Pierre Martin",
      role: "Youth Sports Coach",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "I grew up in a rough neighborhood and sports saved my life. CBNF's youth program grant let me start a free basketball program for at-risk teens. I'm giving back what was given to me.",
      program: "Youth Development Grant",
      location: "Marseille, France"
    },
    {
      name: "Rachel Green",
      role: "Retirement on Fixed Income",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "My pension barely covers rent, let alone food and medicine. CBNF's senior assistance grant helps with my medications and groceries. I don't have to choose between pills and meals anymore.",
      program: "Senior Financial Assistance Grant",
      location: "Perth, Australia"
    },
    {
      name: "Kevin Anderson",
      role: "Recovering Addict",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Addiction destroyed my life and I had nowhere to turn. CBNF's recovery grant paid for my rehab program. I've been sober for 2 years now and have rebuilt my relationship with my kids.",
      program: "Addiction Recovery Grant",
      location: "Seattle, Washington, USA"
    },
    {
      name: "Helen Smith",
      role: "Single Parent",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Working two jobs to support my three kids meant I never saw them. CBNF's childcare grant pays for after-school care so I can work one good job and actually be present as a parent.",
      program: "Childcare Assistance Grant",
      location: "Glasgow, Scotland, UK"
    },
    {
      name: "Antoine Dubois",
      role: "Environmental Activist",
      image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "I wanted to make a difference but couldn't afford to volunteer. CBNF's activist stipend grant lets me work full-time on climate initiatives. I'm finally doing work that matters.",
      program: "Environmental Activism Grant",
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
