import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header';
import Header3 from '../components/header3';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet'

import './create-recipe-view.css'

const CreateRecipeView = (props) => {
  return (
    <div className="create-recipe-view-container">
      <Helmet>
        <title>CreateRecipeView - Shoddy Natural Heron</title>
        <meta
          property="og:title"
          content="CreateRecipeView - Shoddy Natural Heron"
        />
      </Helmet>
      <Header></Header>
      <Header3></Header3>
      <div className="create-recipe-view-hero">
        <div className="create-recipe-view-hero1 heroContainer">
          <span className="create-recipe-view-text">
            Type the name of your recipe here
          </span>
        </div>
      </div>
      <div className="create-recipe-view-gallery">
        <div className="create-recipe-view-gallery1">
          <img
            alt="image"
            /* src="https://play.teleporthq.io/static/svg/default-img.svg" */
            className="create-recipe-view-image"
          />
          <div className="create-recipe-view-container1">
            <div className="create-recipe-view-feature-card">
              <svg viewBox="0 0 1024 1024" className="create-recipe-view-icon">
                <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
              </svg>
              <input
                type="text"
                placeholder="How Long (minutes)"
                className="create-recipe-view-textinput input"
              />
              <span className="create-recipe-view-text01">Total time</span>
            </div>
            <div className="create-recipe-view-feature-card1">
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="create-recipe-view-icon02"
              >
                <path d="M640 146.286h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-475.429c0-50.286-41.143-91.429-91.429-91.429zM804.571 237.714v475.429c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 804.5714285714286 1024"
                className="create-recipe-view-icon04"
              >
                <path d="M640 146.286h-475.429c-50.286 0-91.429 41.143-91.429 91.429v475.429c0 50.286 41.143 91.429 91.429 91.429h475.429c50.286 0 91.429-41.143 91.429-91.429v-475.429c0-50.286-41.143-91.429-91.429-91.429zM804.571 237.714v475.429c0 90.857-73.714 164.571-164.571 164.571h-475.429c-90.857 0-164.571-73.714-164.571-164.571v-475.429c0-90.857 73.714-164.571 164.571-164.571h475.429c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="create-recipe-view-icon06"
              >
                <path d="M877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
              <span className="create-recipe-view-text02">
                Choose the difficult
              </span>
              <div className="create-recipe-view-container2">
                <div
                  data-thq="thq-dropdown"
                  className="create-recipe-view-thq-dropdown list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="create-recipe-view-dropdown-toggle"
                  >
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="create-recipe-view-dropdown-arrow"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="create-recipe-view-icon08"
                      >
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="create-recipe-view-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle01"
                      >
                        <span className="create-recipe-view-text03">Easy</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown01 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle02"
                      >
                        <span className="create-recipe-view-text04">
                          Medium
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown02 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle03"
                      >
                        <span className="create-recipe-view-text05">
                          Difficult
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <span className="create-recipe-view-text06">
                How difficult it is the recipe?
              </span>
            </div>
            <div className="create-recipe-view-feature-card2">
              <div className="create-recipe-view-container3">
                <svg
                  viewBox="0 0 1024 1024"
                  className="create-recipe-view-icon10"
                >
                  <path d="M704 278q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM704 512q-62 0-106-44t-44-106 44-105 106-43 106 43 44 105-44 106-106 44zM320 278q-34 0-60 25t-26 59 26 60 60 26 60-26 26-60-26-59-60-25zM320 512q-62 0-106-44t-44-106 44-105 106-43 106 43 44 105-44 106-106 44zM918 746v-52q0-20-71-48t-143-28q-52 0-128 24 22 26 22 52v52h320zM534 746v-52q0-20-71-48t-143-28-143 28-71 48v52h428zM704 554q86 0 182 39t96 101v116h-940v-116q0-62 96-101t182-39q94 0 192 44 98-44 192-44z"></path>
                </svg>
                <div
                  data-thq="thq-dropdown"
                  className="create-recipe-view-thq-dropdown1 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="create-recipe-view-dropdown-toggle04"
                  >
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="create-recipe-view-dropdown-arrow1"
                    >
                      <svg
                        viewBox="0 0 1024 1024"
                        className="create-recipe-view-icon12"
                      >
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="create-recipe-view-dropdown-list1"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown03 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle05"
                      >
                        <span className="create-recipe-view-text07">
                          1 person
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown04 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle06"
                      >
                        <span className="create-recipe-view-text08">
                          2 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown05 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle07"
                      >
                        <span className="create-recipe-view-text09">
                          3 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown06 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle08"
                      >
                        <span className="create-recipe-view-text10">
                          4 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown07 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle09"
                      >
                        <span className="create-recipe-view-text11">
                          5 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown08 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle10"
                      >
                        <span className="create-recipe-view-text12">
                          6 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown09 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle11"
                      >
                        <span className="create-recipe-view-text13">
                          7 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown10 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle12"
                      >
                        <span className="create-recipe-view-text14">
                          8 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown11 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle13"
                      >
                        <span className="create-recipe-view-text15">
                          9 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown12 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle14"
                      >
                        <span className="create-recipe-view-text16">
                          10 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown13 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle15"
                      >
                        <span className="create-recipe-view-text17">
                          12-16 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown14 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle16"
                      >
                        <span className="create-recipe-view-text18">
                          16-20 people
                        </span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="create-recipe-view-dropdown15 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="create-recipe-view-dropdown-toggle17"
                      >
                        <span className="create-recipe-view-text19">
                          20-30 people
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <span className="create-recipe-view-text20">
                How many people can be served?
              </span>
            </div>
            <div className="create-recipe-view-feature-card3">
              <input
                type="text"
                placeholder="Culture or Local"
                className="create-recipe-view-textinput1 input"
              />
              <span className="create-recipe-view-text21">Culture</span>
            </div>
          </div>
        </div>
      </div>
      <div className="create-recipe-view-features">
        <div className="create-recipe-view-features-container featuresContainer">
          <div className="create-recipe-view-container4">
            <h2 className="create-recipe-view-features-heading">Recipe:</h2>
            <input
              type="text"
              placeholder="Describe your recipe"
              className="create-recipe-view-textinput2 input"
            />
            <Link
              to="/dynamic-recipe-view"
              className="create-recipe-view-start-here button"
            >
              Upload Recipe
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CreateRecipeView
