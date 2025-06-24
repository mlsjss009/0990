
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Users, DollarSign } from "lucide-react";

export default function ApplicationSection() {
  const eligibilityRequirements = [
    "Must be a U.S. citizen or legal resident",
    "Household income below 200% of federal poverty guidelines",
    "Demonstration of financial need through documentation",
    "Commitment to program participation and community involvement",
    "No outstanding debt obligations to federal programs",
    "Willingness to participate in follow-up assessments"
  ];

  const applicationProcess = [
    {
      icon: FileText,
      title: "Submit Application",
      description: "Complete our comprehensive application form with required documentation",
      step: "1"
    },
    {
      icon: Users,
      title: "Review Process",
      description: "Our team reviews applications within 14 business days",
      step: "2"
    },
    {
      icon: CheckCircle,
      title: "Approval & Onboarding",
      description: "Approved applicants receive program details and next steps",
      step: "3"
    },
    {
      icon: DollarSign,
      title: "Receive Support",
      description: "Begin receiving financial assistance and program benefits",
      step: "4"
    }
  ];

  return (
    <section id="application" className="py-20 bg-ngo-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ngo-neutral-dark mb-4">Apply for CBNF Programs</h2>
          <p className="text-lg text-ngo-neutral max-w-3xl mx-auto">
            Take the first step towards community support. Our application process is designed to connect you with the resources you need to thrive.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Eligibility Requirements */}
          <div>
            <h3 className="text-2xl font-bold text-ngo-neutral-dark mb-6">Eligibility Requirements</h3>
            <div className="space-y-4">
              {eligibilityRequirements.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-ngo-primary h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-ngo-neutral">{requirement}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-ngo-neutral-dark mb-2">Required Documents</h4>
              <ul className="text-sm text-ngo-neutral space-y-1">
                <li>• Government-issued photo ID</li>
                <li>• Proof of income (pay stubs, tax returns)</li>
                <li>• Proof of residence (utility bills, lease agreement)</li>
                <li>• Bank statements (last 3 months)</li>
                <li>• Social Security cards for all household members</li>
              </ul>
            </div>
          </div>

          {/* Application Process */}
          <div>
            <h3 className="text-2xl font-bold text-ngo-neutral-dark mb-6">Application Process</h3>
            <div className="space-y-6">
              {applicationProcess.map((step, index) => (
                <Card key={index} className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-ngo-primary text-white rounded-full flex items-center justify-center mr-4 font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <step.icon className="text-ngo-primary h-5 w-5 mr-2" />
                          <h4 className="font-semibold text-ngo-neutral-dark">{step.title}</h4>
                        </div>
                        <p className="text-ngo-neutral text-sm">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Application CTA */}
        <div className="text-center bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-ngo-neutral-dark mb-4">Ready to Apply?</h3>
          <p className="text-ngo-neutral mb-6 max-w-2xl mx-auto">
            Applications are reviewed on a first-come, first-served basis. Submit your application today to join thousands of Americans who have benefited from CBNF programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-ngo-primary hover:bg-blue-800 text-white px-8 py-4 rounded-full text-lg font-semibold h-auto">
              <FileText className="mr-2 h-5 w-5" />
              Start Application
            </Button>
            <Button
              variant="outline"
              className="border-2 border-ngo-primary text-ngo-primary hover:bg-ngo-primary hover:text-white px-8 py-4 rounded-full text-lg font-semibold h-auto"
            >
              Download Application PDF
            </Button>
          </div>
          <p className="text-sm text-ngo-neutral mt-4">
            Need help? Call our support line at <strong>(555) 123-CBNF</strong> or email applications@cbnf.org
          </p>
        </div>
      </div>
    </section>
  );
}
