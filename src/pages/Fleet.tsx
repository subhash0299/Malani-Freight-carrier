import React from 'react';
import { Truck, Package, Weight, Shield } from 'lucide-react';

const Fleet = () => {
  const vehicles = [
    {
      type: "Heavy Duty Trucks",
      image: "/truck.jpg",
      capacity: "25-30 Tons",
      description: "Heavy-duty trucks for large cargo and long-distance transportation",
      features: ["GPS Tracking", "Air Suspension", "Climate Control", "Security Systems"]
    },
    {
      type: "Medium Commercial Vehicles",
      image: "/medium.jpg",
      capacity: "10-15 Tons",
      description: "Versatile vehicles perfect for medium-sized shipments and regional transport",
      features: ["Fuel Efficient", "Easy Loading", "City Access", "Reliable Engine"]
    },
    {
      type: "Light Commercial Vehicles",
      image: "/light.jpg",
      capacity: "3-5 Tons",
      description: "Compact vehicles for small to medium cargo and urban deliveries",
      features: ["Urban Friendly", "Quick Delivery", "Cost Effective", "Flexible Routes"]
    }
  ];

  const fleetStats = [
    { icon: <Truck className="h-8 w-8" />, number: "50+", label: "Fleet Vehicles" },
    { icon: <Package className="h-8 w-8" />, number: "1000+", label: "Tons Capacity" },
    { icon: <Weight className="h-8 w-8" />, number: "99%", label: "On-Time Delivery" },
    { icon: <Shield className="h-8 w-8" />, number: "100%", label: "Insured Fleet" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Fleet</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Modern, well-maintained vehicles equipped with the latest technology for safe and reliable transportation
          </p>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {fleetStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-blue-700 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vehicle Categories
            </h2>
            <p className="text-lg text-gray-600">
              Diverse fleet to handle all your transportation requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.type}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{vehicle.type}</h3>
                  <div className="text-blue-700 font-semibold mb-3">{vehicle.capacity}</div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{vehicle.description}</p>
                  <div className="space-y-2">
                    {vehicle.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-700 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Maintenance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Safety & Maintenance
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our fleet undergoes regular maintenance and safety inspections to ensure optimal performance and safety standards. Every vehicle is equipped with modern safety features and tracking systems.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-700">Regular safety inspections and maintenance</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-700">GPS tracking and monitoring systems</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-700">Trained and certified drivers</span>
                </li>
                <li className="flex items-center">
                  <Shield className="h-6 w-6 text-blue-700 mr-3" />
                  <span className="text-gray-700">Comprehensive insurance coverage</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="/safeunloading.jpg"
                alt="Fleet maintenance"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-700 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Specific Vehicle Type?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your specific transport requirements and vehicle needs
          </p>
          <a
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Contact Our Fleet Team
          </a>
        </div>
      </section>
    </div>
  );
};

export default Fleet;