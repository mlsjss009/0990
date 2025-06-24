import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
              <div className="w-12 h-12 bg-gradient-ngo-primary rounded-full flex items-center justify-center glow-effect">
                <Heart className="text-white h-6 w-6" />
              </div>
              <h1 className="text-3xl font-bold text-ngo-primary">Hope Together</h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-4 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-4 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-4 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Programs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-4 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Impact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("volunteer")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-4 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Volunteer
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-4 py-2 text-sm font-semibold transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-ngo-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Button className="btn-premium text-white px-8 py-3 rounded-full text-sm font-bold border-0">
                <Heart className="mr-2 h-4 w-4" />
                Donate Now
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
              <button
                onClick={() => scrollToSection("home")}
                className="block px-4 py-3 text-base font-semibold text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left rounded-lg hover:bg-blue-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-4 py-3 text-base font-semibold text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left rounded-lg hover:bg-blue-50"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="block px-4 py-3 text-base font-semibold text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left rounded-lg hover:bg-blue-50"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="block px-4 py-3 text-base font-semibold text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left rounded-lg hover:bg-blue-50"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection("volunteer")}
                className="block px-4 py-3 text-base font-semibold text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left rounded-lg hover:bg-blue-50"
              >
                Volunteer
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-4 py-3 text-base font-semibold text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left rounded-lg hover:bg-blue-50"
              >
                Contact
              </button>
              <div className="px-4 py-3">
                <Button className="btn-premium text-white w-full rounded-full font-bold">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}