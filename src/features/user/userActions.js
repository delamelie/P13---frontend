import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { PROFILE_URL } from "../../api/api";

export const displayUser = createAsyncThunk(
  "user/displayUser",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(PROFILE_URL, {}, headers);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        "A server error occurred. Please try again later."
      );
    }
  }
);
