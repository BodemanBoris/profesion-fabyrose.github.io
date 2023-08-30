import "./Reiki.css";

const Reiki = () => {
  return (
    <>
      <h2 className="reiki__title">Reiki</h2>
      <div className="reiki__text">
        <p>
          <b>¿Que es el Reiki?</b>
        </p>
        <p>
          Es una práctica de sanación <span>holística</span> que se originó en
          <span className="text__color"> Japón a principios del siglo XX.</span>
        </p>
        <br />
        <p className="texto__largo">
          La palabra "Reiki" se compone de dos sílabas: "rei", que significa
          "energía universal" o "espíritu", y "ki" (también conocida como "chi"
          en otras culturas), que se traduce como "energía vital".
        </p>
        <figure>
          <img
            className="img__japon"
            src="https://www.escuelagelva.com/wp-content/uploads/2021/03/Img-clases-de-Reiki-nivel3.jpg"
            alt="persona haciendo reiki a otra"
          />
          <figcaption>Reiki en el siglo XX</figcaption>
        </figure>
        <br />
        <p className="texto__largo">
          En conjunto, Reiki se interpreta generalmente como "energía universal
          de vida". El Reiki se basa en la creencia de que existe una energía
          vital universal que fluye a través de todos los seres vivos y que esta
          energía es esencial para mantener la salud física, emocional, mental y
          espiritual. Los practicantes de Reiki canalizan esta energía a través
          de sus manos y la transmiten a otra persona, ya sea tocándola o
          manteniendo las manos cerca de su cuerpo.
        </p>
        <br />
        <p className="texto__largo">
          Se cree que esta energía restaura y equilibra el flujo de energía
          vital en el receptor, promoviendo así la sanación y el bienestar.
        </p>
      </div>
      <h3 className="sub__title">Aspectos Principales que trabaja</h3>
      <section className="items__reiki">
        <div>
          <figure>
            <img
              src="https://www.lugoneseditorial.com.ar/salud/wp-content/uploads/2021/12/reiki-2-1024x798.jpg"
              alt=""
            />
            <figcaption>Sanacion Energetica</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <img
              src="https://www.lugoneseditorial.com.ar/salud/wp-content/uploads/2021/12/reiki-2-1024x798.jpg"
              alt=""
            />
            <figcaption>Chacras</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <img
              src="https://www.lugoneseditorial.com.ar/salud/wp-content/uploads/2021/12/reiki-2-1024x798.jpg"
              alt=""
            />
            <figcaption>Simbolos y Mantras</figcaption>
          </figure>
        </div>
        <div>
          <figure>
            <img
              src="https://www.lugoneseditorial.com.ar/salud/wp-content/uploads/2021/12/reiki-2-1024x798.jpg"
              alt=""
            />
            <figcaption>Auto Reiki</figcaption>
          </figure>
        </div>
      </section>
    </>
  );
};
export default Reiki;
