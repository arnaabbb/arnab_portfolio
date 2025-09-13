import React from 'react';


// Data for the resume section
const educationDetails = [
  {
    year: "July 2024 – Present",
    degree: "M.Sc. in Data Science",
    institution: "Vellore Institute of Technology, Vellore",
    description: "GPA: 8.15/10.0. Coursework includes Statistics, Exploratory Data Analysis, and AI/ML."
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
    link: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1720103635/2622459019AM.pdf" // <-- REPLACE WITH YOUR LINK
  },
  {
    year: "May 2024",
    name: "Career Essentials in Generative AI",
    description: "Learned core Generative AI concepts, applications, and ethical best practices.",
    link: "https://www.linkedin.com/learning/certificates/3f08438cd1a51eac47369dd96a2ddf1d0798d6ba9f43b354edc2feaececc2d20" // <-- REPLACE WITH YOUR LINK
  },
  {
    year: "Nov 2023",
    name: "Web Development",
    description: "Acquired knowledge of front-end and back-end technologies and web development practices.",
    link: "https://trainings.internshala.com/s/v/3180543/19a7e67f" // <-- REPLACE WITH YOUR LINK
  },
  {
    year: "May 2023",
    name: "Project Management",
    description: "Learned about the project lifecycle from initiation through closure using foundational tools and techniques for effective project delivery",
    link: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1685158050/6140904836AM.pdf" // <-- REPLACE WITH YOUR LINK
  }
];

export default function Resume() {
  return (
    <section className="ftco-section" id="resume-section">
      <div className="container">
        {/* Main Section Title */}
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <h2 className="mb-4">EDUCATION</h2>
          </div>
        </div>

        {/* --- EDUCATION ROW --- */}
        <div className="row d-flex">
          <div className="col-md-6">
            <div className="resume-wrap">
              <span className="date">{educationDetails[0].year}</span>
              <h2>{educationDetails[0].degree}</h2>
              <span className="position">{educationDetails[0].institution}</span>
              <p className="mt-4">{educationDetails[0].description}</p>
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
        <h2 className="mb-4">CERTIFICATIONS</h2>
      </div>
    </div>

    {/* --- CERTIFICATIONS ROW (same as Education) --- */}
    <div className="row d-flex">
      {certificationDetails.map((cert, index) => (
        <div key={index} className="col-12 col-md-6">
          <div className="resume-wrap">
            <span className="date">{cert.year}</span>
            {/* Make link text inherit the same color/size as Education */}
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <h2 className="m-0">{cert.name}</h2>
            </a>
            {/* Add or omit .position to match Education usage */}
            {/* <span className="position">{cert.issuer}</span> */}
            <p className="mt-4">{cert.description}</p>
          </div>
        </div>
      ))}
    </div>
    
      </div>
    </section>
  );
}
