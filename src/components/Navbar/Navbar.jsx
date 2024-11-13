import React, { useState } from 'react';
import './Navbar.css';
import company_logo from '../../assets/logo.png';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
      <img src={company_logo} alt="Company Logo" className='logo'/>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul>
        <li>Get Hired</li>
        <li>For Developer</li>
        <li>Get Your Team</li>
        <li>Hire Your Remote Team</li>
        <li>Learning & Certification Program</li>
        <li>Support & More</li>
      </ul>

      <div className="button-container">
        <div className="register">
          <button className="register-btn">Register</button>
        </div>
        <div className="login">
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
