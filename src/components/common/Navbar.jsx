import React, { useState } from 'react';
import { Search, MapPin, Menu, X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { updateCity } from '../../store/slice/citySlice';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cities = [
    'Mumbai',
    'Gurugram',
    'Hyderabad',
    'Noida',
    'Banglore',
    'Pune'
  ];

  const handleCitySelect = (city) => {
    dispatch(updateCity(city));
    setSearchQuery('');
    setIsMobileMenuOpen(false);
  };

  const getFilteredCities = () => {
    if (!searchQuery) return [];
    return cities.filter(city =>
      city.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

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

  const SearchBar = ({ className = "" }) => (
    <div className={`relative ${className}`}>
      <div className="flex items-center bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-colors border border-orange-400/30">
        <div className="flex-1 relative">
          <div className="flex items-center">
            <MapPin size={18} className="text-orange-100" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cities..."
              className="w-full bg-transparent border-none outline-none pl-2 placeholder-orange-100 text-white"
            />
            <Search size={18} className="text-orange-100" />
          </div>

          {searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50 border border-orange-100">
              {getFilteredCities().map((city, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-orange-800 hover:bg-orange-50 cursor-pointer transition-colors"
                  onClick={() => handleCitySelect(city)}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-orange-500" />
                    <span>{city}</span>
                  </div>
                </div>
              ))}
              {getFilteredCities().length === 0 && (
                <div className="px-4 py-2 text-orange-400">
                  No cities found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <nav className="bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            {/* Desktop Logo */}
            <div className="hidden md:block">
              <Link to={'/'}>
                <Logo className="w-56 h-14 hover:opacity-90 transition-opacity cursor-pointer" />
              </Link>
            </div>
            {/* Mobile Logo */}
            <div className="md:hidden">
              <Link to={'/'}>
                <Logo className="w-44 h-10 hover:opacity-90 transition-opacity cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Desktop Search Section */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <SearchBar className="w-full" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-orange-500 to-rose-500 
        shadow-lg transform transition-transform duration-300 ease-in-out z-50 
        md:hidden 
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Mobile Menu Header with Logo */}
        <div className="flex flex-col p-4 border-b border-white/20">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Search Cities</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mt-4">
            <Logo className="w-48 h-12" />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="p-4">
          <SearchBar />
        </div>

        {/* Quick Links */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-white/70 mb-2">Popular Cities</h3>
          <div className="space-y-2">
            {cities.map((city, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-white/10 rounded-lg cursor-pointer transition-colors"
                onClick={() => handleCitySelect(city)}
              >
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{city}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;