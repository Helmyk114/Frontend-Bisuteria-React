import React from 'react';
import Logo from '../../img/1-removebg-preview.png'
import'../Footer/Footer.css'
import icono1 from '../../img/pinterest (1).png';
import icono2 from '../../img/whatsapp.png';
import icono3 from '../../img/facebook.png';

function Footer() {
  return (

  <div className='main-div'>
        <div className="main-container">
          {/* Título centrado en color blanco */}
          <h3 className="footer-title">REDES</h3>
          
          {/* Iconos centrados */}
          <div className="icons-container">
            <a href="https://co.pinterest.com/" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={icono1} alt="Icono 1" />
            </a>
            <a href="https://www.whatsapp.com/?lang=es_LA" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={icono2} alt="Icono 2" />
            </a>
            <a href="https://es-la.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img className="icon" src={icono3} alt="Icono 3" />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Footer