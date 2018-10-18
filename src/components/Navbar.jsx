import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper purple darken-3">
      <div className="container">
        <a className="brand-logo left"> Poke 's time</a>{" "}
        <ul className="right">
          <li>
            <Link to="/home"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
