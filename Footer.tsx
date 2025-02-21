import React from "react";
import "./Footer.css";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">Donora</div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-social"></div>

        <div className="footer-text">© 2025 Donora. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
