import React from "react";
import AdminLayout from "../layout/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import PrivateRoute from "../components/auth/PrivateRoute";

const adminRoutes = [
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminLayout requiredRole={"admin"} />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
    ],
  },
];

export default adminRoutes;
