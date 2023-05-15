import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import videoFile from "../videos/landingvideo.mp4";

const Landing = () => {
  const rotationRef = useRef(null);

  useEffect(() => {
    const words = ["eat", "drink", "shop", "play"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
      rotationRef.current.classList.add("fade-out");

      setTimeout(() => {
        rotationRef.current.textContent = words[currentIndex];
        rotationRef.current.classList.remove("fade-out");
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-container">
      <div className="left-section">
        <div className="left-container">
          <h1 className="hero-text">
            Discover new places to{" "}
            <span ref={rotationRef} className="rotate" /> <br />
            <span className="app-description">
              with our easy-to-use app
            </span>
          </h1>
          <p className="hero-title">
            Find nearby places based on your zip code
          </p>
          <div className="hero-cta">
            <Link to="/register" className="btn btn-primary btn-wave">
              Register
            </Link>
            <Link to="/login" className="btn btn-primary btn-wave">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="video-container">
          <video className="video" src={videoFile} controls autoPlay muted loop />
        </div>
      </div>
    </div>
  );
};

export default Landing;
