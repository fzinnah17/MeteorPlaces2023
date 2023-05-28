import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";
import './components/layout/Landing.css';
import './components/auth/Register.css';
import './components/auth/Login.css';
import './components/dashboard/Dashboard.css';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/dashboard/*" element={<PrivateRoute />} /> */}
          <Route element={<PrivateRoute />}>
            <Route element={<Dashboard />} path="/dashboard" />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;


