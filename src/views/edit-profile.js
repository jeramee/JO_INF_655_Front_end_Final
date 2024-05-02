import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import './edit-profile.css'

const EditProfile = (props) => {
  return (
    <div className="edit-profile-container">
      <Helmet>
        <title>EditProfile - I Want Food</title>
        <meta
          property="og:title"
          content="EditProfile - I Want Food"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="edit-profile-container1">
        <div className="edit-profile-container2">
          <div className="edit-profile-container3">
            <div className="edit-profile-container4">
              <h1 className="edit-profile-text">Edit Profile</h1>
              <img
                alt="image"
                src="/external/fhsu-1200h.png"
                loading="eager"
                className="edit-profile-image"
              />
              <Link to="/register" className="edit-profile-submit buttonFilled">
                Change Image
              </Link>
            </div>
            <form className="edit-profile-form">
              <label className="edit-profile-text1">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="edit-profile-textinput input"
              />
              <label className="edit-profile-text2">Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                className="edit-profile-textinput1 input"
              />
              <label className="edit-profile-text3">User Name</label>
              <input
                type="text"
                placeholder="Enter Username"
                className="edit-profile-textinput2 input"
              />
              <label className="edit-profile-text4">Password</label>
              <input
                type="text"
                placeholder="Enter Password"
                className="edit-profile-textinput3 input"
              />
              <label className="edit-profile-text5">Confirm Password</label>
              <input
                type="text"
                placeholder="Reenter Password"
                className="edit-profile-textinput4 input"
              />
              <Link
                to="/register"
                className="edit-profile-submit1 buttonFilled"
              >
                Submit
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EditProfile
