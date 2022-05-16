import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedAuthRoute = ({ loggedIn, ...props }) => {
  return loggedIn ? <Navigate to="/movies" /> : <Outlet {...props} />
};

export default ProtectedAuthRoute;