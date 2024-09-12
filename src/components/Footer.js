import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/instamart">Instamart</Link>
        </div>
        <div className="footer-social-media">
          <a href="https://x.com/kevu_004" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com/varunkewlani" target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://www.instagram.com/varunkewlani_04/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Kevu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
