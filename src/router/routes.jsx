import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import User from "../pages/User";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/profile" element={<User />} />
    </Route>
  )
);
