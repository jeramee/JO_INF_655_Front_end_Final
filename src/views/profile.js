import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - I Want Food</title>
        <meta
          property="og:title"
          content="Profile - I Want Food"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="profile-container1">
        <div className="profile-container2">
          <div className="profile-container3">
            <h1 className="profile-text">Please Login</h1>
            <Link to="/login" className="profile-login buttonFilled">
                Login  
            </Link>
            <Link to="/register" className="profile-register buttonFilled">
              Register
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profile
