import CursosList from "./CursosLista.json";
import CardCurso from "./CardCurso";

const Contenido = () => {
  return (
    <section className="detalle__cursos">
      <div className="contenedor__cards">
        {CursosList.cursos.map((el) => {
          return <CardCurso key={el.id} el={el} />;
        })}
      </div>
    </section>
  );
};

export default Contenido;
