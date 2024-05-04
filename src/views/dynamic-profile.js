import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import './dynamic-profile.css'

const DynamicProfile = (props) => {
  return (
    <div className="dynamic-profile-container">
      <Helmet>
        <title>DynamicProfile - I Want Food</title>
        <meta
          property="og:title"
          content="DynamicProfile - I Want Food"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="dynamic-profile-container1">
        <div className="dynamic-profile-container2">
          <div className="dynamic-profile-container3">
            <h1 className="dynamic-profile-text">Dynamic Profile</h1>
            <img
              alt="image"
              src="/external/fhsu-1200h.png"
              className="dynamic-profile-image"
            />
            <form className="dynamic-profile-form">
              <label className="dynamic-profile-text01">User Name:</label>
              <label className="dynamic-profile-text02">Dynamic Name</label>
              <label className="dynamic-profile-text03">Email:</label>
              <label className="dynamic-profile-text04">Dynamic Email</label>
              <label className="dynamic-profile-text05">
                Number of Recipes:
              </label>
              <label className="dynamic-profile-text06">
                Dynamic Recipe Number
              </label>
              <label className="dynamic-profile-text07">
                Number of Reviews:
              </label>
              <label className="dynamic-profile-text08">
                Dynamic Review Number
              </label>
              <label className="dynamic-profile-text09">
                Number of Videos:
              </label>
              <label className="dynamic-profile-text10">
                Dynamic Video Number
              </label>
            </form>
            <Link
              to="/edit-profile"
              className="dynamic-profile-edit buttonFilled"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DynamicProfile
