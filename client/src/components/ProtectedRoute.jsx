import { Navigate, Outlet } from "react-router-dom";
import { useLoadUserQuery } from "../features/api/authApi";
import LoadingSpinner from "./LoadingSpinner";

const ProtectedRoute = () => {
  const { data, isLoading } = useLoadUserQuery();

  if (isLoading) return <LoadingSpinner />;

  return data ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;