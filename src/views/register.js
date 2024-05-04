import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import './register.css'

const Register = (props) => {
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
            <Link to="/edit-profile" className="register-edit buttonFilled">
              Edit
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Register
