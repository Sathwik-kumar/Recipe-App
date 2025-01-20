import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Home page for listing recipes
import RecipeDetail from './components/RecipeDetail'; // Page for detailed recipe view
import Favorites from './components/Favorites'; // Favorites page

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page to list recipes */}
          <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* Detailed recipe page */}
          <Route path="/favorites" element={<Favorites />} /> {/* Favorites page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
