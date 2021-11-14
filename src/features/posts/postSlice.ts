import { fetchPosts, createPost } from "./../../api/index";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState, AppThunk } from "../../app/store";
import * as api from "../../api/index";
export interface PostState {
  value: number[];
  status: "idle" | "loading" | "failed";
}

const initialState: PostState = {
  value: [],
  status: "idle",
};
export const fetchAllPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await api.fetchPosts();
  return response.data;
});
export const createPostAll = createAsyncThunk(
  "post/createPosts",
  async (newPost) => {
    const response = await api.createPost(newPost);
    console.log(response, "ll---llllllllll");
    return response.data;
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<any>) => {
      return state;
    },
    createPosts: (state, action: PayloadAction<any>) => {
      console.log(action, "lolo");
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPostAll.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPostAll.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});
export const { getPosts, createPosts } = postSlice.actions;
export default postSlice.reducer;
