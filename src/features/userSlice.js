import { createSlice } from "@reduxjs/toolkit";
import { displayUser } from "../actions/displayUser";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {},
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
        //console.log(action.error.message);
        state.error = "A server error occurred. Please try again later.";
      })
      .addDefaultCase((state) => state);
    // .addCase(logOut, (state) => {
    //   state = initialState;
    // });
  },
});

export default userSlice.reducer;
