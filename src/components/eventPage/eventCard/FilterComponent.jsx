import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from 'lucide-react';
import { selectAllFilters, toggleCategory, togglePrice, setDate, clearFilters } from '../../../store/slice/filterSlice';

const FilterComponent = ({ events }) => {
    const dispatch = useDispatch();
    const filters = useSelector(selectAllFilters);

    const categories = [...new Set(events.map(event => event.category))];

    const priceRanges = [
        { label: "Free", value: "Free" },
        { label: "Under ₹500", value: "0-500" },
        { label: "₹500 - ₹1000", value: "500-1000" },
        { label: "₹1000+", value: "1000+" }
    ];

    return (
        <div className="bg-gray-50 backdrop-blur-md py-1 px-2 sm:py-2 sm:px-4 w-full max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
                {/* Date Filter */}
                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <input
                        type="date"
                        value={filters.date || ''}
                        onChange={(e) => dispatch(setDate(e.target.value))}
                        className="p-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 bg-white/50 text-sm w-24 sm:w-32"
                    />
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2 flex-1 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => dispatch(toggleCategory(category))}
                            className={`px-2 py-1 text-sm rounded-full transition-all duration-200 ${filters.categories.includes(category)
                                ? 'text-orange-500 bg-gray-50'
                                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Price Filter */}
                <div className="flex items-center gap-2">
                    {priceRanges.map((range) => (
                        <button
                            key={range.value}
                            onClick={() => dispatch(togglePrice(range.value))}
                            className={`px-2 py-1 text-sm rounded-full transition-all duration-200 ${filters.priceRange.includes(range.value)
                                ? 'text-orange-500 bg-gray-50'
                                : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>

                {/* Clear Filters */}
                {filters.activeFilters > 0 && (
                    <button
                        onClick={() => dispatch(clearFilters())}
                        className="text-sm px-2 py-1 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-200"
                    >
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
};

export default FilterComponent;
