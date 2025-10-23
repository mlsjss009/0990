
import Navigation from "@/components/navigation";
import AboutSection from "@/components/about-section";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-ngo-neutral-dark">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
}
