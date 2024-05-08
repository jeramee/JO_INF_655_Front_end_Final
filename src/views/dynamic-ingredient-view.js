import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/footer';
import './dynamic-ingredient-view.css';

const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

const DynamicIngredientView = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [ingredientDetails, setIngredientDetails] = useState(null);

  useEffect(() => {
    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchQuery}&number=10&apiKey=${apiKey}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleRecipeClick = async (recipeId) => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
      const data = await response.json();
      setIngredientDetails(data);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  return (
    <div className="dynamic-ingredient-view-container">
      <Helmet>
        <title>DynamicIngredientView - Spoonacular Search</title>
        <meta property="og:title" content="DynamicIngredientView - Spoonacular Search" />
      </Helmet>
      <div className="dynamic-ingredient-view-hero">
        <div className="dynamic-ingredient-view-hero1 heroContainer">
          <input
            type="text"
            placeholder="Type the name of an ingredient here"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="dynamic-ingredient-view-gallery">
        {searchResults.map((result) => (
          <div key={result.id} className="dynamic-ingredient-view-gallery1">
            <img 
              src={result.image} 
              alt={result.title} 
              style={{ width: '150%', height: '150%' }} // Increase image size by 50%
              onClick={() => handleRecipeClick(result.id)} // Trigger handleRecipeClick on click
            />
            <button onClick={() => handleRecipeClick(result.id)}>View Recipe</button>
            {/* Display recipe title as clickable link */}
            <a href="#" onClick={() => handleRecipeClick(result.id)}>{result.title}</a>
          </div>
        ))}
      </div>
      {ingredientDetails && (
        <div className="recipe-details">
          {/* Render recipe details here */}
          <h2>{ingredientDetails.title}</h2>
          <img src={ingredientDetails.image} alt={ingredientDetails.title} />
          <p>{ingredientDetails.instructions}</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default DynamicIngredientView;
