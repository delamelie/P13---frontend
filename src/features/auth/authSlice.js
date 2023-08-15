import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";

import { userSlice } from "../user/userSlice";

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
    logoutUser: (state) => {
      state.loading = false;
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      console.log("te");
      //userSlice.caseReducers.clearUser();
    },
  },
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
      });
    // .addCase(logoutUser, (state) => {
    //   // state.loading = false;
    //   // state.token = null;
    //   // state.isLoggedIn = false;
    //   // state.error = null;
    //   console.log("coucou");
    //   //userSlice.caseReducers.clearUser();
    //   return initialState;
    // });
  },
});

export default authSlice.reducer;
