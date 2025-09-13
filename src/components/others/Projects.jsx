import React from 'react';

const projectData = [
  {
    title: "Abnormal Human Behavior Detection (Ongoing)",
    description: "Currently developing a real-time surveillance system to identify abnormal human behaviors from video feeds using the YOLO object detection model.",
    githubLink: "#" // <-- Add your link
  },
  {
    title: "Low-Light License Plate Detection",
    description: "Created an advanced system to detect license plates in low-light conditions by integrating YOLO for object detection and GANs for image enhancement.",
    githubLink: "#" // <-- Add your link
  },
  {
    title: "NetOCR: A Lightweight OCR Model",
    description: "Developed a lightweight OCR system using CNNs for accurate character recognition and benchmarked its performance against finetuned ResNet18 model.",
    githubLink: "#" // <-- Add your link
  },
  {
    title: "Context-Aware Spell Checker",
    description: "Developed a real-time, context-aware spell checker using advanced NLP techniques like N-gram modeling and Levenshtein distance.",
    githubLink: "#" // <-- Add your link
  },
  {
    title: "Desktop Voice Assistant",
    description: "Engineered a versatile desktop voice assistant using Python's speech recognition and text-to-speech libraries to perform various automated tasks.",
    githubLink: "#" // <-- Add your link
  }
];

export default function Projects() {
  return (
    <section className="ftco-section" id="projects-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <h2 className="mb-4">PROJECTS</h2>
          </div>
        </div>
        <div className="row d-flex">
          {projectData.map((project, index) => (
            <div key={index} className="col-md-6 d-flex">
              {/* The structure is now identical to the resume cards */}
              <div className="project-wrap ftco-animate w-100">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <h3>{project.title}</h3>
                </a>
                <p className="description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
