import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";

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

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
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
    <footer className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Organization Info */}
            <div className="lg:col-span-2" data-testid="footer-organization-info">
              <Link href="/">
                <div className="flex items-center space-x-3 mb-6 cursor-pointer group">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-xl">
                    <Heart className="text-white h-7 w-7" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Hope Together</h3>
                </div>
              </Link>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-xl">
                Dedicated to creating lasting change in communities worldwide through education, healthcare, economic empowerment, and emergency relief programs. Together, we build a better tomorrow.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-300 hover:text-white transition-colors" data-testid="contact-email">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mr-3">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>contact@hopetogether.org</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors" data-testid="contact-phone">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mr-3">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-300 hover:text-white transition-colors" data-testid="contact-address">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mr-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>123 Hope Street, Community City, CC 12345</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4" data-testid="social-links">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group"
                    aria-label={social.label}
                    data-testid={`social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div data-testid="footer-quick-links">
              <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-all duration-300 text-left group flex items-center"
                      data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support Links */}
            <div data-testid="footer-support-links">
              <h4 className="text-xl font-bold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <button 
                      className="text-gray-300 hover:text-white transition-all duration-300 text-left group flex items-center"
                      data-testid={`link-support-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-orange-500 to-rose-500 transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-white/10" data-testid="newsletter-section">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-white mb-4">Stay Connected</h4>
            <p className="text-gray-300 mb-6">Join our newsletter to receive updates on our programs and impact stories.</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                data-testid="input-newsletter-email"
              />
              <button className="btn-gradient px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0" data-testid="button-subscribe">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-center lg:text-left" data-testid="footer-copyright">
              <p className="flex items-center justify-center lg:justify-start space-x-2">
                <span>© 2025 Hope Together. All rights reserved.</span>
                <Heart className="h-4 w-4 text-pink-500 inline" />
              </p>
              <p className="text-sm mt-1">Registered 501(c)(3) nonprofit organization • EIN: 12-3456789</p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-6" data-testid="footer-legal-links">
              {legalLinks.map((link, index) => (
                <button 
                  key={index} 
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300 relative group"
                  data-testid={`link-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
