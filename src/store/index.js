import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { reset } from "./actions";

// Types of files organizations
// + Organize by functions --> components, pages, slices, actions
// + Organize by features --> songs, movies

// The Circular Imports Problem

// Important functions to initialize a redux store
// 1. createSlice({ name, initialState, reducers })
// 2. configureStore({ reducer })
// slice.reducer, slice.actions

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

export { store, reset, addMovie, removeMovie, addSong, removeSong };

// const initialState = store.getState();
// console.log(initialState);

// store.dispatch(songsSlice.actions.addSong("Hello"));

// const updatedState = store.getState();
// console.log(updatedState);

// Action Creators
// console.log(songsSlice.actions.addSong());

// songsSlice.actions.addSong('Hello')
// {
//   type: 'song/addSong',
//   payload: 'Hello'
// }
