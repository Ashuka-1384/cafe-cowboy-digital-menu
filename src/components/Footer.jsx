import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-ornament">
        <div className="footer-ornament-line" />
        <div className="footer-ornament-center">
          <span className="footer-ornament-star">✦</span>
          <div className="footer-ornament-diamond" />
          <span className="footer-ornament-star">✦</span>
        </div>
        <div className="footer-ornament-line" />
      </div>
      <p className="footer-text">با سپاس از حضور گرم شما</p>
    </footer>
  );
};

export default Footer;
