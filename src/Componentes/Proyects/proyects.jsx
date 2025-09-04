import Image from 'react-bootstrap/Image';
import './proyects.css';

const Proyects = () => {
  return (
    <div className="row row4">
      <div className="col-lg-12 col-12" id="proyectos">
        <h2 className="tituloProyecto">Mis Proyectos</h2>

        {/* PROYECTOS DESTACADOS */}
        <section className="container my-5">
          <h2 className="text-center mb-5 fw-bold fs-2">🚀 Proyectos Destacados</h2>

          <div className="row g-4">

            {/* PROYECTO 1 - Ecommerce Full Stack */}
            <div className="col-12">
              <div className="card shadow-lg rounded-4 h-100">
                <div className="card-body">
                  <h3 className="card-title fs-4 fw-semibold">🛒 Ecommerce Full Stack</h3>
                  <p className="card-text">
                    Simulación real de un sistema de compras online con frontend y backend conectados.
                  </p>
                  <p className="card-text">
                    Desarrollo end-to-end: backend con Node.js + Express + MongoDB, frontend en React + Vite,
                    deployado en Railway y Netlify. Incluye autenticación, paginación y gestión de carritos.
                  </p>

                  <div className="mb-3">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-primary me-1">Vite</span>
                    <span className="badge bg-primary me-1">Bootstrap</span>
                    <span className="badge bg-primary me-1">Node.js</span>
                    <span className="badge bg-primary me-1">Express</span>
                    <span className="badge bg-primary me-1">MongoDB</span>
                    <span className="badge bg-primary me-1">Railway</span>
                    <span className="badge bg-primary">Netlify</span>
                  </div>

                  <a href="https://eccomercefullstack.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">Ver Deploy</a>
                  <a href="https://github.com/IgnacioRojos/ecommerce.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Ver Código</a>
                </div>
              </div>
            </div>

            {/* PROYECTO 2 - Landing Page CoderHouse */}
            <div className="col-12">
              <div className="card shadow-lg rounded-4 h-100">
                <div className="card-body">
                  <h3 className="card-title fs-4 fw-semibold">🖥️ Landing Page - CoderHouse</h3>
                  <p className="card-text">
                    Proyecto colaborativo desarrollado durante mi cursada en CoderHouse, enfocado en UI/UX y marketing.
                  </p>
                  <p className="card-text">
                    Diseñé e implementé una landing page moderna para la empresa Matching, aplicando buenas prácticas de diseño,
                    responsividad y optimización SEO. Participé en un equipo de desarrollo, aprendiendo metodologías ágiles.
                  </p>

                  <div className="mb-3">
                    <span className="badge bg-primary me-1">HTML</span>
                    <span className="badge bg-primary me-1">CSS</span>
                    <span className="badge bg-primary me-1">JavaScript</span>
                    <span className="badge bg-primary me-1">Git</span>
                    <span className="badge bg-primary">Netlify</span>
                  </div>

                  <a href="https://github.com/IgnacioRojos/Matching-Vite.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Ver Código</a>
                </div>
              </div>
            </div>

            {/* PROYECTO 3 - Concesionario Sport React */}
            <div className="col-12">
              <div className="card shadow-lg rounded-4 h-100">
                <div className="card-body">
                  <h3 className="card-title fs-4 fw-semibold">🚗 Concesionario Sport - React</h3>
                  <p className="card-text">
                    Aplicación web para simular un concesionario de autos deportivos con catálogo dinámico y carrito.
                  </p>
                  <p className="card-text"> 
                    Desarrollado en React, con manejo de estados, props y hooks para simular la selección y compra de vehículos.
                    Incluye integración de componentes reutilizables y diseño responsive.
                  </p>

                  <div className="mb-3">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-primary me-1">JavaScript</span>
                    <span className="badge bg-primary me-1">CSS</span>
                    <span className="badge bg-primary me-1">Bootstrap</span>
                    <span className="badge bg-primary">Netlify</span>
                  </div>

                  <a href="https://concesionariosport.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">Ver Deploy</a>
                  <a href="https://github.com/IgnacioRojos/Concesionario-Sport-React-Js.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Ver Código</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OTROS PROYECTOS */}
        <section className="container my-5">
          <h3 className="text-center mb-4 fw-bold fs-4">📂 Otros Proyectos</h3>

          <div className="row g-4">
            {/* ejemplo de uno, los demás igual */}
            <div className="col-md-4 col-sm-6">
              <div className="card card-proyecto h-100">
                <Image src="./img proyects/logoPagina.jpg" className="card-img-top" alt="HIR Reparaciones" />
                <div className="card-body">
                  <h5 className="card-title">H.I.R Reparaciones</h5>
                  <p className="card-text">Página estática para un emprendedor que realiza reparaciones de PC y notebooks.</p>
                  <a href="https://github.com/IgnacioRojos/HIReparaciones-React-js.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Repositorio</a>
                  <a href="https://hireparacionesreactjs.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Página</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/auto.jpg" className="card-img-top" alt="Simulador React JS" />
                <div className="card-body">
                  <h5 className="card-title">Concesionario Sport simulador</h5>
                  <p className="card-text">un simulador de compra de autos desarrollado con JavaScript puro. Este proyecto tiene como objetivo simular el proceso de selección y compra de vehículos</p>
                  <a href="https://github.com/IgnacioRojos/Concesionario-Sport-simulador-de-compra.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Repositorio</a>
                  <a href="https://simuladordecomprajavascript.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Página</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/estudio.png" className="card-img-top" alt="Tu Profe Particular React JS" />
                <div className="card-body">
                  <h5 className="card-title">Tu Profe Particular React Js</h5>
                  <p className="card-text">Proyecto en React JS para mejorar rendimiento. Permite buscar profesores particulares.</p>
                  <a href="https://github.com/IgnacioRojos/Tu-Profe-Particular-React.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Repositorio</a>
                  <a href="https://tuprofeparticularreactjs.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Página</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/BackEnd.jpg" className="card-img-top" alt="Back-End" />
                <div className="card-body">
                  <h5 className="card-title">Proyecto Back-End</h5>
                  <p className="card-text">Simulación de una base de datos no relacional para eCommerce usando MongoDB.</p>
                  <a href="https://github.com/IgnacioRojos/BackEnd.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Repositorio</a>
                  <a href="https://backend-production-1df6.up.railway.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Página</a>
                </div>
              </div>
            </div>



            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Proyects;