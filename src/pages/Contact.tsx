import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, X } from 'lucide-react';

const Contact = () => {
  const [popupType, setPopupType] = useState(null);

  const offices = [
    {
      name: "Jodhpur Head Office",
      address: "Bhut Oil Mill, 3 Heavy Industrial Area, Opp. Marwar Tent, Near Kunkundeep Garden, Jodhpur - 342001",
      phones: ["9414498849", "9571244308"],
      email: "sureshkudi1234@gmail.com",
      hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
      mapLink: "https://maps.google.com/?q=26.2557029724121,73.0075149536133",
      whatsapp: ["9414498849", "9571244308"]
    },
    {
      name: "Delhi Head Office",
      address: "47 Khanna Market, Tis Hajari, Delhi -54",
      phones: ["9717171548", "9929001529"],
      email: "sureshkudi1234@gmail.com",
      hours: "Monday - Subday: 9:00 AM - 7:00 PM",
      mapLink: "https://maps.app.goo.gl/iHtrZXZsV5FhVPRE7",
      whatsapp: ["9717171548", "9929001529"]
    },
    {
      name: "Delhi Branch Office",
      address: "66 Feet Road, Bharat Propert ke pass, LIBASPUR",
      phones: ["9811931290", "8178203560"],
      email: "sureshkudi1234@gmail.com",
      hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
      mapLink: "https://maps.google.com/?q=28.6640796661377,77.2171096801758",
      whatsapp: ["9811931290", "8178203560"]
    },
    {
      name: "Rajkot/Ahmedabad Office",
      addresses: [
        "H.O.: A/2 Bansidhar Eatate Opp. Patel Metals, O/s. Dariyapur Gate, Bardolpura, AHMEDABAD",
        "B.O.: Asarali Ahmedabad Godown No. 18, Raghuvir Estate-2, Near Murlidhar Hotel Bypass Road, National Highway-8, AHMEDABAD",
        "B.O.: ODHAV Adinath Nagar, Jadeshwar Mandir, Near Santmerry Gold School, ODHAV ",
        "B.O.: SARKHEJ A/B Suvidha Eastate, Opp. Jaipur Golden Transport, Ujjala Circle, SARKHEJ "
      ],
      phones: ["9929041529", "9929251419", "9929041529", "9327096031", "9929041529", "9904771701", "9929041529", "9638868754"],
      email: "sureshkudi1234@gmail.com",
      hours: "Monday - Saturday: 9:00 AM - 7:00 PM",
      mapLinks: [
        "https://goo.gl/maps/exampleRajkotHO"
      ],
      whatsapp: ["9929041529", "9929251419", "9327096031", "9904771701"]
    }
  ];

  const closePopup = () => setPopupType(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Connect with our team across India for all your transportation and logistics needs
          </p>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at any of our strategically located offices across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Delhi Head Office */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{offices[1].name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-700 mt-1" />
                    <p className="text-gray-600">{offices[1].address}</p>
                  </div>
                  {offices[1].phones.map((phone, phoneIndex) => (
                    <div key={phoneIndex} className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-700" />
                      <a href={`tel:${phone}`} className="text-gray-600 hover:text-blue-700">
                        {phone}
                      </a>
                    </div>
                  ))}
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-700" />
                    <a href={`mailto:${offices[1].email}`} className="text-gray-600 hover:text-blue-700">
                      {offices[1].email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-700" />
                    <p className="text-gray-600">{offices[1].hours}</p>
                  </div>
                </div>
              </div>
              <div className="flex-grow bg-gray-200 flex items-center justify-center border-t">
                <a
                  href={offices[1].mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center text-center"
                >
                  <div>
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">{offices[1].name}</p>
                    <p className="text-blue-700 hover:underline">View on Google Maps</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Delhi Branch Office */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{offices[2].name}</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-700 mt-1" />
                    <p className="text-gray-600">{offices[2].address}</p>
                  </div>
                  {offices[2].phones.map((phone, phoneIndex) => (
                    <div key={phoneIndex} className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-700" />
                      <a href={`tel:${phone}`} className="text-gray-600 hover:text-blue-700">
                        {phone}
                      </a>
                    </div>
                  ))}
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-700" />
                    <a href={`mailto:${offices[2].email}`} className="text-gray-600 hover:text-blue-700">
                      {offices[2].email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-700" />
                    <p className="text-gray-600">{offices[2].hours}</p>
                  </div>
                </div>
              </div>
              <div className="flex-grow bg-gray-200 flex items-center justify-center border-t">
                <a
                  href={offices[2].mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-full flex items-center justify-center text-center"
                >
                  <div>
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">{offices[2].name}</p>
                    <p className="text-blue-700 hover:underline">View on Google Maps</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Jodhpur Office */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{offices[0].name}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-700 mt-1" />
                  <p className="text-gray-600">{offices[0].address}</p>
                </div>
                {offices[0].phones.map((phone, phoneIndex) => (
                  <div key={phoneIndex} className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-700" />
                    <a href={`tel:${phone}`} className="text-gray-600 hover:text-blue-700">
                      {phone}
                    </a>
                  </div>
                ))}
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-700" />
                  <a href={`mailto:${offices[0].email}`} className="text-gray-600 hover:text-blue-700">
                    {offices[0].email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-700" />
                  <p className="text-gray-600">{offices[0].hours}</p>
                </div>
              </div>
            </div>
            <div className="flex-grow bg-gray-200 flex items-center justify-center border-t">
              <a
                href={offices[0].mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center text-center"
              >
                <div>
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">{offices[0].name}</p>
                  <p className="text-blue-700 hover:underline">View on Google Maps</p>
                </div>
              </a>
            </div>
          </div>

          {/* Rajkot/Ahmedabad Office */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col mt-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{offices[3].name}</h3>
              <div className="space-y-3">
                {offices[3].addresses.map((address, addrIndex) => (
                  <div key={addrIndex} className="space-y-1">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-blue-700 mt-1" />
                      <p className="text-gray-600">{address}</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      {offices[3].phones.slice(addrIndex * 2, addrIndex * 2 + 2).map((phone, phoneIndex) => (
                        <div key={phoneIndex} className="flex items-center space-x-2">
                          <Phone className="h-5 w-5 text-blue-700" />
                          <a href={`tel:${phone}`} className="text-gray-600 hover:text-blue-700">
                            {phone}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-700" />
                  <a href={`mailto:${offices[3].email}`} className="text-gray-600 hover:text-blue-700">
                    {offices[3].email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-700" />
                  <p className="text-gray-600">{offices[3].hours}</p>
                </div>
              </div>
            </div>
            <div className="flex-grow bg-gray-200 flex items-center justify-center border-t">
              <a
                href={offices[3].mapLinks?.[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center text-center"
              >
                <div>
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">{offices[3].name}</p>
                  <p className="text-blue-700 hover:underline">View on Google Maps</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-600">
              Get immediate assistance through these direct contact options
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <button
              onClick={() => setPopupType("call")}
              className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Call Now</h3>
              <p className="text-red-100">Immediate assistance</p>
            </button>
            <button
              onClick={() => setPopupType("whatsapp")}
              className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageSquare className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-green-100">Quick chat support</p>
            </button>
            <a
              href="mailto:info@transportpro.com"
              className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">Detailed inquiries</p>
            </a>
          </div>
        </div>
      </section>

      {/* Popup */}
      {popupType && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {popupType === "call" ? "Select a Number to Call" : "Select a Number for WhatsApp"}
            </h3>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <div key={index}>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{office.name}</h4>
                  <div className="space-y-2">
                    {(popupType === "call" ? office.phones : office.whatsapp).map((number, numIndex) => (
                      <a
                        key={numIndex}
                        href={popupType === "call" ? `tel:${number}` : `https://wa.me/${number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-700 hover:underline"
                      >
                        {number}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Shipment?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our nearest office or call our 24/7 helpline for immediate assistance
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;