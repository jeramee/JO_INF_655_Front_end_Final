import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - I Want Food</title>
        <meta property="og:title" content="Login - I Want Food" />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="login-container1">
        <div className="login-container2">
          <div className="login-container3">
            <div className="login-container4">
              <h1 className="login-text">Login</h1>
              <form className="login-form">
                <label className="login-text1">Email</label>
                <input
                  type="text"
                  placeholder="email address"
                  className="login-textinput input"
                />
                <label className="login-text2">Password</label>
                <input
                  type="text"
                  placeholder="password"
                  className="login-textinput1 input"
                />
                <Link to="/edit-profile" className="login-edit buttonFilled">
                  Login
                </Link>
              </form>
            </div>
            <div className="login-google-login">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="login-google-button buttonFilled"
              >
                <img
                  alt="image"
                  src="/external/googlelogo-900h.png"
                  className="login-image"
                />
                <span className="login-text3">Login with Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Login
