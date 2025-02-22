import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header.jsx";
import HeroSection from "./pages/General/HeroSection.jsx";
import Properties from "./components/Properties.jsx";
import Contact from "./pages/General/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header2 from "./components/Header2.jsx";
import Signup from "./pages/Auth/Signup.jsx";
import Login from "./pages/Auth/Login.jsx";
import AllProperties from "./pages/General/AllProperties.jsx";
import About from "./pages/General/About.jsx";
import UserDashboard from "./pages/User/UserDashboard.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import PrivateRoute from "./components/auth/PrivateRoute.jsx";

const App2 = () => {
  const MainLayout = () => {
    return (
      <>
        <HeroSection />
        <Properties />
        <About />
        <Contact />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    { path: "/", element: <MainLayout /> },
    {
      path: "/login",
      element: (
        <>
          <Header2 />
          <Login />
          <Footer />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Header2 />
          <Signup />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Header2 />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Header2 />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/all-properties",
      element: (
        <>
          <Header2 />
          <AllProperties />
          <Footer />
        </>
      ),
    },
    {
      path: "/user-dashboard",
      element: (
        <PrivateRoute requiredRole="user">
          <UserDashboard />
        </PrivateRoute>
      ),
    },
    {
      path: "/admin-dashboard",
      element: (
        <PrivateRoute requiredRole="admin">
          <AdminDashboard />
        </PrivateRoute>
      ),
    },
  ]);

  return (
    <>
      <div className="w-screen h-screen">
        <ToastContainer position="top-right" autoClose={3000} />
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App2;

// Protected Route for User Dashboard
// {
//   path: "/user-dashboard",
//   element: <ProtectedRoute />, // Checks authentication
//   children: [
//     { path: "", element: <UserDashboard /> }, // Nested route
//   ],
// },
