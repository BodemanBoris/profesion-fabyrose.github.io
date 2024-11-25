import Reiki from "./Reiki/Reiki";
import "./Main.css";
import FabyRose from "./Faby/FabyRose";
import Contacto from "./Contacto/Contacto";
import Cursos from "./Cursos/Cursos";

const Main = () => {
  return (
    <main className="main__container">
      <section id="reiki">
        <Reiki></Reiki>
      </section>
      <section id="fabyrose">
        <FabyRose></FabyRose>
      </section>
      <section id="cursos">
        <Cursos></Cursos>
      </section>
      <section id="contacto">
        <Contacto></Contacto>
      </section>
    </main>
  );
};

export default Main;
