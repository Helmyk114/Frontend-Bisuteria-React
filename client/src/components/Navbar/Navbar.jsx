import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Navbar/Navbar.css'
import {Image, Container, Navbar} from 'react-bootstrap'
import logo from '../../img/1-removebg-preview.png';
//import Perfil from '../../img/IMG_4880_720x.webp'

function Navegar({children}) {
  return (
    <div className='nav'>
      <img className='logo' src={logo} alt='Logo de la empresa' />
    </div>
  )
}

export default Navegar;
