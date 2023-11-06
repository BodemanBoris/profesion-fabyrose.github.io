import "./CardCurso.css";

const CardCurso = ({ el }) => {
  return (
    <div className="curso__card">
      <div className="btn__separador">
        <h3>Curso de : {el.nombre}</h3>
        <img src={el.urlImagen} alt={el.altImagen} />
        {el.conocimientoPrevio && (
          <h4 className="alert__curso">
            Requiere el curso de: {el.cursoNecesario}
          </h4>
        )}
        <p>{el.contenido}</p>
      </div>
      <button className="curso__btn">Adquirir Curso</button>
    </div>
  );
};

export default CardCurso;
