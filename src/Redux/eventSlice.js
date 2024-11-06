import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { addEventApi, getEvensApi } from "../services/allApi";

export const addEventByFarmer = createAsyncThunk(
    'events/addEventByFarmer',
    async({reqBody,reqHeader})=>{
        try {
            const response =  addEventApi(reqBody,reqHeader)
            return response
        } catch (error) {
            return error
        }
    }
)


export const getEventsByFarmer = createAsyncThunk(
    "events/getEventsByFarmer",
    async({reqHeader})=>{
        try {
            const response = await getEvensApi(reqHeader)
            return response.data.events
        } catch (error) {
            return error
        }
    }
)


const eventSlice = createSlice({
    name: 'events',
    initialState: {
        events: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addEventByFarmer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addEventByFarmer.fulfilled, (state, action) => {
                state.loading = false;
                state.events.push(action.payload);
            })
            .addCase(addEventByFarmer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(getEventsByFarmer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getEventsByFarmer.fulfilled, (state, action) => {
                state.loading = false;
                state.events = (action.payload);
            })
            .addCase(getEventsByFarmer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });


    },
});

export default eventSlice.reducer;