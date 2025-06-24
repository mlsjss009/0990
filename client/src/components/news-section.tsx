import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NewsSection() {
  const news = [
    {
      date: "March 15, 2024",
      title: "New Education Center Opens in Rural Bangladesh",
      description: "Thanks to our donors and local partners, 500 children now have access to quality education in their community.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "New school building with children"
    },
    {
      date: "March 8, 2024",
      title: "Clean Water Initiative Reaches Milestone",
      description: "Our clean water program has now provided safe drinking water to over 50,000 people across 12 countries.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Clean water well installation"
    },
    {
      date: "February 28, 2024",
      title: "Women's Entrepreneurship Program Expands",
      description: "Launch of new entrepreneurship training centers in Kenya, Peru, and Vietnam supporting 1,200 women.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      alt: "Women entrepreneurs training workshop"
    },
  ];

  return (
    <section className="py-20 bg-ngo-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-ngo-neutral-dark mb-4">Latest News & Updates</h2>
          <p className="text-lg text-ngo-neutral">
            Stay informed about our ongoing projects, impact stories, and upcoming initiatives.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={article.image}
                alt={article.alt}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="text-sm text-ngo-neutral mb-2">{article.date}</div>
                <h3 className="text-xl font-semibold text-ngo-neutral-dark mb-3">{article.title}</h3>
                <p className="text-ngo-neutral mb-4">{article.description}</p>
                <button className="text-ngo-primary font-medium hover:text-blue-800 transition-colors">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-ngo-primary hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
