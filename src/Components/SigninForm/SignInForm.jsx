import { useState } from "react"
import { helperHttp } from "../../libs/useFetch.js"

const initialUserInfo = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
} 

const SignInForm = () => {
  const [userSignInInfo, setUserSignInInfo] = useState(initialUserInfo)
    let api = helperHttp()
  
  const updateUserInfo = (e) => {
    let inputName = e.target.name, inputValue = e.target.value
    setUserSignInInfo({ ...userSignInInfo, [inputName]: inputValue})
}

 const handleSubmit =  (e) => {
    e.preventDefault()
    api.post("http://localhost:3500/api/signin").then(res=> console.log(res, "RESUELTO")).catch(err=> console.log(err,"ERROR"))
  }

  return (
    <div>
      <div>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <input type="text" name="username" id="username" placeholder="Miguel Duran" onChange={(e)=>updateUserInfo(e)}/>
          <input type="email" name="email" id="email" placeholder="miguel-d@gmail.com"  onChange={(e)=>updateUserInfo(e)} />
          <input type="password" name="password" id="password" placeholder="********"  onChange={(e)=>updateUserInfo(e)}/>
          <input type="password" name="confirmPassword" id="confirmPassword" placeholder="********"  onChange={(e)=>updateUserInfo(e)}/>
          <input type="submit" value="Crear usuario" />
        </form>
      </div>
    </div>
  )
}

export default SignInForm