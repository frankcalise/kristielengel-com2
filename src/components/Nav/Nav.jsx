import React from "react";
import "./Nav.css";
import whiteLogo from "../../images/KL_Logo_WHITE.png";

function Nav() {
  return (
    <div className="nav-row">
      <div className="logo-box">
        <div className="inner">
          <img src={whiteLogo} alt="KL logo" />
        </div>
      </div>
      <div className="sign-up active">
        <p className="strong">sign up</p>
      </div>
      <div className="back-to-basix">
        <p className="strong">back to basix</p>
      </div>
      <div className="about-nav">
        <p className="strong">about me</p>
      </div>
      <div className="free-consultation">
        <p className="strong">free consultation</p>
      </div>
      <div className="member-sign-in">
        <p>
          <span className="strong">member</span> sign in
        </p>
      </div>
    </div>
  );
}

export default Nav;
