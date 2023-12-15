import React from 'react'
import { NavLink } from 'react-router-dom'
import Navegar from '../components/Navbars/Navbar'
import {Titulo, Notificacion} from '../components/Navbars/Navbar'
function Login() {
  return (
    
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <Navegar>
    <div></div>
    <Titulo texto="Inicio"/>
    <Notificacion/>
    </Navegar>
    <h1>Login pagina de inicio</h1>
    <NavLink style={{display:"block"}} to="/">Login</NavLink> 
    <NavLink to="/RegistroTrabajador">RegistroTrabajador</NavLink> 

    </div>
  )
}

export default Login