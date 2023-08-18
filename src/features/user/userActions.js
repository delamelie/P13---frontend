import { createAsyncThunk } from "@reduxjs/toolkit";
import { displayUserApi } from "../../api/apiCalls";

export const displayUser = createAsyncThunk(
  "user/displayUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      const data = await displayUserApi(token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(
        "A server error occurred. Please try again later."
      );
    }
  }
);
