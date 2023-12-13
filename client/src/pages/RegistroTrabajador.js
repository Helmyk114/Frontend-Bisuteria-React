import React from 'react'
import TarjetaImg from '../components/FormularioRegistroT/TarjetaImgRegistroT'
import TarjetaForm from '../components/FormularioRegistroT/TarjetaFormRegistroT'
import Navegar from '../components/Navbars/Navbar'
import Footer from '../components/Footer/Footer'

function RegistroTrabajador() {
  return (
    <>
    <Navegar texto="Registro trabajador"/>
    <TarjetaImg/>
    <TarjetaForm/>
    <Footer/>
    </>
  )
}

export default RegistroTrabajador