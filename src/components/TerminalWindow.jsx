import React from 'react';

const TerminalWindow = ({ children }) => (
  <main id="terminal_Like_Window">
    <div className="terminal-top">
      <div className="mac-like-dots">
        <span className="terminal-dot dot-red"></span>
        <span className="terminal-dot dot-yellow"></span>
        <span className="terminal-dot dot-green"></span>
      </div>
    </div>
    <div id="content-area">
      {children}
    </div>
  </main>
);

export default TerminalWindow;