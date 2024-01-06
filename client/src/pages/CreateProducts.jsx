import React from 'react';
import TarjetaImg from '../components/FormularioProducto/TarjetaImgRegistroT';
import TarjetaForm from '../components/FormularioProducto/TarjetaFormRegistroT';
import Navbar from '../components/Navbar/Navbar';
import {Notificacion,Titulo} from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'

function Products() {
  return (
    <>
    <Navbar>
    {/* <BotonRetroceder/> */}
    <Titulo texto="Añadir Producto"/>
    <Notificacion/>
    </Navbar>
    <TarjetaImg/>
    <TarjetaForm Text="Añadir Producto"/>
    <Footer/>
    </>
  )
}

export default Products;