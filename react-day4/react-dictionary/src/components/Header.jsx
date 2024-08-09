import React from "react";
import logo from "../assets/logo-hard-code.svg";
import "../styling/NavigationStyling.css";

const Header = () => {
  return (
    <div className="main">
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>Counter</li>
            <li>Dictionary</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
