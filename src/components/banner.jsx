import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState(0);
  const backgrounds = [
    "url('https://media.istockphoto.com/id/1923804009/photo/black-puppy-on-a-black-background.webp?b=1&s=170667a&w=0&k=20&c=S08qBhODBkHXPDRSKgEgzWGI7Vl1jzRceayZQ0hE5zQ=')",
    "url('https://media.istockphoto.com/id/1303399346/photo/large-beagle-dog-gets-a-treat-in-the-studio.jpg?s=612x612&w=0&k=20&c=QVlz2C0ocZNYPXxIsYVDJ_V6OrTApoeGix2lE1Qq4ig=')",
    "url('https://images.unsplash.com/photo-1599133718175-9c39750b8f2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsJTIwcmVzY3VlfGVufDB8fDB8fHww')",
    // Add more background image URLs here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundImage(prevIndex => (prevIndex + 1) % backgrounds.length);
    }, 10000); // Change background image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-black opacity-100" >
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0 w-auto h-50" style={{ backgroundImage: backgrounds[backgroundImage] }}></div>
      
      {/* Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 relative z-10">
        <div className="sm:text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-indigo-200">Animal Rescue</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
          Saving Lives, One Paw at a Time: Join the Rescue Revolution!
          </p>
          <div className="mt-8 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </div>

    
  );
}

export default Banner;
