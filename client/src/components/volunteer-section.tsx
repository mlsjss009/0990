import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, UserPlus, Clock, MapPin, Users } from "lucide-react";
import { executeAction } from "@/lib/actions";

export default function VolunteerSection() {
  const opportunities = [
    {
      title: "Skills-Based Volunteering",
      description: "Use your professional skills in marketing, IT, finance, or other areas to support our mission.",
      icon: Users,
      commitment: "Flexible",
      location: "Remote/Local"
    },
    {
      title: "Community Outreach",
      description: "Help with local events, fundraising activities, and community engagement programs.",
      icon: MapPin,
      commitment: "Weekends",
      location: "Local"
    },
    {
      title: "International Opportunities",
      description: "Join our field teams for hands-on work in communities around the world.",
      icon: Clock,
      commitment: "1-6 months",
      location: "International"
    },
  ];

  const benefits = [
    "Professional development opportunities",
    "Training and certification programs",
    "Networking with like-minded individuals",
    "Travel opportunities for international roles",
    "Make meaningful impact in communities"
  ];

  return (
    <section id="volunteer" className="py-24 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-sm font-semibold text-ngo-accent mb-6">
              <UserPlus className="mr-2 h-4 w-4" />
              Join Our Mission
            </div>
            <h2 className="text-5xl font-bold text-ngo-neutral-dark mb-8 section-divider pb-4">
              Join Our Volunteer Community
            </h2>
            <p className="text-xl text-ngo-neutral mb-10 leading-relaxed">
              Whether you have an hour a week or can commit to a longer-term project, there's a volunteer opportunity that matches your skills, interests, and availability.
            </p>
            
            <div className="space-y-6 mb-10">
              {opportunities.map((opportunity, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-white/80 backdrop-blur-sm shadow-lg border-0 rounded-2xl card-hover group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <opportunity.icon className="text-ngo-accent h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-ngo-neutral-dark mb-2 text-lg group-hover:text-ngo-accent transition-colors">
                        {opportunity.title}
                      </h3>
                      <p className="text-ngo-neutral mb-3 leading-relaxed">{opportunity.description}</p>
                      <div className="flex space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-ngo-accent" />
                          <span className="text-ngo-neutral">{opportunity.commitment}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4 text-ngo-accent" />
                          <span className="text-ngo-neutral">{opportunity.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button 
              onClick={() => executeAction('volunteer_register')}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full text-lg font-bold h-auto"
            >
              <UserPlus className="mr-3 h-6 w-6" />
              Become a Volunteer
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Diverse volunteers working at community event"
                className="rounded-3xl shadow-2xl w-full h-auto card-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg floating-animation">
              <UserPlus className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-blue-400 to-green-500 rounded-full flex items-center justify-center shadow-lg floating-animation" style={{ animationDelay: "1s" }}>
              <Users className="h-7 w-7 text-white" />
            </div>
            
            {/* Benefits overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <Card className="glass-effect p-6 border-0 text-white">
                <h4 className="font-bold mb-3">Volunteer Benefits</h4>
                <div className="space-y-2">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <Check className="h-4 w-4 text-green-300 flex-shrink-0" />
                      <span className="text-white">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-primary">12K+</div>
              <div className="text-sm text-ngo-neutral">Active Volunteers</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-accent">85%</div>
              <div className="text-sm text-ngo-neutral">Return Rate</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-secondary">50+</div>
              <div className="text-sm text-ngo-neutral">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}