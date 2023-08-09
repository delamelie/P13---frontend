import { createSlice, createAction } from "@reduxjs/toolkit";
import { displayUser } from "../api/displayUser";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

/// Action

// export const logOut = createAction("logOut");

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

        if (action.error.message) {
          console.log(action.error.message);
          state.error = "Invalid email or password";
        } else {
          console.log("else");
          //state.error = action.error.message;
        }
      });
    // .addCase(logOut, (state) => {
    //   state = initialState;
    // });
  },
});

export default userSlice.reducer;
