import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/api.js";
import { LOGIN_URL, PROFILE_URL } from "../api/api.js";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }) => {
    const request = await axios.post(
      LOGIN_URL,
      JSON.stringify({ email, password }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    const response = await request.data;
    console.log(response);
    console.log(response.body.token);

    // let token = response.data.body.token;
    // localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);

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

const initialState = {
  user: null,
  loading: false,
  token: null,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extrareducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if (action.error === "resquest failed with status code 401") {
          state.error = "Invalid email or password";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export default userSlice.reducer;

// } catch (error) {
//   if (!error?.response) {
//     setErrorMessage("No server response");
//   } else if (error.response.data.status === 400) {
//     setErrorMessage("Incorrect email or password");
//   }
// }

//   reducers: {
//     logout: () => initialState,
//     setUser: (state, action: PayloadAction<IUser>) => {
//       state.user = action.payload;
//     },
//   },

// export const { logout, setUser } = userSlice.actions;
