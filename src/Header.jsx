import React from "react";
import "./styles/header.css";
import logo from "./UI/logo.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="icon">
        <img src={logo} alt="ES" className="logo" />
      </div>
      <nav className="education">
        <a href="#">Education</a>
      </nav>
      <nav className="education">
        <a href="#">About hobbies</a>
      </nav>
    </div>
  );
};

export default Header;
