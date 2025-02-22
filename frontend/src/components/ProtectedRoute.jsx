// routing/ProtectedRoute.js
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  // Redirect to login if not authenticated
  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  return <Outlet />; // Render child routes
};

export default ProtectedRoute;
