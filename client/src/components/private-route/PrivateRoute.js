
import React from "react";
import { Outlet, Navigate } from "react-router-dom"; // In version 6, it imports the Outlet and Navigate components from the react-router-dom library. These components are used for routing and navigation.
import { useSelector } from "react-redux"; // This hook allows us to access the Redux store and retrieve specific state values.

const PrivateRoute = () => { //functional component called PrivateRoute + not accepting any props

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  //useSelector hook to access the isAuthenticated property from the Redux store's auth state.
  //Redux store has a slice called auth, and within that slice, there is a property named isAuthenticated
  //isAuthenticated will be either true or false, indicating whether the user is authenticated or not.

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
  //Returns either the Outlet component or the Navigate component based on the value of isAuthenticated.
  //<Outlet /> means nested child routes from App.js will be displayed. Otherwise, to navigate to the login page.
  //replace attribute to replace the current URL

};

export default PrivateRoute;



