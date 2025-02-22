import React from "react";
import UserLayout from "../layout/UserLayout";
import UserDashboard from "../pages/user/UserDashboard";
import PrivateRoute from "../components/auth/PrivateRoute";

const userRoutes = [
  {
    path: "/user",
    element: (
      <PrivateRoute requiredRole={"user"}>
        <UserLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
    ],
  },
];

export default userRoutes;
