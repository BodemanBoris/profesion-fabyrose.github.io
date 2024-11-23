import { Link } from "react-router-dom";
import "./NavMenu.css";

const NavMenu = () => {
  return (
    <nav className="nav__container">
      <label htmlFor="menu__check" className="menu__label">
        Menú 📖
      </label>
      <input
        type="checkbox"
        name="menu"
        id="menu__check"
        className="menu__check"
      />

      <h3>Bienvenidos</h3>

      <ul className={"ul__container"}>
        <li className="list__item">
          <a className="link__item" href="#reiki">
            Terapia holística
          </a>
        </li>

        <li className="list__item">
          <a className="link__item" href="#fabyrose">
            Faby Rose
          </a>
        </li>
        <li className="list__item">
          <a className="link__item" href="#cursos">
            Cursos
          </a>
        </li>

        <li className="list__item">
          <a className="link__item" href="#contacto">
            Contacto
          </a>
        </li>
        <li className="list_item">

        <Link to="/cursos" className="link__item">
          Nuestros cursos
        </Link>
        </li>

        <li className="list_item">

        <Link to="/login" className="link__item">
          Log In
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
