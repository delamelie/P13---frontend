import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { PROFILE_URL } from "../api/api";
import { displayUser } from "./displayUser";

export const updateUser = createAsyncThunk(
  "update/updateUser",

  async ({ newFirstName, newLastName }, { getState, dispatch }) => {
    const state = getState();
    const token = state.auth.token;

    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const request = await axios.put(
        PROFILE_URL,
        { firstName: newFirstName, lastName: newLastName },
        headers
      );

      const response = request.data;
      console.log(response);
      dispatch(displayUser());
      return response;
    } catch (error) {
      throw error;
    }
  }
);
