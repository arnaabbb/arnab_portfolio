import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // This effect handles the header style change on scroll
    const handleScroll = () => {
      const nav = document.querySelector('.ftco-navbar-light');
      if (window.scrollY > 150) {
        nav.classList.add('scrolled', 'awake');
        nav.classList.remove('sleep');
      } else {
        nav.classList.remove('scrolled', 'awake');
        nav.classList.add('sleep');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">PORTFOLIO</a>
        <button 
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="ftco-nav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> MENU
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            {/* The offset prop has been REMOVED. CSS now handles the positioning. */}
            <li className="nav-item">
              <Link to="home-section" smooth={true} duration={500} className="nav-link" onClick={() => setIsOpen(false)}><span>HOME</span></Link>
            </li>
            <li className="nav-item">
              <Link to="resume-section" smooth={true} duration={500} className="nav-link" onClick={() => setIsOpen(false)}><span>EDUCATION</span></Link>
            </li>
            <li className="nav-item">
              <Link to="projects-section" smooth={true} duration={500} className="nav-link" onClick={() => setIsOpen(false)}><span>PROJECTS</span></Link>
            </li>
            <li className="nav-item">
              <Link to="contact-section" smooth={true} duration={500} className="nav-link" onClick={() => setIsOpen(false)}><span>ABOUT</span></Link>
            </li>
            <li className="nav-item">
              <Link to="contact-section" smooth={true} duration={500} className="nav-link" onClick={() => setIsOpen(false)}><span>CONTACT</span></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
