import './footer.css';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-center py-4">
      <p className="footer-copy mb-3">© 2025 Ignacio Rojos — Desarrollador Front-End</p>
      <div className="footer-links d-flex justify-content-center align-items-center gap-3">
        <a href="https://www.linkedin.com/in/ignacio-rojos/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="footer-icon" /> LinkedIn
        </a>
        <a href="https://github.com/IgnacioRojos" target="_blank" rel="noopener noreferrer">
          <FaGithub className="footer-icon" /> GitHub
        </a>
        <a href="mailto:nachorojos99@gmail.com">
          <FaEnvelope className="footer-icon" /> Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;

