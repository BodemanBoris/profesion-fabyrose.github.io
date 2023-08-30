import "./WhatsAppBtn.css";
import { AiOutlineWhatsApp } from "react-icons/ai";

const WhatsAppBtn = () => {
  return (
    <a
      className="whatsappbtn__container"
      target="_blank"
      rel="noreferrer"
      href="https://api.whatsapp.com/send?phone=5493487524500"
    >
      <AiOutlineWhatsApp className="whatsapp__btn"></AiOutlineWhatsApp>
    </a>
  );
};

export default WhatsAppBtn;
