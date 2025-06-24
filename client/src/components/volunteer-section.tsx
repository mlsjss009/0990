import { Button } from "@/components/ui/button";
import { Check, UserPlus } from "lucide-react";

export default function VolunteerSection() {
  const opportunities = [
    {
      title: "Skills-Based Volunteering",
      description: "Use your professional skills in marketing, IT, finance, or other areas to support our mission."
    },
    {
      title: "Community Outreach",
      description: "Help with local events, fundraising activities, and community engagement programs."
    },
    {
      title: "International Opportunities",
      description: "Join our field teams for hands-on work in communities around the world."
    },
  ];

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-ngo-neutral-dark mb-6">
              Join Our Volunteer Community
            </h2>
            <p className="text-lg text-ngo-neutral mb-8 leading-relaxed">
              Whether you have an hour a week or can commit to a longer-term project, there's a volunteer opportunity that matches your skills, interests, and availability.
            </p>
            <div className="space-y-4 mb-8">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="text-ngo-primary h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ngo-neutral-dark mb-1">{opportunity.title}</h3>
                    <p className="text-ngo-neutral">{opportunity.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="bg-ngo-primary hover:bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold h-auto">
              <UserPlus className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Diverse volunteers working at community event"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
