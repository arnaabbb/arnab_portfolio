import React from 'react'

export default function Hero() {
  return (
    <section id="home-section" className="hero">
      <div className="home-slider">
        <div className="container">
          <div className="row no-gutters slider-text align-items-end justify-content-end">
            <div
              className="one-third js-fullheight order-md-last img"
              style={{ backgroundImage: 'url(/images/bg_1.png)' }}
            />
            <div className="one-forth d-flex align-items-center ftco-animate">
              <div className="text" style={{ position: 'relative', zIndex: 1 }}>
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
  )
}
