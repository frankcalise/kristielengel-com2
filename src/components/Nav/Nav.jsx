import React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";

const Hamburger = ({ open }) => (
  <div className={`hamburger${open ? "" : " open"}`} />
);

const Links = () => (
  <>
    <Link to="/signup" className="nav-item">
      Sign Up
    </Link>
    <Link to="/back-to-basics" className="nav-item">
      Back to Basix
    </Link>
    <Link to="/about" className="nav-item">
      About Me
    </Link>
    <Link to="/" className="nav-item">
      Free Consultation
    </Link>
    <Link to="/signin" className="nav-item">
      Member Sign in
    </Link>
  </>
);

function Nav() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="navigation">
      <Logo />
      <div
        className="toggle"
        onClick={() => {
          setNavbarOpen(!navbarOpen);
        }}
      >
        {navbarOpen ? <Hamburger /> : <Hamburger open />}
      </div>
      <div className={`navbox${navbarOpen ? "" : " open"}`}>
        <Links />
      </div>
    </div>
  );
}

export default Nav;
