// src/components/Favorites.js
import React from "react";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        favorites.map((fav) => (
          <div key={fav.id}>
            <h3>{fav.foodName}</h3>
            <img src={fav.foodImage} alt={fav.foodName} />
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
