import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import AuthContext from "../../contexts/auth-context";

const Authenticator = ({ children }) => {
  const authContext = useContext(AuthContext);
  const location = useLocation();

  if (!authContext.user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};

export default Authenticator;
