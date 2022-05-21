import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, ...props }) => {
  return loggedIn ? <Outlet {...props} /> : <Navigate to="/" />
};

export default ProtectedRoute;