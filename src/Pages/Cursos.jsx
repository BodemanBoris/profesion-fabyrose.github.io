import { Link } from "react-router-dom";
import PageCursos from "../Components/PageCursos/PageCursos";
import Contenido from "../Components/PageCursos/Contenido/Contenido";
import Creador from "../Components/Creador/Creador";
import WhatsAppBtn from "../Components/WhatsAppBtn/WhatsAppBtn";
import Footer from "../Components/Footer/Footer";
import Contacto from "../Components/Main/Contacto/Contacto";

const Cursos = () => {
  return (
    <>
      <PageCursos />
      <li className="item">

      <Link to="/" className="link__item">
        Home 🏠
      </Link>
      </li>
      <Contenido />
      <li className="item">

      <Link to="/" className="link__item">
        Home 🏠
      </Link>
      </li>
      <Contacto></Contacto>
      <WhatsAppBtn></WhatsAppBtn>
      <Footer></Footer>
      <Creador></Creador>
    </>
  );
};

export default Cursos;
