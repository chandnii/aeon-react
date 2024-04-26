import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaLinkedin, FaFacebook } from 'react-icons/fa'; // Import icons from React Icons
import './Login.css'; // Importing the CSS file for styles

const Login = () => {
  return (
    <div className="container">
      <h1 className="logo">aeon</h1>
      <div className="content">
        <div className="login-body">
          <span className="login-title">Log in</span>
          <div className="input-container">
            <p className="email-label">Email Address</p>
            <input type="text" placeholder="Enter your email" className="login-input" />
          </div>
          <button type="button" className="login-button">Continue with email</button>
          <div className="signup-text">
            <span>Don't have an account?</span> <Link to="/register" className="signup-link">Sign up</Link>
          </div>
          <div className="divider">
            <span className="line"></span>
            <span className="middle">or</span>
            <span className="line"></span>
          </div>
          <div>
            <button className="social-login google">
              <FaGoogle className="social-icon" /> Continue with Google
            </button>
            <button className="social-login linkedin">
              <FaLinkedin className="social-icon" /> Continue with LinkedIn
            </button>
            <button className="social-login facebook">
              <FaFacebook className="social-icon" /> Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
