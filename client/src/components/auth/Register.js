import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

const Register = ({ registerUser, auth, errors, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: name,
      email: email,
      password: password,
      password2: password2
    };

    registerUser(newUser, history);
  };

  const onChange = e => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "password2":
        setPassword2(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="register-container">
      <div className="register-row">
        <div className="col-md-6 col-md-offset-3">
          <Link to="/" className="btn-flat waves-effect">
            <i className="material-icons left">keyboard_backspace</i> Back to
            home
          </Link>
          <div className="panel panel-login">
            <div className="panel-heading">
              <div className="register-second-row">
                <div className="col-xs-6">
                  <Link to="/register" className="active" id="register-form-link">
                    Register
                  </Link>
                </div>
                <div className="col-xs-6">
                  <Link to="/login" id="login-form-link">
                    Login
                  </Link>
                </div>
              </div>
              <hr />
            </div>
            <div className="panel-body">
              <div className="register-third-row">
                <div className="col-lg-12">
                  <form id="register-form" onSubmit={onSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        tabIndex="1"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={onChange}
                      />
                      <span className="red-text">{errors.name}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        tabIndex="2"
                        className="form-control"
                        placeholder="Email Address"
                        value={email}
                        onChange={onChange}
                      />
                      <span className="red-text">{errors.email}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        tabIndex="3"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={onChange}
                      />
                      <span className="red-text">{errors.password}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password2"
                        id="password2"
                        tabIndex="4"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={onChange}
                      />
                      <span className="red-text">{errors.password2}</span>
                    </div>
                    <div className="form-group">
                      <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                          <button
                            type="submit"
                            name="register-submit"
                            id="register-submit"
                            className="form-control btn btn-register"
                          >
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
