import React from 'react';

const Logo = () => (
  <a href="#" className="logo" aria-label="Homepage">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" />
      <path d="M12.5 22V10H17.5C19.9853 10 22 12.0147 22 14.5C22 16.9853 19.9853 19 17.5 19H15.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15.5" y1="19" x2="20" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </a>
);

export default Logo;