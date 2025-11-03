import './header.css';
import { motion } from "framer-motion";
import { useEffect } from "react";

const Header = () => {
  // 🌀 Efecto de scroll suave en toda la página
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const elementId = target.getAttribute('href').substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <motion.header
      className="header container-fluid"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="navbar navbar-expand-lg">
        <a href="#ir" className="navbar-brand nombre" id="ir">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            IR
          </motion.h1>
        </a>

        <button
          className="navbar-toggler botonMenu"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <motion.div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ul className="navbar-nav">
            {[
              { href: "#sobreMi", text: "Sobre Mi" },
              { href: "#proyectos", text: "Proyectos" },
              { href: "#contacto", text: "Contacto" },
            ].map((link, i) => (
              <motion.li
                key={i}
                className="nav-item"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a className="nav-link" href={link.href}>
                  {link.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;