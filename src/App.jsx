import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./Pages/MainPage";
import Cursos from "./Pages/Cursos";
import Login from "./Pages/Login";
import User from "./Pages/User";
import ProtectedRoutes from "./Pages/ProtectedRoutes";

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
        <Route element={<ProtectedRoutes/>}>
          <Route path="/user" element={<User />} />
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
