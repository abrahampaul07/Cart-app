import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart(state,action){ // actions
            return [...state, action.payload];
        },
        removeFromCart(state, action){ //actions

        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer; // Exporting the reducer as default
