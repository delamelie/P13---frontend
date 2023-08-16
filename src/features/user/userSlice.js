import { createSlice } from "@reduxjs/toolkit";
import { displayUser } from "./userActions";

const initialState = {
  loading: false,
  error: null,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(displayUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null;
      })
      .addCase(displayUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.body;
      })
      .addCase(displayUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      });
  },
});

export default userSlice.reducer;

export const { clearUser } = userSlice.actions;
