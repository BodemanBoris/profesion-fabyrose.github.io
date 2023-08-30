import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import "./App.css";
//import BtnMenu from "./Components/BtnMenu/BtnMenu";
import NavMenu from "./Components/NavMenu/NavMenu";
import Creador from "./Components/Creador/Creador";
import WhatsAppBtn from "./Components/WhatsAppBtn/WhatsAppBtn";

function App() {
  /* const handlerMenu = () => {
    console.log("App");
  }; */

  return (
    <>
      <Header></Header>
      {/* <BtnMenu handlerMenu={handlerMenu} contenido={"💻"} /> */}
      <NavMenu></NavMenu>
      <Main></Main>
      <WhatsAppBtn></WhatsAppBtn>
      <Footer></Footer>
      <Creador></Creador>
    </>
  );
}

export default App;
