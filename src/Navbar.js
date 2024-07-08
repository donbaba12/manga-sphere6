// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Manga Sphere</h1>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/all-mangas" className="navbar-link">All Mangas</Link>
        </li>
        <li className="navbar-item">
          <Link to="/trends" className="navbar-link">Trends</Link>
        </li>
        <li className="navbar-item">
          <Link to="/my-list" className="navbar-link">My List</Link>
        </li>
        <li className="navbar-item">
          <Link to="/forum" className="navbar-link">Forum</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

