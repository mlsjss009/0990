import { useEffect, useState } from "react";
import { CheckCircle, FileText, Users, DollarSign } from "lucide-react";
import GrantApplicationForm from "./grant-application-form";
import EligibilityChecker, { type EligibilityResult } from "./eligibility-checker";

const eligibilityRequirements = [
  "Must be a citizen or legal resident",
  "Must have a Government approved Id",
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
    description: "Our team reviews applications instantly",
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

export default function ApplicationSection() {
  const [eligibilityResult, setEligibilityResult] = useState<EligibilityResult>(null);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  // The eligibility stage stays exactly one screen tall; the full application is
  // only mounted once the visitor continues, then it is scrolled into view.
  useEffect(() => {
    if (eligibilityResult !== 'eligible') {
      setIsApplicationOpen(false);
      return;
    }

    if (!isApplicationOpen) {
      return;
    }

    document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' });
  }, [eligibilityResult, isApplicationOpen]);

  return (
    <>
      {/* One-screen eligibility view: nav (5rem) + stage fills the rest of the viewport */}
      <section id="eligibility" className="bg-ngo-neutral-light pt-20">
        <div className="page-shell">
          <div
            className="grid h-[calc(100dvh-5rem)] grid-cols-1 content-center items-center gap-[clamp(0.75rem,2vh,1.75rem)] overflow-hidden py-[clamp(0.5rem,2vh,1.75rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-[clamp(1.25rem,4vw,5rem)]"
            data-testid="eligibility-stage"
          >
            <div className="min-w-0">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-3.5 py-1.5 text-[12.5px] font-bold text-blue-600">
                <CheckCircle className="h-4 w-4" />
                Quick Eligibility Check
              </div>

              <h1 className="mt-[clamp(0.5rem,1.4vh,1rem)] bg-gradient-to-br from-[hsl(var(--navy-primary))] to-[hsl(var(--plum-dark))] bg-clip-text text-[clamp(1.6rem,4.4vh,3.25rem)] font-bold leading-[1.05] tracking-tight text-transparent">
                Check Your Eligibility First
              </h1>

              <p className="mb-[clamp(0.75rem,2.2vh,1.5rem)] mt-[clamp(0.4rem,1.2vh,0.9rem)] hidden max-w-[46ch] text-[clamp(0.85rem,1.7vh,1.05rem)] leading-snug text-ngo-neutral sm:block">
                Before completing the full application, quickly verify your eligibility and see your potential range.
              </p>

              <ul className="mb-[clamp(0.75rem,2vh,1.5rem)] space-y-[clamp(0.25rem,1vh,0.6rem)]">
                {eligibilityRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2 text-[clamp(0.78rem,1.5vh,0.95rem)] text-ngo-neutral-dark">
                    <span className="mt-0.5 flex h-[17px] w-[17px] flex-shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[10px] font-black text-emerald-600">
                      ✓
                    </span>
                    {requirement}
                  </li>
                ))}
              </ul>

              <div className="hidden grid-cols-2 gap-[clamp(0.5rem,1.6vw,1.5rem)] lg:grid">
                {applicationProcess.map((step) => (
                  <div key={step.step} className="flex flex-col gap-1.5 lg:flex-row lg:items-start">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-[11px] font-extrabold text-white">
                      {step.step}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 text-[11.5px] font-bold leading-tight text-ngo-neutral-dark lg:text-[13px]">
                        <step.icon className="hidden h-4 w-4 flex-shrink-0 text-ngo-primary lg:block" />
                        {step.title}
                      </div>
                      <p className="mt-0.5 hidden text-[12px] leading-snug text-ngo-neutral lg:block">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <EligibilityChecker onResultChange={setEligibilityResult} onContinue={() => setIsApplicationOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* Application form - mounted only after the visitor continues from an eligible result */}
      {eligibilityResult === 'eligible' && isApplicationOpen && (
        <section id="application" className="bg-ngo-neutral-light pb-20">
          <div className="page-shell">
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-orange-100 to-red-100 px-4 py-2 text-sm font-semibold text-orange-600">
                <FileText className="mr-2 h-4 w-4" />
                Official Application
              </div>
              <h3 className="mb-3 text-3xl font-bold text-ngo-neutral-dark">
                Complete Your  Application
              </h3>
              <p className="mx-auto max-w-3xl text-lg text-ngo-neutral">
                Fill out the form below to apply for CBNF programs. All applications are reviewed same day.
              </p>

              <div className="mx-auto mb-8 mt-6 max-w-2xl rounded-lg border border-yellow-200 bg-yellow-50 p-4">
                <div className="mb-2 flex items-center justify-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-yellow-600" />
                  <span className="font-semibold text-yellow-800">Application Timeline</span>
                </div>
                <p className="text-sm text-yellow-700">
                  • Form completion: 10-15 minutes • Review: Same Day • Notification via email & phone
                </p>
              </div>
            </div>

            <GrantApplicationForm />
          </div>
        </section>
      )}
    </>
  );
}
