import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  GraduationCap, Heart, Briefcase, HandHeart, ArrowRight, Users, TrendingUp, Award,
  BookOpen, Laptop, School, Lightbulb, Sprout,
  Truck, HeartPulse, Baby, Droplets, ShieldCheck,
  Coins, Wrench, Rocket, LineChart, UserCheck, Store,
  Zap, Package, Home, Stethoscope, ShieldAlert, RefreshCw, HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FocusArea = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ProgramDetail = {
  intro: string[];
  focusIntro: string;
  focusAreas: FocusArea[];
  closing: string[];
};

const programDetails: Record<string, ProgramDetail> = {
  "Education Access": {
    intro: [
      "Education is a powerful pathway to opportunity, empowerment, and long-term community development. Through our education initiatives, we work to ensure that children, young people, and underserved communities have access to the resources and opportunities they need to learn, grow, and succeed.",
      "Our NGO supports communities by providing access to quality educational resources, school supplies, learning materials, and digital literacy programs. We work with local communities and partners to identify educational needs and develop practical initiatives that help remove barriers to learning."
    ],
    focusIntro: "Our education programs focus on:",
    focusAreas: [
      {
        icon: BookOpen,
        title: "Access to Learning Materials",
        description: "Providing essential school supplies, textbooks, educational resources, and other materials to learners who may not otherwise have access to them."
      },
      {
        icon: Laptop,
        title: "Digital Literacy",
        description: "Helping children and young people develop essential digital skills and become more confident in using technology for education, communication, and future employment opportunities."
      },
      {
        icon: School,
        title: "Support for Underserved Schools",
        description: "Working with schools and communities to strengthen learning environments and provide resources that support teachers and learners."
      },
      {
        icon: Lightbulb,
        title: "Skills Development",
        description: "Creating opportunities for young people to develop practical knowledge, life skills, and competencies that can contribute to their future education and employment."
      },
      {
        icon: Users,
        title: "Community Engagement",
        description: "Working closely with families, educators, community leaders, and local partners to promote the importance of education and encourage greater participation in learning."
      },
      {
        icon: Sprout,
        title: "Creating Sustainable Opportunities",
        description: "Supporting initiatives that can contribute to long-term educational development and help communities build a stronger foundation for future generations."
      }
    ],
    closing: [
      "Through these efforts, our NGO aims to help reduce barriers to education and create an environment where every learner has the opportunity to reach their potential. By investing in education today, we are helping individuals build greater confidence, develop valuable skills, and contribute positively to their families and communities.",
      "Together, we can help make quality education more accessible and create opportunities for brighter futures."
    ]
  },

  "Healthcare Access": {
    intro: [
      "Access to quality healthcare is essential for healthy and resilient communities. Yet many people in underserved and remote areas face significant barriers to essential medical services, including distance, limited resources, and a lack of health information.",
      "Through our healthcare initiatives, our NGO works to bring essential health services closer to the communities that need them most. By partnering with healthcare professionals, community organizations, and local stakeholders, we support programs that promote prevention, early intervention, health awareness, and improved access to basic healthcare."
    ],
    focusIntro: "Our healthcare initiatives focus on:",
    focusAreas: [
      {
        icon: Truck,
        title: "Mobile Healthcare Services",
        description: "Supporting mobile clinics and outreach programs that bring basic healthcare services closer to people living in remote and underserved communities."
      },
      {
        icon: HeartPulse,
        title: "Preventive Care",
        description: "Promoting regular health screenings, early detection, prevention, and healthy lifestyle practices to help communities take proactive steps toward better health."
      },
      {
        icon: BookOpen,
        title: "Health Education",
        description: "Providing accessible information and educational programs that help individuals and families understand important health issues and make informed decisions about their wellbeing."
      },
      {
        icon: HeartHandshake,
        title: "Community Health Outreach",
        description: "Working directly with local communities to identify healthcare needs and connect individuals with appropriate services and resources."
      },
      {
        icon: Baby,
        title: "Maternal and Family Health",
        description: "Supporting health education and community initiatives that promote the wellbeing of mothers, children, and families."
      },
      {
        icon: Droplets,
        title: "Hygiene and Disease Prevention",
        description: "Raising awareness about hygiene, sanitation, disease prevention, and other practical measures that can contribute to healthier communities."
      },
      {
        icon: ShieldCheck,
        title: "Building Sustainable Health Awareness",
        description: "Equipping individuals and communities with knowledge and resources that can support healthier lifestyles and long-term wellbeing."
      }
    ],
    closing: [
      "Through these efforts, our NGO helps bring healthcare information, services, and support to communities that may otherwise experience limited access. We believe that improving health outcomes begins with making essential services more accessible and empowering people with the knowledge they need to protect their wellbeing.",
      "By working together with communities, healthcare professionals, and partners, we are helping create healthier, more informed, and more resilient communities — one initiative at a time.",
      "Together, we can help make quality healthcare more accessible and contribute to healthier futures for individuals, families, and communities."
    ]
  },

  "Economic Empowerment": {
    intro: [
      "Economic opportunity plays an important role in helping individuals and communities achieve greater stability and independence. However, limited access to financial resources, employment opportunities, skills development, and business support can make it difficult for people in underserved communities to build sustainable livelihoods.",
      "Through our economic empowerment initiatives, our NGO works to create opportunities that enable individuals and families to strengthen their financial resilience, develop valuable skills, and pursue sustainable sources of income. By working alongside communities, local partners, entrepreneurs, and other stakeholders, we support practical programs designed to encourage self-reliance and long-term economic participation."
    ],
    focusIntro: "Our economic empowerment initiatives focus on:",
    focusAreas: [
      {
        icon: Coins,
        title: "Microfinance and Financial Support",
        description: "Supporting access to small-scale financial resources that can help individuals and aspiring entrepreneurs start or expand income-generating activities."
      },
      {
        icon: Wrench,
        title: "Skills Development",
        description: "Providing vocational, technical, and practical skills training that can improve employment opportunities and help individuals develop sustainable sources of income."
      },
      {
        icon: Rocket,
        title: "Entrepreneurship Development",
        description: "Supporting aspiring entrepreneurs with knowledge, training, mentorship, and resources to develop and strengthen small businesses."
      },
      {
        icon: LineChart,
        title: "Business Training and Mentorship",
        description: "Helping individuals understand essential areas such as financial management, business planning, marketing, budgeting, and responsible business growth."
      },
      {
        icon: UserCheck,
        title: "Youth Economic Opportunities",
        description: "Creating pathways for young people to develop practical skills, explore entrepreneurship, and prepare for future employment opportunities."
      },
      {
        icon: Award,
        title: "Women’s Economic Empowerment",
        description: "Supporting initiatives that help women gain skills, access economic opportunities, and participate more actively in income-generating activities."
      },
      {
        icon: Sprout,
        title: "Sustainable Livelihoods",
        description: "Promoting initiatives that can provide reliable and sustainable income while contributing to the broader economic development of local communities."
      },
      {
        icon: Store,
        title: "Community-Based Enterprise",
        description: "Encouraging locally driven businesses and initiatives that create opportunities, strengthen local economies, and address community needs."
      }
    ],
    closing: [
      "Through these programs, our NGO seeks to move beyond short-term assistance by helping individuals develop the skills, knowledge, and resources needed to build sustainable livelihoods. We believe that economic empowerment can strengthen families, increase financial independence, and create opportunities that benefit entire communities.",
      "By investing in people and supporting their ambitions, we help create an environment where individuals can turn their skills and ideas into meaningful economic opportunities.",
      "Together, we can create pathways to opportunity, strengthen livelihoods, and build more economically resilient communities."
    ]
  },

  "Emergency Relief": {
    intro: [
      "When communities are affected by natural disasters, conflict, displacement, or other humanitarian emergencies, immediate assistance can make a critical difference. Families may suddenly lose access to food, clean water, shelter, healthcare, and other essential resources.",
      "Through our emergency relief initiatives, our NGO works to provide timely support to individuals and communities affected by crises. In collaboration with local organizations, volunteers, humanitarian partners, and community leaders, we help coordinate resources and deliver essential assistance where it is needed most."
    ],
    focusIntro: "Our emergency relief initiatives focus on:",
    focusAreas: [
      {
        icon: Zap,
        title: "Rapid Emergency Response",
        description: "Mobilizing support and resources as quickly as possible following natural disasters, humanitarian emergencies, and other crises."
      },
      {
        icon: Package,
        title: "Essential Supplies",
        description: "Providing basic necessities such as food, clean water, hygiene products, clothing, blankets, and other essential items to affected families and individuals."
      },
      {
        icon: Home,
        title: "Shelter and Basic Needs",
        description: "Supporting communities with emergency shelter solutions and essential household supplies when homes or living conditions have been disrupted."
      },
      {
        icon: Stethoscope,
        title: "Healthcare Support",
        description: "Helping connect affected communities with essential healthcare services, medical assistance, and health information during emergencies."
      },
      {
        icon: ShieldAlert,
        title: "Support for Vulnerable Communities",
        description: "Prioritizing assistance for children, older people, people with disabilities, displaced families, and others who may face increased challenges during a crisis."
      },
      {
        icon: Users,
        title: "Community-Based Response",
        description: "Working closely with local communities to understand immediate needs and ensure that relief efforts are relevant, coordinated, and responsive."
      },
      {
        icon: RefreshCw,
        title: "Recovery and Resilience",
        description: "Supporting communities beyond the immediate emergency by contributing to recovery efforts and initiatives that can help people rebuild their lives and become more prepared for future challenges."
      },
      {
        icon: HeartHandshake,
        title: "Partnership and Coordination",
        description: "Collaborating with local organizations, volunteers, donors, and humanitarian partners to strengthen the reach and effectiveness of emergency response efforts."
      }
    ],
    closing: [
      "Our approach to emergency relief is centered on dignity, compassion, and practical support. We recognize that every crisis is different, which is why we work with communities and local partners to understand their circumstances and respond to their most urgent needs.",
      "While immediate relief provides essential support during times of crisis, our commitment extends beyond the emergency itself. We aim to help affected individuals and communities begin the journey toward recovery, stability, and greater resilience.",
      "Together, we can respond when communities need help most, provide essential support in times of crisis, and help create a pathway toward recovery and hope."
    ]
  }
};

