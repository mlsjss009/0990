import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Globe } from "lucide-react";

export default function ImpactMetrics() {
  const metrics = [
    { 
      value: "150K+", 
      label: "Lives Impacted", 
      color: "text-ngo-primary",
      bgColor: "bg-blue-50",
      icon: Users,
      description: "People directly helped through our programs"
    },
    { 
      value: "$2.8M", 
      label: "Funds Raised", 
      color: "text-ngo-secondary",
      bgColor: "bg-orange-50",
      icon: DollarSign,
      description: "Total funding secured for community projects"
    },
    { 
      value: "45", 
      label: "Active Programs", 
      color: "text-ngo-accent",
      bgColor: "bg-green-50",
      icon: TrendingUp,
      description: "Ongoing initiatives across multiple sectors"
    },
    { 
      value: "25", 
      label: "Countries", 
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      icon: Globe,
      description: "Nations where we have active operations"
    },
  ];

  return (
    <section id="impact" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-orange-100/50 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-ngo-primary mb-6">
            <TrendingUp className="mr-2 h-4 w-4" />
            Measurable Impact
          </div>
          <h2 className="text-5xl font-bold text-ngo-neutral-dark mb-6 section-divider pb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-ngo-neutral max-w-3xl mx-auto leading-relaxed">
            Every donation and volunteer hour creates real, measurable change in communities around the world. See the difference we're making together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card 
              key={index} 
              className="text-center bg-white/80 backdrop-blur-sm p-8 shadow-xl hover:shadow-2xl transition-all duration-500 card-hover border-0 rounded-3xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${metric.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className={`${metric.color} h-8 w-8`} />
              </div>
              <div className={`text-5xl font-bold ${metric.color} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                {metric.value}
              </div>
              <div className="text-lg font-semibold text-ngo-neutral-dark mb-2">{metric.label}</div>
              <div className="text-sm text-ngo-neutral leading-relaxed">{metric.description}</div>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-primary">2010</div>
              <div className="text-sm text-ngo-neutral">Founded</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-accent">98%</div>
              <div className="text-sm text-ngo-neutral">Efficiency Rate</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-secondary">12K+</div>
              <div className="text-sm text-ngo-neutral">Volunteers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}