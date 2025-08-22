import React from 'react';
import { Star, Quote, Building, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      position: "Supply Chain Manager",
      company: "Global Industries Ltd.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Mohan Malani Freight Carrier has been our logistics partner for over 3 years. Their reliability and professionalism are unmatched. Every shipment reaches on time and in perfect condition.",
      rating: 5
    },
    {
      name: "Priya Patel",
      position: "Operations Director",
      company: "Zeel Manufacturing",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Outstanding service quality! Their team goes above and beyond to ensure our goods are handled with care. The real-time tracking gives us complete peace of mind.",
      rating: 5
    },
    {
      name: "Arjun Reddy",
      position: "Procurement Head",
      company: "Global Textiles Pvt. Ltd.",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Excellent communication and transparent pricing.Mohan Malani Freight Carrier has helped us reduce our logistics costs while improving delivery times. Highly recommended!",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      position: "Logistics Coordinator",
      company: "Tech Solutions Inc.",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Professional team with deep industry knowledge. They understand our business needs and provide customized solutions. Never had any issues with deliveries.",
      rating: 5
    },
    {
      name: "Vikram Singh",
      position: "General Manager",
      company: "Industrial Equipment Co.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Their heavy machinery transport service is exceptional. Complex industrial equipment delivered safely across states. Truly professionals in their field.",
      rating: 5
    },
    {
      name: "Meera Krishnan",
      position: "Export Manager",
      company: "Spice Exports Ltd.",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Reliable partner for our export shipments. Their documentation support and port connectivity have streamlined our export operations significantly.",
      rating: 5
    }
  ];

  const clientLogos = [
    "Global Industries", "Zeel Manufacturing", "Global Textiles", "Tech Solutions", 
    "Industrial Equipment Co.", "Spice Exports", "Metro Construction", "Prime Foods"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied clients about their experience with Mohan Malani Freight Carrier
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <Quote className="h-8 w-8 text-blue-700 mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-blue-700">{testimonial.position}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-lg text-gray-600">
              We proudly serve businesses across various industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <Building className="h-8 w-8 text-blue-700 mx-auto mb-2" />
                  <p className="font-medium text-gray-900">{client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-lg text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Successful Deliveries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">99.8%</div>
              <div className="text-gray-600 font-medium">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the Mohan Malani Freight Carrier difference and see why businesses choose us for their logistics needs
          </p>
          <a
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Start Your Partnership Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;