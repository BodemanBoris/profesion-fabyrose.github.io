import "./PageCursos.css";
import ContenidoCurso from "./ContenidoCurso";

const PageCursos = () => {
  return (
    <header className="page__cursos">
      <div className="title__container">
        <h1 className="title__uno">
          FABY <span className="rose">ROSE</span>
        </h1>
        <h2 className="title__dos">ROSE</h2>
      </div>
      <div className="img__container">
        <img
          src="https://img.freepik.com/vector-premium/fondo-vacio-blanco-negro-estilo-tatuaje-japones-simple-muy-detallado_969393-781.jpg"
          alt="Bosque japones"
        />
      </div>
      <ContenidoCurso />
    </header>
  );
};

export default PageCursos;
