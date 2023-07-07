import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/api.js";
import { PROFILE_URL } from "./api";

/// Action

export const displayUser = createAsyncThunk(
  "user/displayUser",

  async (arg, { getState }) => {
    const state = getState();
    const token = state.auth.token;

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const request = await axios.post(PROFILE_URL, {}, headers);
      const response = request.data;
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
    }
  }
);
