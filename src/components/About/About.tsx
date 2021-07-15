import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-hero-box">
      <div className="about flood-text">
        <h1>
          <span className="hero-text">
            About <span className="gold-text">Me</span>
          </span>
        </h1>
        <div>
          <p className="about-subtitle">
            <span className="hero-subtitle-text">OPERATION: #BALANCE</span>
          </p>
        </div>
      </div>

      {/* fold bar */}

      <div className="fold-bar">
        <div className="fold-container">
          <span className="fold-text mr-xl">chat with me</span>
          <span className="fold-text">let's talk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></span>
        </div>
      </div>
    </div>
  );
}

export default About;
