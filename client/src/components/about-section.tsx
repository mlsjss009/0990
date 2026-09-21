import { Users, Leaf, Target, Award, Globe } from "lucide-react";

export default function AboutSection() {
  const vision = [
    "Our vision for the future is to reach even more people across more countries, building a wider network of partners and supporters who share our commitment to creating positive social change. As needs continue to evolve around the world, CBNF is committed to expanding its reach, strengthening existing programs, and developing new initiatives that respond to emerging challenges.",
    "We aim to extend our work into communities that have historically had limited access to support and opportunities, while continuing to work closely with trusted local organizations that understand their communities best. By building strong partnerships across borders, we can share knowledge, resources, expertise, and innovative solutions to help communities respond to both immediate needs and long-term challenges.",
    "Our goal is not simply to reach more countries, but to build meaningful and lasting relationships wherever we work. We want every new program to contribute to stronger communities and greater opportunities for the people we serve.",
    "CBNF will continue working toward a world where people are not defined by poverty or circumstance, and where everyone has the opportunity to live with dignity, hope, and the chance to build a better future."
  ];

  const values = [
    {
      icon: Users,
      title: "Community-Centered",
      description: "Solutions designed by and for local communities",
      color: "text-ngo-primary",
      bgColor: "bg-blue-50"
    },
    {
      icon: Leaf,
      title: "Sustainable Impact",
      description: "Long-term solutions that create lasting change",
      color: "text-ngo-accent",
      bgColor: "bg-green-50"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Measurable outcomes and transparent reporting",
      color: "text-ngo-secondary",
      bgColor: "bg-orange-50"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Highest standards in program delivery",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-green-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Community members gathering for meeting"
                className="rounded-3xl shadow-2xl w-full h-auto card-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg floating-animation">
              <Leaf className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg floating-animation" style={{ animationDelay: "1s" }}>
              <Users className="h-7 w-7 text-white" />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass-effect rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-white">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">25</div>
                    <div className="text-sm text-white">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-sm font-semibold text-ngo-accent mb-6">
              <Target className="mr-2 h-4 w-4" />
              Our Story
            </div>
            <h2 className="text-5xl font-bold text-ngo-neutral-dark mb-8 section-divider pb-4">
              Building Bridges to a Better Tomorrow
            </h2>
            <p className="text-xl text-ngo-neutral mb-6 leading-relaxed">
              Founded in 2010, CBNF emerged from a simple belief: that communities thrive when people come together with shared purpose. What started as a local initiative has grown into a global movement, touching lives across 25 countries and creating opportunities for individuals and communities to build safer, healthier, and more sustainable futures.
            </p>
            <p className="text-lg text-ngo-neutral mb-6 leading-relaxed">
              We partner with local organizations, major corporations, community leaders, volunteers, and dedicated individuals to address the root causes of poverty, inequality, and social injustice. Through these partnerships, we support people facing hardship and work alongside communities to create practical solutions that can lead to lasting change.
            </p>
            <p className="text-lg text-ngo-neutral mb-6 leading-relaxed">
              Our work focuses on reaching people who are most in need, including vulnerable families, children and young people, marginalized communities, and individuals affected by poverty, displacement, disaster, and limited access to essential opportunities and resources. We believe that meaningful support goes beyond short-term assistance. It means listening to communities, understanding their needs, strengthening local capacity, and helping create pathways toward greater independence and resilience.
            </p>
            <p className="text-lg text-ngo-neutral mb-10 leading-relaxed">
              From providing essential support and resources to investing in education, community development, livelihoods, and long-term empowerment, Hope Together works to make a meaningful difference wherever there is a need. Every program is shaped by the realities of the communities we serve, with the goal of ensuring that support reaches people in a respectful, effective, and sustainable way.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {values.map((value, index) => (
                <div key={index} className="flex items-start group">
                  <div className={`flex-shrink-0 w-14 h-14 ${value.bgColor} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className={`${value.color} h-7 w-7`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ngo-neutral-dark mb-2 text-lg">{value.title}</h3>
                    <p className="text-ngo-neutral leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-ngo-primary rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-ngo-neutral-dark">Recognized Excellence</div>
                  <div className="text-sm text-ngo-neutral">UN Global Compact Participant & B-Corp Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Looking Ahead */}
        <div className="mt-24 pt-16 border-t border-gray-100">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-ngo-primary mb-6">
              <Globe className="mr-2 h-4 w-4" />
              Our Vision
            </div>
            <h2 className="text-5xl font-bold text-ngo-neutral-dark section-divider pb-4">Looking Ahead</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {vision.map((paragraph, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg card-hover">
                <p className="text-lg text-ngo-neutral leading-relaxed">{paragraph}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-ngo-primary rounded-3xl p-10 text-center shadow-2xl">
            <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
              Together, we can extend the reach of hope — from one community to many, and from one country to the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}