import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import './contact-us.css'

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <Helmet>
        <title>ContactUs - I Want Food</title>
        <meta
          property="og:title"
          content="ContactUs - I Want Food"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="contact-us-container1">
        <div className="contact-us-container2">
          <div className="contact-us-container3">
            <form className="contact-us-form">
              <label className="contact-us-text">Name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="contact-us-textinput input"
              />
              <label className="contact-us-text1">Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                className="contact-us-textinput1 input"
              />
              <label className="contact-us-text2">Description</label>
              <input
                type="text"
                placeholder="Reason to contact us."
                className="contact-us-textinput2 input"
              />
              <Link to="/register" className="contact-us-submit buttonFilled">
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

export default ContactUs
