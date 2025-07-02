import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-text">Let’s ‘console.log’ a conversation. Whether it’s ideas or memes, I’m all ears!</p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://github.com/saketh-cell" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/saketh-pusuluru-a614b6279" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="prasadp87851@gmail.com">Email</a>
      </div>
    </section>
  );
};

export default Contact;
