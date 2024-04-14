import React from 'react';
import Footer from './footer';

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-gray-800">Our Services</h1>
        </div>
      </header>

      {/* Services Section */}
      <section className="services py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Service 1</h2>
              <p className="text-lg mb-4">Description of the service goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Learn More</button>
            </div>

            {/* Service Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Service 2</h2>
              <p className="text-lg mb-4">Description of the service goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Learn More</button>
            </div>

            {/* Service Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Service 3</h2>
              <p className="text-lg mb-4">Description of the service goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Learn More</button>
            </div>

            {/* Add more service cards as needed */}
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="cta py-16 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Contact us today to discuss your project or schedule a consultation.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline">Contact Us</button>
        </div>
      </section>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
}

export default ServicesPage;
