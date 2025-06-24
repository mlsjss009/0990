import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Heart, Briefcase, HandHeart } from "lucide-react";

export default function ProgramsSection() {
  const programs = [
    {
      icon: GraduationCap,
      title: "Education Access",
      description: "Providing quality education, school supplies, and digital literacy programs to underserved communities.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Children learning in classroom",
      iconColor: "text-ngo-primary",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Mobile clinics, preventive care, and health education programs reaching remote communities.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Healthcare workers in community clinic",
      iconColor: "text-ngo-accent",
      bgColor: "bg-green-50"
    },
    {
      icon: Briefcase,
      title: "Economic Empowerment",
      description: "Microfinance, skills training, and entrepreneurship programs to create sustainable livelihoods.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Small business entrepreneurs working",
      iconColor: "text-ngo-secondary",
      bgColor: "bg-orange-50"
    },
    {
      icon: HandHeart,
      title: "Emergency Relief",
      description: "Rapid response to natural disasters and humanitarian crises with essential supplies and support.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Emergency relief aid distribution",
      iconColor: "text-red-600",
      bgColor: "bg-red-50"
    },
  ];

  return (
    <section id="programs" className="py-20 bg-ngo-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ngo-neutral-dark mb-4">Our Core Programs</h2>
          <p className="text-lg text-ngo-neutral max-w-3xl mx-auto">
            We focus on four key areas that create the foundation for thriving communities: education, healthcare, economic empowerment, and emergency relief.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={program.image}
                alt={program.alt}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${program.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <program.icon className={`${program.iconColor} h-6 w-6`} />
                </div>
                <h3 className="text-xl font-semibold text-ngo-neutral-dark mb-3">{program.title}</h3>
                <p className="text-ngo-neutral mb-4">{program.description}</p>
                <button className="text-ngo-primary font-medium hover:text-blue-800 transition-colors">
                  Learn More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
