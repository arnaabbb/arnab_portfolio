import React from 'react';

// Data for the resume section
const educationDetails = [
  {
    year: "July 2024 – Present",
    degree: "M.Sc. in Data Science",
    institution: "Vellore Institute of Technology, Vellore",
    description: "GPA: 8.19/10.0. Coursework includes Statistics, Exploratory Data Analysis, and AI/ML."
  },
  {
    year: "Oct 2021 – July 2024",
    degree: "B.Sc. in Information Technology (Data Science)",
    institution: "Maulana Abul Kalam Azad University of Technology, West Bengal",
    description: "GPA: 8.66/10.0. Coursework included DBMS, DSA, AI/ML, and Deep Learning."
  }
];

// Add your certification links here
const certificationDetails = [
  {
    year: "July 2024",
    name: "Management Information Systems",
    description: "Gained understanding of MIS, including hardware, software, databases, and strategic applications.",
    link: "#" // <-- REPLACE WITH YOUR LINK
  },
  {
    year: "May 2024",
    name: "Career Essentials in Generative AI",
    description: "Learned core Generative AI concepts, applications, and ethical best practices.",
    link: "#" // <-- REPLACE WITH YOUR LINK
  },
  {
    year: "Nov 2023",
    name: "Web Development",
    description: "Acquired knowledge of front-end and back-end technologies and web development practices.",
    link: "#" // <-- REPLACE WITH YOUR LINK
  }
];

export default function Resume() {
  return (
    <section className="ftco-section" id="resume-section">
      <div className="container">
        {/* Main Section Title */}
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <h2 className="mb-4">Resume</h2>
          </div>
        </div>

        {/* --- EDUCATION ROW --- */}
        <div className="row d-flex">
          <div className="col-md-6">
            <div className="resume-wrap">
              <span className="date">{educationDetails[0].year}</span>
              <h2>{educationDetails[0].degree}</h2>
              <span className="position">{educationDetails[0].institution}</span>
              <p className="mt-4">{educationDetails.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="resume-wrap">
              <span className="date">{educationDetails[1].year}</span>
              <h2>{educationDetails[1].degree}</h2>
              <span className="position">{educationDetails[1].institution}</span>
              <p className="mt-4">{educationDetails[1].description}</p>
            </div>
          </div>
        </div>

        {/* --- CERTIFICATIONS SUBHEADING --- */}
        <div className="row justify-content-center mt-5 pb-3">
          <div className="col-md-12 heading-section text-center">
            <h3 style={{fontWeight: '700'}}>Certifications</h3>
          </div>
        </div>
        
        {/* --- CERTIFICATIONS ROW WITH DYNAMIC LOGIC --- */}
        <div className="row d-flex">
          {certificationDetails.map((cert, index) => {
            const isLastItem = index === certificationDetails.length - 1;
            const isOddTotal = certificationDetails.length % 2 !== 0;
            const colClass = isLastItem && isOddTotal ? 'col-md-12' : 'col-md-6';

            return (
              <div key={index} className={colClass}>
                <div className="resume-wrap">
                  <span className="date">{cert.year}</span>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <h2>{cert.name}</h2>
                  </a>
                  <p className="mt-4">{cert.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Download CV Button */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center">
            <p><a href="/Arnab_Mondal.pdf" download className="btn btn-primary py-4 px-5">Download CV</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
