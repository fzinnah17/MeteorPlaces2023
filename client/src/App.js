// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";

// import { setCurrentUser, logoutUser } from "./actions/authActions";
// import { Provider } from "react-redux";
// import store from "./store";

// // import Navbar from "./components/layout/Navbar";
// import Landing from "./components/layout/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";

// import "./App.css";
// import './components/layout/Landing.css';
// import './components/auth/Register.css';
// import './components/dashboard/Dashboard.css';

// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());

//     // useNavigate to login
//     window.location.href = "./login";
//   }
// }
// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Router>
//           <div className="App">
//             {/* <Navbar /> */}
//             <Route exact path="/" component={Landing} />
//             <Route exact path="/register" component={Register} />
//             <Route exact path="/login" component={Login} />
//             <Routes>
//               <PrivateRoute exact path="/dashboard" component={Dashboard} />
//             </Routes>
//           </div>
//         </Router>
//       </Provider>
//     );
//   }
// }
// export default App;

// 2. 
// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";

// import { setCurrentUser, logoutUser } from "./actions/authActions";
// import { Provider } from "react-redux";
// import store from "./store";

// import Landing from "./components/layout/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";

// import "./App.css";

// const App = () => {
//   useEffect(() => {
//     if (localStorage.jwtToken) {
//       const token = localStorage.jwtToken;
//       setAuthToken(token);
//       const decoded = jwt_decode(token);
//       store.dispatch(setCurrentUser(decoded));
//       const currentTime = Date.now() / 1000;
//       if (decoded.exp < currentTime) {
//         store.dispatch(logoutUser());
//         window.location.href = "./login";
//       }
//     }
//   }, []);

//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Landing />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <PrivateRoute path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// };

// export default App;




// 3. 
// import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";

// import { setCurrentUser, logoutUser } from "./actions/authActions";
// import { Provider } from "react-redux";
// import store from "./store";

// import Landing from "./components/layout/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";

// import "./App.css";

// const App = () => {
//   useEffect(() => {
//     if (localStorage.jwtToken) {
//       const token = localStorage.jwtToken;
//       setAuthToken(token);
//       const decoded = jwt_decode(token);
//       store.dispatch(setCurrentUser(decoded));
//       const currentTime = Date.now() / 1000;
//       if (decoded.exp < currentTime) {
//         store.dispatch(logoutUser());
//         window.location.href = "./login";
//       }
//     }
//   }, []);

//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<Landing />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <PrivateRoute path="/dashboard/*">
//               <Dashboard />
//             </PrivateRoute>
//           </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// };

// export default App;







// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import Landing from "./components/layout/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";

// import "./App.css";

// const App = () => {

//   return (
//       <Router>
//         <div className="App">
//           <Route path="/" element={<Landing />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
//         </div>
//       </Router>
//   );
// };

// export default App;


// import React from "react";
// import { Router, Route, Routes } from "react-router-dom";

// import Landing from "./components/layout/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";

// import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/dashboard/*"
//             element={<PrivateRoute><Dashboard /></PrivateRoute>}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

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
          <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;








// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import jwt_decode from "jwt-decode";
// import setAuthToken from "./utils/setAuthToken";

// import { setCurrentUser, logoutUser } from "./actions/authActions";
// import { Provider } from "react-redux";
// import store from "./store";

// import Landing from "./components/layout/Landing";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/dashboard/Dashboard";

// import "./App.css";
// import "./components/layout/Landing.css";
// import "./components/auth/Register.css";
// import "./components/dashboard/Dashboard.css";

// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   const decoded = jwt_decode(token);
//   store.dispatch(setCurrentUser(decoded));
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     store.dispatch(logoutUser());
//     window.location.href = "./login";
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <Router>
//           <div className="App">
//             <Routes>
//               <Route path="/" element={<Landing />} />
//               <Route path="/register" element={<Register />} />
//               <Route path="/login" element={<Login />} />
//               <Route
//                 path="/dashboard"
//                 element={<PrivateRoute component={Dashboard} />}
//               />
//             </Routes>
//           </div>
//         </Router>
//       </Provider>
//     );
//   }
// }

// export default App;


