import { Globe, Handshake } from "lucide-react";

export default function PartnersSection() {
  const partners = [
    { name: "United Nations", logo: "🇺🇳", category: "International" },
    { name: "UNICEF", logo: "🏥", category: "Healthcare" },
    { name: "World Bank", logo: "🏦", category: "Finance" },
    { name: "Gates Foundation", logo: "💰", category: "Foundation" },
    { name: "Doctors Without Borders", logo: "⚕️", category: "Medical" },
    { name: "Red Cross", logo: "❤️", category: "Emergency" },
    { name: "Oxfam", logo: "🌍", category: "Development" },
    { name: "Save the Children", logo: "👶", category: "Children" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-sm font-semibold text-ngo-primary mb-6">
            <Handshake className="mr-2 h-4 w-4" />
            Global Network
          </div>
          <h2 className="text-5xl font-bold text-ngo-neutral-dark mb-6 section-divider pb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-ngo-neutral max-w-3xl mx-auto leading-relaxed">
            We're proud to partner with these incredible organizations in creating positive change. Together, we amplify our impact and reach more communities in need.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover border-0">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <div className="font-bold text-ngo-neutral-dark text-lg mb-1 group-hover:text-ngo-primary transition-colors">
                  {partner.name}
                </div>
                <div className="text-sm text-ngo-neutral">{partner.category}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-8 bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-primary">100+</div>
              <div className="text-sm text-ngo-neutral">Global Partners</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-accent">50+</div>
              <div className="text-sm text-ngo-neutral">Corporate Sponsors</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ngo-secondary">25</div>
              <div className="text-sm text-ngo-neutral">Country Offices</div>
            </div>
          </div>
          
          <div className="mt-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full px-6 py-3">
              <Globe className="h-5 w-5 text-ngo-primary" />
              <span className="text-sm font-semibold text-ngo-neutral-dark">
                Expanding partnerships across all continents
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}