import Image from 'react-bootstrap/Image';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './proyects.css';

const Proyects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="row row4">
      <div className="col-lg-12 col-12" id="proyectos">
        <h2 className="tituloProyecto" data-aos="fade-down">Mis Proyectos</h2>

        {/* PROYECTOS DESTACADOS */}
        <section className="container my-5">
          <h2 className="text-center mb-5 fw-bold fs-2" data-aos="fade-up">🚀 Proyectos Destacados</h2>

          <div className="row g-4 proyectdestac">

            {/* PROYECTO 0 - Sistema de Contactos */}
            <div className="col-12" data-aos="fade-right">
              <div className="card shadow-lg rounded-4 h-100">
                <div className="card-body">
                  <h3 className="card-title fs-4 fw-semibold">📞 GDC - Sistema de Gestión de Contactos</h3>
                    <p className="card-text2">
                      <strong>Situación:</strong> Centros de atención con alta carga operativa necesitaban una forma clara de registrar y derivar contactos de clientes.
                    </p>
                    <p className="card-text2">
                      <strong>Tarea:</strong> Desarrollar una aplicación completa para gestionar usuarios, clientes y estados en tiempo real.
                    </p>
                    <p className="card-text2">
                      <strong>Acción:</strong> Construí el frontend en React con Vite y Bootstrap, y el backend con Node, Express y MongoDB. Implementé autenticación JWT, buscador por DNI, estados y roles de usuario.
                    </p>
                    <p className="card-text2">
                      <strong>Resultado:</strong> Sistema funcional, seguro y escalable que centraliza la gestión completa de contactos.
                    </p>
                  <p className="card-text2 mb-3">
                    <strong>Usuarios de prueba:</strong><br />
                    <br />
                    <strong>Usuario demo:</strong> ignacio <br />
                    <strong>Password:</strong> 123456 <br />
                    <br />
                    <strong>Usuario demo:</strong> martin <br />
                    <strong>Password:</strong>Ignacio1920 <br />
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

                  <a href="https://sistemadecontacto.netlify.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                    Ver Deploy
                  </a>
                  <a href="https://github.com/IgnacioRojos/GDCFrontEnd.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                    Frontend
                  </a>
                  <a href="https://github.com/IgnacioRojos/GDCBackEnd.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
                    Backend
                  </a>
                </div>
              </div>
            </div>

            {/* PROYECTO 1 - Ecommerce Full Stack */}
            <div className="col-12" data-aos="zoom-in">
              <div className="card shadow-lg rounded-4 h-100">
                <div className="card-body">
                  <h3 className="card-title fs-4 fw-semibold">🛒 Ecommerce Full Stack</h3>
                    <p className="card-text2">
                      <strong>Situación:</strong> Necesidad de simular una tienda online real con usuarios, productos y carrito.
                    </p>
                    <p className="card-text2">
                      <strong>Tarea:</strong> Desarrollar una aplicación full stack con frontend y backend conectados.
                    </p>
                    <p className="card-text2">
                      <strong>Acción:</strong> Implementé backend con Node, Express y MongoDB, frontend con React y Vite, autenticación, paginación y gestión de carritos. Deploy en Railway y Netlify.
                    </p>
                    <p className="card-text2">
                      <strong>Resultado:</strong> Plataforma completa que replica el flujo real de un ecommerce funcionando de punta a punta.
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
                  <a href="https://github.com/IgnacioRojos/ecommerce.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">Ver Código</a>
                </div>
              </div>
            </div>

            {/* PROYECTO 2 - Landing Page CoderHouse */}
            <div className="col-12" data-aos="fade-left">
              <div className="card shadow-lg rounded-4 h-100">
                <div className="card-body">
                  <h3 className="card-title fs-4 fw-semibold">🖥️ Landing Page - CoderHouse</h3>
                  <p className="card-text2">
                  <strong>Situación:</strong> Empresa necesitaba una landing moderna enfocada en marketing y conversión.
                  </p>
                  <p className="card-text2">
                    <strong>Tarea:</strong> Diseñar y desarrollar una landing optimizada para UX, UI y SEO.
                  </p>
                  <p className="card-text2">
                    <strong>Acción:</strong> Maqueté con HTML, CSS y JavaScript, apliqué diseño responsive, optimización visual y trabajo colaborativo con Git en equipo ágil.
                  </p>
                  <p className="card-text2">
                    <strong>Resultado:</strong> Landing profesional optimizada para distintos dispositivos y enfocada en captación de clientes.
                  </p>
                  <div className="mb-3">
                    <span className="badge bg-primary me-1">HTML</span>
                    <span className="badge bg-primary me-1">CSS</span>
                    <span className="badge bg-primary me-1">JavaScript</span>
                    <span className="badge bg-primary me-1">Git</span>
                    <span className="badge bg-primary">Netlify</span>
                  </div>

                  <a href="https://github.com/IgnacioRojos/Matching-Vite.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">Ver Código</a>
                </div>
              </div>
            </div>

            {/* PROYECTO 3 - Concesionario Sport React */}
            <div className="col-12" data-aos="fade-up">
              <div className="card shadow-lg rounded-4 h-100">
                <div className="card-body">
                  <h3 className="card-title fs-4 fw-semibold">🚗 Concesionario Sport - React</h3>
                  <p className="card-text2">
                    <strong>Situación:</strong> Se necesitaba simular la experiencia de un concesionario digital de autos deportivos.
                  </p>
                  <p className="card-text2">
                    <strong>Tarea:</strong> Crear una app interactiva con catálogo dinámico y carrito.
                  </p>
                  <p className="card-text2">
                    <strong>Acción:</strong> Desarrollé en React con estados, props y hooks, componentes reutilizables, carrito funcional y diseño responsive con Bootstrap.
                  </p>
                  <p className="card-text2">
                    <strong>Resultado:</strong> Aplicación fluida y visual que permite simular la selección y compra de vehículos.
                  </p>

                  <div className="mb-3">
                    <span className="badge bg-primary me-1">React</span>
                    <span className="badge bg-primary me-1">JavaScript</span>
                    <span className="badge bg-primary me-1">CSS</span>
                    <span className="badge bg-primary me-1">Bootstrap</span>
                    <span className="badge bg-primary">Netlify</span>
                  </div>

                  <a href="https://concesionariosport.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">Ver Deploy</a>
                  <a href="https://github.com/IgnacioRojos/Concesionario-Sport-React-Js.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">Ver Código</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OTROS PROYECTOS */}
        <section className="container my-5">
          <h3 className="text-center mb-4 fw-bold fs-4">📂 Otros Proyectos</h3>

          <div className="row g-4">
            <div className="col-md-4 col-sm-6">
              <div className="card card-proyecto h-100">
                <Image src="./img proyects/logoPagina.jpg" className="card-img-top" alt="HIR Reparaciones" />
                <div className="card-body">
                  <h5 className="card-title">H.I.R Reparaciones</h5>
                  <p className="card-text">Página estática para un emprendedor que realiza reparaciones de PC y notebooks.</p>
                  <a href="https://github.com/IgnacioRojos/HIReparaciones-React-js.git" target="_blank" rel="noopener noreferrer" className="boton1">Ver Repositorio</a>
                  <a href="https://hireparacionesreactjs.netlify.app/" target="_blank" rel="noopener noreferrer" className="boton1"> Ver Página</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/estudio.png" className="card-img-top" alt="Tu Profe Particular React JS" />
                <div className="card-body">
                  <h5 className="card-title">Tu Profe Particular React Js</h5>
                  <p className="card-text">Proyecto en React JS para mejorar rendimiento. Permite buscar profesores particulares.</p>
                  <a href="https://github.com/IgnacioRojos/Tu-Profe-Particular-React.git" target="_blank" rel="noopener noreferrer" className="boton1">Ver Repositorio</a>
                  <a href="https://tuprofeparticularreactjs.netlify.app/" target="_blank" rel="noopener noreferrer" className="boton1">Ver Página</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/BackEnd.jpg" className="card-img-top" alt="Back-End" />
                <div className="card-body">
                  <h5 className="card-title">Proyecto Back-End</h5>
                  <p className="card-text">Simulación de una base de datos no relacional para eCommerce usando MongoDB.</p>
                  <a href="https://github.com/IgnacioRojos/BackEnd.git" target="_blank" rel="noopener noreferrer" className="boton1">Ver Repositorio</a>
                  <a href="https://backend-production-1df6.up.railway.app/" target="_blank" rel="noopener noreferrer" className=" boton1">Ver API</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/call.png" className="card-img-top" alt="Gestar Backend" />
                <div className="card-body">
                  <h5 className="card-title">GDC BackEnd</h5>
                  <p className="card-text">
                    API REST desarrollada en Node.js y Express, encargada de manejar usuarios, tipificaciones y consultas. 
                    Conectada a MongoDB Atlas y desplegada en Railway, con endpoints protegidos y autenticación JWT.
                  </p>
                  <a href="https://github.com/IgnacioRojos/GDCBackEnd.git" target="_blank" rel="noopener noreferrer" className=" boton1">Ver Repositorio</a>
                  <a href="https://gestarbackend-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className=" boton1">Ver API</a>
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