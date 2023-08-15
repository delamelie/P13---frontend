import { createSlice } from "@reduxjs/toolkit";
import { displayUser } from "./userActions";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(displayUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(displayUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.body;
        state.error = null;
      })
      .addCase(displayUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
