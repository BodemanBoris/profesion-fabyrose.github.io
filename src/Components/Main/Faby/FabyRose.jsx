import "./FabyRose.css";

const FabyRose = () => {
  return (
    <>
      <h2>Faby Rose</h2>
      <div className="info__fabyrose">
        <div className="img__faby">
          <img className="faby__img" src="/fabyrose.png" alt="" />
        </div>
        <p className="faby__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa unde
          commodi nostrum, aliquam quia autem corrupti repudiandae assumenda
          fugit dicta officiis libero odit quis, tenetur eos reiciendis incidunt
          maiores molestias.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa unde
          commodi nostrum, aliquam quia autem corrupti repudiandae assumenda
          fugit dicta officiis libero odit quis, tenetur eos reiciendis incidunt
          maiores molestias.
        </p>
      </div>
      <section>
        <h3 className="sub__title">LOGROS</h3>
        <div className="info__container">
          <div className="info__faby">
            <p className="info__numero">+ 10</p>
            <p className="info__desc">Años de trayectoria</p>
          </div>

          <div className="info__faby">
            <p className="info__numero">+25</p>
            <p className="info__desc">Alumnos capcaitados</p>
          </div>

          <div className="info__faby">
            <p className="info__numero">10</p>
            <p className="info__desc">Alumnos capcaitados</p>
          </div>

          <div className="info__faby">
            <p className="info__numero">6</p>
            <p className="info__desc">Cursos disponibles</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FabyRose;
