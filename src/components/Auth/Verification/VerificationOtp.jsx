import React from 'react';
import EmailVerification from '../../../layouts/EmailVerification';
import './VerificationOtp.css';

function VerificationOtp() {
  return (
    <div className="verification">
      <header className="account-header">
        <div className="account-logo">aeon</div>
        <div className="account-progress-bar">
    <div className="circle-line-circle">
      <div className="circle active"></div>
      <div className="line"></div>
      <div className="circle"></div>
    </div>
    <div className="progress-steps">
      <div className="progress-step">Create account</div>
      <div className="progress-step">Confirm email</div>
    </div>
        </div>
        <div className="header-links">
          <a href="/login">Log in</a>
        </div>
      </header>
      <div className="main-content">
      <section className="left-column">
          <h1>Check your email</h1>
        </section>
        <section className="right-column">
          <EmailVerification />
        </section>
      </div>
    </div>
  );
}

export default VerificationOtp;