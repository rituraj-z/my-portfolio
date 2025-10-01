import React, { useEffect, useState } from 'react';
import ProfileSection from './components/ProfileSection';
import Header from './components/Header';
import ContentArea from './components/ContentArea';

function App() {
  const [activeTab, active_Tab_Ctrlr] = useState(null);
  const [if_Dark_Mode, dark_Mode_Ctrlr] = useState(false);
  const [if_Scrolled, scroll_Ctrlr] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeState = { isDark: prefersDark };

    if (themeState.isDark) {
      dark_Mode_Ctrlr(true);
    }
  }, []);

  useEffect(() => {
    if (if_Dark_Mode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [if_Dark_Mode]);

  useEffect(() => {
    const handleScroll = () => {
      scroll_Ctrlr(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    dark_Mode_Ctrlr(!if_Dark_Mode);
  };

  const handleTabClick = (tab) => {
    active_Tab_Ctrlr(tab);
  };

  return (
    <>
      <Header
        if_Scrolled={if_Scrolled}
        if_Dark_Mode={if_Dark_Mode}
        onThemeToggle={handleThemeToggle}
      />

      <div className="container main-content">
        <div className="grid_Content">
          <ProfileSection
            activeTab={activeTab}
            onTabClick={handleTabClick}
          />
          <ContentArea activeTab={activeTab} />
        </div>
      </div>
    </>
  );
}

export default App;