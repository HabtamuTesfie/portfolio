/* eslint-disable no-unused-vars */
// Home.jsx
import React from 'react';
import './css/Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <h1>HELLO, I AM HABTAMU!</h1>
      <p>Explore my work and learn more about me.</p>
      <a href="src/assets/Habtamu_Tesfie_CV.pdf" target="_blank" rel="noopener noreferrer" className="resume-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="resume-icon"
        >
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="16" y2="16" />
          <line x1="10" y1="8" x2="10" y2="16" />
        </svg>
        <div className="resume-tooltip">Resume</div>
      </a>
    </div>
  );
};

export default Home;
