import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Key, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AdminPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastPassword, setLastPassword] = useState("");
  const { toast } = useToast();

  const generatePassword = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setLastPassword(data.password || "Password sent to Telegram");
        toast({
          title: "Password Generated Successfully",
          description: "The new password has been sent to your Telegram chat",
          variant: "default",
        });
      } else {
        throw new Error(data.message || "Failed to generate password");
      }
    } catch (error) {
      console.error("Error generating password:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate password. Please check your Telegram configuration.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Admin Panel
          </h1>
          <p className="text-gray-600">Generate new access passwords for the website</p>
        </div>

        <Card className="shadow-xl border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-6 w-6 text-indigo-600" />
              Password Generator
            </CardTitle>
            <CardDescription>
              Generate a new 8-character password that will be sent to your Telegram bot. The password is valid for 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Send className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-1">Telegram Integration</h3>
                  <p className="text-sm text-indigo-700">
                    When you click the button below, a new password will be automatically generated and sent to your configured Telegram chat.
                  </p>
                </div>
              </div>
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
                  Generating...
                </>
              ) : (
                <>
                  <Key className="mr-2 h-5 w-5" />
                  Generate New Password
                </>
              )}
            </Button>

            {lastPassword && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-in fade-in slide-in-from-bottom-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-green-900 mb-1">Password Sent!</h3>
                    <p className="text-sm text-green-700">
                      Check your Telegram chat for the new password. It's valid for the next 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="border-t pt-6">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-gray-600" />
                Important Notes
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span>Passwords are 8 characters long (uppercase letters and numbers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span>Each password expires after 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span>Generating a new password does not invalidate old ones until they expire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 font-bold mt-0.5">•</span>
                  <span>Share the password only with authorized users</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Protected route - Admin access only
          </p>
        </div>
      </div>
    </div>
  );
}
