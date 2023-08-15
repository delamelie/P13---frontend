import { createSlice } from "@reduxjs/toolkit";
import { displayUser } from "./userActions";
import { logoutUser } from "../auth/authActions";
//import { clearUser } from "./userActions";

//import { createAction } from "@reduxjs/toolkit";

//export const clearUser = createAction("user/clearUser");

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // reducers: {
  //   clearUser: (state) => {
  //     state.user = null;
  //   },
  // },
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
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
