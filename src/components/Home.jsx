import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-left">
        <h1>Hi, I'm <span className="highlight">Saketh Ram</span></h1>
        <h2>Web Developer | MERN Stack Developer</h2>
        <p>
          I'm a web developer with a passion for building scalable and efficient web applications. I have experience with the MERN stack and am proficient in JavaScript, HTML, CSS, and MongoDB.
        </p>
       
      </div>

      <div className="home-right">
        <img src="/sakethnew.png" alt="Saketh Ram" className="profile-pic" />
      </div>
    </section>
  );
};

export default Home;
