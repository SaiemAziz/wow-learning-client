import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Auth";

const Private = ({ children }) => {
  let { user, setRedirect, loading } = useContext(AuthContext);
  let location = useLocation();
  
  
  if (user) {
    setRedirect(null)
    return children;
  }
  else if (loading)
  return (
    <div className="flex items-center justify-center mt-10 ">
      <div className="w-10 h-10 border-b-4 border-r-4 border-red-900 rounded-full animate-spin"></div>
    </div>
  )
  else {    
    setRedirect(location.pathname);
    return <Navigate to="/login" replace></Navigate>;
  }
};

export default Private;
