
import Navigation from "@/components/navigation";
import ProgramsSection from "@/components/programs-section";
import Footer from "@/components/footer";

export default function Programs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 text-ngo-neutral-dark">
      <Navigation />
      <div className="pt-20">
        <ProgramsSection />
      </div>
      <Footer />
    </div>
  );
}
