import React from 'react'
import { NavLink } from 'react-router-dom'
function Login() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <h1>Login pagina de inicio</h1>
    <NavLink style={{display:"block"}} to="/">Login</NavLink> 
    <NavLink to="/RegistroTrabajador">RegistroTrabajador</NavLink> 
    </div>
  )
}

export default Login