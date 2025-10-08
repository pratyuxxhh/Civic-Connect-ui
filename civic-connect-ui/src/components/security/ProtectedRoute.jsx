import { Navigate } from "react-router-dom";
import getUserRole from "../security-helper/getUserRole";

export default function ProtectedRoute({ children, allowedRoles }) {
  const role = getUserRole();
  if (!role) {
    return <Navigate to="/login" replace />;
  }
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
}
