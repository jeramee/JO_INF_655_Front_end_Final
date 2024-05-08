import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getAuth, GoogleAuthProvider, signInWithPopup, set } from 'firebase/auth';
import Header from '../components/header';
import Header3 from '../components/header3';
import Footer from '../components/footer';
import './register.css';

const Register = () => {
  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth(); // Initialize Firebase auth
      const provider = new GoogleAuthProvider();
      auth.languageCode = 'it'; // Set user's preferred language (optional)
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
        const db = firebase.database();
        const dbRef = db.ref(`users/${user.uid}/profile`);
        await set(dbRef, {
          name: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        });
      }
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <div className="register-container">
      <Helmet>
        <title>Register - I Want Food</title>
        <meta property="og:title" content="Register - I Want Food" />
      </Helmet>
      <Header />
      <Header3 />
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
            <button onClick={handleGoogleSignIn} className="register-edit buttonFilled">
              Register with Google
            </button>
            <Link to="/edit-profile" className="register-edit buttonFilled">
              Register
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;

