import React from 'react';
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const cities = ['Mumbai', 'Gurugram', 'Hyderabad', 'Noida', 'Banglore', 'Pune'];
  
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-rose-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
      
            <p className="text-sm text-orange-100">
              Discover and book the best events happening in your city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-orange-200 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Popular Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Cities</h3>
            <div className="grid grid-cols-2 gap-2">
              {cities.map((city, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-1 text-sm text-orange-100 hover:text-white transition-colors"
                >
                  <MapPin size={14} />
                  <span>{city}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:info@example.com" className="flex items-center space-x-2 text-sm text-orange-100 hover:text-white transition-colors">
                <Mail size={16} />
                <span>eventSpotLite@gmail.com</span>
              </a>
              <a  className="flex items-center space-x-2 text-sm text-orange-100 hover:text-white transition-colors">
                <Phone size={16} />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-orange-100">
          <div className="mb-4 md:mb-0">
            © 2024 EventSpot Lite. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;