import "./skills.css";
import Image from "react-bootstrap/Image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

import logo1 from "./css.jpg";
import logo2 from "./html.jpg";
import logo3 from "./github.png";
import logo4 from "./JavaScript.jpg";
import logo5 from "./nodejs.png";
import logo6 from "./React.png";
import logo7 from "./mongodb.png";
import logo8 from "./handlebars.png";
import logo9 from "./express-js.png";
import logo10 from "./postman.png";
import logo11 from "./typeScript.png";
import logo12 from "./tailwindCSS.png";
import logo13 from "./Figma.png";
import logo14 from "./railway.png"

const Skills = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14];

  const data = [
    { skill: "Frontend", nivel: 90 },
    { skill: "Backend", nivel: 75 },
    { skill: "Trabajo en equipo", nivel: 95 },
    { skill: "Liderazgo", nivel: 85 },
    { skill: "Comunicación", nivel: 88 },
  ];

  return (
    <>
      <div className="col-lg-12 col-12 skills-header text-center">
        <h2 className="skills-title">Mis Habilidades</h2>
        <p className="skills-subtitle">
          Un equilibrio entre lo técnico y lo humano: código limpio, diseño funcional y trabajo en equipo.
        </p>
      </div>

      {/* Carrusel técnico */}
      <div className="skills-carousel-container my-4">
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            perPage: 4,
            gap: "1rem",
            autoScroll: { speed: 1 },
            breakpoints: {
              992: { perPage: 3 },
              768: { perPage: 2 },
              480: { perPage: 1 },
            },
            arrows: false,
            pagination: false,
          }}
          extensions={{ AutoScroll }}
        >
          {logos.map((logo, index) => (
            <SplideSlide key={index}>
              <div className="skills-logo-wrapper">
                <Image src={logo} alt={`Skill ${index}`} className="skills-img" />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {/* Gráfico radar */}
      <div className="skills-chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="skill" stroke="var(--text-color)" />
            <Radar
              name="Ignacio Rojos"
              dataKey="nivel"
              stroke="#00aaff"
              fill="#00aaff"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Soft skills cards */}
      <div className="soft-skills">
        <div className="soft-card">🤝 Trabajo en equipo</div>
        <div className="soft-card">💬 Comunicación</div>
        <div className="soft-card">⚡ Resolución de problemas</div>
        <div className="soft-card">🎯 Liderazgo</div>
        <div className="soft-card">🧠 Adaptabilidad</div>
      </div>

      {/* Texto con storytelling */}
      <div className="col skills-text mt-4">
        Además de mis conocimientos técnicos en desarrollo Front-End y Back-End, valoro profundamente el trabajo en equipo. 
        Mis superiores y compañeros suelen destacar mi predisposición para colaborar, proponer mejoras y asumir el liderazgo en momentos clave. 
        Disfruto ayudar a quienes lo necesitan y mantener un ambiente de aprendizaje continuo, donde el feedback —tanto recibido como dado— 
        es parte del crecimiento diario.
      </div>
    </>
  );
};

export default Skills;
