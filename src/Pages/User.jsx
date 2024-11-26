import { useNavigate } from "react-router-dom"
import { helperHttp } from "../libs/useFetch"
import { user } from "./UserMock.js"
import "./user.css"


const User = () => {
  const helper = helperHttp()
  const navi = useNavigate()
  
  const logout = () => {
    helper.post("http://localhost:3500/api/logout")
    navi("/login")
  }

  return (
    <div>
        <div className="user__container">
        
      <div className="user__info-container">
        <h3> {user.username}</h3>
        <p>{user.email}</p>
        <small>{user.password}</small>
      </div>
      <div className="url__img-container">
        <img className="user__img" src={user.imageUrl} alt={`Profile image of: ${user.username}`} />
      <button className="logout__btn" onClick={()=>logout()} >Cerrar sesion</button>
      </div>
      </div>
      <div className="courses__info-container">
        <h4>Cursos adquiridos: </h4>
        <ul>
          {user.cursosInfo.map((el, i) => {
            return (<li key={i} className={el.terminado ? "curso__pendiente curso__info" : "curso__terminado curso__info"} >{el.cursoNombre} {el.terminado ? " ✅" : ""} <p className="pendiente">{el.terminado === false ? "Pendiente" : " "}</p></li>)
          })}
        </ul>
        
      </div>
    </div>
  )
}

export default User