import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/api.js";
import { PROFILE_URL } from "../api/api.js";

export const displayUser = createAsyncThunk(
  "user/displayUser",

  async () => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const request = await axios.post(PROFILE_URL, {}, headers);

    const response = await request.data;
    console.log(response);
    return response;
  }
);

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

const userSlice = createSlice({
  name: "test",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      console.log("coucou");
      console.log(state.isLoggedIn);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      console.log(state.isLoggedIn);
      console.log("gopgop");
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
