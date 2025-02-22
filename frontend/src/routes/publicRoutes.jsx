import React from "react";
import PublicLayout from "../layout/PublicLayout";
import Home from "../pages/general/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/auth/Signup";
import Unauthorized from "../pages/auth/Unauthorized";

const publicRoutes = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true, // This makes "/" route point to Home component
        element: <Home />,
      },
      {
        path: "login", // Avoid duplicate path
        element: <Login />,
      },
      {
        path: "signup", // Corrected path for Signup
        element: <Signup />,
      },
      {
        path: "unauthorized",
        element: <Unauthorized />,
      },
    ],
  },
];

export default publicRoutes;
