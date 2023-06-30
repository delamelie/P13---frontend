import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/api.js";
import { PROFILE_URL } from "../api/api.js";

export const updateUser = createAsyncThunk(
  "user/displayUser",

  async ({ firstN, lastN }) => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);

    const request = await axios.put(
      PROFILE_URL,
      { firstName: firstN, lastName: lastN },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const response = await request.data;
    console.log(response);
    return response;
  }
);
