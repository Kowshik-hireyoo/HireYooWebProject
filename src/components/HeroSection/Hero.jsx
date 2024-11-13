import React from 'react';
import './Hero.css';
import { CiSearch } from 'react-icons/ci'; // Importing the search icon
import { SlOptionsVertical } from 'react-icons/sl'; // Importing the SlOptionsVertical icon
import { GrCloudlinux } from "react-icons/gr";
import { LiaDnaSolid } from "react-icons/lia";
import { BsDatabaseCheck } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

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
             {/* New Container-1 */}
        <div className="hero-Container-1">
        <h2 className="hero-container-title">Best Learning Program Across The World</h2>


        <div className='display-tech-1'>
          {/* Add the SlOptionsVertical icon here */}
          <SlOptionsVertical className="ellipsis-icon" />
          <GrCloudlinux className='web-tech'/>
          <h3 className='web-title'>Web Development</h3>
          <p className='web-p'>71.8M Learners</p>
        </div>

        <div className='display-tech-2'>
          {/* Add the icon here */}
          <SlOptionsVertical className="ellipsis-icon" />
          <LiaDnaSolid  className='machin-lear'/>
          <h3 className='machin-title'>Machine Learning</h3>
          <p className='machin-p'>55.7M Learners</p>
        </div>

        <div className='display-tech-3'>
          {/* Add the icon here */}
          <SlOptionsVertical className="ellipsis-icon" />
          <BsDatabaseCheck   className='data-sci'/>
          <h3 className='data-title'>Data Science</h3>
          <p className='data-p'>31.8M Learners</p>
        </div>

        <div className='display-tech-4'>
          {/* Add the icon here */}
          <SlOptionsVertical className="ellipsis-icon" />
          <BsGraphUpArrow    className='business-an'/>
          <h3 className='business-title'>Business Analytics</h3>
          <p className='business-p'>41.4M Learners</p>
        </div>

        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
