import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import cityReducer from './slice/citySlice'; 
import filterReducer from './slice/filterSlice'

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, cityReducer);
const persistedReducer2 = persistReducer(persistConfig,filterReducer)

export const store = configureStore({
    reducer: {
        city: persistedReducer, 
        filters: persistedReducer2
    },
});

// Create a persistor
export const persistor = persistStore(store);
