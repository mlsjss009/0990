
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, FileText, Users, DollarSign } from "lucide-react";
import GrantApplicationForm from "./grant-application-form";

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

        {/* Grant Application Form */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-sm font-semibold text-orange-600 mb-6">
              <FileText className="mr-2 h-4 w-4" />
              Official Application
            </div>
            <h3 className="text-3xl font-bold text-ngo-neutral-dark mb-4">
              Complete Your Grant Application
            </h3>
            <p className="text-lg text-ngo-neutral max-w-3xl mx-auto">
              Fill out the form below to apply for CBNF grant programs. All applications are reviewed within 7-14 business days.
            </p>
            
            <div className="bg-yellow-50 rounded-lg p-4 mt-6 mb-8 border border-yellow-200 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="text-yellow-600 h-5 w-5 mr-2" />
                <span className="font-semibold text-yellow-800">Application Timeline</span>
              </div>
              <p className="text-sm text-yellow-700">
                • Form completion: 10-15 minutes • Review: 7-14 business days • Notification via email & phone
              </p>
            </div>
          </div>
          
          <GrantApplicationForm />
        </div>

        
      </div>
    </section>
  );
}
