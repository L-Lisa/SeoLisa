
import React, { useState } from 'react';
import './Nav.css';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">DIGITALISA</div>
      <div className={`nav-items ${isOpen ? 'open' : ''}`}>
        <a href="/">Hem</a>
        <a href="/seo">SEO</a>
        <a href="/kontakt">Kontakt</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};
