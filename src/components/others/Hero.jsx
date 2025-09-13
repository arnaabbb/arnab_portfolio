import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import cv from './../../assets/Arnab_Mondal.pdf';
import MyImage from '../../../public/images/self.refined.jpg'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home-section" className="hero">
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container-fluid">
        <div className="row no-gutters align-items-center min-vh-100">

          {/* Left Column - Enhanced Image Section - Now visible on mobile */}
          <div className="col-12 col-md-6 hero-image-section">
            <div 
              className="hero-image-container"
              style={{
                backgroundImage: `url(${MyImage})`,
                minHeight: "50vh", // Reduced from 100vh
                backgroundSize: "cover",
                backgroundPosition: "center center"
              }}
            >
              <div className="image-overlay"></div>
              <div className="image-content">
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/arnab-mondal-b5365b213/" className="social-link" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/arnaabbb" className="social-link" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://www.instagram.com/_beyond.arnab_" className="social-link" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Text Content */}
          <div className="col-12 col-md-6 d-flex align-items-center hero-text-section">
            <div className={`hero-content p-5 ${isVisible ? 'animate-in' : ''}`}>
              <div className="hero-badge">
                <span className="badge-text">Available for work</span>
                <div className="badge-dot"></div>
              </div>
              
              <span className="subheading hero-greeting">Hello! I'm</span>
              
              <h1 className="hero-title mb-4 mt-3">
                <span className="name-highlight">Arnab Mondal</span>
              </h1>
              
              <h2 className="hero-subtitle mb-4">
                <span className="typing-text">Aspiring AI/ML Student</span>
              </h2>
              
              <p className="hero-description mb-4">
                I create beautiful, responsive websites and web applications that deliver exceptional user experiences. Let's bring your ideas to life!
              </p>

              <div className="hero-stats mb-4">
                <div className="stat-item">
                  <span className="stat-number">0+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">0+</span>
                  <span className="stat-label">Years</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Satisfaction</span>
                </div>
              </div>
              
              <div className="hero-buttons">
                <Link 
                  to="contact" 
                  className="btn btn-primary hero-btn-primary"
                  smooth={true}
                  duration={500}
                >
                  <span>Hire me</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link 
                  to="projects" 
                  className="btn btn-outline hero-btn-secondary"
                  smooth={true}
                  duration={500}
                >
                  <span>View my work</span>
                  <i className="fas fa-external-link-alt"></i>
                </Link>
              </div>

              <div className="hero-scroll-indicator">
                <div className="scroll-text">Scroll down</div>
                <div className="scroll-arrow">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
