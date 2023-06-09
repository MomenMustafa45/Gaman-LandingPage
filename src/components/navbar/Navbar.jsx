import React, { useState } from "react";
import "./navbar.css";
import image from "../../images/nav-logo.png";
import iconImage from "../../images/responsiveIcon.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathName = useLocation();

  console.log(pathName);

  return (
    <header className="navbar-parent">
      <div className="left-side-container">
        <div className="nav-logo-container">
          <img src={image} alt="" />
        </div>
        <p>Gaman</p>
      </div>

      {/* Right Side */}
      {/* Right Side */}

      <nav className="right-side-container">
        <ul className="links-container">
          <li>
            <Link
              to="/"
              className={`${pathName.pathname === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${pathName.pathname === "/about" ? "active" : ""}`}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/creator-zone"
              className={`${
                pathName.pathname === "/creator-zone" ? "active" : ""
              }`}
            >
              Creator zone
            </Link>
          </li>
          <li>
            <Link to="/login" className="login-btn">
              Login
            </Link>
          </li>
        </ul>
      </nav>

      {/* Burger Icon for responsive design */}
      {/* Burger Icon for responsive design */}
      <div
        className="burger-container"
        onClick={() => setToggleMenu((prev) => !prev)}
      >
        <img src={iconImage} alt="icon img" />
      </div>

      <nav
        className="toggle-menu-container"
        style={{ height: `${toggleMenu ? "117px" : "0"}` }}
      >
        <li>
          <Link to="/" onClick={() => setToggleMenu((prev) => !prev)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setToggleMenu((prev) => !prev)}>
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/creator-zone"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            Creator zone
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
