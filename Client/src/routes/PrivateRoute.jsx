import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export const PrivateRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
