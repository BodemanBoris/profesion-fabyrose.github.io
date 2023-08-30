import "./Cursos.css";
import { AiFillFilePdf } from "react-icons/ai";

const Cursos = () => {
  return (
    <section className="cursos__container">
      <h2>Cursos</h2>

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
            <AiFillFilePdf className="pdf__icon"></AiFillFilePdf>
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
