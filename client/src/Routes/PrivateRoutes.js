import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/account/login" />;
};

// const PrivateRoutee = () => {
//   const isAuth = localStorage.getItem("token");
//   return isAuth ? <Navigate to="/account/profile" /> : <Outlet />  ;
// };

export default PrivateRoute;
// export { PrivateRoutee };
