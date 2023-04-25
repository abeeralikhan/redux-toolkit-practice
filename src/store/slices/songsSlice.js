import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

export const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      return [...state, action.payload];
    },
    removeSong(state, action) {
      return state.filter((song) => song !== action.payload);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
