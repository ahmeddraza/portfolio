import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import './Contact.css';

const Contact = () => {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="glitch-title">Contact</h2>
          <h2 className="title-shadow">Contact</h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-text">
            <p>Want me on your project? I am looking for work in software engineering in tech, medical, or fintech fields, and would love to be an active team member in creative projects. Let's connect!</p>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label>NAME</label>
              <input type="text" placeholder="John Doe" defaultValue="John Doe" />
            </div>
            <div className="form-group">
              <label>EMAIL</label>
              <input type="email" placeholder="johndoe@gmail.com" defaultValue={contact.email} />
            </div>
            <div className="form-group">
              <label>MESSAGE</label>
              <textarea placeholder="Lorem ipsum dolor sit amet..."></textarea>
            </div>
            <div className="form-footer">
               <button type="submit" className="send-btn">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
