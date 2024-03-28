import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutelogin = () => {
  const isAuth = localStorage.getItem("token");
    if (!isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/account/profile" />;
  }
  // return isAuth ? <Outlet /> : <Navigate to="/account/login" />;
};

export default PrivateRoutelogin;