import React from "react";
import { restaurantInfo } from "../data/menuData";
import "../styles/Header.css";

const Header = () => {
  const handleLogoError = (e) => {
    e.target.style.display = "none";
    e.target.parentElement.classList.add("empty");
  };

  return (
    <header className="header">
      <div className="header-corner top-left" />
      <div className="header-corner top-right" />
      <div className="header-corner bottom-left" />
      <div className="header-corner bottom-right" />

      <div className="header-logo-container">
        <div className="header-logo-ring" />
        <div className="header-logo-frame">
          <img
            src={restaurantInfo.logo}
            alt="Logo"
            className="header-logo"
            loading="eager"
            onError={handleLogoError}
          />
        </div>
      </div>

      <h1 className="header-title">
        <span className="header-the">the</span>
        <span className="header-menu-text">Menu</span>
      </h1>

      <div className="header-ornament">
        <div className="header-ornament-line" />
        <div className="header-ornament-center">
          <span className="header-ornament-star">✦</span>
          <div className="header-ornament-diamond" />
          <span className="header-ornament-star">✦</span>
        </div>
        <div className="header-ornament-line" />
      </div>
    </header>
  );
};

export default Header;
