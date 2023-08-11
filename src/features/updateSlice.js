import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "../actions/updateUser";

const initialState = {
  error: null,
  loading: false,
};

const updateSlice = createSlice({
  name: "update",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      console.log(action.error.message);
      state.error = "A server error occurred. Please try again later.";
    });
  },
});

export default updateSlice.reducer;
