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
        <h2>Maestra Reiki</h2>
        <p className="texto__largo">
          Profesional dedicada a las artes esotericas. Brindo servicios de
          curacion, guia espiritual y capacito.
        </p>
        <br />
        <p className="texto__largo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          ipsum, neque libero temporibus sapiente mollitia sit.
        </p>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
