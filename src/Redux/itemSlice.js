// Import necessary functions from Redux Toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addItemsApi, deleteItems, getFarmerItems } from '../services/allApi';

// Thunk to fetch items by farmer ID
export const fetchItemsByFarmerId = createAsyncThunk(
    'items/fetchItemsByFarmerId',
    async (reqHeader, { rejectWithValue }) => {
        try {
            const response = await getFarmerItems(reqHeader)
            return response.data.items;
        } catch (error) {
            console.error("Error fetching items for farmer:", error);
            return rejectWithValue(error.response?.data?.message || "Failed to fetch items");
        }
    }
);


export const addItemsByFarmer = createAsyncThunk(
    "items/addItemsByFarmer",
    async ({ reqBody, reqHeader }, { rejectWithValue }) => {
        try {

            const { name, description, price, imageUrl } = reqBody;

            if (!name || !description || !price || !imageUrl) {
                throw new Error("Missing required fields");
            }

            const response = await addItemsApi(reqBody, reqHeader);
            return response; 
        } catch (error) {
            return rejectWithValue(error.message || "Error adding items");
        }
    }
);
//item delete function 
export const  deleteItemByFramer = createAsyncThunk(
    "items/deleteItemByFramer",
    async({id,reqHeader})=>{
        try {
            const response = await deleteItems(id,reqHeader)
            return response
        } catch (error) {
            return error
        }
    }
)

// Create the items slice
const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchItemsByFarmerId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItemsByFarmerId.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchItemsByFarmerId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(addItemsByFarmer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addItemsByFarmer.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addItemsByFarmer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });


    },
});

export default itemsSlice.reducer;
