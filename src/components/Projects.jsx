import React from 'react';
import '../styles/Projectss.css';

const projects = [
  {
    title: "Supermarket Management System",
    tech: "HTML, CSS, JavaScript, Node.js, Express.js, MongoDB",
    description: "Full-stack system to manage inventory, sales, and customer records. Responsive frontend and REST API backend.",
    github: "https://github.com/saketh-cell/SuperMarket-Management-System", // Replace with actual link
  },
  {
    title: "Voice-Based Email System",
    tech: "Python, Flask, gTTS, SpeechRecognition, HTML, CSS",
    description: "Voice-enabled email app for visually impaired users using NLP and Gmail API.",
    github: "https://github.com/saketh-cell/Voice-Based-Email-System-for-Visually-Impaired-people", // Replace with actual link
  },
  {
    title: "Arithmetic Calculator",
    tech: "HTML, CSS, JavaScript",
    description: "Simple calculator performing basic arithmetic operations with responsive UI.",
    github: "https://github.com/saketh-cell/ArthimeticCalculator",
  },
  {
    title: "Climate Info",
    tech: "JavaScript, Date & Time APIs",
    description: "Based On the Input Value, It can Show the temparature Details",
    github: "https://github.com/saketh-cell/Climate-Info",
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>
            <p><strong>Tech Stack:</strong> {proj.tech}</p>
            <p>{proj.description}</p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
