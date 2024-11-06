import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
import itemSlice from "./itemSlice"
import eventSlice from "./eventSlice";
const store = configureStore({
    reducer:{
        cartReducer:cartSlice,
        itemsReducer: itemSlice,
        eventsReducer:eventSlice
    }, 
});
export default store;