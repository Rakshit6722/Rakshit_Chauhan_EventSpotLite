import React, { useState, useEffect } from 'react';
import Form from '../components/home/Form';
import coverImage from '../assets/event_cover.jpg';

const Logo = ({ className = "" }) => (
  <div className={`flex-shrink-0 ${className}`}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 240 40"
      className="w-full h-full"
    >
      <circle cx="16" cy="20" r="12" fill="#FFFFFF" opacity="0.95" />
      <circle cx="24" cy="20" r="12" fill="#FFFFFF" opacity="0.75" />
      <circle cx="32" cy="20" r="12" fill="#FFFFFF" opacity="0.55" />

      <text x="44" y="27" fontFamily="Arial" fontWeight="bold" fontSize="22" fill="#FFFFFF">
        Event<tspan fill="#FFD1B8">Spot</tspan>
      </text>

      <text x="155" y="27" fontFamily="Arial" fontWeight="300" fontSize="16" fill="#FFFFFF" opacity="0.8">
        Lite
      </text>

      <circle cx="16" cy="20" r="1.5" fill="#FFFFFF" />
      <circle cx="24" cy="20" r="1.5" fill="#FFFFFF" />
      <circle cx="32" cy="20" r="1.5" fill="#FFFFFF" />
    </svg>
  </div>
);

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.src = coverImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-rose-500 w-full h-screen flex sm:flex-row">
      {/* Form container */}
      <div className="relative w-full h-full sm:w-1/2 flex flex-col items-center justify-center z-10">
        <div className="mb-4 sm:mb-2 w-full px-4 sm:px-0">
          <Logo className="w-64 h-16 sm:w-56 sm:h-14 mx-auto hover:opacity-90 transition-opacity" />
        </div>
        <Form />
      </div>

      {/* Image container for larger screens */}
      <div className="hidden sm:block w-full h-full sm:w-1/2 relative overflow-hidden">
        {/* Low quality placeholder */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-orange-400 to-rose-400 blur-xl"
          style={{ opacity: imageLoaded ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}
        />
        
        <img
          src={coverImage}
          alt="Event cover"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
          }}
          style={{
            opacity: 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      </div>
    </div>
  );
};

export default Home;