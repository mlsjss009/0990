
import HeroSection from "@/components/hero-section";
import ImpactMetrics from "@/components/impact-metrics";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Heart, Briefcase, HandHeart, Users, DollarSign, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const quickLinks = [
    {
      title: "Our Programs",
      description: "Discover our education, healthcare, economic empowerment, and emergency relief programs.",
      icon: GraduationCap,
      link: "/programs",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "About Us",
      description: "Learn about our mission, values, and the communities we serve worldwide.",
      icon: Heart,
      link: "/about",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Apply for Support",
      description: "Check your eligibility and apply for our community benefit programs.",
      icon: Briefcase,
      link: "/apply",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Volunteer",
      description: "Join our global community of volunteers making a difference.",
      icon: Users,
      link: "/volunteer",
      color: "from-green-500 to-emerald-500"
    },
     
    {
      title: "Get in Touch",
      description: "Have questions? We'd love to hear from you and explore how we can help.",
      icon: MessageCircle,
      link: "/contact",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-page-slate">
      <HeroSection />
      <ImpactMetrics />
      
      {/* Quick Links Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96" style={{background: 'radial-gradient(circle, hsl(var(--navy-light) / 0.08), transparent)'}}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80" style={{background: 'radial-gradient(circle, hsl(var(--teal-light) / 0.08), transparent)'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-ngo-neutral-dark mb-6">
              Explore Our Work
            </h2>
            <p className="text-xl text-ngo-neutral max-w-3xl mx-auto leading-relaxed">
              Learn more about our programs, get involved, or apply for support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickLinks.map((item, index) => (
              <Link key={index} href={item.link}>
                <Card className="bg-white shadow-xl overflow-hidden border-0 rounded-3xl group hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-ngo-neutral-dark mb-4 group-hover:text-ngo-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-ngo-neutral mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center text-ngo-primary font-semibold group-hover:text-ngo-primary-dark">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-2xl text-white/90 mb-12 leading-relaxed">
            Whether you want to volunteer, apply for support, check if you're part of the randomly selected, or learn more about our work, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/apply">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-7 rounded-2xl text-lg font-bold h-auto shadow-xl">
                Apply for Support
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/volunteer">
              <Button className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-10 py-7 rounded-2xl text-lg font-bold h-auto shadow-xl border-2 border-white/30">
                Become a Volunteer
                <Users className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
