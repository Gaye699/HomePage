import React from 'react';
import canLogo from '../assets/canLogo.png.webp';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <img src={canLogo} alt="CAN Logo" />
          </div>
          
          {/* Navigation Links */}
          <div className="navbar-links">
            <a href="#home">HOME</a>
            <a href="#news">NEWS</a>
            <a href="#videos">VIDEOS</a>
            <a href="#calendar">CALENDAR</a>
            <a href="#teams">TEAMS</a>
            <a href="#archive">ARCHIVE</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="navbar-mobile-btn">
            <button>
              <svg 
                width="24" 
                height="24" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;