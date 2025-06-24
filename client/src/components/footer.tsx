export default function Footer() {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Programs", href: "#programs" },
    { label: "Impact Stories", href: "#impact" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "Contact", href: "#contact" },
  ];

  const supportLinks = [
    { label: "Donate", href: "#" },
    { label: "Monthly Giving", href: "#" },
    { label: "Corporate Partnerships", href: "#" },
    { label: "Legacy Giving", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("#")) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-ngo-neutral-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Hope Together</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to creating lasting change in communities worldwide through education, healthcare, economic empowerment, and emergency relief programs.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <button
                  key={social}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
                </button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-300 hover:text-white transition-colors text-left">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Hope Together. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Financial Reports"].map((link, index) => (
                <button key={index} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}