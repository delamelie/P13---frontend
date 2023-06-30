import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/api.js";
import { PROFILE_URL } from "../api/api.js";

const initialState = {
  user: null,
  loading: false,
  token: null,
  error: null,
};

export const displayUser = createAsyncThunk(
  "user/displayUser",

  async () => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);

    const request = await axios.post(
      PROFILE_URL,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const response = await request.data;
    console.log(response);
    return response;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(displayUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
        state.token = null;
      })
      .addCase(displayUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.token = action.payload;
        console.log(action.payload);
        console.log(action.payload.body.token);
      })
      .addCase(displayUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        console.log(action.error.message);
        if (action.error === "resquest failed with status code 401") {
          state.error = "Invalid email or password";
        } else {
          console.log("erreur");
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;
