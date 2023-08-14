import { createSlice } from "@reduxjs/toolkit";
import { displayUser } from "./displayUser";
import { logoutUser } from "../loginLogoutUser/logoutUser";

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
      .addCase(displayUser.rejected, (action, state) => {
        state.loading = false;
        state.user = null;
        //state.error = "A server error occurred. Please try again later.";
        state.error = action.error.message;
      });
    // .addCase(logoutUser, (state) => {
    //   state.loading = false;
    //   state.user = null;
    //   state.error = null;
    //   //return initialState;
    // });
  },
});

export default userSlice.reducer;
