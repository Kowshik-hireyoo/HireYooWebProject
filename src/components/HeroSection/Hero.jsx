import React from 'react';
import './Hero.css';
import { CiSearch } from 'react-icons/ci'; // Importing the search icon


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">A Powerful Virtual Assistant To Hire Your Remote Team With AI Powered</h1>
        <p className="hero-subtitle">
        Unlock Global Talent Instantly—Hire Smarter, Faster, with AI-Powered Precision
        </p>
        <div className="hero-rectangle">{/* Rectangle below the title */}
            {/* Search icon container */}
          <div className="search-icon-container">
            <CiSearch className="search-icon" />
          </div>
          
        <div className="hero-line"></div> {/* Line inside the rectangle */}
            </div> 
             {/* New Rectangle 132 */}
        <div className="hero-rectangle-132"></div>
      </div>
    </section>
  );
};

export default HeroSection;
