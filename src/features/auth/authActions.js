import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { LOGIN_URL } from "../../api/api";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const headers = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(LOGIN_URL, credentials, headers);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(
          "A server error occurred. Please try again later."
        );
      }
    }
  }
);
