import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";

export default function NewsSection() {
  const news = [
    {
      date: "March 15, 2024",
      title: "New Education Center Opens in Rural Bangladesh",
      description: "Thanks to our donors and local partners, 500 children now have access to quality education in their community.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "New school building with children",
      category: "Education",
      readTime: "3 min read"
    },
    {
      date: "March 8, 2024",
      title: "Clean Water Initiative Reaches Milestone",
      description: "Our clean water program has now provided safe drinking water to over 50,000 people across 12 countries.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Clean water well installation",
      category: "Healthcare",
      readTime: "4 min read"
    },
    {
      date: "February 28, 2024",
      title: "Women's Entrepreneurship Program Expands",
      description: "Launch of new entrepreneurship training centers in Kenya, Peru, and Vietnam supporting 1,200 women.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Women entrepreneurs training workshop",
      category: "Economic Empowerment",
      readTime: "5 min read"
    },
  ];

  const categoryColors = {
    "Education": "bg-blue-100 text-blue-800",
    "Healthcare": "bg-green-100 text-green-800",
    "Economic Empowerment": "bg-orange-100 text-orange-800"
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-green-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-ngo-primary mb-6">
            <Newspaper className="mr-2 h-4 w-4" />
            Latest Updates
          </div>
          <h2 className="text-5xl font-bold text-ngo-neutral-dark mb-6 section-divider pb-4">
            News & Updates
          </h2>
          <p className="text-xl text-ngo-neutral max-w-3xl mx-auto leading-relaxed">
            Stay informed about our ongoing projects, impact stories, and upcoming initiatives from around the world.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card 
              key={index} 
              className="bg-white shadow-xl overflow-hidden card-hover border-0 rounded-3xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 text-sm text-ngo-neutral mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-ngo-neutral-dark mb-4 group-hover:text-ngo-primary transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-ngo-neutral mb-6 leading-relaxed">{article.description}</p>
                
                <button className="inline-flex items-center text-ngo-primary font-semibold hover:text-ngo-primary-dark transition-colors group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold">
            <Newspaper className="mr-3 h-5 w-5" />
            View All News
          </Button>
          
          <div className="mt-8">
            <div className="inline-flex items-center space-x-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl px-8 py-4">
              <div className="text-center">
                <div className="text-lg font-bold text-ngo-neutral-dark">Weekly</div>
                <div className="text-sm text-ngo-neutral">Newsletter</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-lg font-bold text-ngo-neutral-dark">Monthly</div>
                <div className="text-sm text-ngo-neutral">Impact Reports</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-lg font-bold text-ngo-neutral-dark">Real-time</div>
                <div className="text-sm text-ngo-neutral">Project Updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}