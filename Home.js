import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    axios
      .get('/get/all')
      .then((response) => {
        console.log('Response data:', response); // Log the whole response to inspect it
        const data = response.data.recipesList; // Parse the data
        console.log('Parsed data:', data); // Log the parsed data to see its structure
        setRecipes(data || []); // Assuming the recipes are under a recipes field
      })
      .catch((err) => {
        setError('Failed to fetch recipes!');
        console.error('Error:', err);
        console.error('Error response:', err.response);
      });
  }, []);

  // Update handleFavoriteClick to navigate to the favorites page
  const handleFavoriteClick = () => {
    navigate('/favorites'); // Navigate to /favorites page
  };

  return (
    <div>
      {/* Navigation bar with favorite symbol */}
      <div className="navbar">
        <h1>MY RECIPE APP</h1>
        <div className="favorite-icon" onClick={handleFavoriteClick}>
          <span>&#9733;</span> {/* Star symbol */}
        </div>
      </div>

      {/* Error message */}
      {error && <p>{error}</p>}

      {/* Recipe list */}
      <div className="recipe-list">
        {recipes.length === 0 ? (
          <p>Loading recipes...</p>
        ) : (
          recipes.map((recipe, id) => (
            <RecipeCard key={id} recipe={recipe} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
