import { useState } from "react"
import { helperHttp } from "../../libs/useFetch.js"


const initialUserInfo = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
} 

const SignInForm = () => {
  const [userSignInInfo, setUserSignInInfo] = useState(initialUserInfo);
  const [acepted, setAcepted] = useState(false)
    let api = helperHttp()
  
  const updateUserInfo = (e) => {
    let inputName = e.target.name, inputValue = e.target.value
    setUserSignInInfo({ ...userSignInInfo, [inputName]: inputValue})
}

 const handleSubmit =  (e) => {
    e.preventDefault()
   api.post("http://localhost:3500/api/signin", { body: userSignInInfo })
     .then(res => {
       if (res.dataUser) {
         setAcepted(true);
         setTimeout(() => {
           location.reload()
         },1500)
       } 
     })
    .catch(err=> console.log(err, "EL MALDITO ERRORRRRRR "))
  }

  return (
    <div>
      <div>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <input type="text" name="username" id="username" placeholder="Miguel Duran" onChange={(e)=>updateUserInfo(e)}/>
          <input type="email" name="email" id="email" placeholder="miguel-d@gmail.com"  onChange={(e)=>updateUserInfo(e)} />
          <input type="password" name="password" id="password" placeholder="********"  onChange={(e)=>updateUserInfo(e)}/>
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="********" onChange={(e) => updateUserInfo(e)} />
          {
            acepted ? <p>Usuario creado satisfactoriamente ✅ 
              <br />
              Inicia sesion
            </p> : ""
          }
          <input type="submit" value="Crear usuario" />
        </form>
      </div>
    </div>
  )
}

export default SignInForm