import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import data from '../../mockData/data.js';
import CitySwiper from './eventCard/CitySwiper.jsx';
import video from '../../assets/video3.mp4';
import EventLayout from './eventCard/EventLayout.jsx';
import FilterComponent from './eventCard/FilterComponent.jsx';
import { selectAllFilters, clearFilters } from '../../store/slice/filterSlice.jsx';
import ScrollTransition from '../common/ScrollTransiton.jsx';
import Navbar from '../common/Navbar.jsx';
import Footer from '../common/Footer.jsx';

const EventPage = () => {
    const dispatch = useDispatch();
    const { city } = useSelector(state => state.city);
    const filters = useSelector(state => state.filters);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    const temp = data.cities.filter(ele => ele.city === city);
    const cityEvents = temp[0]?.events || [];

    const filteredEvents = cityEvents.filter(event => {
        if (filters.categories.length > 0 && !filters.categories.includes(event.category)) {
            return false;
        }
        if (filters.date && event.date !== filters.date) {
            return false;
        }
        if (filters.priceRange.length > 0) {
            const eventPrice = event.price === "Free" ? 0 : parseInt(event.price.replace(/[^0-9]/g, ''));
            const matchesPrice = filters.priceRange.some(range => {
                if (range === "Free") return event.price === "Free";
                if (range === "0-500") return eventPrice > 0 && eventPrice <= 500;
                if (range === "500-1000") return eventPrice > 500 && eventPrice <= 1000;
                if (range === "1000+") return eventPrice > 1000;
                return false;
            });
            if (!matchesPrice) return false;
        }
        return true;
    });

    // Preload video
    useEffect(() => {
        const videoElement = document.createElement('video');
        videoElement.preload = 'auto';
        videoElement.src = video;
        videoElement.onloadeddata = () => setIsVideoLoaded(true);
    }, []);

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-50 bg-white">
                <Navbar />
            </div>
            <div className="pt-16 h-full overflow-hidden space-y-5">
                {/* Combined Header and Filter Section */}
                <div className="relative">
                    <div className="relative z-10 bg-gray-50">
                        <FilterComponent events={cityEvents} />
                    </div>

                    {/* Video Header Section */}
                    <div className="relative h-96">
                        {/* Placeholder gradient while video loads */}
                        <div 
                            className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 transition-opacity duration-500"
                            style={{ opacity: isVideoLoaded ? 0 : 1 }}
                        />
                        
                        <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500`}
                            style={{ opacity: isVideoLoaded ? 1 : 0 }}
                            onLoadedData={() => setIsVideoLoaded(true)}
                        />
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                            <h1 className="text-4xl font-bold mb-4">Events in {city}</h1>
                            <p className="text-orange-200 text-lg">
                                Discover amazing events happening around you
                            </p>
                            {filters.activeFilters > 0 && (
                                <p className="mt-6 text-sm bg-white/10 px-6 py-2 rounded-full">
                                    Showing {filteredEvents.length} filtered events
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto bg-gray-50">
                    {/* Events Container */}
                    <ScrollTransition>
                        {filteredEvents.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-xl text-gray-600">No events match your filters</p>
                                <button
                                    onClick={() => dispatch(clearFilters())}
                                    className="mt-4 text-blue-600 hover:text-blue-800"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <EventLayout events={filteredEvents} />
                        )}
                    </ScrollTransition>

                    {/* Swiper Component */}
                    <div className="bg-gray-800">
                        <ScrollTransition>
                            <CitySwiper />
                        </ScrollTransition>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default EventPage;