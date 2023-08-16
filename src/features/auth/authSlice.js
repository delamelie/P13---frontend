import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";

const initialState = {
  loading: false,
  error: null,
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: () => {
      return initialState;
    },
  },
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
        state.error = action.payload;
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;

export const { logoutUser } = authSlice.actions;
