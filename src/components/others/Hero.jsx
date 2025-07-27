import React from 'react'

export default function Hero() {
  return (
      <section id="home-section" className="hero">
		  <div className="home-slider">
	      <div className="">
	      	<div className="overlay"></div>
	        <div className="container">
	          <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end">
	          	{/* <div className="one-third js-fullheight order-md-last img" style="background-image:url(images/bg_1.png);">
	          		<div className="overlay"></div>
	          	</div> */}
		          <div className="one-forth d-flex  align-items-center ftco-animate">
		          	<div className="text">
		          		<span className="subheading">Hello!</span>
			            <h1 className="mb-4 mt-3">I'm <span>Clark Thompson</span></h1>
			            <h2 className="mb-4">A Freelance Web Designer</h2>
			            <p><a href="#" className="btn btn-primary py-3 px-4">Hire me</a> <a href="#" className="btn btn-white btn-outline-white py-3 px-4">My works</a></p>
		            </div>
		          </div>
	        	</div>
	        </div>
	      </div>
	    </div>
    </section>
  )
}
