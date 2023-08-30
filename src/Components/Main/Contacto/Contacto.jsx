import "./Contacto.css";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const Contacto = () => {
  return (
    <>
      <h2>Contacto</h2>
      <section className="contacto__flex">
        <div className="contact__form">
          <form action="">
            <label htmlFor="nombre">Nombre completo*</label>
            <input
              name="nombre"
              id="nombre"
              type="text"
              required
              placeholder="Ingresa tu nombre completo"
            />

            <label htmlFor="email">Correo electronico*</label>
            <input
              name="email"
              id="email"
              type="email"
              required
              placeholder="Ingresa tu email"
            />

            <label htmlFor="telefono">Numero telefonico</label>
            <input
              name="telefono"
              id="telefono"
              type="text"
              placeholder="Ingresa tu numero "
            />

            <label htmlFor="comments">Comentarios*</label>
            <textarea
              className="imput__textarea"
              name="comments"
              id="comments"
              cols="30"
              rows="5"
              placeholder="Ingresa tus comentarios"
            ></textarea>

            <p className="text__alert">
              Los campos marcados con(*) son obligatorios
            </p>
            <input className="enviar" type="submit" value="Enviar" />
          </form>
        </div>
        <article className="contact__info">
          <div className="contact__info-container">
            <p>Zàrate, Buenos aires - Argentina</p>
            <p>fabyrose@fabyrose.com</p>
            <p>+5493487666666</p>
          </div>
          <div className="socialmedia__container">
            <div>
              <a target="_blank" rel="noreferrer" href="">
                <AiFillFacebook className="icon"></AiFillFacebook>
              </a>
              <a target="_blank" rel="noreferrer" href="">
                <AiFillLinkedin className="icon"></AiFillLinkedin>
              </a>
              <a target="_blank" rel="noreferrer" href="">
                <AiFillInstagram className="icon"></AiFillInstagram>
              </a>
              <p className="text__blanco">
                Seguinos en nuestras redes sociales
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Contacto;
