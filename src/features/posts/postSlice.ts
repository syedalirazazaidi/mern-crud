import { fetchPosts } from "./../../api/index";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, AppThunk } from "../../app/store";
import * as api from "../../api/index";
export interface PostState {
  value: number[];
}

const initialState: PostState = {
  value: [],
};
export const fetchAllPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await api.fetchPosts();
  return response.data;
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<any>) => {
      return state;
    },
  },
  extraReducers: {},
});
export const { getPosts } = postSlice.actions;
export default postSlice.reducer;
