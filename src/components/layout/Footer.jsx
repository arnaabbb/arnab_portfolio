import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    // The inline style with paddingBottom has been REMOVED
    <footer className="ftco-footer ftco-section" id="contact-section">
      <div className="container">
        {/* ... all your other footer content ... */}
        <div className="row mb-5 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="ftco-heading-2">About Me</h2>
            <p>
              A passionate M.Sc. Data Science student focused on building intelligent systems. 
              I thrive on transforming complex data into actionable insights and creating impactful solutions.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <hr style={{ borderColor: 'rgba(255, 255, 255, 0.1)', margin: '0 auto 50px' }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="ftco-footer-social list-unstyled">
              <li><a href="https://github.com/ARNAB-BOT" className="github" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
              <li><a href="#" className="linkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
              <li><a href="#" className="instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
              <li><a href="mailto:arnabmondal13082002@gmail.com" className="email"><MdEmail /></a></li>
              <li><a href="tel://+918001339822" className="phone"><MdPhone /></a></li>
            </ul>
            <p style={{ marginTop: '50px' }}>
              &copy; {new Date().getFullYear()} | Arnab Mondal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
