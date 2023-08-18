import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import updateReducer from "./update/updateSlice";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage,
// };

// const rootReducer = combineReducers({
//   auth: authReducer,
//   user: userReducer,
//   update: updateReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     user: userReducer,
//     update: updateReducer,
//   },
// });

// export default store;

const rootPersistConfig = {
  key: "root",
  version: 1,
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["isLoggedIn", "user"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  user: persistReducer(userPersistConfig, userReducer),
  update: updateReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
