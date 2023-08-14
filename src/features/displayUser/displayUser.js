import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { PROFILE_URL } from "../../api/api";

export const displayUser = createAsyncThunk(
  "user/displayUser",

  async (arg, { getState }) => {
    const state = getState();
    const token = state.auth.token;

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.post(PROFILE_URL, {}, headers);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);

// export const displayUser = createAsyncThunk(
//   "user/displayUser",

//   async (arg, { getState }) => {
//     const state = getState();
//     const token = state.auth.token;
//     const headers = {
//       headers: { Authorization: `Bearer ${token}` },
//     };
//     const response = await axios.post(PROFILE_URL, {}, headers);
//     console.log(response.data);
//     return response.data;
//   }
// );
