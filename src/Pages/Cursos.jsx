import { Link } from "react-router-dom";
import PageCursos from "../Components/PageCursos/PageCursos";

const Cursos = () => {
  return (
    <>
      <PageCursos />
      <Link to="/" className="link__style">
        Inicio
      </Link>
    </>
  );
};

export default Cursos;
