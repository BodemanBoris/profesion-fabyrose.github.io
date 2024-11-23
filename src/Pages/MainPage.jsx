import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import "../App.css";
import NavMenu from "../Components/NavMenu/NavMenu";
import Creador from "../Components/Creador/Creador";
import WhatsAppBtn from "../Components/WhatsAppBtn/WhatsAppBtn";

function MainPage() {
  return (
    <main>
      <Header></Header>
      <NavMenu></NavMenu>
      <Main></Main>
      <WhatsAppBtn></WhatsAppBtn>
      <Footer></Footer>
      <Creador></Creador>
    </main>
  );
}

export default MainPage;
