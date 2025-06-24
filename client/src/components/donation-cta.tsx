import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Calendar } from "lucide-react";

export default function DonationCTA() {
  const donationTiers = [
    {
      amount: "$25",
      description: "Provides school supplies for one child for a month"
    },
    {
      amount: "$100",
      description: "Funds a week of mobile healthcare clinic services"
    },
    {
      amount: "$500",
      description: "Supports a microfinance loan for a small business"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-ngo-secondary to-orange-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">Your Support Changes Everything</h2>
        <p className="text-xl text-orange-100 mb-8 leading-relaxed">
          Every dollar donated goes directly to programs that create lasting change. Join thousands of supporters who are making a difference in communities worldwide.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {donationTiers.map((tier, index) => (
            <Card key={index} className="bg-white/10 p-6 border-none text-white">
              <div className="text-3xl font-bold mb-2">{tier.amount}</div>
              <div className="text-orange-100">{tier.description}</div>
            </Card>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-ngo-secondary hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold h-auto">
            <Heart className="mr-2 h-5 w-5" />
            Donate Now
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-ngo-secondary px-8 py-4 rounded-full text-lg font-semibold h-auto"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Set Up Monthly Giving
          </Button>
        </div>
      </div>
    </section>
  );
}
