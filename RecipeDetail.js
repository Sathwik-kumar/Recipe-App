import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null); // Define recipe state
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`/get/${id}`)
      .then((response) => {
        setRecipe(response.data)
        console.log(response)})
      .catch(() => setError("Recipe not found!"));
  }, [id]);

  const addToFavorites = () => {
    if (recipe) {  // Ensure recipe is available before using it
      const currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      if (!currentFavorites.some((fav) => fav.id === id)) {
        currentFavorites.push({...recipe,id});
        localStorage.setItem("favorites", JSON.stringify(currentFavorites));
        alert("Recipe added to favorites!");
      } else {
        alert("Recipe is already in favorites!");
      }
    }
  };

  if (error) return <p>{error}</p>;
  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h1>{recipe.foodName}</h1>
      <img
        src={recipe.foodImage || "/default-recipe.jpg"}
        alt={recipe.foodName}
        onError={(e) => (e.target.src = "/default-recipe.jpg")}
      />
      <p>{recipe.foodDescription}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.keyIngredients.map((ing, index) => (
          <li key={index}>
            <img src={ing[0] || "/default-ingredient.jpg"} alt={ing[1]} />
            {ing[1].charAt(0).toUpperCase() + ing[1].slice(1)}
          </li>
        ))}
      </ul>
      <button onClick={addToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default RecipeDetail;
