
import Navigation from "@/components/navigation";
import ImpactMetrics from "@/components/impact-metrics";
import Footer from "@/components/footer";

export default function Impact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 text-ngo-neutral-dark">
      <Navigation />
      <div className="pt-20">
        <ImpactMetrics />
      </div>
      <Footer />
    </div>
  );
}
