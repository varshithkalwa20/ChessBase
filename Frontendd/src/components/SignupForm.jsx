import React, { useState } from 'react';
import '../css/SignupForm.css';
import chess from '../images/chess.jpg' 
const SignupForm = () => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
 
  return (
    <div className="signup-form">
      {/* Email Input Field */}
      <div className={`form-group ${emailFocus ? 'focused' : ''}`}>
        <img
          src={chess}
          alt="Email"
          className="icon"
        />
        <input
          type="email"
          id="email"
          onFocus={() => setEmailFocus(true)}
          onBlur={(e) => setEmailFocus(e.target.value !== '')}
          placeholder="Email"
        />
        <label
          htmlFor="email"
          className={emailFocus ? 'label-active' : 'label-hidden'}
        >
          Email
        </label>
      </div>
 
      {/* Password Input Field */}
      <div className={`form-group ${passwordFocus ? 'focused' : ''}`}>
        <img
          src={chess}
          alt="Password"
          className="icon"
        />
        <input
          type="password"
          id="password"
          onFocus={() => setPasswordFocus(true)}
          onBlur={(e) => setPasswordFocus(e.target.value !== '')}
          placeholder="Password"
        />
        <label
          htmlFor="password"
          className={passwordFocus ? 'label-active' : 'label-hidden'}
        >
          Password
        </label>
      </div>
 
      {/* Username Input Field */}
      <div className={`form-group ${usernameFocus ? 'focused' : ''}`}>
        <img
          src={`${process.env.PUBLIC_URL}/addUserPhoto.png`}
          alt="Username"
          className="icon"
        />
        <input
          type="text"
          id="username"
          onFocus={() => setUsernameFocus(true)}
          onBlur={(e) => setUsernameFocus(e.target.value !== '')}
          placeholder="Username"
          maxLength="25"
        />
        <label
          htmlFor="username"
          className={usernameFocus ? 'label-active' : 'label-hidden'}
        >
          Username
        </label>
      </div>
 
      {/* Terms and Conditions Checkbox */}
      <div className="form-group">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          By signing up, I accept the Terms and Conditions
        </label>
      </div>
 
      {/* Submit Button */}
      <button className="submit-button">Create Account</button>
    </div>
  );
};
 
export default SignupForm;