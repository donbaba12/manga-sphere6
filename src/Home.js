// Example: Home.js (similar structure for other pages)

// Home.js

import React from 'react';
import './Home.css'; // Import the CSS file
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="home">
      <div className="overlay2">
        <h2 className="headline">Unlock your next manga adventure</h2>
        <h3 className="subheadline">With</h3>
        <h1 className="title">Manga Sphere</h1>
        <Link to="/all-mangas" className="discover-button">Discover</Link>
      </div>
    </div>
  );
}

export default Home;

