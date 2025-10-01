import React from 'react';
import pfp from '../assets/profile.jpg';

const ProfileSection = ({ activeTab, onTabClick }) => (
  <div className="left-grid-content">
    <div className="profile-pic-container">
      <img src={pfp} alt="Ritu Raj Profile" className="profile-pic" />
    </div>
    <h1 className="name">Ritu Raj</h1>
    <h2 className="title">App Developer</h2>
    <p className="small-description">
      I build intuitive and beautiful user experiences with a passion for solving complex problems.
    </p>
    <nav className="tabs-box">
      <button onClick={() => onTabClick('about')} className={`tab_Button ${activeTab === 'about' ? 'isTabActive' : ''}`}>About</button>
      <button onClick={() => onTabClick('skills')} className={`tab_Button ${activeTab === 'skills' ? 'isTabActive' : ''}`}>Skills</button>
      <button onClick={() => onTabClick('projects')} className={`tab_Button ${activeTab === 'projects' ? 'isTabActive' : ''}`}>Projects</button>
    </nav>
  </div>
);

export default ProfileSection;