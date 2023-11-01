import "./Reiki.css";

const Reiki = () => {
  return (
    <>
      <h2 className="reiki__title">Que es la terapia Holística</h2>
      <div className="reiki__text">
        <br />
        <p className="texto__largo text__tostart">
          La terapia holística es un tipo especial de tratamiento que se enfoca
          en sanar el cuerpo en su totalidad. Me refiero a que no somos solo un
          cuerpo físico; también está el cuerpo mental, emocional y espiritual.
          Teniendo en cuenta esto, se busca lograr salud y bienestar óptimos.
        </p>
        <figure>
          <img
            className="img__japon"
            src="https://www.escuelagelva.com/wp-content/uploads/2021/03/Img-clases-de-Reiki-nivel3.jpg"
            alt="persona haciendo reiki a otra"
          />
          <figcaption>Sesion de Reiki</figcaption>
        </figure>
        <br />
        <p className="texto__largo text__tostart">
          El objetivo principal de la terapia holística es{" "}
          <i>lograr un equilibrio adecuado en todas las áreas de la vida.</i>{" "}
          Esta forma de tratamiento se utiliza para ayudar a las personas a
          desarrollar una conexión más profunda consigo mismas. Los
          desequilibrios en la vida física, emocional o espiritual pueden
          perjudicar nuestra salud en general.{" "}
          <b>
            Es importante tener en cuenta que las Terapias Holísticas no
            reemplazan ninguna medicación alopática.
          </b>
          <br />
          <br />
        </p>
        <h3 className="sub__title">
          Algunas de las muchas terapias que pueden encontrarse en un centro
          holístico incluyen:
        </h3>
        <div className="items__reiki">
          <figure>
            <img
              src="https://img.freepik.com/vector-gratis/silueta-mujer-pose-yoga-contra-diseno-mandala_1048-13082.jpg"
              alt=""
            />
            <figcaption>Yoga (integra cuerpo, mente y espíritu).</figcaption>
          </figure>
          <figure>
            <img
              src="https://www.lugoneseditorial.com.ar/salud/wp-content/uploads/2021/12/reiki-2-1024x798.jpg"
              alt=""
            />
            <figcaption>Reiki (equilibra la energía).</figcaption>
          </figure>
          <figure>
            <img
              src="https://img.freepik.com/vector-premium/personaje-dibujos-animados-mujer-acostada-cama-recibiendo-relajacion-masaje-espalda-spa_1302-21314.jpg"
              alt=""
            />
            <figcaption>
              Masajes (alivian el dolor físico y brindan relajación).
            </figcaption>
          </figure>
          <figure>
            <img
              src="https://i.pinimg.com/736x/f6/de/1a/f6de1a385c8eb2b9c3a5e54c6545740f.jpg"
              alt=""
            />
            <figcaption>
              Reflexología (equilibra las emociones y alivia el dolor).
            </figcaption>
          </figure>
        </div>
        <br />
        <p className="texto__largo text__tostart">
          Como terapeuta holística, coach y psicóloga espiritual, tengo la
          formación adecuada para ayudarte a través de sesiones y cursos. Te
          invito a explorar mi espacio virtual, donde encontrarás lo que tu alma
          busca para sanar. ¡Bienvenidos!
        </p>
      </div>
    </>
  );
};
export default Reiki;
