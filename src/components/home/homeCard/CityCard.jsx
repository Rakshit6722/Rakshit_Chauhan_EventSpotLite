import React from 'react';
import { MapPin } from 'lucide-react';

const CityCard = ({ city, image, onSelect }) => {
    return (
        <div 
            onClick={onSelect}
            className="relative group cursor-pointer rounded-lg overflow-hidden h-48 w-[300px] shrink-0 transition-transform duration-300 hover:scale-105 transform-gpu"
        >
            {/* City Image with placeholder */}
            <div className="absolute inset-0">
                <img 
                    src={image}
                    alt={city}
                    className="w-full h-full object-cover"
                />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />
            
            {/* City Info */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-2 select-none">
                <MapPin className="w-5 h-5 mb-2" />
                <h3 className="text-lg font-bold mb-1 text-center">{city}</h3>
                <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    Click to explore
                </p>
            </div>
        </div>
    );
};

export default CityCard;