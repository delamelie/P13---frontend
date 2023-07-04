import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/api.js";
import { PROFILE_URL } from "./api";

/// Action

export const displayUser = createAsyncThunk(
  "user/displayUser",

  async () => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const request = await axios.post(PROFILE_URL, {}, headers);

    const response = await request.data;
    //console.log(response);
    return response;
  }
);
