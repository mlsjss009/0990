
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, MessageCircle, AlertCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";

interface TelegramReportData {
  applicantName: string;
  applicationId: string;
  reportType: string;
  reportDetails: string;
  contactEmail: string;
  urgencyLevel: string;
}

export default function TelegramReportForm() {
  const [formData, setFormData] = useState<TelegramReportData>({
    applicantName: "",
    applicationId: "",
    reportType: "",
    reportDetails: "",
    contactEmail: "",
    urgencyLevel: "normal"
  });

  const telegramMutation = useMutation({
    mutationFn: async (data: TelegramReportData) => {
      const response = await fetch("/api/telegram-report", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send report");
      }
      
      return response.json();
    },
    onSuccess: () => {
      setFormData({
        applicantName: "",
        applicationId: "",
        reportType: "",
        reportDetails: "",
        contactEmail: "",
        urgencyLevel: "normal"
      });
      alert("Report sent successfully to Telegram!");
    },
    onError: (error) => {
      alert("Failed to send report. Please try again.");
      console.error("Error sending report:", error);
    },
  });

  const handleInputChange = (field: keyof TelegramReportData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    telegramMutation.mutate(formData);
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0 rounded-3xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardTitle className="flex items-center text-2xl font-bold">
          <MessageCircle className="mr-3 h-6 w-6" />
          Report Application Issue to Telegram
        </CardTitle>
        <p className="text-blue-100 mt-2">
          Submit urgent application reports that will be sent directly to our Telegram support channel
        </p>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="applicantName" className="block text-sm font-semibold text-gray-700 mb-3">
                Applicant Name *
              </Label>
              <Input
                id="applicantName"
                type="text"
                value={formData.applicantName}
                onChange={(e) => handleInputChange("applicantName", e.target.value)}
                className="w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="applicationId" className="block text-sm font-semibold text-gray-700 mb-3">
                Application ID *
              </Label>
              <Input
                id="applicationId"
                type="text"
                value={formData.applicationId}
                onChange={(e) => handleInputChange("applicationId", e.target.value)}
                placeholder="e.g., APP-2024-001"
                className="w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="reportType" className="block text-sm font-semibold text-gray-700 mb-3">
                Report Type *
              </Label>
              <Select value={formData.reportType} onValueChange={(value) => handleInputChange("reportType", value)}>
                <SelectTrigger className="w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="status_inquiry">Application Status Inquiry</SelectItem>
                  <SelectItem value="document_issue">Document Submission Issue</SelectItem>
                  <SelectItem value="payment_problem">Payment/Grant Issue</SelectItem>
                  <SelectItem value="technical_problem">Technical Problem</SelectItem>
                  <SelectItem value="eligibility_question">Eligibility Question</SelectItem>
                  <SelectItem value="urgent_update">Urgent Information Update</SelectItem>
                  <SelectItem value="complaint">Complaint</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="urgencyLevel" className="block text-sm font-semibold text-gray-700 mb-3">
                Urgency Level *
              </Label>
              <Select value={formData.urgencyLevel} onValueChange={(value) => handleInputChange("urgencyLevel", value)}>
                <SelectTrigger className="w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">🟢 Low - General inquiry</SelectItem>
                  <SelectItem value="normal">🟡 Normal - Standard issue</SelectItem>
                  <SelectItem value="high">🟠 High - Urgent matter</SelectItem>
                  <SelectItem value="critical">🔴 Critical - Emergency</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="contactEmail" className="block text-sm font-semibold text-gray-700 mb-3">
              Contact Email *
            </Label>
            <Input
              id="contactEmail"
              type="email"
              value={formData.contactEmail}
              onChange={(e) => handleInputChange("contactEmail", e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div>
            <Label htmlFor="reportDetails" className="block text-sm font-semibold text-gray-700 mb-3">
              Report Details *
            </Label>
            <Textarea
              id="reportDetails"
              rows={6}
              value={formData.reportDetails}
              onChange={(e) => handleInputChange("reportDetails", e.target.value)}
              placeholder="Please provide detailed information about your issue, including any relevant dates, reference numbers, and steps you've already taken..."
              className="w-full rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
              required
            />
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <div className="flex items-start">
              <AlertCircle className="text-yellow-600 h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800">
                <p className="font-semibold mb-1">Important Notice:</p>
                <p>This report will be sent directly to our Telegram support channel. Our team will review and respond within 2-24 hours depending on urgency level. For immediate emergencies, please also call our hotline.</p>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full text-lg font-bold h-auto w-full"
            disabled={telegramMutation.isPending}
          >
            <Send className="mr-3 h-5 w-5" />
            {telegramMutation.isPending ? "Sending to Telegram..." : "Send Report to Telegram"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
