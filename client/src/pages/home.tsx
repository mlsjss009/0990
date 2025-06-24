import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ImpactMetrics from "@/components/impact-metrics";
import AboutSection from "@/components/about-section";
import ProgramsSection from "@/components/programs-section";
import ApplicationSection from "@/components/application-section";
import PartnersSection from "@/components/partners-section";
import TestimonialsSection from "@/components/testimonials-section";
import GrantCTA from "@/components/grant-cta";
import VolunteerSection from "@/components/volunteer-section";
import NewsSection from "@/components/news-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-ngo-neutral-dark">
      <Navigation />
      <HeroSection />
      <ImpactMetrics />
      <AboutSection />
      <ProgramsSection />
      <ApplicationSection />
      <PartnersSection />
      <TestimonialsSection />
      <GrantCTA />
      <VolunteerSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
