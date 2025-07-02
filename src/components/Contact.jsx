import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-text">Have a project in mind or just want to say hi? Feel free to reach out!</p>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-links">
        <a href="https://github.com/saketh-cell" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/saketh-pusuluru-a614b6279" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:prasadp87851@gmail.com">Email</a>
      </div>
    </section>
  );
};

export default Contact;
