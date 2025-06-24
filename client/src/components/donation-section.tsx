
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, CreditCard, Calendar, Gift, Zap } from "lucide-react";
import { executeAction } from "@/lib/actions";

const grantAmounts = [25, 50, 100, 250, 500, 1000];

const grantImpacts = [
  { amount: 25, impact: "Provides school supplies for 5 children" },
  { amount: 50, impact: "Feeds a family of 4 for one week" },
  { amount: 100, impact: "Supplies clean water for 20 people for a month" },
  { amount: 250, impact: "Provides medical care for 10 patients" },
  { amount: 500, impact: "Supports a child's education for one year" },
  { amount: 1000, impact: "Builds a clean water well for a community" }
];

const features = [
  { icon: Heart, text: "100% Secure" },
  { icon: Gift, text: "Tax Deductible" },
  { icon: Zap, text: "Immediate Impact" }
];

export default function GrantSection() {
  return (
    <section id="grant-section" className="py-24 bg-orange-500 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-sm font-medium mb-8">
            <Heart className="mr-2 h-4 w-4" />
            Apply for Grants Today
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Your Grant Application Changes{" "}
            <span className="text-yellow-200">
              Everything
            </span>
          </h2>
          <p className="text-xl text-orange-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Transform your community project with substantial funding opportunities. 
            Join thousands of successful applicants who have received grants to make lasting impact.
          </p>
        </div>

        {/* 2025 Grant Information */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full text-sm font-bold mb-6">
              <Zap className="mr-2 h-4 w-4 text-yellow-200" />
              2025 Grant Program
            </div>
            <h3 className="text-3xl font-bold mb-6">Eligibility Prize Estimate</h3>
            <div className="text-6xl font-bold text-yellow-200 mb-4">$300K - $4M</div>
            <p className="text-lg text-orange-100 leading-relaxed">
              Our 2025 grant program offers substantial funding opportunities for qualifying community projects. 
              Awards range from $300,000 to $4,000,000 based on project scope, impact potential, and community need.
            </p>
          </div>
        </div>

        {/* Grant Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-yellow-200" />
            </div>
            <h4 className="text-xl font-bold mb-2">Community Impact</h4>
            <p className="text-orange-100">Direct funding for projects that create lasting positive change</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="h-8 w-8 text-yellow-200" />
            </div>
            <h4 className="text-xl font-bold mb-2">Full Support</h4>
            <p className="text-orange-100">Comprehensive assistance throughout the application process</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-yellow-200" />
            </div>
            <h4 className="text-xl font-bold mb-2">Fast Processing</h4>
            <p className="text-orange-100">Streamlined review process with quick decision turnaround</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button 
            onClick={() => {
              const element = document.getElementById('application');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 rounded-full text-xl font-bold h-auto"
          >
            <Heart className="mr-3 h-6 w-6" />
            Apply for Grant
          </Button>
          <Button 
            onClick={() => {
              const element = document.getElementById('application');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-12 py-6 rounded-full text-xl font-bold h-auto"
          >
            <Calendar className="mr-3 h-6 w-6" />
            Apply for Grant Monthly Program
          </Button>
        </div>

        <div className="text-center">
          <p className="text-orange-100 text-sm">
            Grant applications are secure and tracked. You will receive confirmation for your records.
          </p>
        </div>
      </div>
    </section>
  );
}
