import React from 'react';
import './ProgressBar.css';
const ProgressBar = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-step active">Create account</div>
      <div className="progress-bar-line"></div>
      <div className="progress-bar-step">Confirm email</div>
    </div>
  );
};

export default ProgressBar;