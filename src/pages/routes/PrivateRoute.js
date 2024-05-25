// import React, {Component, useState} from "react";
// import { Navigate } from "react-router-dom";



// const PrivateRoute = ({component: component, authenticated, ...rest}) => {
// const isLogin = localStorage.getItem("isLogin");
// const [isAuthenticated, setIsAuthenticated] = useState(isLogin === "1"? true : false);
// return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;


// PrivateRoute.js
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = localStorage.getItem("isLogin");
  const [isAuthenticated, setIsAuthenticated] = useState(isLogin === "1" ? true : false);

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;






