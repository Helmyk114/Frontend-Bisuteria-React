import React from 'react'
import { NavLink } from 'react-router-dom'
import Navegar from '../components/Navbars/Navbar'
import {Titulo, Notificacion, ImagenPerfil, TituloBienvenido} from '../components/Navbars/Navbar'
import Botones from '../components/BotonesInicio/Botones'

function Login() {
  return (
    
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
    <Navegar>
    <ImagenPerfil/>
    <TituloBienvenido texto="Bienvenido"
    texto2="Sara Cadavid"
    texto3="Administrador"/>
    <Notificacion/>
    </Navegar>
    <Botones/>
    <NavLink to="/RegistroTrabajador">RegistroTrabajador</NavLink> 

    </div>
  )
}

export default Login