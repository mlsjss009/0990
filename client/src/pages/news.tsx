
import Navigation from "@/components/navigation";
import NewsSection from "@/components/news-section";
import Footer from "@/components/footer";
import { Newspaper, Calendar, TrendingUp, Globe } from "lucide-react";

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 text-ngo-neutral-dark">
      <Navigation />
      
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-cyan-600 mb-8 shadow-lg">
            <Newspaper className="mr-2 h-5 w-5" />
            Latest Updates
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            News & Stories
          </h1>
          <p className="text-xl md:text-2xl text-ngo-neutral max-w-4xl mx-auto leading-relaxed mb-12">
            Stay informed about our latest initiatives, success stories, and community impact across the globe
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Calendar, title: "Weekly Updates", value: "52+", description: "Stories published annually" },
              { icon: TrendingUp, title: "Impact Reports", value: "12", description: "Quarterly detailed reports" },
              { icon: Globe, title: "Countries", value: "25", description: "Global news coverage" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-600 mb-2">{stat.value}</div>
                <div className="font-semibold text-ngo-neutral-dark mb-2">{stat.title}</div>
                <div className="text-sm text-ngo-neutral">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <NewsSection />
      <Footer />
    </div>
  );
}
