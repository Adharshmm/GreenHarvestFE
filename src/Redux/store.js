import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"
const store = configureStore({
    reducer:{
        cartReducer:cartSlice

    }
})
export default store;