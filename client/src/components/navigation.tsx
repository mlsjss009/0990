import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white shadow-lg"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-ngo-primary">Hope Together</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection("volunteer")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Volunteer
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-ngo-neutral-dark hover:text-ngo-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </button>
              <Button className="bg-ngo-secondary hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
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
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-base font-medium text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-base font-medium text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="block px-3 py-2 text-base font-medium text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left"
              >
                Programs
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="block px-3 py-2 text-base font-medium text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection("volunteer")}
                className="block px-3 py-2 text-base font-medium text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left"
              >
                Volunteer
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium text-ngo-neutral-dark hover:text-ngo-primary transition-colors w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button className="bg-ngo-secondary hover:bg-orange-600 text-white w-full">
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
