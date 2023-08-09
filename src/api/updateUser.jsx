import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { PROFILE_URL } from "./api";
import { displayUser } from "../api/displayUser";

/// Action

export const updateUser = createAsyncThunk(
  "newUserName/updateUser",

  async ({ newFirstName, newLastName }, { getState, dispatch }) => {
    const state = getState();
    const token = state.auth.token;

    try {
      const request = await axios.put(
        PROFILE_URL,
        { firstName: newFirstName, lastName: newLastName },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
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
