import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      content: "123 Hope Street, New York, NY 10001",
      color: "text-ngo-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      color: "text-ngo-accent"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@hopetogether.org",
      color: "text-ngo-secondary"
    }
  ];

  const socialLinks = [
    { name: "Facebook", color: "bg-blue-600" },
    { name: "Twitter", color: "bg-sky-500" },
    { name: "Instagram", color: "bg-pink-500" },
    { name: "LinkedIn", color: "bg-blue-700" }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-orange-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-ngo-primary mb-6">
            <MessageCircle className="mr-2 h-4 w-4" />
            Let's Connect
          </div>
          <h2 className="text-5xl font-bold text-ngo-neutral-dark mb-6 section-divider pb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-ngo-neutral max-w-3xl mx-auto leading-relaxed">
            Have questions about our programs or want to get involved? We'd love to hear from you and explore how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="block text-sm font-semibold text-ngo-neutral-dark mb-3">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="w-full h-12 rounded-xl border-2 border-gray-200 focus:border-ngo-primary transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="block text-sm font-semibold text-ngo-neutral-dark mb-3">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="w-full h-12 rounded-xl border-2 border-gray-200 focus:border-ngo-primary transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-semibold text-ngo-neutral-dark mb-3">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full h-12 rounded-xl border-2 border-gray-200 focus:border-ngo-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-semibold text-ngo-neutral-dark mb-3">
                      Subject *
                    </Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="h-12 rounded-xl border-2 border-gray-200 focus:border-ngo-primary">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="donations">Donations</SelectItem>
                        <SelectItem value="press">Press/Media</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="block text-sm font-semibold text-ngo-neutral-dark mb-3">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="w-full rounded-xl border-2 border-gray-200 focus:border-ngo-primary transition-colors resize-none"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="btn-premium text-white px-10 py-4 rounded-full text-lg font-bold h-auto w-full"
                    disabled={contactMutation.isPending}
                  >
                    <Send className="mr-3 h-5 w-5" />
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-ngo-neutral-dark mb-8">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start group">
                      <div className={`flex-shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className={`${info.color} h-6 w-6`} />
                      </div>
                      <div>
                        <div className="font-bold text-ngo-neutral-dark text-lg mb-1">{info.title}</div>
                        <div className="text-ngo-neutral leading-relaxed">{info.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0 rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-ngo-neutral-dark mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <button
                      key={index}
                      className={`${social.color} text-white rounded-2xl p-4 hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold`}
                    >
                      {social.name}
                    </button>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl">
                  <div className="text-sm text-ngo-neutral text-center">
                    Follow our journey and stay updated with our latest impact stories and community initiatives.
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}