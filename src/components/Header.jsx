/* eslint-disable no-unused-vars */
// Header.jsx
// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/css/Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

