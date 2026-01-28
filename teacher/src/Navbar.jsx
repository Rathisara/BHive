import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bhiveLogo from "../assets/logo_nobg.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-wrapper">
          <img src={bhiveLogo} alt="BHive Main Logo" className="navbar-main-logo" />
          <span className="navbar-text">BHive</span>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <button className="nav-btn nav-btn-getstarted" onClick={() => navigate("/role-select")}>
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
