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
                        <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
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
                        He participado en proyectos tanto individuales como en equipo, aplicando buenas prácticas de programación y control de versiones con Git.
                        Durante mis estudios en Ingeniería en Sistemas, trabajé en proyectos educativos utilizando Python, colaborando activamente en el desarrollo de una plataforma musical.
                        Además, realicé una pasantía en CoderHouse, donde participé en la construcción de una landing page para la empresa Matching. Durante el proceso, colaboré en la organización del equipo de desarrollo, asignando tareas y asegurando una ejecución eficiente del
                        proyecto.
                    </p>
                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                        <a download="Curriculum_Ignacio_Rojos_ES.pdf" href="/IgnacioRojos_FrontEndDeveloper_2025.pdf" className="btn btn-primary">
                            Descargar CV en Español
                        </a>
                        <a download="Curriculum_Ignacio_Rojos_EN.pdf" href="/IgnacioRojos_2025_in_English.pdf" className="btn btn-primary">
                            Descargar CV en Inglés
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;