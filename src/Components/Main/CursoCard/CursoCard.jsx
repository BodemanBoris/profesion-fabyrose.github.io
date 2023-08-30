import "./CursoCard.css";

const CursoCard = () => {
  return (
    <>
      <div className="curso__mark">
        <div className="curso__title-container">
          <h4>Reiki Usui</h4>
        </div>
        <h5 className="sub__title">Nivel 1 y 2</h5>
        <div className="curso__imagen">
          <img
            src="https://hotmart.s3.amazonaws.com/product_contents/63c1395a-46f4-41ab-934f-db9afe7900ce/reikimaterildepromocion.png"
            alt=""
          />
        </div>
        <div className="curso__level">
          <p className="level_requirement">
            Requiere curso: <span className="spec">No</span>
          </p>
          <p className="level__nivel">Inicial</p>
        </div>
        <div className="curso__info">
          <p className="curso__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit
            quibusdam consectetur vitae ex dolor laudantium, odio, perspiciatis
            eligendi voluptate voluptatem a consequuntur aspernatur commodi
            nobis fuga asperiores tempore laborum.
          </p>
          <div className="curso__info-detalle">
            <p>
              $ARS <b>15.000</b>
            </p>
            <button className="btn__curso">Obtener Curso</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CursoCard;
