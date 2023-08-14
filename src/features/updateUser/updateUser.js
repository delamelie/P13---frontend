import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { PROFILE_URL } from "../../api/api";
import { displayUser } from "../displayUser/displayUser";

export const updateUser = createAsyncThunk(
  "update/updateUser",

  async ({ newFirstName, newLastName }, { getState, dispatch }) => {
    const state = getState();
    const updatedData = { firstName: newFirstName, lastName: newLastName };
    const token = state.auth.token;
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const response = await axios.put(PROFILE_URL, updatedData, headers);
      console.log(response.data);
      dispatch(displayUser());
      return response.data;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
);
