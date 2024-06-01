// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { IsLoggedInContext } from "../context/IsLoggedInContext";


// export const ProtectedRoute: React.FC = () => {
//   const isLog = React.useContext(IsLoggedInContext);
// console.log(isLog);

//   return isLog ? <Outlet/> : <Navigate to="/sign-in" replace />;

// };


import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAppSelector } from "../redux/srore";

interface ProtectedRouteProps {
  element: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isLoggedIn = useAppSelector((state)=> state.isLoggedInSlice.isLoggedIn)

  return isLoggedIn ? element : <Navigate to="/sign-in" replace />;
};
