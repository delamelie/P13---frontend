import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import updateReducer from "../features/update/updateSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    update: updateReducer,
  },
});

export default store;
