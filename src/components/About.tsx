import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import './About.css';

const About = () => {
  const { title, image, description } = portfolioData.about;
  const { education } = portfolioData;

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="glitch-title">{title}</h2>
          <h2 className="title-shadow">{title}</h2>
        </div>

        <div className="about-grid">
          <div className="about-left">
            <motion.div 
              className="square-img-container"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <img src={image} alt="Profile" />
            </motion.div>
            <p className="about-description-text">{description}</p>
          </div>

          <div className="about-right">
            <div className="edu-section">
              <h3>Education</h3>
              {education.map((edu, idx) => (
                <div key={idx} className="edu-block">
                   <div className="edu-idx">0{idx+1}</div>
                   <div className="edu-info">
                      <h4>{edu.institution}</h4>
                      <p>{edu.period} • {edu.degree}</p>
                   </div>
                </div>
              ))}
              <button className="full-resume-btn">Full Resume</button>
            </div>

            <div className="achievements-section">
                <h3>Achievements & Certifications</h3>
                <div className="ach-block">
                    <div className="edu-idx">01</div>
                    <div className="edu-info">
                        <h4>NATURAL LANGUAGE PROCESSING WITH PROBABILISTIC MODELS</h4>
                        <p>APR 2024 • DeepLearning.AI</p>
                    </div>
                </div>
                <button className="view-all-btn">View All</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
