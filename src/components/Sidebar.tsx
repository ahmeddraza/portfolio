import { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { portfolioData } from '../data';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { contact } = portfolioData;

  const toggleSidebar = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Work', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
    // Resume link could point to a file in public/resume.pdf
    { name: 'Resume', to: 'hero' } 
  ];

  const sidebarVariants: Variants = {
    open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } },
    closed: { x: '-100%', opacity: 0, transition: { delay: 0.2, type: 'spring', stiffness: 50 } },
  };

  return (
    <>
      <div className="mobile-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <motion.aside 
        className={`sidebar ${isOpen ? 'open' : ''}`}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <div className="logo">
          <h1>A<span>R</span></h1>
        </div>

        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-item"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="social-icons">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </motion.aside>

      {/* Desktop Sidebar (always visible) */}
      <aside className="sidebar-desktop">
        <div className="logo">
            <h1>A<span>.</span></h1>
        </div>
        
        <nav className="nav-links-desktop">
             {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="active"
              className="nav-item-desktop"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="social-icons-desktop">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
