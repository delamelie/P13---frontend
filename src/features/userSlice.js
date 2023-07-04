import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "../api/api.js";
import { PROFILE_URL } from "../api/api.js";

// let initialState = {
//   isLoggedIn: false,
//   user: null,
// };

// const userSlice = createSlice({
//   name: "test",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload;
//       console.log("coucou");
//       console.log(state.isLoggedIn);
//     },
//     logout: () => initialState,
//   },
// });

// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;
