import React from 'react';
import Navbar from '../components/Navbar/Navbar'; 
import Card from '../components/Card/card'; 
import Footer from '../components/Footer/Footer';
import FloatingActionButton from '../components/BotonAgregar/Agregar';
import {Notificacion,Titulo} from '../components/Navbar/Navbar';

function ListProducts() {
  return (
    <div>
        <Navbar>
        {/* <BotonRetroceder/> */}
        <Titulo texto="Productos"/>
        <Notificacion/>
        </Navbar>
        < Card nombre="collar"/>
        < Card nombre="collar"/>
        < Card nombre="collar"/>
        < Card nombre="collar"/>
        < Card nombre="collar"/>
        < Card nombre="collar"/>
        < Card nombre="collar"/>
        < Card nombre="collar"/>
        < FloatingActionButton/>
        <Footer/>
    </div>
  );
}

export default ListProducts;
