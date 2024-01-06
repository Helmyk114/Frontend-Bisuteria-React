import React from 'react';
import TarjetaImg from '../components/FormularioProducto/TarjetaImgRegistroT';
import TarjetaForm from '../components/FormularioProducto/TarjetaFormRegistroT';
import Navbar from '../components/Navbar/Navbar';
import {Notificacion,Titulo} from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'

function UpdateProducts() {
  return (
    <>
    <Navbar>
    {/* <BotonRetroceder/> */}
    <Titulo texto="Editar Producto"/>
    <Notificacion/>
    </Navbar>
    <TarjetaImg/>
    <TarjetaForm Text="Editar Producto"/>
    <Footer/>
    </>
  )
}

export default UpdateProducts;