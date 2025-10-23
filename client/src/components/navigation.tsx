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
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-xl" : "bg-white/95 backdrop-blur-md shadow-xl"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="text-white h-6 w-6" />
              </div>
              <h1 className="text-3xl font-bold text-blue-600">Hope Together</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/">
                <a className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${location === '/' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="/about">
                <a className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${location === '/about' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="/programs">
                <a className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${location === '/programs' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  Programs
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="/impact">
                <a className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${location === '/impact' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  Impact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="/volunteer">
                <a className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${location === '/volunteer' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  Volunteer
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Link href="/contact">
                <a className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${location === '/contact' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </Link>
              <Button 
                onClick={() => executeAction('grant_application')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-sm font-bold border-0"
              >
                <Heart className="mr-2 h-4 w-4" />
                Apply for Grant
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-lg">
              <Link href="/" onClick={closeMobileMenu}>
                <a className={`block px-4 py-3 text-base font-semibold transition-colors w-full text-left rounded-lg hover:bg-blue-50 ${location === '/' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  Home
                </a>
              </Link>
              <Link href="/about" onClick={closeMobileMenu}>
                <a className={`block px-4 py-3 text-base font-semibold transition-colors w-full text-left rounded-lg hover:bg-blue-50 ${location === '/about' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  About
                </a>
              </Link>
              <Link href="/programs" onClick={closeMobileMenu}>
                <a className={`block px-4 py-3 text-base font-semibold transition-colors w-full text-left rounded-lg hover:bg-blue-50 ${location === '/programs' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  Programs
                </a>
              </Link>
              <Link href="/impact" onClick={closeMobileMenu}>
                <a className={`block px-4 py-3 text-base font-semibold transition-colors w-full text-left rounded-lg hover:bg-blue-50 ${location === '/impact' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  Impact
                </a>
              </Link>
              <Link href="/volunteer" onClick={closeMobileMenu}>
                <a className={`block px-4 py-3 text-base font-semibold transition-colors w-full text-left rounded-lg hover:bg-blue-50 ${location === '/volunteer' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  Volunteer
                </a>
              </Link>
              <Link href="/contact" onClick={closeMobileMenu}>
                <a className={`block px-4 py-3 text-base font-semibold transition-colors w-full text-left rounded-lg hover:bg-blue-50 ${location === '/contact' ? 'text-ngo-primary' : 'text-ngo-neutral-dark hover:text-ngo-primary'}`}>
                  Contact
                </a>
              </Link>
              <div className="px-4 py-3">
                <Button 
                  onClick={() => executeAction('grant_application')}
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full rounded-full font-bold"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Apply for Grant
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}