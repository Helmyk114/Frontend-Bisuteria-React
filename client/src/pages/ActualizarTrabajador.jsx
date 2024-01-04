import React from 'react'
import TarjetaImg from '../components/FormularioRegistroT/TarjetaImgRegistroT'
import TarjetaForm from '../components/FormularioRegistroT/TarjetaFormRegistroT'
import Navegar from '../components/Navbar/Navbar';
import {BotonRetroceder,Notificacion,Titulo} from '../components/Navbar/Navbar';

import Footer from '../components/Footer/Footer'

function ActualizarTrabajador() {
  return (
    <>
    <Navegar>
    {/* <BotonRetroceder/> */}
    <Titulo texto="Actualizar informacion"/>
    <Notificacion/>
    </Navegar>
    <TarjetaImg/>
    <TarjetaForm Text="Actualizar trabajador"/>
    <Footer/>
    </>
  )
}

export default ActualizarTrabajador