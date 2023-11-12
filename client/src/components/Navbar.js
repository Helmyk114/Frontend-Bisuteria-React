import React from 'react'
import { useState } from 'react';
import {NavDropdown, Navbar, Nav,Button,Offcanvas, Container, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../img/1-removebg-preview.png'
import "./../components/styleNavbar.css";

function Navegar() {
  

  return (
  <>
      <div>
      {["ms"].map((expand) => (
       <Navbar key={expand} expand={expand} className="nav mb-3" >
          <Container fluid className='d-flex justify-content-between align-items-center'>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='list' />
        
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}placement="start">

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                 
                <Nav className=" nav-items justify-content-start flex-grow-1 pe-3">

                <NavDropdown title="Categorias"id={`offcanvasNavbarDropdown-expand-${expand}`}>
                     <NavDropdown.Item href='Categorias/pulseras'>Pulseras</NavDropdown.Item>
                     <NavDropdown.Item href='Categorias/chokers'>Chokers</NavDropdown.Item>
                     <NavDropdown.Item href='Categorias/pulseras'>Anillos</NavDropdown.Item>
                    <NavDropdown.Item href='Categorias/aretas'>Aretas</NavDropdown.Item>
                    </NavDropdown>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                 
                 
                </Nav>
                
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
                 <div className='logo justify-content-center' >
                 <Navbar.Brand href="#"><img src={logo} alt='Logo de la empresa' width="140px" height="140px"></img></Navbar.Brand>
                 </div>
            
                <div>
                <Button className='compras' >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                </svg>
                </Button>
                <Button className='usuario'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
                </Button>
                </div>
                
          </Container>
        </Navbar>
       ))}
        
        

      </div>
      <Container fluid className='container-2'>
      <Nav className='nav-2  justify-content-center'>
                  <div>
               
                  <Form className="d-flex justify-content-center">
                  <Form.Control type="search" placeholder="Buscar" className=" buscar" aria-label="Search" />
                 <Button className='btn-buscar'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                   </svg></Button>
               </Form>

               
               </div>

                </Nav> 
                <header className='cont-wave'>
                <div className='wave'></div>
                </header>
                

      </Container>
    
    </>
  );
}

export default Navegar;
