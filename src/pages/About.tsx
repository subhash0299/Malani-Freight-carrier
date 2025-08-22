import React, { useState } from 'react';
import { Truck, Users, MapPin, Award, Target, Eye } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "30+", label: "Years Experience" },
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Fleet Vehicles" },
    { number: "28", label: "States Covered" }
  ];

  const servicePlaces = [
    "दिल्ली", "जोधपुर", "अहमदाबाद", "पाली", "साण्डेराव", "सुमेरपुर", "शिवगंज", "पिण्डवाडा", "सिरोही", 
    "स्वरुपगंज", "आबूरोड", "रानी", "फालना", "सोजत", "सोजतसिटी", "जैतारण", "पीपाड़", "गोटन", "बिलाड़ा", 
    "व्यावर", "आहोर", "जालोर", "भीनमाल", "रानीवाड़ा", "सांचौर", "डिसा", "धनेरा", "भाद्राजून", "बालोतरा", 
    "पचपदरा", "बायतू", "बाड़मेर", "शिव", "चोहटन", "धोरी मन्ना", "गुडामालानी", "सिन्दडी", "जैसलमेर", 
    "रामदेवरा", "पोकरण", "तिंवरी", "ओसिंया", "फलौदी", "लोहावट", "बावड़ी", "खिंवसर", "नागौर", "भोपालगढ़", 
    "खेडपा", "नौखा", "बीकानेर"
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mohan Malani Freight Carrier</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in logistics and transportation solutions across India
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in 1989, Mohan Malani Freight Carrier has been a pioneer in the logistics industry for over three decades. What began as a small family business with a single truck has grown into one of India's most trusted logistics networks.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With a vision to revolutionize transportation, we have consistently delivered excellence through our reliable services, modern fleet, and a team of dedicated professionals. Over the years, we have built strong relationships with businesses of all sizes, ensuring their cargo reaches its destination safely and on time.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, with over 30 years of experience, we continue to innovate and expand, staying true to our commitment to reliability, safety, and customer satisfaction.
              </p>
            </div>
            <div className="relative">
              <img
                src="/truck.jpg"
                alt="Transport trucks"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-700 opacity-10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To provide reliable, efficient, and cost-effective logistics solutions that enable businesses to focus on their core operations while we handle their transportation needs with utmost care and professionalism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-blue-700 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become India's most trusted logistics partner, known for innovation, reliability, and exceptional customer service, while contributing to the growth of businesses across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Coverage
            </h2>
            <p className="text-lg text-gray-600">
              Extensive network across India's major commercial hubs
            </p>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 ${showAll ? '' : 'max-h-48 overflow-hidden'}`}>
            {servicePlaces.map((city, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <MapPin className="h-6 w-6 text-blue-700 mx-auto mb-2" />
                <p className="font-medium text-gray-900">{city}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-blue-700 font-medium hover:underline"
            >
              {showAll ? "See Less" : "See Full Service Places"}
            </button>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Experienced professionals driving our success
            </p>
          </div>
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="/ceoo.jpg"
                  alt="Amit Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mohan Lal Ji Bishnoi</h3>
              <p className="text-blue-700 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                15+ years in logistics industry with expertise in operations and business development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;