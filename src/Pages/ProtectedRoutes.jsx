import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {

  const separated = document.cookie.split("=")
console.log(separated.includes("login_token"))
  if (!separated.includes("login_token")) {
   return <Navigate to="/login"/>
  }
 
  return (
    <Outlet></Outlet>
  )
}

export default ProtectedRoutes