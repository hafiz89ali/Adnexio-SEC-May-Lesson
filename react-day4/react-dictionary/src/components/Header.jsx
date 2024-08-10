import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-hard-code.svg";
import "../styling/NavigationStyling.css";

const Header = () => {
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }
  function navigateToCounter() {
    navigate("/counter");
  }
  return (
    <div className="main">
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li onClick={navigateToHome}>Home</li>
            <li onClick={navigateToCounter}>Counter</li>
            <li>Dictionary</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
