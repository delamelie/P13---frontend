import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn, loading } = useSelector((state) => state.auth);

  if (loading) return null;

  return isLoggedIn ? children : <Navigate to="/login" />;
};
