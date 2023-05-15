import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./Navbar.css";

function Navbar({ logoutUser }) {
  const onLogoutClick = (e) => {
    e.preventDefault();
    logoutUser();
  };

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <ul className="right">
          <li>
            <button
              className="btn btn-primary waves-effect waves-light hoverable blue accent-3 logout-btn"
              onClick={onLogoutClick}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

export default connect(null, { logoutUser })(Navbar);


  