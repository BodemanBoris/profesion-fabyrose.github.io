import { useState } from "react"
import LoginForm from "../Components/LoginForm/LoginForm"
import SignInForm from "../Components/SigninForm/SignInForm"
import "./login.css"

const Login = () => {
  const [formToRender, setFormToRender] = useState(false)

  const changeForm = () => {
    setFormToRender(!formToRender)
  }
  
  return (
    <div>
      <h2>Bienvenido a tu espacio</h2>
      {formToRender === true ? (
        <div>
          <SignInForm></SignInForm>
        </div>
       ) : (
         <div>
           <LoginForm></LoginForm>
        </div>
      )}
      <div className="textContainer">
        <p>{formToRender === false ?"¿Aun no tienes una cuenta?" : "¿Ya tienes una cuenta?"} <small className="iniciarSesion" onClick={changeForm}>{formToRender === false ? "Crea una cuenta" : "Inicia sesion"}</small> </p>
      </div>
    </div>
  )
}

export default Login