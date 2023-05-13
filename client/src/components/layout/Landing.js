import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="hero-container">
        <p className="hero-hook">
          Discover new experiences and make memories with friends and family
        </p>
        <h1 className="hero-title">
          Find nearby places based on your zip code
        </h1>
        <p className="hero-text">
          Discover new places to eat, drink, shop, and play with our easy-to-use app
        </p>
        <div className="hero-cta">
          <Link to="/register" className="btn btn-primary btn-wave">
            Register
          </Link>
          <Link to="/login" className="btn btn-secondary btn-wave">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
