// src/components/RecipeCard.js
import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({key, recipe }) => (
  <div className="recipe-card">
    {/* <img */}
      {/* src={recipe.image || "/default-recipe.jpg"} */}
      {/* alt={recipe.name} */}
      {/* onError={(e) => (e.target.src = "/default-recipe.jpg")} */}
    {/* /> */}
    <h3>{recipe}</h3>
    <Link to={`/recipe/${recipe}`}>View Details</Link>
  </div>          
);

export default RecipeCard;
