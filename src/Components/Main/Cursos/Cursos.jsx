import "./Cursos.css";

const Cursos = () => {
  return (
    <section id="cursos" className="cursos__container">
      <h2>Cursos</h2>

      <p className="texto__largo">
        <b>¡Bienvenido a nuestra sección de cursos!</b>
        <br />
        En nuestro camino hacia el crecimiento espiritual y la sanación
        holística, ofrecemos una variedad de cursos diseñados para ayudarte a
        descubrir tu potencial interior y aprender valiosas técnicas de
        sanación.
        <br />
        <br /> Nuestros cursos se imparten con pasión y compromiso, y están
        abiertos a todos, sin necesidad de conocimientos previos. Desde la
        iniciación en Reiki Usui, que abarca desde los fundamentos hasta niveles
        avanzados, hasta la profunda sabiduría de los Registros Akáshicos y la
        sanación angelical, encontrarás una amplia gama de opciones para tu
        desarrollo espiritual.
        <br />
        <br />
        Descubre cómo puedes equilibrar tu energía, sanar a otros y a ti mismo,
        y explorar tu potencial como sanador. Nuestros maestros altamente
        capacitados te guiarán en cada paso del camino. Explora nuestros cursos
        a continuación y elige el que mejor se adapte a tus necesidades y
        objetivos. ¡Estamos emocionados de ser parte de tu viaje de crecimiento
        y transformación!
      </p>
      <div id="course__list">
        Aquí tienes un listado de cursos basado en el texto proporcionado:
        <h3>Cursos de Reiki Usui:</h3>
        <ol>
          <li>
            1- <b>Reiki Usui Nivel 1 y 2</b>:
            <br />
            - Incluye teoría y simbología. <br />
            - Iniciación y sintonización.
            <br />- Técnicas de imposición de manos en personas, mascotas y
            plantas.
            <br />- Enseñanza de Reiki a distancia. <br />
            <span className="purple__text">
              No se requiere conocimiento previo.
            </span>
          </li>
          <br />
          <li>
            2- <b>Reiki Usui Nivel 3</b>:
            <br />
            -Aprendizaje de técnicas avanzadas, como la técnica de la caja o
            cuaderno Reiki, el circuito microscópico y la Cirugía Psíquica.
            <br />- Gyoshi-Ho (Reiki con la mirada).
            <br />
            <span className="purple__text">
              Requiere conocimiento previo de los Niveles 1 y 2 para una
              formación más completa.
            </span>
          </li>
          <br />
          <li>
            3- <b>Maestría Reiki Usui</b>:
            <br />
            -Completación del entrenamiento para la práctica de Reiki.
            <br />- Preparación para iniciar a alumnos practicantes y re
            sintonizar maestros. <br />
            <span className="purple__text">
              Se requiere haber completado los Niveles 1 2 y 3.
            </span>
          </li>
          <h3>Otros cursos</h3>
          <li>
            4- <b>Reiki Karuna</b>
            <li>Reiki Karuna - Nivel 1 y 2.</li>
            <li> Reiki Karuna - Maestria</li>
            <li> Reiki Karuna - Nivel avanzado</li>
          </li>
          <br />
          <li>
            5- <b>Sanacion Angelical</b>
            <li>Snacion Angelical</li>
            <li>Maestria</li>
          </li>
          <br />
          <li>
            6- <b>Tameana</b>
            <li>Modulo 1, 2, 3, 4, 5, 6, 7</li>
          </li>
          <br />
          <li>
            7- <b>Radiestesia y Péndulo Hebreo </b>
          </li>
          <br />
          <li>
            8-<b>Registros Akáshicos </b>
            <li>Nivel 1 y 2</li>
            <li> Maestria</li>
          </li>
        </ol>
        <p className="text__courses">
          Este listado de cursos proporciona una visión general de las opciones
          disponibles para aquellos interesados en participar en tus programas
          de formación.
        </p>
      </div>

      <div>
        <h3>Metodos de enseñanza</h3>
        <div className="clases__type">
          <div className="class__content">
            <img
              src="https://img.freepik.com/vector-gratis/influencer-grabando-nuevo-video_23-2148522553.jpg?w=360"
              alt=""
            />
            <p>Clases en vivo</p>
          </div>

          <div className="class__content">
            <img
              className="pdf__imagen"
              src="https://img.freepik.com/vector-premium/diseno-plano-moderno-icono-archivo-pdf-web_599062-7115.jpg"
              alt=""
            />
            <p>PDFs Informativo</p>
          </div>
          <div className="class__content">
            <img
              src="https://creamostuvideo.com/wp-content/uploads/2015/03/video.png"
              alt=""
            />
            <p>Clases grabadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cursos;
