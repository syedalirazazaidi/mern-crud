import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
export interface PostState {
  value: number[];
}

const initialState: PostState = {
  value: [],
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<any>) => {
      state.value;
    },
  },
});
export const { getPosts } = postSlice.actions;
export default postSlice.reducer;
