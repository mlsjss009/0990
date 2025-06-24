
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const allTestimonials = [
    {
      name: "Maria Santos",
      role: "Community Leader, Guatemala",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The microfinance program gave me the opportunity to start my own bakery. Now I employ five women from my community and we're all supporting our families with dignity.",
      program: "Economic Empowerment",
      location: "Guatemala City"
    },
    {
      name: "Ahmed Hassan",
      role: "Program Beneficiary, Kenya",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The education program helped me get my high school diploma at 28. Now I'm studying to become a teacher so I can give back to my community the way Hope Together gave to me.",
      program: "Education Access",
      location: "Nairobi, Kenya"
    },
    {
      name: "Priya Sharma",
      role: "Women's Rights Advocate, India",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Through the women's empowerment program, I learned to read and write. Now I run a small textile business and teach other women in my village basic literacy skills.",
      program: "Women's Empowerment",
      location: "Mumbai, India"
    },
    {
      name: "Carlos Rodriguez",
      role: "Farmer, Peru",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The sustainable farming techniques I learned tripled my crop yield. My family now has enough food and income to send all three of my children to school.",
      program: "Agricultural Development",
      location: "Cusco, Peru"
    },
    {
      name: "Fatima Al-Zahra",
      role: "Healthcare Worker, Jordan",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Working with refugee families has shown me the incredible resilience of the human spirit. Every family we help rebuild their lives fills my heart with hope.",
      program: "Refugee Support",
      location: "Amman, Jordan"
    },
    {
      name: "Jean-Baptiste Mbeki",
      role: "Youth Leader, Democratic Republic of Congo",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The youth leadership program gave me confidence and skills to organize peace-building activities in my community. We've mediated conflicts and created job opportunities for young people.",
      program: "Youth Development",
      location: "Kinshasa, DRC"
    },
    {
      name: "Elena Popovic",
      role: "Social Worker, Serbia",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Volunteering with Hope Together opened my eyes to how small actions can create big changes. The children we work with inspire me every day with their determination to learn.",
      program: "Volunteer Program",
      location: "Belgrade, Serbia"
    },
    {
      name: "Nguyen Thi Lan",
      role: "Seamstress, Vietnam",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The vocational training program taught me professional sewing skills. I now work at a fair-trade cooperative and my family has moved out of poverty.",
      program: "Vocational Training",
      location: "Ho Chi Minh City, Vietnam"
    },
    {
      name: "Kofi Asante",
      role: "Clean Water Coordinator, Ghana",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Installing clean water systems in rural villages has dramatically reduced waterborne diseases in our region. Children can now attend school instead of walking hours for water.",
      program: "Clean Water Initiative",
      location: "Kumasi, Ghana"
    },
    {
      name: "Isabella Silva",
      role: "Environmental Activist, Brazil",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The environmental conservation program helped our community protect 500 hectares of rainforest while creating sustainable tourism jobs for local families.",
      program: "Environmental Protection",
      location: "Manaus, Brazil"
    },
    {
      name: "Rashid Khan",
      role: "Small Business Owner, Pakistan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The microfinance loan allowed me to expand my carpet weaving business. I now employ 12 people and export to international markets.",
      program: "Economic Empowerment",
      location: "Lahore, Pakistan"
    },
    {
      name: "Sophie Laurent",
      role: "Volunteer Coordinator, France",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Coordinating volunteers across Europe has shown me how powerful collective action can be. Together, we've built schools, hospitals, and hope in communities worldwide.",
      program: "Volunteer Program",
      location: "Lyon, France"
    },
    {
      name: "Moses Mwangi",
      role: "Teacher, Kenya",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The teacher training program equipped me with modern teaching methods. My students' test scores have improved by 40% and more girls are staying in school.",
      program: "Education Access",
      location: "Mombasa, Kenya"
    },
    {
      name: "Ana Petrova",
      role: "Healthcare Coordinator, Bulgaria",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our mobile healthcare units have brought medical care to remote mountain villages for the first time. We've vaccinated over 2,000 children and treated countless families.",
      program: "Healthcare Access",
      location: "Sofia, Bulgaria"
    },
    {
      name: "Liu Wei",
      role: "Community Organizer, China",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The disaster preparedness training saved lives when floods hit our province. Our community was organized and ready, and we helped evacuate neighboring villages safely.",
      program: "Emergency Relief",
      location: "Guangzhou, China"
    },
    {
      name: "Amara Diallo",
      role: "Midwife, Senegal",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "The maternal health program trained me to safely deliver babies and care for new mothers. We've reduced infant mortality in our region by 60%.",
      program: "Healthcare Access",
      location: "Dakar, Senegal"
    },
    {
      name: "Ricardo Gutierrez",
      role: "Agricultural Engineer, Mexico",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Implementing drought-resistant farming techniques has helped farmers in our region adapt to climate change. Crop yields have increased despite irregular rainfall.",
      program: "Agricultural Development",
      location: "Oaxaca, Mexico"
    },
    {
      name: "Aisha Mohamed",
      role: "Women's Cooperative Leader, Somalia",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Our women's cooperative now produces and sells traditional crafts internationally. 80 women have steady income and their children attend school regularly.",
      program: "Women's Empowerment",
      location: "Mogadishu, Somalia"
    },
    {
      name: "Dimitri Volkov",
      role: "Youth Counselor, Ukraine",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Working with displaced youth has taught me about resilience and hope. Despite everything they've been through, these young people dream of rebuilding their communities.",
      program: "Emergency Relief",
      location: "Lviv, Ukraine"
    },
    {
      name: "Sarah Johnson",
      role: "Volunteer Coordinator, Canada",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      quote: "Leading volunteer missions to remote communities has been life-changing. Every school we build, every well we dig, creates ripple effects of positive change that last generations.",
      program: "Volunteer Program",
      location: "Vancouver, Canada"
    }
  ];

  const [displayedTestimonials, setDisplayedTestimonials] = useState<typeof allTestimonials>([]);

  useEffect(() => {
    // Function to get 6 random testimonials
    const getRandomTestimonials = () => {
      const shuffled = [...allTestimonials].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 6);
    };

    setDisplayedTestimonials(getRandomTestimonials());
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
            Hear from communities and individuals worldwide whose lives have been transformed through our programs and the volunteers who make it all possible.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial, index) => (
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
