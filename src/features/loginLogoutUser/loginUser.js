import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { LOGIN_URL } from "../../api/api";

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async ({ email, password }, { rejectWithValue }) => {
//     const credentials = { email, password };
//     const headers = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const response = await axios.post(LOGIN_URL, credentials, headers);
//     console.log(response.data);
//     return response.data;
//   }
// );

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const credentials = { email, password };
      const headers = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(LOGIN_URL, credentials, headers);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
