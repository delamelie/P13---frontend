import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { PROFILE_URL } from "./api";

/// Action

export const updateUser = createAsyncThunk(
  "user/displayUser",

  async ({ newFirstName, newLastName }) => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);

    const request = await axios.put(
      PROFILE_URL,
      { firstName: newFirstName, lastName: newLastName },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const response = await request.data;
    console.log(response);
    return response;
  }
);
