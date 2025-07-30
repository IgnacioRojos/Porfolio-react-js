import "./skills.css";
import Image from 'react-bootstrap/Image';
import { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import logo1 from "./css.jpg";
import logo2 from "./html.jpg";
import logo3 from "./github.png";
import logo4 from "./JavaScript.jpg";
import logo5 from "./nodejs.png";
import logo6 from "./React.png";
import logo7 from "./mongodb.png";
import logo8 from "./handlebars.png";
import logo9 from "./express-js.png";

const Skills = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

  return (
    <>
      <div className="col-lg-12 col-12 skills-header">
        <h2 className="skills-title">Habilidades</h2>
      </div>

      <div className="skills-carousel-container">
        <Splide
          options={{
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 3,
            autoScroll: {
              speed: 1,
            },
            arrows: false,
            pagination: false,
            gap: '0',
          }}
          extensions={{ AutoScroll }}
        >
          {logos.map((logo, index) => (
            <SplideSlide key={index}>
              <Image src={logo} alt={`Skill ${index}`} className="skills-img" />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <div className="col skills-text mt-4">
        Además de las habilidades mencionadas en el área de programación, mis superiores destacaron mi predisposición para trabajar en equipo,
        dando mi opinión sobre decisiones o temas a mejorar en el rendimiento del grupo. Dentro de mi equipo de trabajo me felicitaron por 
        tomar el liderazgo en momentos donde hay que tomar decisiones bajo presión y la ayuda que ofrezco a los demás miembros en situaciones
        problemáticas que se presentan en la jornada laboral. Algo que también destaco es que en todo momento estoy dispuesto a recibir un 
        feedback de parte de mis superiores al igual que de mis compañeros para mejorar en los aspectos que me marquen.
      </div>
    </>
  );
};

export default Skills;



