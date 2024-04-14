import React from 'react';
import Navbar from './Navbar';

const AboutUsPage = () => {
  return (
    
    <><Navbar /><div className="bg-gray-100 min-h-screen">
          {/* Header Section */}
          {/* <header className="bg-white py-4 shadow-md">
              <div className="container mx-auto">
                  <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
              </div>
          </header> */}

          {/* Hero Section */}
          <section className="hero bg-gray-800 text-white py-20">
              <div className="container mx-auto text-center">
                  <h2 className="text-4xl font-bold mb-4">Welcome to Our Company</h2>
                  <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
          </section>

          {/* About Us Section */}
          <section className="about py-16">
              <div className="container mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                      <div>
                          <img src="/about-us-image.jpg" alt="About Us" className="w-full rounded-lg shadow-lg" />
                      </div>
                  </div>
              </div>
          </section>

          {/* Core Values Section */}
          <section className="core-values bg-gray-200 py-16">
              <div className="container mx-auto">
                  <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                          <h3 className="text-xl font-bold mb-2">Quality</h3>
                          <p className="text-lg">We are committed to delivering high-quality products/services.</p>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                          <h3 className="text-xl font-bold mb-2">Innovation</h3>
                          <p className="text-lg">We continuously innovate to meet the evolving needs of our customers.</p>
                      </div>
                      <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                          <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
                          <p className="text-lg">Customer satisfaction is our top priority.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* Team Section */}
          <section className="team py-16">
              <div className="container mx-auto">
                  <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Team member cards go here */}
                  </div>
              </div>
          </section>

          {/* Testimonials Section */}
          <section className="testimonials py-16">
              <div className="container mx-auto">
                  <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Testimonial cards go here */}
                  </div>
              </div>
          </section>

          {/* Footer Section */}
          <footer className="bg-gray-800 text-white py-4">
              <div className="container mx-auto text-center">
                  <p>&copy; 2024 Company Name. All rights reserved.</p>
              </div>
          </footer>
      </div></>
  );
}

export default AboutUsPage;
