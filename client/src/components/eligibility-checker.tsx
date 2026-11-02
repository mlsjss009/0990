import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, FileText, AlertCircle, ExternalLink } from "lucide-react";

interface EligibilityFormData {
  fullName: string;
  dateOfBirth: string;
  address: string;
}

export type EligibilityResult = 'eligible' | 'not_eligible' | 'error' | null;

interface EligibilityCheckerProps {
  onResultChange?: (result: EligibilityResult) => void;
  onContinue: () => void;
}

const fieldHeight = "h-[clamp(2.25rem,5vh,2.75rem)] rounded-xl border-2 border-gray-200 px-3 text-sm focus-visible:border-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0";
const labelClass = "mb-1 block text-[12px] font-semibold text-slate-600";

export default function EligibilityChecker({ onResultChange, onContinue }: EligibilityCheckerProps) {
  const [formData, setFormData] = useState<EligibilityFormData>({
    fullName: "",
    dateOfBirth: "",
    address: ""
  });
  
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<EligibilityResult>(null);
  
  // This counter helps rotate between the two response types
  const [checkCounter, setCheckCounter] = useState(0);

  const applyResult = (next: EligibilityResult) => {
    setResult(next);
    onResultChange?.(next);
  };

  const handleInputChange = (field: keyof EligibilityFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckEligibility = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    
    try {
      const response = await fetch("/api/eligibility-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to check eligibility");
      }
      
      const data = await response.json();
      applyResult(data.result === 'eligible' ? 'eligible' : 'not_eligible');
      setCheckCounter(prev => prev + 1);
    } catch (error) {
      console.error('Error checking eligibility:', error);
      applyResult('error');
    } finally {
      setIsChecking(false);
    }
  };

  const resetForm = () => {
    setFormData({ fullName: "", dateOfBirth: "", address: "" });
    applyResult(null);
  };

  if (result === 'eligible') {
    return (
      <Card className="w-full overflow-hidden rounded-3xl border-0 bg-white shadow-2xl" data-testid="eligibility-result">
        <CardContent className="p-[clamp(1rem,2.4vh,1.6rem)] text-center">
          <CheckCircle className="mx-auto mb-2 h-11 w-11 text-green-500" />
          <h3 className="mb-1.5 text-[clamp(1.15rem,2.6vh,1.6rem)] font-bold text-green-700">Wonderful News!</h3>
          <p className="mx-auto mb-3 max-w-[46ch] text-[13px] leading-snug text-gray-700">
            You're eligible to join our community of changemakers! Your application can help us build stronger, more resilient communities together.
          </p>

          <div className="mb-3 rounded-2xl bg-green-50 p-[clamp(0.6rem,1.8vh,1rem)]">
            <h4 className="text-[13px] font-bold text-green-800">Estimated Prize Range</h4>
            <div className="text-[clamp(1.35rem,3.4vh,2rem)] font-bold leading-tight text-green-600">
              {checkCounter % 3 === 0 ? '$300K - $1M' : 
               checkCounter % 3 === 1 ? '$1M - $2.5M' : '$2.5M - $4M'}
            </div>
            <p className="text-[11.5px] text-green-700">
              Final amount will be determined based on your complete application and project scope.
            </p>
          </div>

          <Button
            onClick={onContinue}
            className="h-[clamp(2.5rem,5.6vh,3rem)] w-full rounded-full bg-green-500 text-[clamp(0.85rem,1.7vh,1rem)] font-bold text-white hover:bg-green-600"
          >
            <FileText className="mr-2 h-4 w-4" />
            Continue with Full Application
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>

          <div className="mt-2 flex gap-2">
            <Button onClick={resetForm} variant="outline" className="h-9 flex-1 rounded-full text-[12px]">
              Check Another Person
            </Button>
            <Button
              onClick={() => window.location.href = '/'}
              className="h-9 flex-1 rounded-full bg-blue-500 text-[12px] text-white hover:bg-blue-600"
            >
              Return to Homepage
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (result === 'not_eligible' || result === 'error') {
    return (
      <Card className="w-full overflow-hidden rounded-3xl border-0 bg-white shadow-2xl" data-testid="eligibility-result">
        <CardContent className="p-[clamp(1rem,2.6vh,1.75rem)] text-center">
          <AlertCircle className="mx-auto mb-2 h-11 w-11 text-amber-500" />
          <h3 className="mb-1.5 text-[clamp(1.15rem,2.6vh,1.6rem)] font-bold text-gray-900">
            {result === 'not_eligible' ? 'Name Not Found' : 'Something Went Wrong'}
          </h3>
          <p className="mx-auto mb-3 max-w-[44ch] text-[13px] leading-snug text-gray-700">
            {result === 'not_eligible'
              ? 'This name is not on the eligibility list. Please check the spelling of the full name and try again.'
              : "We couldn't complete the eligibility check. Please try again."}
          </p>

          <Button
            onClick={resetForm}
            className="h-[clamp(2.5rem,5.6vh,3rem)] w-full rounded-full bg-blue-500 text-[clamp(0.85rem,1.7vh,1rem)] font-bold text-white hover:bg-blue-600"
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full overflow-hidden rounded-3xl border-0 bg-white shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 p-[clamp(0.7rem,2vh,1.25rem)_clamp(1rem,2.2vw,1.6rem)]">
        <CardTitle className="flex items-center gap-2 text-[clamp(1rem,2.2vh,1.3rem)] font-bold text-white">
          <CheckCircle className="h-5 w-5" />
          Check Your Eligibility
        </CardTitle>
        <p className="mt-0.5 text-[12px] text-blue-100">
          Verify your eligibility for our program in just a few steps
        </p>
      </CardHeader>

      <CardContent className="p-[clamp(0.9rem,2.2vh,1.5rem)_clamp(1rem,2.2vw,1.6rem)]">
        <form onSubmit={handleCheckEligibility} className="flex flex-col gap-[clamp(0.5rem,1.5vh,0.9rem)]">
          <div>
            <Label htmlFor="fullName" className={labelClass}>
              Full Name *
            </Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Enter your full legal name"
              className={fieldHeight}
              required
            />
          </div>

          <div className="grid gap-[clamp(0.5rem,1.5vw,0.9rem)] sm:grid-cols-2">
            <div>
              <Label htmlFor="dateOfBirth" className={labelClass}>
                Date of Birth *
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                className={fieldHeight}
                required
              />
            </div>

            <div>
              <Label htmlFor="address" className={labelClass}>
                Current Address *
              </Label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter your full current address"
                className={fieldHeight}
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-[clamp(0.35rem,1vh,0.6rem)]">
            <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 text-blue-700" />
            <p className="text-[11.5px] text-blue-700">
              Your information is securely processed and not stored permanently
            </p>
          </div>

          <Button
            type="submit"
            disabled={!formData.fullName || !formData.dateOfBirth || !formData.address || isChecking}
            className="h-[clamp(2.5rem,5.6vh,3.1rem)] w-full rounded-full bg-blue-500 text-[clamp(0.85rem,1.7vh,1rem)] font-bold text-white hover:bg-blue-600"
          >
            {isChecking ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                Checking Eligibility...
              </>
            ) : (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Check My Eligibility
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
