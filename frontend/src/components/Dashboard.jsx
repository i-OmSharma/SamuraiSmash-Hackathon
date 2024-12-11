import React from "react";
import { useAuth } from "../context/authContext.jsx";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <p>You're logged in as {user.email}</p>
    </div>
  );
};

export default Dashboard;
