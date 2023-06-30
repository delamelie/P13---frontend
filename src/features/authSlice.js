import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/api.js";
import { LOGIN_URL } from "../api/api.js";

const initialState = {
  user: null,
  loading: false,
  token: null,
  error: null,
};

// const credentials = JSON.stringify({ email, password });

/// Action

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const request = await axios.post(LOGIN_URL, { email, password }, headers);
    const response = await request.data;
    console.log(response);
    let token = response.body.token;
    localStorage.setItem("token", JSON.stringify(token));
    return response;
  }
);

/// Reducer

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
        state.token = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        // state.token = action.payload;
        console.log(action.payload);
        console.log(action.payload.body.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        console.log(action.error.message);
        // if (action.error === "resquest failed with status code 401") {
        //   state.error = "Invalid email or password";
        // } else {
        //   console.log("erreur");
        //   state.error = action.error.message;
        // }
        if (action.error) {
          state.error = "Invalid email or password";
        }
      });
  },
});

export default authSlice.reducer;

//   reducers: {
//     logout: () => initialState,
//     setUser: (state, action: PayloadAction<IUser>) => {
//       state.user = action.payload;
//     },
//   },

// export const { logout, setUser } = userSlice.actions;
