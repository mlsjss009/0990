import { Heart, Mail, Phone, MapPin } from "lucide-react";

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

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Financial Reports", href: "#" },
    { label: "Code of Conduct", href: "#" }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith("#")) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const socialLinks = [
    { name: "Facebook", color: "hover:bg-blue-600" },
    { name: "Twitter", color: "hover:bg-sky-500" },
    { name: "Instagram", color: "hover:bg-pink-500" },
    { name: "LinkedIn", color: "hover:bg-blue-700" }
  ];

  return (
    <footer className="bg-gradient-to-br from-ngo-neutral-dark via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Organization Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-ngo-primary rounded-full flex items-center justify-center">
                  <Heart className="text-white h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-gradient">Hope Together</h3>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-xl">
                Dedicated to creating lasting change in communities worldwide through education, healthcare, economic empowerment, and emergency relief programs. Together, we build a better tomorrow.
              </p>
              
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-ngo-primary flex-shrink-0" />
                  <span className="text-gray-300">123 Hope Street, New York, NY 10001</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-ngo-accent flex-shrink-0" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm">
                  <Mail className="h-5 w-5 text-ngo-secondary flex-shrink-0" />
                  <span className="text-gray-300">info@hopetogether.org</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-left hover:translate-x-1 transform transition-transform flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-ngo-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support Links */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <button className="text-gray-300 hover:text-white transition-colors duration-300 text-left hover:translate-x-1 transform transition-transform flex items-center group">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-ngo-secondary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 bg-gray-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-5 h-5 bg-current rounded-sm"></div>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4 text-white">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-white/10 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-ngo-primary transition-colors backdrop-blur-sm"
                />
                <button className="px-6 py-2 bg-gradient-ngo-primary text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-center lg:text-left">
              <p>© 2024 Hope Together. All rights reserved.</p>
              <p className="text-sm mt-1">Registered 501(c)(3) nonprofit organization • EIN: 12-3456789</p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6">
              {legalLinks.map((link, index) => (
                <button 
                  key={index} 
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}