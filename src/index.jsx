import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./router/routes.jsx";
import { GlobalStyle } from "./style/GlobalStyle";
import store from "./store/store.js";
//import { persistor, store } from "./store/store.js";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <RouterProvider router={router} />
      {/* </PersistGate> */}
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
