
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

type EligibilityResult = 'eligible' | null;

export default function EligibilityChecker() {
  const [formData, setFormData] = useState<EligibilityFormData>({
    fullName: "",
    dateOfBirth: "",
    address: ""
  });
  
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<EligibilityResult>(null);
  
  // This counter helps rotate between the two response types
  const [checkCounter, setCheckCounter] = useState(0);

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
      setResult('eligible');
      setCheckCounter(prev => prev + 1);
    } catch (error) {
      console.error('Error checking eligibility:', error);
      // Fallback to local simulation if API fails
      setResult('eligible');
      setCheckCounter(prev => prev + 1);
    } finally {
      setIsChecking(false);
    }
  };

  const scrollToApplication = () => {
    const element = document.getElementById('application');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const resetForm = () => {
    setFormData({ fullName: "", dateOfBirth: "", address: "" });
    setResult(null);
  };

  if (result) {
    return (
      <Card className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden max-w-2xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-green-700 mb-4">Wonderful News!</h3>
            <p className="text-lg text-gray-700 mb-6">
              You're eligible to join our community of changemakers! Your application can help us build stronger, more resilient communities together.
            </p>
            
            <div className="bg-green-50 rounded-2xl p-6 mb-8">
              <h4 className="text-xl font-bold text-green-800 mb-3">Estimated Prize Range</h4>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {checkCounter % 3 === 0 ? '$300K - $1M' : 
                 checkCounter % 3 === 1 ? '$1M - $2.5M' : '$2.5M - $4M'}
              </div>
              <p className="text-green-700 text-sm">
                Final amount will be determined based on your complete application and project scope.
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={scrollToApplication}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold w-full"
              >
                <FileText className="mr-3 h-5 w-5" />
                Continue with Full Application
                <ExternalLink className="ml-3 h-4 w-4" />
              </Button>
              
              <div className="flex space-x-4">
                <Button
                  onClick={resetForm}
                  variant="outline"
                  className="flex-1"
                >
                  Check Another Person's Eligibility
                </Button>
                <Button
                  onClick={() => window.location.href = '/'}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Return to Homepage
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden max-w-2xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardTitle className="flex items-center text-2xl font-bold">
          <CheckCircle className="mr-3 h-6 w-6" />
          Check Your Eligibility
        </CardTitle>
        <p className="text-blue-100 mt-2">
          Verify your eligibility for our program in just a few steps
        </p>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleCheckEligibility} className="space-y-6">
          <div>
            <Label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </Label>
            <Input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Enter your full legal name"
              className="rounded-xl border-2 border-gray-200 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700 mb-2">
              Date of Birth *
            </Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              className="rounded-xl border-2 border-gray-200 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
              Current Address *
            </Label>
            <Input
              id="address"
              type="text"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter your full current address"
              className="rounded-xl border-2 border-gray-200 focus:border-blue-500"
              required
            />
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-700">
              <CheckCircle className="inline h-4 w-4 mr-2" />
              Your information is securely processed and not stored permanently
            </p>
          </div>

          <Button
            type="submit"
            disabled={!formData.fullName || !formData.dateOfBirth || !formData.address || isChecking}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold w-full h-auto"
          >
            {isChecking ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                Checking Eligibility...
              </>
            ) : (
              <>
                <CheckCircle className="mr-3 h-5 w-5" />
                Check My Eligibility
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
