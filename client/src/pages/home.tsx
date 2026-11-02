
import HeroSection from "@/components/hero-section";
import ServicesBento from "@/components/services-bento";
import StoryVideoSection from "@/components/story-video-section";
import Reveal from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Heart, Briefcase, HandHeart, DollarSign, MessageCircle } from "lucide-react";
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
      <ServicesBento />
      <StoryVideoSection />
      
      {/* Explore Our Work + CTA — combined, compact */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96" style={{background: 'radial-gradient(circle, hsl(var(--navy-light) / 0.08), transparent)'}}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80" style={{background: 'radial-gradient(circle, hsl(var(--teal-light) / 0.08), transparent)'}}></div>

        <div className="page-shell relative z-10">
          <Reveal className="max-w-3xl mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-ngo-neutral-dark mb-4">
              Explore Our Work
            </h2>
            <p className="text-lg text-ngo-neutral leading-relaxed">
              Learn more about our programs, get involved, or apply for support
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickLinks.map((item, index) => (
              <Link key={index} href={item.link}>
                <Card className="bg-white shadow-lg overflow-hidden border-0 rounded-2xl group hover:shadow-2xl transition-all duration-500 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-ngo-neutral-dark mb-2 group-hover:text-ngo-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ngo-neutral mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="inline-flex items-center text-sm text-ngo-primary font-semibold group-hover:text-ngo-primary-dark">
                      Learn More
                      <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <Reveal className="mt-10 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6 py-8 sm:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Ready to Make a Difference?
              </h3>
              <p className="text-white/90 mt-2 max-w-2xl leading-relaxed">
                Whether you want to volunteer, apply for support, check if you're part of the randomly selected, or learn more about our work, we're here to help.
              </p>
            </div>
            <Link href="/apply">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 rounded-2xl text-base font-bold h-auto shadow-xl whitespace-nowrap">
                Apply for Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
