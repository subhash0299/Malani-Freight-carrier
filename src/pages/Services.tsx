import React from 'react';
import { Truck, Package, MapPin, Building, Warehouse, Shield, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Full Truck Load (FTL)",
      description: "Complete truck capacity dedicated to your cargo for large shipments. Ideal for businesses with substantial transport needs requiring exclusive use of our vehicles.",
      features: ["Dedicated vehicle", "Door-to-door delivery", "Flexible scheduling", "Real-time tracking"]
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "Parcel & Cargo Services",
      description: "Efficient handling of smaller shipments and parcels with the same level of care and attention as larger consignments.",
      features: ["Small to medium packages", "Secure packaging", "Quick delivery", "Affordable rates"]
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Interstate Transport",
      description: "Seamless cargo movement between states with proper documentation and compliance with interstate regulations.",
      features: ["All-India coverage", "Legal compliance", "Documentation support", "Route optimization"]
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Industrial Material Handling",
      description: "Specialized transport for industrial goods, machinery, and heavy equipment with appropriate safety measures.",
      features: ["Heavy machinery transport", "Industrial equipment", "Safety protocols", "Expert handling"]
    },
    {
      icon: <Warehouse className="h-12 w-12" />,
      title: "Warehouse-to-Warehouse",
      description: "Direct warehouse delivery services ensuring efficient supply chain management for your business operations.",
      features: ["B2B delivery", "Bulk transport", "Supply chain integration", "Scheduled pickups"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Secure Transport",
      description: "Enhanced security measures for valuable goods including GPS tracking, sealed containers, and insurance coverage.",
      features: ["GPS tracking", "Insurance coverage", "Sealed transport", "Security protocols"]
    }
  ];

  const additionalFeatures = [
    {
      icon: <Clock className="h-8 w-8 text-blue-700" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your transport needs"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-700" />,
      title: "Expert Team",
      description: "Experienced professionals handling your cargo with care"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-700" />,
      title: "Insurance Coverage",
      description: "Comprehensive insurance protection for your valuable goods"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive logistics solutions designed to meet your business transportation needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-blue-700 mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Value-added services that set us apart from the competition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
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

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600">
              Simple and efficient process for all your transport needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">Get in touch with your transport requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Quote</h3>
              <p className="text-gray-600">Receive competitive pricing for your shipment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Pickup</h3>
              <p className="text-gray-600">Arrange convenient pickup time and location</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe Delivery</h3>
              <p className="text-gray-600">Secure and timely delivery to destination</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Custom Transport Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific requirements and get a customized quote
          </p>
          <a
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get Custom Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;