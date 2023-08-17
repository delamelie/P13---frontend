import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUserApi } from "../../api/apiCalls";
import { displayUser } from "../user/userActions";

export const updateUser = createAsyncThunk(
  "update/updateUser",
  async (updatedData, { getState, dispatch, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      const data = await updateUserApi(token, updatedData);
      dispatch(displayUser());
      return data;
    } catch (error) {
      return rejectWithValue(
        "A server error occurred. Please try again later."
      );
    }
  }
);
