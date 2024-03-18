import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Importing the default export

const store = configureStore({
    reducer:{
        cart: cartReducer // Using the default export
    }
})

export default store;
