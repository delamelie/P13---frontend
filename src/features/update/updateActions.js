import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { PROFILE_URL } from "../../api/api";
import { displayUser } from "../user/userActions";

// export const updateUser = createAsyncThunk(
//   "update/updateUser",

//   async (
//     { newFirstName, newLastName },
//     { getState, dispatch, rejectWithValue }
//   ) => {
//     const state = getState();
//     const updatedData = { firstName: newFirstName, lastName: newLastName };
//     const token = state.auth.token;
//     const headers = {
//       headers: { Authorization: `Bearer ${token}` },
//     };

//     try {
//       const response = await axios.put(PROFILE_URL, updatedData, headers);
//       console.log(response.data);
//       dispatch(displayUser());
//       return response.data;
//     } catch (error) {
//       console.log(error.message);
//       throw error;
//     }
//   }
// );

export const updateUser = createAsyncThunk(
  "update/updateUser",

  async (
    { newFirstName, newLastName },
    { getState, dispatch, rejectWithValue }
  ) => {
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
      return rejectWithValue(
        "A server error occurred. Please try again later."
      );
    }
  }
);
