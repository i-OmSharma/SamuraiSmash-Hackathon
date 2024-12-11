// src/components/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext"; // Access the user state

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();  // Get user from auth context

  // If no user is logged in, redirect to SignIn page
  if (!user) {
    return <Navigate to="/signin" />;
  }

  // If the user is authenticated, render the children (protected page)
  return children;
};

export default ProtectedRoute;
