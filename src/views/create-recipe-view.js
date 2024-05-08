import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Header3 from '../components/header3';
import { Helmet } from 'react-helmet';

import './create-recipe-view.css';

const CreateRecipeView = (props) => {
  const [recipeForm, setRecipeForm] = useState({
    servings: '', // Add other form fields as needed
  });

  const [recipes, setRecipes] = useState([]);

  const addRecipe = () => {
    setRecipes([
      ...recipes,
      {
        recipe_name: '',
        how_long_minutes: '',
        difficulty: '',
        servings: '',
        culture_or_local: ''
      }
    ]);
  };

  const saveRecipes = () => {
    fetch('/recipes/save-recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ recipes })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Recipes saved successfully:', data);
    })
    .catch(error => {
      console.error('Error saving recipes:', error);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipeForm({
      ...recipeForm,
      [name]: value,
    });
  };

  return (
    <div className="create-recipe-view-container">
      <Helmet>
        <title>CreateRecipeView - I Want Food</title>
        <meta
          property="og:title"
          content="CreateRecipeView - I Want Food"
        />
      </Helmet>
      <Header />
      <Header3 />
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
                  <div className="create-recipe-view-feature-card2">
                    <div className="create-recipe-view-container3">
                      <svg
                        viewBox="0 0 1024 1024"
                        className="create-recipe-view-icon10"
                      >
                        {/* SVG Path for icon */}
                      </svg>
                      <div className="create-recipe-view-dropdown-container">
                        <select
                          name="servings"
                          value={recipeForm.servings}
                          onChange={handleInputChange}
                          className="create-recipe-view-dropdown"
                        >
                          <option value="">How many people can be served?</option>
                          <option value="1 person">1 person</option>
                          <option value="2 people">2 people</option>
                          <option value="3 people">3 people</option>
                          <option value="4 people">4 people</option>
                          <option value="5 people">5 people</option>
                          <option value="6 people">6 people</option>
                          <option value="7 people">7 people</option>
                          <option value="8 people">8 people</option>
                          <option value="9 people">9 people</option>
                          <option value="10 people">10 people</option>
                          <option value="12-16 people">12-16 people</option>
                          <option value="16-20 people">16-20 people</option>
                          <option value="20-30 people">20-30 people</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
    </div>              
  );
};

export default CreateRecipeView;
