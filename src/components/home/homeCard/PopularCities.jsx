import React from 'react'
import CityCard from './CityCard';

const PopularCities = ({ onCitySelect }) => {

    const popularCities = [
        {
            name: 'Mumbai',
            image: 'https://plus.unsplash.com/premium_photo-1681550093390-14477e7b196a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'   // Using placeholder since external images aren't supported
        },
        {
            name: 'Delhi',
            image: 'https://images.unsplash.com/photo-1667849521402-efb9b61ddf73?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Bangalore',
            image: 'https://images.unsplash.com/photo-1655322126436-9dd898d4a636?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];

    return (
        <div className="w-full max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className=" mb-4">
            <h2 className="text-xl text-center font-bold mb-2 text-orange-800">Popular Cities</h2>
        </div>
        
        {/* Cities container */}
        <div className="flex gap-6 overflow-x-auto overflow-y-hidden">
            {popularCities.map((city) => (
                <CityCard
                    key={city.name}
                    city={city.name}
                    image={city.image}
                    onSelect={() => onCitySelect(city.name)}
                />
            ))}
        </div>
        
        {/* Hint text */}
        <p className="text-center text-sm text-orange-600 mt-4">
            Click on any city to explore events directly
        </p>
    </div>
    )
}

export default PopularCities