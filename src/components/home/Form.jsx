import React, { useState, useRef, useEffect } from 'react';
import { updateCity } from '../../store/slice/citySlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Search, MapPin } from 'lucide-react';
import PopularCities from './homeCard/PopularCities';

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [city, setCity] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const cities = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Gurugram',
    'Noida',
    'Hyderabad',
    'Pune',
    'Kolkata'
  ];

  //handle when user clicked outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCity(city));
    navigate('/event');
  };

  const handleSelect = (selectedCity) => {
    setCity(selectedCity);
    setIsOpen(false);
  };

  const handlePopularCitySelect = (selectedCity) => {
    setCity(selectedCity);
    dispatch(updateCity(selectedCity));
    navigate('/event');
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 md:px-8 ">
      <div className="bg-orange-50 p-6 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-orange-800 mb-2">Find Events Near You</h2>
        <p className="text-orange-600 mb-6 text-sm">Discover amazing events happening in your city</p>

        {/* form to take input of user city */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="city-select"
              className="flex items-center gap-2 text-sm font-medium text-orange-800"
            >
              <MapPin className="w-4 h-4" />
              Choose Your City
            </label>
            <div className="relative">
              {/* initial button shown on the screen */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left flex items-center text-base sm:text-sm px-4 py-3 border-2 border-orange-200 rounded-lg shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white hover:border-orange-300 transition-colors"
              >
                <Search className="w-4 h-4 text-orange-400 mr-2" />
                <span className={city ? 'text-orange-900' : 'text-orange-400'}>
                  {city || 'Select your city to explore events'}
                </span>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-orange-400" />
              </button>
              {/* when isOpen set to true this dropdown containing different cities will open */}
              {isOpen && (
                <div ref={dropdownRef} className="absolute z-10 w-full mt-2 bg-white border-2 border-orange-200 rounded-lg shadow-xl max-h-60 overflow-auto">
                  <ul className="py-1 text-base sm:text-sm">
                    {cities.map((cityOption) => (
                      <li
                        key={cityOption}
                        onClick={() => handleSelect(cityOption)}
                        className="px-4 py-3 hover:bg-orange-50 cursor-pointer text-orange-900 flex items-center gap-2
                        transition-colors duration-150"
                      >
                        <MapPin className="w-4 h-4 text-orange-400" />
                        {cityOption}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* button will be disabled if city is null */}
          <button
            type="submit"
            className="w-full px-4 py-3 text-base sm:text-sm text-white bg-orange-600 rounded-lg
            hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-orange-600
            transition-colors duration-200 font-medium shadow-sm"
            disabled={!city}
          >
            Explore Events
          </button>
        </form>


        {/* will only come in display if user has not selected any city */}
        {!city && (
          <p className="mt-4 text-xs text-orange-600 text-center">
            Select a city to discover upcoming concerts, workshops, exhibitions, and more!
          </p>
        )}

        {/* will only appear in laptop screens */}
        <div className='hidden lg:block'>
          <PopularCities onCitySelect={handlePopularCitySelect} />
        </div>
      </div>
    </div>
  );
};

export default Form;