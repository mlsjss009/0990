
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
      

        {/* 2025 Grant Information */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full text-sm font-bold mb-6">
              <Zap className="mr-2 h-4 w-4 text-yellow-200" />
              2025 CBNF Program
            </div>
           
            
            <p className="text-lg text-orange-100 leading-relaxed">
              Transform Your Community Project with Substantial Funding Opportunities

              Bring your vision to life and make a real difference in your community. Our 2025 CBNF Program offers substantial funding opportunities for qualifying community projects. Funds raised by our supported sponsors now total $900,000,000, dedicated to initiatives that demonstrate strong project scope, measurable impact potential, and clear community need.

              Community Impact
              We believe in empowering individuals and organizations to create lasting positive change. Whether you’re improving local infrastructure, supporting youth development, enhancing healthcare, or promoting environmental sustainability, our funding can help turn your ideas into reality.

              Full Support
              You’re not alone in the process. Our team provides comprehensive assistance throughout the entire application journey — from proposal preparation to project execution. We offer personalized guidance, expert review, and ongoing support to help you achieve success.

              Why Apply?

              Access to a share of $900 million in available funding for eligible projects

              Opportunities to collaborate with local and international partners

              Professional mentorship and administrative support from start to finish

              The ability to make a measurable, lasting difference in your community

              Take the next step toward building a better future. Apply today and join the 2025 CBNF Program in driving meaningful, sustainable community transformation.
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
            <h4 className="text-xl font-bold mb-2">Environmental and Sustainability Efforts</h4>
            <p className="text-orange-100">Grants can help fund renewable energy projects, conservation programs, or research aimed at protecting the environment.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-yellow-200" />
            </div>
            <h4 className="text-xl font-bold mb-2">Emergency or Recovery Assistance</h4>
            <p className="text-orange-100">Individuals or businesses affected by disasters (natural or economic) may apply for grants to rebuild and recover.</p>
          </div>
        </div>

       

       
      </div>
    </section>
  );
}
