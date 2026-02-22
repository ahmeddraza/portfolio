import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import './Hero.css';

const Hero = () => {
  const { title, roles, description } = portfolioData.hero;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="glow-circle c1"></div>
        <div className="glow-circle c2"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="hero-intro"
        >
          {title.toUpperCase()}
        </motion.p>
        
        <div className="hero-roles">
          {roles.map((role, index) => (
            <motion.h1
              key={role}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              className={`role-text role-${index + 1}`}
            >
              {role}
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="hero-desc"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
