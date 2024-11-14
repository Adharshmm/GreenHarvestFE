import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../services/baseUrl";
import { addItemToCartApi, getAllCartItemAPi } from "../services/allApi";

const token = localStorage.getItem("token")
const reqHeader = {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${token}`
}
// Thunks for API calls
export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async (reqBody) => {
        console.log("inside the add item cart thunk")
        console.log(reqHeader)
        try {
            const response = await addItemToCartApi(reqBody, reqHeader)
            return response.data;
        } catch (error) {
            return console.log(error)
        }
    }
);

export const deleteFromCart = createAsyncThunk(
    "cart/deleteFromCart",
    async (itemId, { rejectWithValue }) => {
        try {
            await axios.delete(`${BASE_URL}/delete-cart/${itemId},`, {}, reqHeader);
            return itemId;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to delete item from cart");
        }
    }
);

export const emptyCart = createAsyncThunk(
    "cart/emptyCart",
    async (_, { rejectWithValue }) => {
        try {
            await axios.delete("/empty-cart", {}, reqHeader);
            return [];
        } catch (error) {
            return rejectWithValue(error.response?.data || "Failed to empty the cart");
        }
    }
);

export const getAllCartItems = createAsyncThunk("cart/getallitems",
    async () => {
        try {
            const response = await getAllCartItemAPi(reqHeader)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        grandTotal: 0,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;

                // Check if action.payload has the expected structure
                if (action.payload && action.payload.price !== undefined) {
                    state.items.push(action.payload);
                    state.grandTotal += action.payload.price;
                } else {
                    console.log("Invalid payload structure:", action.payload);
                    state.error = "Invalid item data";
                }
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to add item to cart";
            })
            .addCase(deleteFromCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteFromCart.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.items.findIndex(item => item.id === action.payload);
                if (index !== -1) {
                    state.grandTotal -= state.items[index].price;
                    state.items.splice(index, 1);
                }
            })
            .addCase(deleteFromCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(emptyCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(emptyCart.fulfilled, (state) => {
                state.loading = false;
                state.items = [];
                state.grandTotal = 0;
            })
            .addCase(emptyCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getAllCartItems.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllCartItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.grandTotal = action.payload.reduce((total, item) => total + item.price * item.quantity, 0);
            })
            .addCase(getAllCartItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default cartSlice.reducer;
