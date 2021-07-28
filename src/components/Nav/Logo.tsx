import React from "react";
import { Link } from "gatsby";
import whiteLogo from "../../images/KL_Logo_WHITE.png";

const Logo: React.FC = () => (
  <Link to="/">
    <div className="logo-wrap">
      <img src={whiteLogo} alt="KL logo" />
    </div>
  </Link>
);

export default Logo;
