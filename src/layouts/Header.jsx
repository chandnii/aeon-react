import React from 'react';
import './Header.css'; // Make sure to create a corresponding CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">aeon</div>
      <div className="step-indicator">
        <div className="step active">
          <div className="step-bullet"></div>
          <div className="step-label">Create account</div>
        </div>
        <div className="connector"></div>
        <div className="step">
          <div className="step-bullet"></div>
          <div className="step-label">Confirm email</div>
        </div>
      </div>
      <div className="logo-placeholder"></div> {/* Placeholder to balance the header */}
    </header>
  );
};

export default Header;