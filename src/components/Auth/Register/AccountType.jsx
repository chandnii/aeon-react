import React from 'react';
import './AccountType.css';
import { Link } from 'react-router-dom';

const AccountType = () => {
  const handleChange = (e) => {
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-account-container">
    <header className="account-header">
        <div className="account-logo">aeon</div>
        <div className="account-progress-bar">
    <div className="circle-line-circle">
      <div className="circle"></div>
      <div className="line"></div>
      <div className="circle deactive"></div>
    </div>
    <div className="progress-steps">
      <div className="progress-step">Create account</div>
      <div className="progress-step">Confirm email</div>
    </div>
        </div>
        <div className="header-links">
          <span>Have an account?</span>
          <a href="/login">Log in</a>
        </div>
      </header>
      <div className="main-content">
        <section className="left-column">
          <h1>Let's get started</h1>
        </section>
        <section className="right-column">
          <div className="form-container">
            <h2>Create your individual account</h2>
            <p className="instruction">Be sure to enter your legal name as it appears on your government-issued ID.</p>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="name-fields">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  onChange={handleChange}
                />
                <label htmlFor="terms">
                  I certify that I'm 18 years or older, I agree to the <span className="underline">Terms & Conditions</span> and <span className="underline">Privacy Policy</span>.
                </label>
              </div>
              <Link to="/verify-email/abc"><button className='account-button'>Continue</button></Link>
            </form>
            <p className="alternative">
              Not looking for an individual account? <a href="/register" className='sign-business'>Sign up for a business account</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccountType;
