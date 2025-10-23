
import Navigation from "@/components/navigation";
import VolunteerSection from "@/components/volunteer-section";
import Footer from "@/components/footer";

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 text-ngo-neutral-dark">
      <Navigation />
      <div className="pt-20">
        <VolunteerSection />
      </div>
      <Footer />
    </div>
  );
}
