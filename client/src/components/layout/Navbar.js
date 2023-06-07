// // import React from "react";
// // import PropTypes from "prop-types";
// // import { connect } from "react-redux";
// // import { logoutUser } from "../../actions/authActions";
// // import { useNavigate } from 'react-router-dom';
// // import "./Navbar.css";

// // function Navbar({ logoutUser }) {
// //   const navigate = useNavigate();
// //   const onLogoutClick = (e) => {
// //     e.preventDefault();
// //     logoutUser(navigate);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="nav-wrapper">
// //         <ul className="right">
// //           <li>
// //             <button
// //               className="btn btn-primary waves-effect waves-light hoverable blue accent-3 logout-btn"
// //               onClick={onLogoutClick}
// //             >
// //               Logout
// //             </button>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }

// // Navbar.propTypes = {
// //   logoutUser: PropTypes.func.isRequired,
// // };

// // export default connect(null, { logoutUser })(Navbar);



// import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
// import { useNavigate, useLocation } from 'react-router-dom';
// import "./Navbar.css";

// function Navbar({ logoutUser }) {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const onLogoutClick = (e) => {
//     e.preventDefault();
//     logoutUser(navigate);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-wrapper">
//         <ul className="left">
//           <li>
//             <span className="navbar-example">EXAMPLE</span>
//           </li>
//         </ul>
//         {location.pathname === "/dashboard" && (
//           <ul className="right">
//             <li>
//               <button
//                 className="btn btn-primary waves-effect waves-light hoverable blue accent-3 logout-btn"
//                 onClick={onLogoutClick}
//               >
//                 Logout
//               </button>
//             </li>
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
// };

// export default connect(null, { logoutUser })(Navbar);
