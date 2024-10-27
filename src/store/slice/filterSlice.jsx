import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    priceRange: [],
    date: null,  // Added missing date field
    activeFilters: 0,
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        toggleCategory: (state, action) => {
            const category = action.payload;
            const index = state.categories.indexOf(category);
            
            if (index === -1) {
                state.categories.push(category);
                state.activeFilters++;
            } else {
                state.categories.splice(index, 1);
                state.activeFilters--;
            }
        },
        togglePrice: (state, action) => {
            const price = action.payload;
            const index = state.priceRange.indexOf(price);  // Fixed from state.price to state.priceRange
            
            if (index === -1) {
                state.priceRange.push(price);
                state.activeFilters++;
            } else {
                state.priceRange.splice(index, 1);
                state.activeFilters--;
            }
        },
        setDate: (state, action) => {
            const newDate = action.payload;
            if (newDate && !state.date) state.activeFilters++;
            if (!newDate && state.date) state.activeFilters--;
            state.date = newDate;
        },
        clearFilters: (state) => {
            state.categories = [];
            state.priceRange = [];
            state.date = null;
            state.activeFilters = 0;
        }
    }
});

export const { toggleCategory, togglePrice, setDate, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;

// Selectors
export const selectAllFilters = (state) => state.filters;
export const selectActiveFilters = (state) => state.filters.activeFilters;