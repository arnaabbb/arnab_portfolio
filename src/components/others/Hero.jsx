import React from 'react';

export default function Hero() {
  return (
    <section id="home-section" className="hero">
      <div className="home-slider">
        <div className="container" style={{ maxWidth: '100%', padding: 0 }}>
          {/* The flex alignment was changed here to vertically center the content */}
          <div className="row no-gutters slider-text align-items-center">

            {/* --- 1. IMAGE (Left Column) --- */}
            {/* The 'order-md-last' class was removed to keep this on the left */}
            <div
              className="one-third img"
              style={{
                backgroundImage: 'url(/images/img1.jpg)',
                minHeight: '100vh',
                width: '50%', // Takes up the left 50% of the screen
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            />

            {/* --- 2. TEXT (Right Column) --- */}
            <div
              className="one-forth d-flex align-items-center ftco-animate"
              style={{
                width: '50%', // Takes up the right 50% of the screen
                justifyContent: 'center' // Centers the text block horizontally
              }}
            >
              <div className="text">
                <span className="subheading">Hello!</span>
                <h1 className="mb-4 mt-3"><span>Clark Thompson</span></h1>
                <h2 className="mb-4">A Freelance Web Designer</h2>
                <p className="mb-0">
                  <a href="#contact-section" className="btn btn-primary py-3 px-4">Hire me</a>
                  <a href="#projects-section" className="btn btn-white btn-outline-white py-3 px-4">My works</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
