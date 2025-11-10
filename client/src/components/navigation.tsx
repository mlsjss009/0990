import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";
import { executeAction } from "@/lib/actions";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/impact", label: "Impact" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/partners", label: "Partners" },
    { href: "/testimonials", label: "Stories" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100" 
        : "bg-white/95 backdrop-blur-md shadow-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                <Heart className="text-white h-6 w-6" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Hope Together
              </h1>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 cursor-pointer relative group ${
                    location === link.href 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                  }`} data-testid={`link-${link.label.toLowerCase()}`}>
                    {link.label}
                    <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-300 ${
                      location === link.href ? 'w-8' : 'w-0 group-hover:w-8'
                    }`}></span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-indigo-50"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6 text-indigo-600" /> : <Menu className="h-6 w-6 text-indigo-600" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 pb-3 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-3xl shadow-xl">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span 
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 text-base font-semibold transition-all cursor-pointer w-full text-left rounded-xl ${
                      location === link.href 
                        ? 'text-indigo-600 bg-indigo-50' 
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
