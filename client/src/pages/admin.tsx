import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Key, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastGenerated, setLastGenerated] = useState(false);
  const { toast } = useToast();

  const generatePassword = async () => {
    setIsGenerating(true);
    setLastGenerated(false);
    
    try {
      const response = await fetch("/api/generate-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setLastGenerated(true);
        toast({
          title: "Password Sent to Telegram",
          description: "Check your Telegram bot for the new password",
        });
      } else {
        throw new Error(data.message || "Failed to generate password");
      }
    } catch (error) {
      console.error("Error generating password:", error);
      toast({
        title: "Error",
        description: "Failed to send password to Telegram",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Key className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Generate Password
          </h1>
          <p className="text-gray-600">Send new access password to Telegram</p>
        </div>

        <Button
          onClick={generatePassword}
          disabled={isGenerating}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-6 rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all"
          data-testid="button-generate-password"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Key className="mr-2 h-5 w-5" />
              Generate & Send Password
            </>
          )}
        </Button>

        {lastGenerated && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-green-900">Password Sent!</p>
                <p className="text-xs text-green-700">Check your Telegram for the new password</p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Password will be sent to @Lottercodebot
          </p>
        </div>
      </div>
    </div>
  );
}
