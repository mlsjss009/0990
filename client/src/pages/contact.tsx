
import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-page-teal text-ngo-neutral-dark">
      <Navigation />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96" style={{background: 'radial-gradient(circle, hsl(var(--teal-light) / 0.15), transparent)'}}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80" style={{background: 'radial-gradient(circle, hsl(var(--navy-light) / 0.12), transparent)'}}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold mb-8 shadow-lg" style={{color: 'hsl(var(--teal-dark))'}}>
            <MessageCircle className="mr-2 h-5 w-5" />
            Let's Connect
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text-cool">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed mb-12">
            We'd love to hear from you. Whether you have questions or want to get involved, we're here to help
          </p>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Mail, title: "Email Us", info: "info@hopetogether.org", description: "Response within 24 hours" },
              { icon: Phone, title: "Call Us", info: "+1 (555) 123-4567", description: "Mon-Fri, 9am-5pm EST" },
              { icon: MapPin, title: "Visit Us", info: "Global Headquarters", description: "Schedule an appointment" }
            ].map((contact, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <div className="font-bold text-xl text-ngo-neutral-dark mb-2">{contact.title}</div>
                <div className="text-ngo-primary font-semibold mb-2">{contact.info}</div>
                <div className="text-sm text-ngo-neutral">{contact.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <ContactSection />
      <Footer />
    </div>
  );
}
