import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p className="intro">
        I'm Saketh Ram, a passionate Full Stack Developer skilled in the MERN stack with a foundation in AI & ML. I'm eager to contribute to real-world web applications through clean, scalable, and efficient code.
      </p>

      <h3>Education</h3>
      <ul className="education">
        <li><strong>B.Tech in AI & ML</strong> – Sasi Institute of Technology & Engineering (2021–2025) – CGPA: 7.94</li>
        <li><strong>Intermediate (MPC)</strong> – Narayana Junior College (2019–2021) – 875/1000</li>
        <li><strong>SSC</strong> – St. Ann’s English Medium School (2018–2019) – CGPA: 9.5</li>
      </ul>

      <h3>Technical Skills</h3>
      <ul className="skills">
        <li><strong>Languages:</strong> Java, JavaScript, C</li>
        <li><strong>Frontend:</strong> React.js, HTML, CSS, Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MySQL, MongoDB</li>
        <li><strong>Tools:</strong> Git, GitHub, Postman</li>
      </ul>

      <h3>Achievements & Certifications</h3>
      <ul className="certs">
        <li>✔️ Solved 200+ DSA problems on Leetcode</li>
        <li>✔️ Participated in Hackathon 2023</li>
        <li>✔️ Cyber Security – Cisco Networking Academy (2023)</li>
        <li>✔️ AI Internship – Aimers Society (2024)</li>
        <li>✔️ Full Stack Developer Training – Wipro & SITE (2025)</li>
      </ul>

      <button
            className="cv-btn"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1juKDAZBLxqmmF5QnArUfudW6chFj4yT0/view?usp=drive_link",
                "_blank"
              )
            }
          >
            VIEW CV
          </button>
    </section>
  );
};

export default About;
