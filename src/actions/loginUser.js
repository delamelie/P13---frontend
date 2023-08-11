import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { LOGIN_URL } from "../api/api";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const request = await axios.post(LOGIN_URL, { email, password }, headers);
    const response = request.data;
    console.log(response);
    return response;
  }
);
