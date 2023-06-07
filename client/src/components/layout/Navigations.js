// import React, { useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Navigations.css';

// const Navigations = () => {
//   const navigate = useNavigate();
//   const textAnimationRef = useRef(null);

//   useEffect(() => {
//     const handleAnimationEnd = () => {
//       textAnimationRef.current.style.animation = 'none';
//       setTimeout(() => {
//         textAnimationRef.current.style.animation = '';
//       }, 0);
//     };

//     const intervalId = setInterval(handleAnimationEnd, 15000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <nav>
//       <div className="text-container">
//         <svg className="text-stroke" viewBox="0 0 500 100" width="80%" height="100%">
//           <text ref={textAnimationRef} x="20" y="75">EXAMPLE</text>
//         </svg>
//       </div>
//     </nav>
//   );
// };

// export default Navigations;


import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';
import './Navigations.css';


const Navigations = ({ logoutUser }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const textAnimationRef = useRef(null);

  const onLogoutClick = (e) => {
    e.preventDefault();
    logoutUser(navigate);
  };

  useEffect(() => {
    const handleAnimationEnd = () => {
      textAnimationRef.current.style.animation = 'none';
      setTimeout(() => {
        textAnimationRef.current.style.animation = '';
      }, 0);
    };

    const intervalId = setInterval(handleAnimationEnd, 15000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <nav>
      <div className="text-container">
        <svg className="text-stroke" viewBox="0 0 500 100" width="80%" height="100%">
          <text ref={textAnimationRef} x="20" y="75">EXAMPLE</text>
        </svg>
      </div>
      {location.pathname === '/dashboard' && (
        <div className="logout-container">
          <button
            className="btn btn-primary waves-effect waves-light hoverable blue accent-3 logout-btn"
            onClick={onLogoutClick}
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

Navigations.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(Navigations);
