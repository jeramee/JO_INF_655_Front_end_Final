import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Header3 from '../components/header3'
import Footer from '../components/footer'
import './recipes.css'

const Recipes = (props) => {
  return (
    <div className="recipes-container">
      <Helmet>
        <title>Recipes - Shoddy Natural Heron</title>
        <meta property="og:title" content="Recipes - Shoddy Natural Heron" />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="recipes-hero heroContainer">
        <div className="recipes-container1">
          <div className="recipes-container2">
            <h1 className="recipes-hero-heading">
              <span className="recipes-text06">Recipes</span>
              <br></br>
              <span className="recipes-text08">Search by categories</span>
              <br></br>
            </h1>
            <div className="recipes-container3">
              <Link
                to="/dynamic-recipe-view"
                className="recipes-navlink4 button"
              >
                place
              </Link>
            </div>
            <div className="recipes-container4">
              <Link
                to="/dynamic-ingredient-view"
                className="recipes-navlink5 button">
                {' '}
                ingredients
              </Link>
            </div>
            <div className="recipes-container5">
              <Link
                to="/dynamic-recipe-view"
                className="recipes-navlink6 button"
              >
                name
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="recipes-features">
        <div className="recipes-features-container featuresContainer">
          <video
            src="https://youtu.be/GPBe-oYlG1A?feature=shared"
            loop="true"
            muted="true"
            poster="https://youtu.be/GPBe-oYlG1A?feature=shared"
            preload="none"
            autoPlay="true"
            controls="true"
            className="recipes-video"
          ></video>
          <video
            src="https://youtu.be/GPBe-oYlG1A?feature=shared"
            loop="true"
            muted="true"
            poster="https://youtu.be/GPBe-oYlG1A?feature=shared"
            preload="none"
            autoPlay="true"
            controls="true"
            className="recipes-video1"
          ></video>
          <video
            src="https://youtu.be/GPBe-oYlG1A?feature=shared"
            loop="true"
            muted="true"
            poster="https://youtu.be/GPBe-oYlG1A?feature=shared"
            preload="none"
            autoPlay="true"
            controls="true"
            className="recipes-video2"
          ></video>
        </div>
      </div>
      <Footer></Footer>
      </div>

  )
}

export default Recipes
