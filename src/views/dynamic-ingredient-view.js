import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/footer';
import './dynamic-ingredient-view.css';

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
      const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?query=${searchQuery}&number=10`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleIngredientClick = async (id) => {
    try {
      const response = await fetch(`https://api.spoonacular.com/food/ingredients/${id}/information`);
      const data = await response.json();
      setIngredientDetails(data);
    } catch (error) {
      console.error('Error fetching ingredient details:', error);
    }
  };

  return (
    <div className="dynamic-ingredient-view-container">
      <Helmet>
        <title>DynamicIngredientView - Spoonacular Search</title>
        <meta property="og:title" content="DynamicIngredientView - Spoonacular Search" />
      </Helmet>
      {/* Your header components */}
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
            <img src={result.image} alt={result.name} />
            <button onClick={() => handleIngredientClick(result.id)}>View Details</button>
          </div>
        ))}
      </div>
      {/* Additional components for displaying ingredient details */}
      <Footer />
    </div>
  );
};

export default DynamicIngredientView;
