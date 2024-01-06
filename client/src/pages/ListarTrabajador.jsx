import React from 'react';
import Navegar from '../components/Navbar/Navbar'; 
import Card from '../components/Card/card'; 
import Footer from '../components/Footer/Footer';
import FloatingActionButton from '../components/BotonAgregar/Agregar';
import {BotonRetroceder,Notificacion,Titulo} from '../components/Navbar/Navbar';

function ListWorkers() {
  return (
    <>
        <Navegar>
        {/* <BotonRetroceder/> */}
        <Titulo texto="Trabajadores"/>
        <Notificacion/>
        </Navegar>
        < Card nombre="julia jimenez"/>
        < Card nombre="julia jimenez"/>
        < Card nombre="julia jimenez"/>
        < Card nombre="julia jimenez"/>
        < Card nombre="julia jimenez"/>
        < Card nombre="julia jimenez"/>
        < Card nombre="julia jimenez"/>
        < FloatingActionButton/>
        <Footer/>
    </>
  );
}

export default ListWorkers;
