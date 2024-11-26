import { useState } from "react"
import { helperHttp } from "../../libs/useFetch.js"
import { useNavigate } from "react-router-dom"

const initialUserInfo = {
  email: "",
  password: ""
}

const LoginForm = () => { 
  const [userSignInInfo, setUserSignInInfo] = useState(initialUserInfo)
  let api = helperHttp()
  let navi = useNavigate()
  
  const updateUserInfo = (e) => {
    let inputName = e.target.name, inputValue = e.target.value
    setUserSignInInfo({ ...userSignInInfo, [inputName]: inputValue})
  }
  const handleSubmit =  (e) => {
    e.preventDefault()
    api.post("http://localhost:3500/api/login", { body: userSignInInfo }).then(res => {
      console.log(res)
      navi( "/user")
    }).catch(err=> console.log(err))
  }

  return (
    <div>
      <div>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <input type="email" name="email" id="email" placeholder="miguel-d@gmail.com"  onChange={(e)=>updateUserInfo(e)} />
          <input type="password" name="password" id="password" placeholder="********"  onChange={(e)=>updateUserInfo(e)}/>
          <input type="submit" value="Crear usuario" />
        </form>
      </div>
    </div>
  )
}

export default LoginForm