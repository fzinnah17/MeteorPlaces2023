import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Check if token exists in localStorage and set it in the request headers
export const checkToken = () => (dispatch) => {
  // It receives the dispatch function as an argument from Redux Thunk middleware. If a token exists, it sets the token in the request headers using the setAuthToken function.
  // It decodes the token using jwt_decode and gets the user information from it.
  // Finally, it dispatches the setCurrentUser action with the decoded user information.
  const token = localStorage.getItem("jwtToken");
  if (token) {
    setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
  }
};

// creator function registerUser. -> receives userData (user information) and navigate (a function for navigation) as arguments.
export const registerUser = (userData, navigate) => dispatch => {
  axios
    .post("http://localhost:5000/api/users/register", userData) // HTTP POST request to the registration endpoint using axios.post.
    .then(res => navigate("/login")) //navigate function to redirect the user to the login page.
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

// creator function loginUser. -> receives userData (user information) and navigate (a function for navigation) as arguments.
export const loginUser = (userData, navigate) => (dispatch) => {
  axios
    .post("http://localhost:5000/api/users/login", userData) // same as registerUser
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      navigate("/dashboard"); // Use the navigate hook for version 6
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
export const setCurrentUser = (decoded) => { // setCurrentUser function that takes in a parameter decoded. used to set the currently logged-in user in the Redux state.
  return { // returns an object with two properties: type(constant) and payload(parameter).
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading -> setUserLoading function takes no parameters. -> used to indicate that the user data is being loaded during an authentication process
export const setUserLoading = () => {
  return {
    type: USER_LOADING, // returning object type
  };
};

// Log user out -> logoutUser function takes in a parameter navigate -> used to log out the user by clearing the authentication token and resetting the user state -> handles the navigation to the login page after logout.
export const logoutUser = (navigate) => (dispatch) => {
  localStorage.removeItem("jwtToken"); // removes the jwtToken from the local storage.
  setAuthToken(false); // lear the authentication token
  dispatch(setCurrentUser({})); // returns a function that takes in a parameter dispatch
  navigate("/login");
};
