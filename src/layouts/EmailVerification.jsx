import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './EmailVerification.css'; // Make sure to create an EmailVerification.css file for styles

const EmailVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="email-verification">
      <h4>Verify your email</h4>
      <div class="message-container">
        We've sent a 6-character one-time password to example@email.com. Please enter the code below to continue.
      </div>
      <div>
      {otp.map((data, index) => {
        return (
          <input
            className="otp-field"
            type="text"
            name="otp"
            maxLength="1"
            key={index}
            value={data}
            onChange={e => handleChange(e.target, index)}
            onFocus={e => e.target.select()}
          />
        );
      })}
      </div>
      <p>Re-send OTP code in 00:54</p>
     <Link to="/confirm/abs"><button className="verify-btn">Verify</button></Link>
    </div>
  );
};

export default EmailVerification;