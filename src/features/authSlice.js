import { createSlice, createAction } from "@reduxjs/toolkit";
import { loginUser } from "../api/loginUser";

const initialState = {
  user: null,
  loading: false,
  token: localStorage.getItem("token"),
  error: null,
  isLoggedIn: false,
};

/// Actions

export const logOut = createAction("LOG_OUT");

/// Reducer

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.token = action.payload.body.token;
        console.log(state.token);
        localStorage.setItem("token", JSON.stringify(state.token));
        state.isLoggedIn = true;
        console.log(state.isLoggedIn);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
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

        state.token = null;
        localStorage.removeItem("token");
      });
  },
});

export default authSlice.reducer;
