import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import data from '../../../mockData/data.js';
import SwiperCard from './SwiperCard.jsx';

const CitySwiper = () => {

  const allEvents = data.cities.flatMap(city => city.events);

  // Shuffle the events array and limit to the first 10 events
  const shuffledEvents = allEvents.sort(() => Math.random() - 0.5).slice(0, 10);

  return (
    <section className="my-8 w-full space-y-2 relative ">
      {/* Banner Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1684679493212-6adfaf58c388?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Events Banner"
          className="w-full h-80 4 object-cover  shadow-lg"
        />
        {/* Overlay */}
        <div className="absolute  sm:rounded-lg inset-0 bg-black opacity-30"></div>
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Events from Different Cities</h2>
          <p className="text-lg">Check out the latest happenings!</p>
        </div>
      </div>

      {/* Swiper */}
      <div className='p-3 sm:p-10 w-[90%] mx-auto'>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {shuffledEvents.map((event, index) => (
            <SwiperSlide className='shadow-black shadow-lg' key={index}>
              <SwiperCard
                name={event.name}
                image={event.cardImage}
                location={event.location}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CitySwiper;
