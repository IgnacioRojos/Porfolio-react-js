import "./about.css"
import Image from 'react-bootstrap/Image';
import logo from "./desarrollador-750x350.jpg"


const About = () =>{
    return(
        <>
            <section className="about-section d-flex flex-column flex-lg-row align-items-center justify-content-between container py-5">
                <div className="about-text text-center text-lg-start">
                    <h1 className="about-name">Ignacio Rojos</h1>
                    <h2 className="about-profession">Desarrollador Front-End</h2>
                    <p className="about-description mt-3">
                        Soy estudiante de Ingeniería en Sistemas con experiencia en desarrollo web, especializado en HTML, CSS, JavaScript, React y con nociones de Back-End. Apasionado por crear interfaces intuitivas y soluciones eficientes.
                    </p>
                    <div className="about-buttons mt-4 d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-2">
                        <a href="#proyectos" className="btn btn-outline-primary">Ver Proyectos</a>
                        <a href="https://drive.google.com/drive/folders/1OHM6-zi61zj_IVnFomlQFgjeqW49OS2j?usp=drive_link" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Ver Certificaciones</a>
                    </div>
                </div>
                <div className="about-image mt-4 mt-lg-0">
                    <Image src={logo} alt="Ignacio Rojos trabajando" className="img-fluid rounded shadow" />
                </div>
            </section>
            <section className="about-experience container py-5" id="sobreMi">
                <div className="text-center">
                    <h2 className="about-title mb-4">Mi experiencia en el área de programación</h2>
                    <p className="about-experience-text mb-4">
                        He participado en proyectos tanto individuales como en equipo, aplicando buenas prácticas de programación y control de versiones con Git, y siguiendo metodologías ágiles como Scrum.<br/>
                        Durante mis estudios en Ingeniería en Sistemas en UTN, colaboré en proyectos académicos con Python, destacando el desarrollo de una plataforma musical junto a compañeros.
                        Realicé una pasantía en CoderHouse donde participé en la creación de una landing page para la empresa Matching. Allí trabajé con React.js, React Router DOM y Bootstrap, y me encargué de organizar al equipo de desarrollo, asignando tareas técnicas y asegurando el cumplimiento de los objetivos del proyecto.<br/>

                        Además, desarrollé múltiples proyectos personales como Tu Profe Particular (una plataforma educativa con React.js y Firebase en tiempo real), y Concesionario Sport, un simulador de compra de autos con filtros y carrito usando React.js. También diseñé y publiqué mi portfolio personal como SPA con modo oscuro, animaciones y presentación de mis trabajos destacados.<br/>

                        Me especializo en el desarrollo Front-End con tecnologías como HTML5, CSS3, JavaScript ES6+, React.js, Bootstrap, y también cuento con conocimientos de Back-End con Node.js, Express y MongoDB. Valoro el trabajo en equipo, la comunicación efectiva y el aprendizaje continuo.
                    </p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                        <a download="Curriculum_Ignacio_Rojos_ES.pdf" href="/IgnacioRojos_FrontEndDeveloper_2025.pdf.pdf" className="btn btn-outline-primary">
                            Descargar CV
                        </a>
                        <a download="Curriculum_Ignacio_Rojos_EN.pdf" href="/IgnacioRojos_2025_in English.pdf.pdf" className="btn btn-outline-primary">
                            Descargar CV en Inglés
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;