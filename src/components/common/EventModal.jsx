import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar, MapPin, Clock, Users, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const EventModal = ({ event, isOpen, onClose }) => {
  // Add state to handle animation
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300);
  };

  if (!isOpen && !isAnimating) return null;

  const handleClick = () => {
    if (event.link) {
      window.location.href = event.link;
    }
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out
          ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className={`relative bg-white rounded-2xl w-full max-w-2xl mx-4 overflow-hidden shadow-2xl
        transition-all duration-300 ease-in-out
        ${isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Image Section */}
        <div className="relative h-64">
          <img
            src={event.cardImage}
            alt={event.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Category & Price Tags */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
              {event.category}
            </span>
            <span className={`px-3 py-1 ${event.price === 'Free' ? "bg-green-500" : "bg-red-600"} text-white text-sm font-semibold rounded-full`}>
              {event.price}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{event.name}</h2>
          
          {/* Event Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar className="w-5 h-5 text-orange-500" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Clock className="w-5 h-5 text-orange-500" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span className="truncate">{event.location}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Users className="w-5 h-5 text-orange-500" />
              <span>{event.attendees}</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">About this event</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>

          {/* Action Button */}
          <button 
            onClick={handleClick} 
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl transition-colors font-semibold"
          >
            Register Now
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default EventModal;