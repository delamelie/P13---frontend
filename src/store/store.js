import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/loginLogoutUser/authSlice";
import userReducer from "../features/displayUser/userSlice";
import updateReducer from "../features/updateUser/updateSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

// const persistConfig = {
//   key: "root",
//   storage,
//   middleware: [thunk],
// };

// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
//   update: updateReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    update: updateReducer,
  },
});

export default store;

// const rootPersistConfig = {
//   key: "root",
//   storage,
// };

// const userPersistConfig = {
//   key: "user",
//   storage,
//   blacklist: ["isLoggedIn"],
// };

// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: persistReducer(userPersistConfig, userReducer),
//   update: updateReducer,
// });

// const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
