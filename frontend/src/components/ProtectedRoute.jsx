// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Assuming you have an auth context

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Get user from context or state

  if (!user) {
    // If no user is logged in, redirect to SignIn page
    return <Navigate to="/" />;
  }

  return children; // Render the protected page if the user is logged in
};

export default ProtectedRoute;
