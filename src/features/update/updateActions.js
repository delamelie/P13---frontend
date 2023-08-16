import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { PROFILE_URL } from "../../api/api";
import { displayUser } from "../user/userActions";

export const updateUser = createAsyncThunk(
  "update/updateUser",
  async (updatedData, { getState, dispatch, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.put(PROFILE_URL, updatedData, headers);
      dispatch(displayUser());
      return response.data;
    } catch (error) {
      return rejectWithValue(
        "A server error occurred. Please try again later."
      );
    }
  }
);
