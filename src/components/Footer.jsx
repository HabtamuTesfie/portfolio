/* eslint-disable no-unused-vars */
// Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import '../pages/css/Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <a href="https://www.linkedin.com/in/habtamutesfie" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/HabtamuTesfie" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="mailto:habtamutesfie@gmail.com" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
