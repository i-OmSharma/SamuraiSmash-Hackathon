// src/context/authContext.js

import { createContext, useState, useContext, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Create a context to manage user authentication state
const AuthContext = createContext();

// AuthProvider component to provide the authentication state to the app
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    // Listen to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user when signed in or null if signed out
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children} {/* This allows any child component to access user */}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context easily in other components
export const useAuth = () => {
  return useContext(AuthContext);
};