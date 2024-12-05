// src/features/counterSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching a random number
export const fetchRandomNumber = createAsyncThunk(
  "counter/fetchRandomNumber",
  async () => {
    // const response = await axios.get(
    //   "https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100 ",
    // );
    //The CORS (Cross-Origin Resource Sharing) error occurs while trying this way So I setuped a proxy server for the api through vite config file
    const response = await axios.get("/api/api/v1.0/random?min=1&max=100"); // to  use the proxy server from the vite config

    return response.data[0]; // Assume API returns an array of numbers
  },
);

// Counter slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    loading: false,
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomNumber.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRandomNumber.fulfilled, (state, action) => {
        state.value = action.payload;
        state.loading = false;
      })
      .addCase(fetchRandomNumber.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
