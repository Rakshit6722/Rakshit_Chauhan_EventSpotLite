// SwiperCard.jsx
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Importing a location icon

const SwiperCard = ({ name, location, image }) => {
  return (
    <div className="relative w-full h-72 rounded-lg overflow-hidden group"> {/* Increased height to h-72 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      </div>
      <div className="absolute bottom-0 left-0 flex flex-col text-white p-4">
        <h3 className="text-lg font-bold group-hover:text-orange-500 transition duration-300">{name}</h3>
        <p className="text-sm flex items-center group-hover:text-orange-500 transition duration-300"> {/* Added flex to align icon and text */}
          <FaMapMarkerAlt className="mr-1" /> {/* Location icon */}
          {location}
        </p>
      </div>
    </div>
  );
};

export default SwiperCard;
