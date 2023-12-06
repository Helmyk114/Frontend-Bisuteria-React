import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/styleNavbar.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navegar() {
  return (
    
    <Container className='contenedor'>
      <Navbar fixed="top" expand="sm" className='nav'>
      
        <Container className='contenedor'>
        <div className='back'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"   fill="currentColor"  class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
         </div>
          <Navbar.Brand className='txTitulo text-center' href="#">Registro de trabajador</Navbar.Brand>
          <div className='notificar'>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
           <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
           </svg>
           </div>
        </Container>
      </Navbar>
    </Container>
    
  );
}

export default Navegar;