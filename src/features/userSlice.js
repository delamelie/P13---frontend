import { createSlice } from "@reduxjs/toolkit";
import { displayUser } from "../api/displayUser";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

/// Reducer

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},
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
      .addCase(displayUser.rejected, (action, state) => {
        state.loading = false;
        console.log(action.error.message);
        state.user = null;
      });
  },
});

export default userSlice.reducer;
