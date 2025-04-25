import React from 'react';
import { googleSignIn } from '../firebase'; // Import Google Sign-In function from firebase.js
import './LoginPage.css';

function LoginPage() {
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();  // Trigger Google Sign-In
      window.location.href = '/home';  // Redirect to Home Page after successful login
    } catch (error) {
      console.error("Error during Google sign-in", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to the Quiz</h2>
        <p>Please sign in to start your journey!</p>
        <button className="google-btn" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
