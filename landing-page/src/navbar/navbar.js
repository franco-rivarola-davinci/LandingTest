import React from 'react';
import './navbar.css'; 

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img className="logo-nav" src="../assets/logo.png" alt="EventWise logo" />
        </div>
        <div className="refs">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;