import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import './restaurants.css'

const Restaurants = (props) => {
  return (
    <div className="restaurants-container">
      <Helmet>
        <title>Restaurants - I Want Food</title>
        <meta
          property="og:title"
          content="Restaurants - I Want Food"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="restaurants-hero">
        <div className="restaurants-hero1 heroContainer">
          <div className="restaurants-container01">
            <h1 className="restaurants-hero-heading">
              <span className="restaurants-text">JOIN US</span>
              <br></br>
              <span>Do you want to</span>
              <br></br>
              <span>announce your</span>
              <br></br>
              <span>restaraunt? </span>
            </h1>
            <Link to="/contact-us" className="restaurants-hero-sub-heading">
              Contact US
            </Link>
          </div>
        </div>
      </div>
      <div className="restaurants-container02">
        <div className="restaurants-container03">
          <img
            alt="image"
            src="/external/background_burger_fries-1500h.png"
            className="restaurants-image"
          />
        </div>
        <div className="restaurants-container04">
          <div className="restaurants-container05">
            <div className="restaurants-container06">
              <h2 className="restaurants-coupon-upload-heading">
                Upload your recipe
              </h2>
              <span className="restaurants-features-sub-heading">
                Make your own recipe famous and win coupons!
              </span>
              <div className="restaurants-container07">
                <Link to="/videos" className="restaurants-upload buttonFilled">
                  Upload
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="restaurants-container08">
        <img
          alt="image"
          src="/external/fried_chicken-1000w.jpg"
          className="restaurants-image1"
        />
        <div className="restaurants-container09">
          <div className="restaurants-container10">
            <div className="restaurants-container11">
              <h2 className="restaurants-hunger-upload-heading">
                <span className="restaurants-text07">Because</span>
                <br></br>
                <span>nobody</span>
                <br></br>
                <span>deserves to be</span>
                <br></br>
                <span>hungry</span>
                <br></br>
              </h2>
            </div>
            <div className="restaurants-container12">
              <span className="restaurants-hunger-sub-heading">
                <span>I WANT</span>
                <br></br>
                <span>FOOD </span>
              </span>
            </div>
          </div>
          <div className="restaurants-container13">
            <h2 className="restaurants-donation-heading">Donation</h2>
            <span className="restaurants-donation-sub-heading">
              <span>
                That will go to families in
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>hard times.</span>
            </span>
          </div>
          <div className="restaurants-container14">
            <div className="restaurants-container15">
              <h2 className="restaurants-follow-heading">
                <span className="restaurants-text21">FOLLOW US ON </span>
                <br className="restaurants-text22"></br>
                <span className="restaurants-text23">Instagram</span>
                <br className="restaurants-text24"></br>
                <span className="restaurants-text25">Facebook</span>
                <br className="restaurants-text26"></br>
                <span className="restaurants-text27">Twitter</span>
                <br></br>
              </h2>
            </div>
            <div className="restaurants-container16">
              <Link to="/contact-us" className="restaurants-follow-sub-heading">
                <span>
                  Click here to contact us
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Don&apos;t need send smoke signals anymore!</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Restaurants
