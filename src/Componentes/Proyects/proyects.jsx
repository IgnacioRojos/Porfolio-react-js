import Image from 'react-bootstrap/Image';
import './proyects.css';

const Proyects = () => {
  return (
    <div className="row row4">
      <div className="col-lg-12 col-12" id="proyectos">
        <h2 className="tituloProyecto">Mis Proyectos</h2>
        <div className="col">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 habilidades">

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/logoPagina.jpg" className="card-img-top" alt="HIR Reparaciones" />
                <div className="card-body">
                  <h5 className="card-title">H.I.R Reparaciones</h5>
                  <p className="card-text">Página estática para un emprendedor que realiza reparaciones de PC y notebooks.</p>
                  <a href="https://github.com/IgnacioRojos/HIReparaciones-React-js.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Repositorio</a>
                  <a href="https://hireparacionesreactjs.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Página</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/images.png" className="card-img-top" alt="Ecommerce" />
                <div className="card-body">
                  <h5 className="card-title">Ecommerce Full stack</h5>
                  <p className="card-text">Es una página donde se pueden comprar diferentes productos, creado con el proyecto back end y con un front creado desde cero.</p>
                  <a href="https://github.com/IgnacioRojos/ecommerce.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Repositorio</a>
                  <a href="https://eccomercefullstack.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Página</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/auto.jpg" className="card-img-top" alt="Concesionario Sport" />
                <div className="card-body">
                  <h5 className="card-title">Concesionario Sport</h5>
                  <p className="card-text">Página para la compra y venta de autos usados o nuevos.</p>
                  <a href="https://github.com/IgnacioRojos/Concesionario-Sport.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Repositorio</a>
                  <a href="https://ignaciorojos.github.io/Concesionario-Sport/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Página</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/auto.jpg" className="card-img-top" alt="Simulador React JS" />
                <div className="card-body">
                  <h5 className="card-title">Concesionario Sport simulador React Js</h5>
                  <p className="card-text">Proyecto React JS para simular la compra de autos. Desarrollado como entrega final.</p>
                  <a href="https://github.com/IgnacioRojos/Concesionario-Sport-React-Js.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Repositorio</a>
                  <a href="https://concesionariosport.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Página</a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card card-proyecto">
                <Image src="./img proyects/auto.jpg" className="card-img-top" alt="Simulador JS" />
                <div className="card-body">
                  <h5 className="card-title">Concesionario Sport simulador Js</h5>
                  <p className="card-text">Simulador de compra de autos realizado en JavaScript Vanilla para una entrega final.</p>
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
                <Image src="./img proyects/Capa_1.png" className="card-img-top imgMatching" alt="Matching" />
                <div className="card-body">
                  <h5 className="card-title">Matching React Js</h5>
                  <p className="card-text">Landing page realizada durante una pasantía. Presentación de la app Matching.</p>
                  <a href="https://github.com/IgnacioRojos/Matching-Vite.git" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary boton1">Ver Repositorio</a>
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
        </div>
      </div>
    </div>
  );
};

export default Proyects;