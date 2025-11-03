import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Componentes/Header/header.jsx"
import Footer from "../src/Componentes/Footer/footer.jsx"
import Contact from "../src/Componentes/Contact/contact.jsx"
import Proyects from "../src/Componentes/Proyects/proyects.jsx"
import Skills from './Componentes/Skills/skills.jsx';
import About from './Componentes/About/about.jsx';
import "./styles/colors.css"


function App() {
  return (
    <>

      <Header/>
      <About/>
      <Skills/>
      <Proyects/>
      <Contact/>
      <Footer/>

    </>
   
  );
}

export default App;
