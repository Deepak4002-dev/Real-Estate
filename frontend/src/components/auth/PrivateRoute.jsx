// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Unauthorized from "../../pages/auth/Unauthorized";

const PrivateRoute = ({ children, requiredRole }) => {
  const { isLogged, role } = useSelector((state) => state.auth);
  const location = useLocation();

  // ✅ 1. If not logged in, redirect to login page
  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ 2. If logged in but lacks proper role, show Unauthorized
  if (requiredRole && role !== requiredRole) {
    return <Unauthorized />;
  }

  // ✅ 3. If authenticated & authorized, render child components
  return children;
};

export default PrivateRoute;
