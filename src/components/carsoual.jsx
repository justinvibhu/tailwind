import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numImages = 3; // Number of images to show in the carousel at a time
  const images = [
    'https://images.unsplash.com/photo-1620912881764-9a6636d6946b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbCUyMHJlc2N1ZXxlbnwwfHwwfHx8MA%3D%3D',
    'https://media.istockphoto.com/id/1516239450/photo/love-portrait-and-family-with-dog-at-animal-shelter-for-adoption-at-kennel.webp?b=1&s=170667a&w=0&k=20&c=XU-0AYlpE7qJboU--vZ5wdxJzFNkfJUPtwtMuLNLUi8=',
    'https://media.istockphoto.com/id/1172155138/photo/animal-shelter.webp?b=1&s=170667a&w=0&k=20&c=ebOZlODM0VDE_ENWXDfJJ8dDkmDX0lzypFK1o6MBEjw=',
    'https://plus.unsplash.com/premium_photo-1664095348139-6e1f353dd483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsJTIwcmVzY3VlfGVufDB8fDB8fHww',
    
    'https://media.istockphoto.com/id/1172144913/photo/young-happy-family-enjoying-with-their-golden-retriever-at-home.jpg?s=612x612&w=0&k=20&c=o8FoSAcnu_GadyXR02v9dT6SVVG2WjZhALjr9gTzZ8k=',
    'https://images.unsplash.com/photo-1554830072-52d78d0d4c18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsJTIwcmVzY3VlfGVufDB8fDB8fHww',
];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds (3000 milliseconds)

    return () => clearInterval(intervalId); // Cleanup function to clear the interval when component unmounts
  }, []); // Run effect only once when component mounts

  // Calculate the starting index for the visible images
  const startIndex = currentIndex % images.length;
  // Slice the images array to get a subset of images based on the starting index and the number of images to show
  const visibleImages = images.slice(startIndex, startIndex + numImages);

  return (
    <div className="container mx-auto px-4 py-8 relative flex justify-center items-center">
      {visibleImages.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Image ${currentIndex + index + 1}`}
          className="w-96 h-100 object-cover mx-5"
        />
      ))}
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md focus:outline-none">Prev</button>
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md focus:outline-none">Next</button>
    </div>
  );
};

export default Carousel;
