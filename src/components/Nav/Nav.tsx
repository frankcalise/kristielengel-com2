import React from "react";
import { Link } from "gatsby";
import Logo from "./Logo";

type HamburgerProps = {
  open?: boolean;
};

const Hamburger: React.FC<HamburgerProps> = ({ open }) => (
  <div className={`hamburger${open ? "" : " open"}`} />
);

const Links: React.FC = () => (
  <>
    <Link to="/signup" className="nav-item sign-up" activeClassName="active">
      <span>Sign Up</span>
    </Link>
    <Link
      to="/back-to-basix"
      className="nav-item back-to-basix"
      activeClassName="active"
    >
      <span>Back to Basix</span>
    </Link>
    <Link to="/about" className="nav-item about-nav" activeClassName="active">
      <span>About</span>
    </Link>
    <Link to="/" className="nav-item free-consultation">
      <span>Free Consultation</span>
    </Link>
    <Link
      to="/signin"
      className="nav-item member-sign-in"
      activeClassName="active"
    >
      <span>Member Sign In</span>
    </Link>
  </>
);

const Nav: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="navigation">
      <Logo />
      <a
        className="toggle"
        onClick={() => {
          setNavbarOpen(!navbarOpen);
        }}
      >
        {navbarOpen ? <Hamburger /> : <Hamburger open />}
      </a>
      <div className={`navbox${navbarOpen ? "" : " open"}`}>
        <Links />
      </div>
    </div>
  );
};

export default Nav;
