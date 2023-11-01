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
          <form
            action="https://formsubmit.co/borisbodemand@hotmail.com"
            method="POST"
          >
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
            <input type="hidden" name="_template" value="table"></input>
            <input type="hidden" name="_captcha" value="false"></input>
            <p className="text__alert">
              Los campos marcados con(*) son obligatorios
            </p>
            <input className="enviar" type="submit" value="Enviar" />
          </form>
        </div>
        <article className="contact__info">
          <div className="contact__info-container">
            <p>
              <small>Ciudad:</small>
            </p>
            <p>Zàrate, Buenos aires - Argentina</p>
            <p>
              <small>Email:</small>
            </p>
            <p>fabyrose@fabyrose.com</p>
            <p>
              <small>Tel:</small>
            </p>
            <p>+5493487524500</p>
          </div>
          <div className="socialmedia__container">
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/roses1991/"
              >
                <AiFillFacebook className="icon"></AiFillFacebook>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/faby-rose-232074280/"
              >
                <AiFillLinkedin className="icon"></AiFillLinkedin>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/fabyrose_/?hl=es-la"
              >
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
