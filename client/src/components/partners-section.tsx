export default function PartnersSection() {
  const partners = [
    { name: "UN", fullName: "United Nations" },
    { name: "UNICEF", fullName: "UNICEF" },
    { name: "World Bank", fullName: "World Bank" },
    { name: "Gates Foundation", fullName: "Gates Foundation" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-ngo-neutral-dark mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-ngo-neutral">
            We're proud to partner with these incredible organizations in creating positive change.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                <span className={`font-bold text-gray-400 ${
                  partner.name === "UN" ? "text-2xl" : 
                  partner.name === "UNICEF" ? "text-xl" : 
                  partner.name === "World Bank" ? "text-lg" : "text-sm"
                }`}>
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
