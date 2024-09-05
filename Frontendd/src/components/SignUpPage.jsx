import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';
import '../css/SignUpPage.css'
import chess from '../images/chess.jpg';

const SignUpPage = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const navigate = useNavigate();

  const handleSignUpWithEmailClick = () => {
    setShowSignupForm(true);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };
  

  return (
    <div style={styles.container}>
      <h2 style={styles.registerHeading}>Register</h2>
      <h1 style={styles.heading}>Create your account</h1>

      <div style={styles.imageContainer}>
        <img src={chess} alt="Chess" style={styles.chessImage} />
      </div>

      {!showSignupForm ? (
        <>
          <button
            style={styles.button}
            onClick={handleSignUpWithEmailClick}
          >
            Sign Up with Email
          </button>
          <div style={styles.orContainer}>
            <span style={styles.orText}>OR</span>
          </div>
          <button style={styles.googleButton}>Continue with Google</button>

          <div style={styles.loginContainer}>
            <span style={styles.loginText}>Already have an account? </span>
            <button onClick={handleLoginClick} style={styles.loginLink}>
              Log In
            </button>
          </div>
        </>
      ) : (
        <SignupForm />
      )}
    </div>
  );
};

const styles = {
  
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '85vh',
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    fontFamily: `'Poppins', sans-serif`,
    padding: '10px 20px',
    boxSizing: 'border-box',
    textAlign: 'center',
    borderRadius:'10px',
  },
  registerHeading: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#e5e5e5',
  },
  heading: {
    marginBottom: '10px',
    fontSize: '28px',
    textAlign: 'center',
    lineHeight: '1.2',
  },
  imageContainer: {
    marginBottom: '1px',
  },
  chessImage: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
  },
  button: {
    width: '100%',
    maxWidth: '300px',
    marginBottom: '10px',
    padding: '12px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#006400',
    color: '#ffffff',
    transition: 'background-color 0.3s',
  },
  googleButton: {
    width: '100%',
    maxWidth: '300px',
    marginBottom: '10px',
    padding: '12px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4285f4',
    color: '#ffffff',
    transition: 'background-color 0.3s',
  },
  orContainer: {
    marginBottom: '10px',
    fontSize: '14px',
    textAlign: 'center',
  },
  orText: {
    color: '#ccc',
  },
  loginContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  loginText: {
    color: '#ccc',
    fontSize: '14px',
  },
  loginLink: {
    fontSize: '14px',
    color: '#4285f4',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'underline',
  },

  // Responsive Design for Small Screens
  '@media (max-width: 600px)': {
    heading: {
      fontSize: '24px',
    },
    chessImage: {
      width: '70px',
      height: '70px',
    },
    button: {
      fontSize: '14px',
      padding: '10px',
    },
    googleButton: {
      fontSize: '14px',
      padding: '10px',
    },
    loginText: {
      fontSize: '12px',
    },
    loginLink: {
      fontSize: '12px',
    },
  },
  
  
};

export default SignUpPage;
