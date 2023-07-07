import { createSlice, createAction } from "@reduxjs/toolkit";
import { loginUser } from "../api/loginUser";

const initialState = {
  loading: false,
  token: localStorage.getItem("token"),
  error: null,
  isLoggedIn: false,
};

/// Actions

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
        console.log(action.error.message);
        state.isLoggedIn = false;

        if (action.error.message == "Request failed with status code 400") {
          state.error = "Invalid email or password";
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(logOut, (state) => {
        state = initialState;
      });
  },
});

export default authSlice.reducer;
