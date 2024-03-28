import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token");
  if (isAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="/account/login" />;
  }
  // return isAuth ? <Outlet /> : <Navigate to="/account/login" />;
};

// const PrivateRoutee = () => {
//   const isAuth = localStorage.getItem("token");
//   if (!isAuth) {
//     return <Outlet />;
//   } else {
//     return <Navigate to="/account/profile" />;
//   }
  
// };

export default PrivateRoute;
// export { PrivateRoutee };
