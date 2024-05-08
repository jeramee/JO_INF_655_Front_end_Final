
import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import './register.css'
import 'firebase/auth';
 
const Register = (props) => {
  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth(); // Initialize Firebase auth
      const provider = new GoogleAuthProvider();
      auth.languageCode = 'it'; // Set user's preferred language (optional)
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        // Perform database operation here
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - I Want Food</title>
        <meta
          property="og:title"
          content="Register - I Want Food"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="register-container1">
        <div className="register-container2">
          <div className="register-container3">
            <h1 className="register-text">Register</h1>
            <form className="register-form">
              <label className="register-text1">Name</label>
              <input
                type="text"
                placeholder="Enter Your Full Name"
                className="input"
              />
              <label className="register-text2">Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input"
              />
              <label className="register-text3">User Name</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="register-textinput2 input"
              />
              <label className="register-text4">Password</label>
              <input
                type="text"
                placeholder="Enter Your Password"
                className="input"
              />
              <label className="register-text5">Confirm Password</label>
              <input
                type="text"
                placeholder="Confirm Your Password"
                className="input"
              />
            </form>
            <button onClick={handleGoogleSignIn} className="login-edit buttonFilled">
              Register
            </button>
          <div className="login-google-login">
              <a
                href="https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email%20profile"
                target="_blank"
                rel="noreferrer noopener"
                className="login-google-button buttonFilled"
              >
                <img
                  alt="image"
                  src="/external/googlelogo-900h.png"
                  className="login-image"
                />
                <span className="login-text5">Register with Google</span>
              </a>
            </div>
            </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Register
