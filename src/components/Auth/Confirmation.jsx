import React from 'react';
import { Link } from 'react-router-dom'
import './ConfirmationPage.css'; 

const ConfirmationPage = () => {
  return (
    <div className="confirmation-page">
       <header className="account-header">
        <div className="account-logo">aeon</div>
        <div className="account-progress-bar">
    <div className="circle-line-circle">
      <div className="circle active"></div>
      <div className="line"></div>
      <div className="circle active"></div>
    </div>
    <div className="progress-steps">
      <div className="progress-step">Create account</div>
      <div className="progress-step">Confirm email</div>
    </div>
        </div>
      </header>
      <div className="verification-message">
        <div className="checkmark-box">
          <div className="checkmark-symbol">✓</div>
        </div>
        <h1>Email verified</h1>
        <p>Congrats! You can now use this email to log in to Aeon</p>
        <Link to="/dashboard" ><button onClick={() => { /* Navigate to dashboard */ }}>Go to Dashboard</button></Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
