import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, CreditCard, Calendar, Gift, Zap } from "lucide-react";
import { executeAction } from "@/lib/actions";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const donationImpacts = [
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

export default function DonationSection() {
  return (
    <section id="donate-section" className="py-24 bg-orange-500 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-sm font-medium mb-8">
            <Heart className="mr-2 h-4 w-4" />
            Make a Difference Today
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Your Support Changes{" "}
            <span className="text-yellow-200">
              Everything
            </span>
          </h2>
          <p className="text-xl text-orange-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Every donation, no matter the size, helps us provide essential services to communities in need. 
            Choose your impact level and join thousands of supporters making a real difference.
          </p>
        </div>

        {/* Donation Amount Cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {donationAmounts.map((amount, index) => {
            const impact = donationImpacts.find(d => d.amount === amount);
            return (
              <Card 
                key={amount} 
                onClick={() => alert(`Selected $${amount} donation - would proceed to payment`)}
                className="bg-white/10 border-0 text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold mb-2">${amount}</div>
                  <div className="text-sm text-orange-100">{impact?.impact}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="flex justify-center items-center space-x-12 mb-12">
          {features.map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Icon className="h-6 w-6 text-yellow-200" />
              <span className="text-lg font-semibold">{text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button 
            onClick={() => alert('Donation system would connect to payment processor')}
            className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 rounded-full text-xl font-bold h-auto"
          >
            <Heart className="mr-3 h-6 w-6" />
            Donate Now
          </Button>
          <Button 
            onClick={() => alert('Monthly giving setup would be configured')}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-12 py-6 rounded-full text-xl font-bold h-auto"
          >
            <Calendar className="mr-3 h-6 w-6" />
            Monthly Giving
          </Button>
        </div>

        <div className="text-center">
          <p className="text-orange-100 text-sm">
            Donations are secure and tax-deductible. You will receive a receipt for your records.
          </p>
        </div>
      </div>
    </section>
  );
}