import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import Cursos from "./Pages/Cursos";

function App() {
  /* const handlerMenu = () => {
    console.log("App");
  }; */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cursos" element={<Cursos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
