import "./FabyRose.css";
import Comentarios from "../Comentarios/Comentarios";

const FabyRose = () => {
  return (
    <>
      <h2>Faby Rose</h2>
      <div className="info__fabyrose">
        <div className="img__faby">
          <img className="faby__img" src="/fabyrose.png" alt="" />
        </div>
        <p className="faby__description">
          <b>¡Hola!</b>, mi nombre es{" "}
          <span className="purple__text">Fabiana Aguilar. </span>
          Aprecio que hayas encontrado este espacio donde podrás explorar una
          amplia gama de oportunidades para tu crecimiento y evolución
          espiritual.
          <br />
          <br />
          Así como las Terapias Alternativas me ayudaron a mí,{" "}
          <b>
            hoy estoy aquí, del otro lado, para ayudar, acompañar y enseñar lo
            que en su momento me sacó de un pozo terrible en el que me
            encontraba.
          </b>
          Cuando uno cree que ha tocado fondo, hoy entiendo que sí, pero es
          precisamente ese punto de partida que nos impulsa a emerger con más
          fuerza.
          <br />
          <br />
          <i>En el año 2004</i>, mi vida se convirtió en un caos después del
          fallecimiento de mi querida Abuela Rosa, a quien amo profundamente.
          <b>
            Después de visitar a psicólogos, psiquiatras y consejeros, descubrí
            el <span className="purple__text">Reiki.</span>
          </b>{" "}
          Sin saber qué era, me sumergí en ello, solicitando a esa energía que
          abriera mi mente y me permitiera ver más allá del sufrimiento y la
          victimización que estaba experimentando. En realidad, la partida de mi
          abuela fue un punto de inflexión.
          <br />
          <br />
          En <span className="purple__text">2008</span>, comencé este viaje con
          sus altibajos, pero con determinación, porque noté cambios
          significativos en mí, lo que en realidad estaba buscando: ¡cambios!
          Atravesé diferentes maestros, comprendiendo que llegamos a ellos por
          una cuestión de vibración y que es natural buscar cambios cuando los
          necesitamos. Recibí señales una y otra vez que me instaban a seguir
          avanzando, a pesar de los obstáculos.
          <br />
          <br />
          Uno de los cambios más significativos ocurrió en 2014, cuando me
          separé del padre de mi hijo y renuncié a un trabajo de 6 años. Fue un
          cambio radical, pero me llevó a una vida maravillosa. Sentí que era el
          momento de dar ese paso, salir definitivamente del sistema y emprender
          mi propio negocio, centrado en lámparas de sal, fuentes de agua,
          budas, sublimación, mandalas, yoga, frases y símbolos. Llamé a este
          lugar<b> {"'mi rincón en el mundo'"} </b>y, con la guía de un ser
          mágico lleno de luz, incorporé el nombre de mi Abuela. Ahora soy Faby
          Rose, y me encanta cuando me llaman de esa manera.
          <br />
          <br />
          Después de evadir varios pedidos, mi hijo se convirtió en la persona
          que me impulsó a enseñar Reiki. Él se convirtió en mi maestro, y a
          través de él, comprendí que era el momento de empezar a compartir lo
          que había aprendido. Así que en mi primer grupo, él estuvo presente,
          lleno de amor y nerviosismo.{" "}
          <span className="purple__text">
            Hoy, siento gratitud y entiendo que todo sucedió de la manera que
            debía para que esta gran bendición se materializara.
          </span>
          <br />
          <br />
        </p>
        <p style={{ fontSize: "18px" }}>
          Agradezco a los maestros con los que me he formado, a quienes honro y
          respeto.
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
      <h3>Testimonios</h3>
      <section className="testimonios">
        <Comentarios></Comentarios>
        <Comentarios></Comentarios>
        <Comentarios></Comentarios>
      </section>
    </>
  );
};

export default FabyRose;
