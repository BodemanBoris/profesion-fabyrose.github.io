import "./NavMenu.css";

/* import React, { useState, useEffect } from "react";

useEffect(() => {
  function handleResize() {
    if (window.innerWidth > 768) {
      setClicked(false);
    }
  }
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []); */

const NavMenu = () => {
  return (
    <nav className="nav__container">
      <ul className={`ul__container`}>
        <li className="list__item">
          <a className="link__item" href="#reiki">
            Reiki
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
      </ul>
    </nav>
  );
};

export default NavMenu;
