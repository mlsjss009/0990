import { Users, Leaf } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Community members gathering for meeting"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-ngo-neutral-dark mb-6">
              About CBNF
            </h2>
            <p className="text-lg text-ngo-neutral mb-6 leading-relaxed">
              Community Boost Nationwide Foundation (CBNF) is dedicated to strengthening communities across America through comprehensive support programs. We provide financial assistance, educational resources, and community development initiatives to help individuals and families achieve sustainable growth.
            </p>
            <p className="text-lg text-ngo-neutral mb-8 leading-relaxed">
              Our nationwide network ensures that support reaches every corner of the country, from urban centers to rural communities. Through our application-based programs, we connect resources with those who need them most, creating lasting positive impact.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                  <Users className="text-ngo-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-ngo-neutral-dark mb-1">Community-Centered</h3>
                  <p className="text-ngo-neutral text-sm">Solutions designed by and for local communities</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mr-4">
                  <Leaf className="text-ngo-accent h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-ngo-neutral-dark mb-1">Sustainable Impact</h3>
                  <p className="text-ngo-neutral text-sm">Long-term solutions that create lasting change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}