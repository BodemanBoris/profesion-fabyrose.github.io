import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import Cursos from "./Pages/Cursos";
import Login from "./Pages/Login";

function App() {
  /* const handlerMenu = () => {
    console.log("App");
  }; */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
