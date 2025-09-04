import "./about.css"
import Image from 'react-bootstrap/Image';
import logo from "./desarrollador-750x350.jpg"

const About = () => {
  return (
    <>
            {/* Hero Section */}
        <section className="hero text-center d-flex flex-column justify-content-center align-items-center py-5">
            <h1 className="fw-bold display-4">
                Hola, soy <span className="text-primary">Ignacio Rojos</span>
            </h1>
            <h2 className="fs-3 mb-3">
                Front-End Developer | React & Node.js
            </h2>
            <p className="lead mb-4 container">
                Creo aplicaciones web modernas, rápidas y escalables.  
                Mi enfoque: transformar ideas en productos digitales que generan impacto real.
            </p>
            <div className="d-flex gap-3 flex-column flex-sm-row">
                <a href="#proyectos" className="btn btn-outline-dark btn-lg">
                🚀 Ver Proyectos
                </a>
                <a
                href="/IgnacioRojos_FrontEndDeveloper_2025.pdf"
                download="Curriculum_Ignacio_Rojos_ES.pdf"
                className="btn btn-outline-dark btn-lg"
                >
                📄 Descargar CV
                </a>
            </div>
        </section>

            {/* About Section */}
        <section className="about-section d-flex flex-column flex-lg-row align-items-center justify-content-between container py-5">
            <div className="about-text text-center text-lg-start">
                <h1 className="about-name">Sobre mí</h1>
                <h2 className="about-profession">Desarrollador Front-End</h2>
                <p className="about-description mt-3">
                Soy estudiante de Ingeniería en Sistemas con experiencia en desarrollo web, especializado en HTML, CSS, JavaScript, React y con nociones de Back-End. Apasionado por crear interfaces intuitivas y soluciones eficientes.
                </p>
                <div className="about-buttons mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-2">
                <a href="https://drive.google.com/drive/folders/1OHM6-zi61zj_IVnFomlQFgjeqW49OS2j?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-dark btn-lg">
                    Ver Certificaciones
                </a>
                </div>
            </div>
            <div className="about-image mt-4 mt-lg-0">
                <Image src={logo} alt="Ignacio Rojos trabajando" className="img-fluid rounded shadow" />
            </div>
        </section>
    </>
  )
}

export default About;