import React, { useEffect } from 'react';

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import './recipe-ok.css'

const Recipes = (props) => {
  return (
    <div className="recipes-container">
      <Helmet>
        <title>Recipes - I Want Food</title>
        <meta
          property="og:title"
          content="Recipes - I Want Food"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="recipe-ok-hero heroContainer">
        <div className="recipe-ok-container1">
          <div className="recipe-ok-container2">
            <h1 className="recipe-ok-hero-heading">
              <span className="recipe-ok-text06">Recipes</span>
              <br></br>
              <span className="recipe-ok-text08">Search by categories</span>
              <br></br>
            </h1>
            <div className="recipe-ok-container3">
              <button type="button" className="recipe-ok-button button">
                place
              </button>
            </div>
            <div className="recipe-ok-container4">
              <button type="button" className="recipe-ok-button1 button">
                {' '}
                ingredients
              </button>
            </div>
            <div className="recipe-ok-container5">
              <button type="button" className="recipe-ok-button2 button">
                goals
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="recipe-ok-features">
        <div className="recipe-ok-features-container featuresContainer">
          <video
            src="https://youtu.be/GPBe-oYlG1A?feature=shared"
            loop="true"
            muted="true"
            poster="https://youtu.be/GPBe-oYlG1A?feature=shared"
            preload="none"
            autoPlay="true"
            controls="true"
            className="recipe-ok-video"
          ></video>
          <video
            src="https://youtu.be/GPBe-oYlG1A?feature=shared"
            loop="true"
            muted="true"
            poster="https://youtu.be/GPBe-oYlG1A?feature=shared"
            preload="none"
            autoPlay="true"
            controls="true"
            className="recipe-ok-video1"
          ></video>
          <video
            src="https://youtu.be/GPBe-oYlG1A?feature=shared"
            loop="true"
            muted="true"
            poster="https://youtu.be/GPBe-oYlG1A?feature=shared"
            preload="none"
            autoPlay="true"
            controls="true"
            className="recipe-ok-video2"
          ></video>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Recipes
