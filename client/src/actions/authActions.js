import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Check if token exists in localStorage and set it in the request headers
export const checkToken = () => (dispatch) => {
  const token = localStorage.getItem("jwtToken");
  if (token) {
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
  }
};

export const registerUser = (userData, navigate) => dispatch => {
  axios
    .post("http://localhost:5000/api/users/register", userData)
    .then(res => navigate("/login"))
    .catch(err => {
      if (err.response && err.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        });
      } else {
        console.log("An error occurred during registration:", err);
      }
    });
};

export const loginUser = (userData, navigate) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/users/login", userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      navigate("/dashboard"); // Use the navigate hook instead of history.push
    })
    .catch((err) => {
      if (err.response && err.response.data) {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        });
      } else {
        console.log("An error occurred during login:", err);
      }
    });
};


// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Log user out
export const logoutUser = (navigate) => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  navigate("/login");
};
