// import React from "react";
// import { Route, useNavigate } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// const PrivateRoute = ({ component: Component, auth, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       auth.isAuthenticated === true ? (
//         <Component {...props} />
//       ) : (
//         <useNavigate to="/login" />
//       )
//     }
//   />
// );

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(PrivateRoute);


// 2.
// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// const PrivateRoute = ({ component: Component, auth, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       element={
//         auth.isAuthenticated === true ? (
//           <Component />
//         ) : (
//           <Navigate to="/login" replace />
//         )
//       }
//     />
//   );
// };

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired,
//   component: PropTypes.elementType.isRequired // Add this prop type
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(PrivateRoute);



import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ element: Element, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      element={auth.isAuthenticated === true ? (
        <Element />
      ) : (
        <Navigate to="/login" replace />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  element: PropTypes.elementType.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
