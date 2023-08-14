import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./loginUser";
import { logoutUser } from "./logoutUser";

const initialState = {
  loading: false,
  error: null,
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.body.token;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.isLoggedIn = false;
        state.error = action.payload;

        // if (action.error.message == "Request failed with status code 400") {
        //   console.log(action.error.message);
        //   state.error = "Invalid email or password";
        // } else {
        //   console.log(action.error.message);
        //   state.error = action.error.message;
        // }
      })
      .addCase(logoutUser, (state) => {
        state.loading = false;
        state.token = null;
        state.isLoggedIn = false;
        state.error = null;
        //return initialState;
      });
  },
});

export default authSlice.reducer;
