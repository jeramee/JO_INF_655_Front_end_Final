import React, { useState, useEffect } from 'react';

const ReactTest = () => {
  // State to store the fetched data
  const [recipes, setRecipes] = useState([]);

  // Function to fetch data from the backend
  const fetchData = async () => {
    try {
      const response = await fetch('/api/save-recipes'); // Adjust the URL based on backend endpoint
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.recipe_name}</h2>
            <p>Duration: {recipe.how_long_minutes} minutes</p>
            <p>Difficulty: {recipe.difficulty}</p>
            <p>Servings: {recipe.servings}</p>
            <p>Culture or Local: {recipe.culture_or_local}</p>
            <img src={recipe.image} alt={recipe.recipe_name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactTest;
