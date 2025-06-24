import { Card } from "@/components/ui/card";

export default function ImpactMetrics() {
  const metrics = [
    { value: "150K+", label: "Lives Impacted", color: "text-ngo-primary" },
    { value: "$2.8M", label: "Funds Raised", color: "text-ngo-secondary" },
    { value: "45", label: "Active Programs", color: "text-ngo-accent" },
    { value: "12K+", label: "Volunteers", color: "text-ngo-primary" },
  ];

  return (
    <section id="impact" className="bg-ngo-neutral-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ngo-neutral-dark mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-ngo-neutral max-w-2xl mx-auto">
            Every donation and volunteer hour creates real, measurable change in communities around the world.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`text-4xl font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-ngo-neutral font-medium">{metric.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
