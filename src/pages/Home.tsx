import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Clock, MapPin, Shield, Users, CheckCircle, ArrowRight, Globe, Package } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Full Truck Load (FTL)",
      description: "Complete truck capacity for large shipments across India"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Interstate Transport",
      description: "Seamless cargo movement between states with proper documentation"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Cargo Handling",
      description: "Safe and secure handling of valuable goods with insurance coverage"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="h-12 w-12 text-blue-700" />,
      title: "Timely Delivery",
      description: "Committed to on-time delivery with real-time updates"
    },
    {
      icon: <MapPin className="h-12 w-12 text-blue-700" />,
      title: "Nationwide Reach",
      description: "Extensive network covering all major cities and towns"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-700" />,
      title: "Experienced Drivers",
      description: "Professional drivers with years of experience and safety training"
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-700" />,
      title: "Safe & Secure",
      description: "Advanced security measures and GPS tracking for cargo safety"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "ABC Industries",
      text: "Outstanding service! Their team ensured our goods reached safely and on time.",
      rating: 5
    },
    {
      name: "Priya Patel",
      company: "XYZ Manufacturing",
      text: "Reliable and professional. We've been using their services for over 2 years.",
      rating: 5
    }
  ];

  const stats = [
    { icon: <Truck className="h-12 w-12 text-blue-700" />, value: "10,000+", label: "Shipments Delivered" },
    { icon: <Globe className="h-12 w-12 text-blue-700" />, value: "500+", label: "Cities Covered" },
    { icon: <Users className="h-12 w-12 text-blue-700" />, value: "1,000+", label: "Happy Clients" },
    { icon: <Package className="h-12 w-12 text-blue-700" />, value: "50+", label: "Fleet Vehicles" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center h-[600px] flex items-center"
          style={{
            backgroundImage: "url('/truck.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Trusted Transport Solutions<br />
              <span className="text-red-400 animate-pulse">Across India</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Delivering excellence in logistics with our nationwide network, experienced team, and commitment to safety and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Get Quote Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Leading Logistics Partner in India
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With over a decade of experience in the transport industry, Mohan Malani Freight Carrier has established itself as a trusted partner for businesses across India. We specialize in providing comprehensive logistics solutions that ensure your cargo reaches its destination safely and on time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-blue-700 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mohan Malani Freight Carrier?
            </h2>
            <p className="text-lg text-gray-600">
              Experience the difference with our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by businesses across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <CheckCircle key={i} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/testimonials"
              className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center"
            >
              Read More Testimonials
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transport Your Goods?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team for a customized logistics solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;