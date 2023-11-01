import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="title__container">
        <h1 className="title__uno">
          FABY <span className="rose">ROSE</span>
        </h1>
        <h2 className="title__dos">ROSE</h2>
      </div>
      <div className="img__container">
        <img
          src="https://w0.peakpx.com/wallpaper/458/351/HD-wallpaper-mount-fuji-black-and-white-beautiful-trees-sky-japan-snow-mountains-nature-fuji.jpg"
          alt="Bosque japones"
        />
      </div>
      <div className="text__container">
        <h2 className="text__title">
          Escuela <i>Holística</i> On-line
        </h2>
        <p className="texto__largo">
          Profesional dedicada a la atención y formación en distintas Terapias
          Energéticas. Con una memoria ancestral y, al mismo tiempo, formándome
          para despertar ese don innato que cada alma que viene a la Tierra ya
          porta. Me ocupo de activar y dar rienda suelta a todos los mensajes
          que provienen de mis guías. Actualmente, en esta nueva era, se me pide
          salir y compartir mis conocimientos con todos aquellos que buscan el
          despertar de la conciencia. Me llamaron Fabiana al nacer. Soy
          formadora y al mismo tiempo, acompaño tu proceso de transformación
        </p>
      </div>
    </header>
  );
};

export default Header;
