import "./Header.css";
import ContenidoMain from "./ContenidoMain";

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
      <ContenidoMain />
    </header>
  );
};

export default Header;
