import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Heart, Share2, BookmarkPlus } from 'lucide-react';
import EventModal from '../../common/EventModal';

const EventCard = ({
  name,
  cardImage,
  date,
  location,
  time = "7:00 PM",
  attendees = "25 attending",
  category = "Music",
  price = "Free",
  description = "Join us for an amazing event!",
  link
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const eventData = {
    name,
    cardImage,
    date,
    location,
    time,
    attendees,
    category,
    price,
    description,
    link
  };

  return (
    <>
      <div className="w-[100%] sm:w-[300px] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
        {/* Image Section */}
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={cardImage}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Category & Price Tags */}
          <span className="absolute top-4 left-4 px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
            {category}
          </span>
          <span className={`absolute top-4 right-4 px-3 py-1 ${price === 'Free' ? "bg-green-500" : "bg-red-600"} text-white text-sm font-semibold rounded-full`}>
            {price}
          </span>
        </div>

        {/* Content Section */}
        <div className="relative p-6">
          {/* Title & Description */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
              {name}
            </h3>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4 text-orange-500" />
              <span className="text-sm">{time}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${isLiked ? 'text-red-500' : 'text-gray-500'
                  }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </button>
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${isSaved ? 'text-blue-500' : 'text-gray-500'
                  }`}
              >
                <BookmarkPlus className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors font-medium"
            >
              Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {
        isModalOpen &&
        <EventModal
          event={eventData}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      }
    </>
  );
};

export default EventCard;