import React from 'react'
import EventCard from './EventCard'

const EventLayout = ({ events }) => {
    return (
        <div>
            <main className="px-4 max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center lg:justify-start sm:flex-row sm:flex-wrap sm:items-stretch  gap-6">
                    {events.length > 0 ? (
                        events.map((event, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] 
                             min-w-[260px] max-w-[320px] transform hover:-translate-y-1 transition-transform duration-300"
                            >
                                <EventCard
                                    name={event.name}
                                    cardImage={event.cardImage}
                                    date={event.date}
                                    location={event.location}
                                    time={event.additionalDetails.time}
                                    attendees={event.attendees}
                                    category={event.category}
                                    price={event.price}
                                    description={event.description}
                                    link={event.link}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center py-12">
                            <h3 className="text-lg font-medium text-gray-900">
                                No events found in {city}
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Check back later for upcoming events
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default EventLayout