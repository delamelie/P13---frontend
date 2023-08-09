import { createSlice, createAction } from "@reduxjs/toolkit";
import { loginUser } from "../api/loginUser";

const initialState = {
  loading: false,
  error: null,
  token: null,
  isLoggedIn: false,
};

/// Action

export const logOut = createAction("logOut");

/// Reducer

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.token = action.payload.body.token;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.isLoggedIn = false;

        if (action.error.message == "Request failed with status code 400") {
          console.log(action.error.message);
          state.error = "Invalid email or password";
        } else {
          console.log(action.error.message);
          state.error = action.error.message;
        }
      })
      .addCase(logOut, (state) => {
        state = initialState;
      });
  },
});

export default authSlice.reducer;
