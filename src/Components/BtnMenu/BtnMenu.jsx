import "./BtnMenu.css";

const BtnMenu = ({ contenido, handlerMenu }) => {
  return (
    <>
      <button onClick={handlerMenu} className="btn__menu">
        {contenido}
      </button>
    </>
  );
};

export default BtnMenu;
