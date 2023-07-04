import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { LOGIN_URL } from "./api";

/// Action

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const request = await axios.post(LOGIN_URL, { email, password }, headers);
    const response = await request.data;
    console.log(response);
    return response;
  }
);

// export const me = createAsyncThunk('auth/me', async ({}, thunkAPI) => {
//   try {
//     const user = await userService.getUserData()
//     return { userData: user.data.data }
//   } catch (error) {
//     const message =
//       (error.response && error.response.data && error.response.data.message) ||
//       error.message ||
//       error.toString()
//     thunkAPI.rejectWithValue(message)
//     return message
//   }
// })
