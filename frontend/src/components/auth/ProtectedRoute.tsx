import { Navigate } from "react-router-dom";
 develop
import { useAuth } from "../../context/AuthContext";

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {

import { useAuth } from "../../context/useAuth";
import type { ReactElement } from "react";

interface Props {
  children: ReactElement;
  allowedRoles?: ("ADMIN" | "EMPLOYEE")[];
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
 main
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

 develop
  return <>{children}</>;
};

export default ProtectedRoute;

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
main
