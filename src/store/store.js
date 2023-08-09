import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import userReducer from "../features/userSlice";
import updateReducer from "../features/updateSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    update: updateReducer,
  },
});

export default store;
