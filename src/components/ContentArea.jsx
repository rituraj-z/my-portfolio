import React from 'react';
import Welcome from './Welcome';
import TerminalWindow from './TerminalWindow';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const ContentArea = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      default:
        return null;
    }
  };

  return (
    <div className="right-grid-content">
      {activeTab === null ? (
        <Welcome />
      ) : (
        <TerminalWindow>
          {renderContent()}
        </TerminalWindow>
      )}
    </div>
  );
};

export default ContentArea;