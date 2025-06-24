import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Calendar, Shield, Star, Zap } from "lucide-react";

export default function DonationCTA() {
  const donationTiers = [
    {
      amount: "$25",
      description: "Provides school supplies for one child for a month",
      icon: "📚",
      impact: "1 Month Education"
    },
    {
      amount: "$100",
      description: "Funds a week of mobile healthcare clinic services",
      icon: "🏥",
      impact: "1 Week Healthcare"
    },
    {
      amount: "$500",
      description: "Supports a microfinance loan for a small business",
      icon: "💼",
      impact: "1 Business Loan"
    },
  ];

  const features = [
    { icon: Shield, text: "100% Secure Donations" },
    { icon: Star, text: "Tax Deductible" },
    { icon: Zap, text: "Immediate Impact" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-dots opacity-20"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl floating-animation"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl floating-animation" style={{ animationDelay: "2s" }}></div>
      
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-6 glass-effect">
            <Heart className="mr-2 h-4 w-4" />
            Make a Difference Today
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Your Support Changes{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
              Everything
            </span>
          </h2>
          <p className="text-xl text-orange-100 mb-12 leading-relaxed max-w-4xl mx-auto">
            Every dollar donated goes directly to programs that create lasting change. Join thousands of supporters who are making a difference in communities worldwide.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {donationTiers.map((tier, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-md p-8 border-white/20 text-white card-hover rounded-3xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{tier.icon}</div>
              <div className="text-4xl font-bold mb-3 group-hover:scale-105 transition-transform duration-300">
                {tier.amount}
              </div>
              <div className="text-orange-100 mb-4 leading-relaxed">{tier.description}</div>
              <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm font-semibold">
                {tier.impact}
              </div>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-6 rounded-full text-xl font-bold h-auto shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105">
            <Heart className="mr-3 h-6 w-6" />
            Donate Now
          </Button>
          <Button 
            variant="outline"
            className="glass-effect border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 rounded-full text-xl font-bold h-auto backdrop-blur-md"
          >
            <Calendar className="mr-3 h-6 w-6" />
            Monthly Giving
          </Button>
        </div>

        <div className="flex justify-center items-center space-x-8 opacity-90">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <feature.icon className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Why Your Donation Matters</h3>
          <p className="text-orange-100 leading-relaxed">
            98% of every donation goes directly to our programs. We maintain transparency through detailed financial reports and regular impact updates, ensuring your generosity creates maximum positive change.
          </p>
        </div>
      </div>
    </section>
  );
}