export default function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState<string | null>(null);

  const programs = [
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "Providing quality education, school supplies, and digital literacy programs to underserved communities.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Children learning in classroom",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      stats: "15K+ Students",
      impact: "Building futures through education",
      color: "indigo"
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Mobile clinics, preventive care, and health education programs reaching remote communities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Healthcare workers in community clinic",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      stats: "50K+ Treated",
      impact: "Saving lives through healthcare",
      color: "emerald"
    },
    {
      icon: Briefcase,
      title: "Economic Empowerment",
      description: "Microfinance, skills training, and entrepreneurship programs to create sustainable livelihoods.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Small business entrepreneurs working",
      gradient: "from-orange-500 via-rose-500 to-pink-500",
      stats: "8K+ Businesses",
      impact: "Creating economic opportunities",
      color: "orange"
    },
    {
      icon: HandHeart,
      title: "Emergency Relief",
      description: "Rapid response to natural disasters and humanitarian crises with essential supplies and support.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Emergency relief aid distribution",
      gradient: "from-red-500 via-pink-500 to-purple-500",
      stats: "25+ Disasters",
      impact: "Emergency response when needed",
      color: "red"
    },
  ];

  const activeDetail = activeProgram ? programDetails[activeProgram] : null;
  const activeCard = programs.find((program) => program.title === activeProgram);

  return (
    <section id="programs" className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-white shadow-lg rounded-full text-sm font-bold mb-6 border border-purple-100" data-testid="badge-mission-areas">
            <HandHeart className="mr-2 h-5 w-5 text-purple-600" />
            <span className="gradient-text">Our Mission Areas</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 section-divider pb-6" data-testid="heading-core-programs">
            <span className="gradient-text">Core Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed" data-testid="text-programs-description">
            We focus on four key areas that create the foundation for thriving communities: education, healthcare, economic empowerment, and emergency relief.
          </p>
        </div>
        
        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-xl overflow-hidden border-0 rounded-3xl group hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-program-${index}`}
            >
              {/* Program Image with Gradient Overlay */}
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.alt}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  data-testid={`img-program-${index}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-70 group-hover:opacity-60 transition-opacity duration-300`}></div>
                
                {/* Icon Badge */}
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <program.icon className="text-white h-8 w-8" />
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-effect rounded-2xl p-4 transform group-hover:scale-105 transition-all duration-300">
                    <div className="text-white font-bold text-lg mb-1" data-testid={`text-stat-${index}`}>{program.stats}</div>
                    <div className="text-white/95 text-sm" data-testid={`text-impact-${index}`}>{program.impact}</div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 gradient-text group-hover:scale-105 inline-block transition-transform duration-300" data-testid={`heading-program-${index}`}>
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg" data-testid={`text-description-${index}`}>
                  {program.description}
                </p>
                <div className="flex items-center justify-between">
                  <button 
                    className="inline-flex items-center font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all group/btn"
                    data-testid={`button-learn-more-${index}`}
                    onClick={() => setActiveProgram(program.title)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 text-purple-600 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                  <div className={`w-12 h-12 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <program.icon className="text-white h-6 w-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Bottom Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100" data-testid="feature-integrated">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold gradient-text mb-3">Integrated Approach</h4>
              <p className="text-gray-600 leading-relaxed">All programs work together for comprehensive community development and sustainable impact.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100" data-testid="feature-community">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold gradient-text-warm mb-3">Community-Driven</h4>
              <p className="text-gray-600 leading-relaxed">Working with local partners to ensure programs meet genuine community needs and priorities.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100" data-testid="feature-sustainable">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold gradient-text mb-3">Long-Term Impact</h4>
              <p className="text-gray-600 leading-relaxed">Building sustainable solutions that create lasting positive change for generations to come.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Program Detail Dialog */}
      <Dialog open={activeDetail !== null} onOpenChange={(open) => { if (!open) setActiveProgram(null); }}>
        <DialogContent
          className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 border-0 rounded-3xl [&>button]:text-white [&>button]:bg-black/30 [&>button]:rounded-full [&>button]:p-1.5 [&>button]:opacity-90"
          data-testid="dialog-program-detail"
        >
          {activeDetail && activeCard && (
            <>
              <DialogHeader className="relative h-44 overflow-hidden rounded-t-3xl">
                <img
                  src={activeCard.image}
                  alt={activeCard.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${activeCard.gradient} opacity-70`}></div>
                <div className="absolute bottom-6 left-6 right-14 flex items-center z-10">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mr-4">
                    <activeCard.icon className="text-white h-7 w-7" />
                  </div>
                  <DialogTitle className="text-3xl font-bold text-white">{activeProgram}</DialogTitle>
                </div>
                <DialogDescription className="sr-only">
                  Focus areas of the {activeProgram} program.
                </DialogDescription>
              </DialogHeader>

              <div className="p-8 space-y-6">
                {activeDetail.intro.map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-600 leading-relaxed">{paragraph}</p>
                ))}

                <h3 className="text-2xl font-bold gradient-text pt-2">{activeDetail.focusIntro}</h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  {activeDetail.focusAreas.map((area, index) => (
                    <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100" data-testid={`focus-area-${index}`}>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                          <area.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">{area.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{area.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {activeDetail.closing.slice(0, -1).map((paragraph, index) => (
                  <p key={index} className="text-lg text-gray-600 leading-relaxed">{paragraph}</p>
                ))}

                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-center">
                  <p className="text-lg md:text-xl font-semibold text-white leading-relaxed">
                    {activeDetail.closing[activeDetail.closing.length - 1]}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
