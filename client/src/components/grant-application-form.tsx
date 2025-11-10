
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { FileText, User, DollarSign, Calendar, CheckCircle } from "lucide-react";
import { executeAction } from "@/lib/actions";

interface GrantApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  dateOfBirth: string;
  householdSize: string;
  monthlyIncome: string;
  employmentStatus: string;
  grantType: string;
  requestedAmount: string;
  purpose: string;
  agreeToTerms: boolean;
}

export default function GrantApplicationForm() {
  const [formData, setFormData] = useState<GrantApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dateOfBirth: "",
    householdSize: "",
    monthlyIncome: "",
    employmentStatus: "",
    grantType: "",
    requestedAmount: "",
    purpose: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: keyof GrantApplicationData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/grant-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          ssn: "0000", // Placeholder for now
          hasDebts: false,
          agreeToVerification: true
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit application");
      }
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    // Redirect to homepage after 4 seconds
    setTimeout(() => {
      window.location.href = '/';
    }, 4000);

    return (
      <Card className="bg-green-50 border-green-200 shadow-xl rounded-3xl overflow-hidden max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-green-700 mb-4">Thank You for Taking the First Step!</h3>
          <p className="text-green-600 mb-6 text-lg">
            Your application has been successfully submitted. Together, we're building stronger communities and creating lasting change.
          </p>
          <div className="bg-white rounded-2xl p-6 mb-6">
            <p className="text-sm font-semibold text-gray-700 mb-2">What happens next:</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Review process begins within 24 hours</li>
              <li>• You'll receive confirmation via email</li>
              <li>• Our team will contact you within 5-15 minutes </li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            Application ID: APP-{new Date().getFullYear()}-{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
          </p>
          <p className="text-xs text-gray-500 mt-4">Redirecting to homepage in a few seconds...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden max-w-4xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <CardTitle className="flex items-center text-3xl font-bold">
          <FileText className="mr-3 h-8 w-8" />
          Application Form
        </CardTitle>
        <p className="text-orange-100 mt-2 text-lg">
          Complete all required fields to apply for CBNF programs
        </p>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <User className="mr-2 h-5 w-5 text-orange-500" />
              Personal Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="rounded-xl border-2 border-gray-200 focus:border-orange-500"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="rounded-xl border-2 border-gray-200 focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="rounded-xl border-2 border-gray-200 focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(555) 123-4567"
                  className="rounded-xl border-2 border-gray-200 focus:border-orange-500"
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
                  className="rounded-xl border-2 border-gray-200 focus:border-orange-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Address Information</h3>
            <div className="grid gap-6">
              <div>
                <Label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Street Address *
                </Label>
                <Input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="rounded-xl border-2 border-gray-200 focus:border-blue-500"
                  required
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                    City *
                  </Label>
                  <Input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="rounded-xl border-2 border-gray-200 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                    State *
                  </Label>
                  <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                    <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AL">Alabama</SelectItem>
                      <SelectItem value="CA">California</SelectItem>
                      <SelectItem value="FL">Florida</SelectItem>
                      <SelectItem value="NY">New York</SelectItem>
                      <SelectItem value="TX">Texas</SelectItem>
                      {/* Add more states as needed */}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="zipCode" className="block text-sm font-semibold text-gray-700 mb-2">
                    ZIP Code *
                  </Label>
                  <Input
                    id="zipCode"
                    type="text"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    className="rounded-xl border-2 border-gray-200 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className="bg-green-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-green-500" />
              Financial Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="householdSize" className="block text-sm font-semibold text-gray-700 mb-2">
                  Household Size *
                </Label>
                <Select value={formData.householdSize} onValueChange={(value) => handleInputChange("householdSize", value)}>
                  <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-green-500">
                    <SelectValue placeholder="Select household size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 person</SelectItem>
                    <SelectItem value="2">2 people</SelectItem>
                    <SelectItem value="3">3 people</SelectItem>
                    <SelectItem value="4">4 people</SelectItem>
                    <SelectItem value="5+">5+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="monthlyIncome" className="block text-sm font-semibold text-gray-700 mb-2">
                  Monthly Household Income *
                </Label>
                <Input
                  id="monthlyIncome"
                  type="number"
                  value={formData.monthlyIncome}
                  onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                  placeholder="$2,500"
                  className="rounded-xl border-2 border-gray-200 focus:border-green-500"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="employmentStatus" className="block text-sm font-semibold text-gray-700 mb-2">
                  Employment Status *
                </Label>
                <Select value={formData.employmentStatus} onValueChange={(value) => handleInputChange("employmentStatus", value)}>
                  <SelectTrigger className="rounded-xl border-2 border-gray-200 focus:border-green-500">
                    <SelectValue placeholder="Select employment status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employed">Employed Full-time</SelectItem>
                    <SelectItem value="part-time">Employed Part-time</SelectItem>
                    <SelectItem value="unemployed">Unemployed</SelectItem>
                    <SelectItem value="retired">Retired</SelectItem>
                    <SelectItem value="disabled">Disabled</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

        

           

          {/* Agreements */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Agreements & Verification</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", !!checked)}
                />
                <Label htmlFor="agreeToTerms" className="text-sm text-gray-700 leading-relaxed">
                  I agree to the terms and conditions, and I certify that all information provided is true and accurate
                </Label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <Button
              type="submit"
              disabled={!formData.agreeToTerms || isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full text-lg font-bold h-auto shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                  Submitting Application...
                </>
              ) : (
                <>
                  <FileText className="mr-3 h-5 w-5" />
                  Submit Application
                </>
              )}
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              By submitting this application, you agree to our privacy policy and terms of service
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
