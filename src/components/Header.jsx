import React from 'react';
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import ThemeToggle from './ThemeToggle';

const Header = ({ isScrolled, isDarkMode, onThemeToggle }) => (
  <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
    <nav className="navbar">
      <Logo />
      <div className="header-stuffs">
        <SocialLinks />
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onThemeToggle} />
      </div>
    </nav>
  </header>
);

export default Header;