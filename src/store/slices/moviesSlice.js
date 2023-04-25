import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

export const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      return [...state, action.payload];
    },
    removeMovie(state, action) {
      return state.filter((movie) => movie !== action.payload);
    }
  },
  // Using extraReducers we tell the slices that there are some
  // additional action types that it should care about
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
