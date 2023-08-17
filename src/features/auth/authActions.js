import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserApi } from "../../api/apiCalls";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(credentials);
      return data;
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
