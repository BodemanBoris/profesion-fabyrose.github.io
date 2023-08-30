import "./Comentarios.css";

const Comentarios = () => {
  return (
    <article className="comment__container">
      <img src="https://unavatar.io/midudev" alt="Midudev" />
      <div className="comment__text">
        <p className="comment__name">Miguel Angel Duran</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          officia atque nesciunt quibusdam, quis
        </p>
      </div>
    </article>
  );
};

export default Comentarios;
