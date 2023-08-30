import "./Creador.css";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Creador = () => {
  return (
    <div className="creador__container">
      <p className="creador"> Creado por Boris Bodeman</p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=5493487517719"
      >
        <AiOutlineWhatsApp className="creador__icon"></AiOutlineWhatsApp>
      </a>
    </div>
  );
};

export default Creador;
