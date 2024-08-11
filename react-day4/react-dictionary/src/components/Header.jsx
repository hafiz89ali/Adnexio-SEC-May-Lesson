import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-hard-code.svg";
import "../index.css";

const Header = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  const navigateToCounter = () => navigate("/counter");
  const navigateToDictionary = () => navigate("/dictionary");
  const navigateToAbout = () => navigate("/about");
  return (
    <div className="extension">
      <div className="body">
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu">
            <ul>
              <li onClick={navigateToHome}>Home</li>
              <li onClick={navigateToCounter}>Counter</li>
              <li onClick={navigateToDictionary}>Dictionary</li>
              <li onClick={navigateToAbout}>About</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
