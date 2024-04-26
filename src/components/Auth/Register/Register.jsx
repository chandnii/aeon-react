// Register.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBuilding } from 'react-icons/fa';

import './Register.css';

function Register() {
  const [accountType, setAccountType] = useState('individual');

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <div className="register-logo">aeon</div>
        <div className="register-login">
          <span className="register-login-box">Have an account?</span>
          <a href="/login">Log in</a>
        </div>
      </div>
      <main className="register-main-content">
        <section className="welcome-section">
          <h1>Welcome to Aeon</h1>
          <p>An individual account is the best way to manage your crypto and fiat portfolios.</p>
          <div className="features">
            <label className="feature">
              <input type="checkbox" />
              <span>Access to hundreds of cryptocurrencies</span>
            </label>
            <label className="feature">
              <input type="checkbox" />
              <span>Initiate individual transactions and open Aeon accounts</span>
            </label>
            <label className="feature">
              <input type="checkbox" />
              <span>Safe & Secure</span>
            </label>
          </div>
        </section>
        <section className="account-type-section">
          <h2>Choose your account type</h2>
          <div className="account-options">
            <div className="account-option individual">
              <label htmlFor="individual">
                <div className="option-content">
                  <div className="text-content">
                  <input
                    type="radio"
                    id="individual"
                    name="accountType"
                    value="individual"
                    checked={accountType === 'individual'}
                    onChange={handleAccountTypeChange}
                    />
                    <span>Individual</span>
                    <p>For individuals who wish to send money, create multi-currency accounts, make personal transfers, and more.</p>
                  </div>
                  <div className="account-icon">
                    <FaUser size={22}/>
                  </div>
                </div>
              </label>
            </div>
            <div className="account-option business">
              <label htmlFor="business">
              <div className="option-content">
                  <div className="text-content">
                  <input
                    type="radio"
                    id="business"
                    name="accountType"
                    value="business"
                    checked={accountType === 'business'}
                    onChange={handleAccountTypeChange}
                  />
                    <span>Business</span>
                    <p>For businesses that want to invite team members, make group, bulk and invoice payments, and more.</p>
                </div>
                <div className="account-icon">
                  <FaBuilding size={22}/>
                </div>
                </div>
              </label>
            </div>
          </div>
         <Link to="/account-type"><button className="continue-button" >Continue</button></Link>
        </section>
      </main>
    </div>
  );
}

export default Register;
