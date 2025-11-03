import "./about.css"
import Image from 'react-bootstrap/Image';
import logo from "./desarrollador-750x350.jpg"
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="hero text-center d-flex flex-column justify-content-center align-items-center py-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="fw-bold display-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hola, soy <span className="titulo">Ignacio Rojos</span>
        </motion.h1>

        <motion.h2
          className="fs-3 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Front-End Developer | React & Node.js
        </motion.h2>

        <motion.p
          className="lead mb-4 container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Creo aplicaciones web modernas, rápidas y escalables.  
          Mi enfoque: transformar ideas en productos digitales que generan impacto real.
        </motion.p>

        <motion.div
          className="d-flex gap-3 flex-column flex-sm-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#proyectos"
            className="boton1 btn-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🚀 Ver Proyectos
          </motion.a>
          <motion.a
            href="/IgnacioRojos_FrontEndDeveloper_2025.pdf"
            download="Curriculum_Ignacio_Rojos_ES.pdf"
            className="boton1 btn-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Descargar CV
          </motion.a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="about-section d-flex flex-column flex-lg-row align-items-center justify-content-between container py-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="about-text text-center text-lg-start"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="about-name">Sobre mí</h1>
          <h2 className="about-profession">Desarrollador Front-End</h2>
          <p className="about-description mt-3">
            Soy estudiante de Ingeniería en Sistemas con experiencia en desarrollo web, especializado en HTML, CSS, JavaScript, React y con nociones de Back-End. Apasionado por crear interfaces intuitivas y soluciones eficientes.
          </p>
          <div className="about-buttons mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-2">
            <motion.a
              href="https://drive.google.com/drive/folders/1OHM6-zi61zj_IVnFomlQFgjeqW49OS2j?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="boton1 btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Certificaciones
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="about-image mt-4 mt-lg-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image src={logo} alt="Ignacio Rojos trabajando" className="img-fluid rounded shadow" />
        </motion.div>
      </motion.section>
    </>
  );
};

export default About;