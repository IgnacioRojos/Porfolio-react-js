import "./skills.css";
import Image from 'react-bootstrap/Image';
import logo1 from "./css.jpg"
import logo2 from "./html.jpg"
import logo3 from "./github.png"
import logo4 from "./JavaScript.jpg"
import logo5 from "./nodejs.png"
import logo6 from "./React.png"
import logo7 from "./mongodb.png"
import logo8 from "./handlebars.png"
import logo9 from "./express-js.png"

const Skills = () => {
  return (
    <>
      <div className="col-lg-12 col-12 skills-header">
        <h2 className="skills-title">Habilidades</h2>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 skills-grid">
        <Image className="skills-img" src={logo1} alt="CSS" />
        <Image className="skills-img" src={logo2} alt="HTML" />
        <Image className="skills-img" src={logo3} alt="GitHub" />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 skills-grid">
        <Image className="skills-img" src={logo4} alt="JavaScript" />
        <Image className="skills-img" src={logo5} alt="Node.js" />
        <Image className="skills-img" src={logo6}alt="React" />
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 skills-grid">
        <Image className="skills-img" src={logo7} alt="MongoDB" />
        <Image className="skills-img" src={logo8}alt="Handlebars" />
        <Image className="skills-img" src={logo9} alt="Express.js" />
      </div>

      <div className="col skills-text">
        Además de las habilidades mencionadas en el área de programación, mis superiores destacaron mi predisposición para trabajar en equipo
        dando mi opinión sobre decisiones o temas a mejorar en el rendimiento del grupo. Dentro de mi equipo de trabajo me felicitaron por 
        tomar el liderazgo en momentos donde hay que tomar decisiones bajo presión y la ayuda que ofrezco a los demás miembros en situaciones
        problemáticas que se presentan en la jornada laboral. Algo que también destaco es que en todo momento estoy dispuesto a recibir un 
        feedback de parte de mis superiores al igual que de mis compañeros para mejorar en los aspectos que me marquen.
      </div>
    </>
  );
};

export default Skills;





