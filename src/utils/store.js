import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/userSlice";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;

const state = store.getState();
console.log(state);
