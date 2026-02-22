import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { FaPython, FaReact, FaDatabase, FaBrain, FaGithub } from 'react-icons/fa';
import { SiFlask, SiTensorflow } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;

  const getIcon = (tag: string) => {
    switch(tag.toLowerCase()) {
      case 'python': return <FaPython />;
      case 'flask': return <SiFlask />;
      case 'sql': return <FaDatabase />;
      case 'react': return <FaReact />;
      case 'ai': return <FaBrain />;
      case 'tensorflow': return <SiTensorflow />;
      default: return null;
    }
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="glitch-title" data-text="Projects">Projects</h2>
          <h2 className="title-shadow">Projects</h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="project-number">0{index + 1}</div>
              <div className="project-info">
                <h3 className="project-title">
                  <a href="https://github.com/ahmeddraza" target="_blank" rel="noopener noreferrer" className="github-link">
                    <FaGithub className="title-icon" />
                  </a>
                  {project.title}
                </h3>
                <div className="project-meta">
                  <span className="date">September 2023 - December 2023</span>
                  <div className="project-icons">
                    {project.tags.map(tag => (
                      <span key={tag} title={tag}>{getIcon(tag)}</span>
                    ))}
                  </div>
                </div>
                <p>{project.description.toUpperCase()}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="view-all-container">
          <button className="outline-btn">View All</button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
