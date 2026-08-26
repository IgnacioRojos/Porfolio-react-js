import './header.css';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

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
          <span className="navbar-toggler-icon navbar-dark"></span>
        </button>

        <motion.div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <ul className="navbar-nav align-items-lg-center">
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
            <motion.li
              className="nav-item ms-lg-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
                title={theme === "light" ? "Modo claro" : "Modo oscuro"}
              >
                <span aria-hidden="true" className="theme-toggle-icon">
                  {theme === "light" ? "☀️" : "🌙"}
                </span>
              </button>
            </motion.li>
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;