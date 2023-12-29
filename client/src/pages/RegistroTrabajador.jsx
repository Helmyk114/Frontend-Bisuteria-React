import React from 'react'
import TarjetaImg from '../components/FormularioRegistroT/TarjetaImgRegistroT'
import TarjetaForm from '../components/FormularioRegistroT/TarjetaFormRegistroT'
import Navegar from '../components/Navbar/Navbar';
import {BotonRetroceder,Notificacion,Titulo} from '../components/Navbar/Navbar';

import Footer from '../components/Footer/Footer'

function RegistroTrabajador() {
  return (
    <>
    <Navegar>
    {/* <BotonRetroceder/> */}
    <Titulo texto="Registro de trabajadores"/>
    <Notificacion/>
    </Navegar>
    <TarjetaImg/>
    <TarjetaForm/>
    <Footer/>
    </>
  )
}

export default RegistroTrabajador