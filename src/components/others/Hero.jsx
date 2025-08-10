import React from 'react';
// 1. Import the Link component for smooth scrolling
import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <section id="home-section" className="hero">
      <div className="home-slider">
        <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
          <div className="row no-gutters slider-text align-items-center">

            {/* --- 1. IMAGE (Left Column) --- */}
            <div
              className="one-third img"
              style={{
                backgroundImage: 'url(/images/img1.jpg)', // Ensure this image is in your public/images folder
                minHeight: '100vh',
                width: '50%',
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            />

            {/* --- 2. TEXT (Right Column) --- */}
            <div
              className="one-forth d-flex align-items-center ftco-animate"
              style={{
                width: '50%',
                justifyContent: 'center'
              }}
            >
              <div className="text">
                <span className="subheading">Hello!</span>
                <h1 className="mb-4 mt-3"><span>Arnab Mondal</span></h1>
                <h2 className="mb-4">Aspiring AI/ML Student</h2>
                <p className="mb-0">
                  {/* --- THIS IS THE FIX --- */}
                  {/* The <a> tags are now <Link> components with smooth scroll props */}
                  <Link 
                    to="contact-section" 
                    smooth={true} 
                    duration={500} 
                    className="btn btn-primary py-3 px-4"
                  >
                    Hire me
                  </Link>
                  <Link 
                    to="projects-section" 
                    smooth={true} 
                    duration={500} 
                    className="btn btn-white btn-outline-white py-3 px-4"
                  >
                    My works
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
