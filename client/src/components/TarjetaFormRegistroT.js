import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/styleFormRegistroT.css';
function TarjetaForm() {
  const [nombre, setNombre] = useState('');
    return (
     <div className='content1'>
      <Card className='card' style={{width: '40rem'}}>
       <Card.Title className='titulo'>Informacion trabajador</Card.Title>
      <Form className='form'
        onSubmit={ev =>{
        ev.preventDefault();
        setNombre(ev.target.nombre.value);
      }}>
      <Row>
      <Col>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre</Form.Label>
        <Form.Control name='nombre' type="text" placeholder="Nombre" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control type="text" placeholder="Apellidos" />
       </Form.Group>
       </Col>
       </Row>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Correo" />
      </Form.Group>

      <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Celular</Form.Label>
        <Form.Control type="text" placeholder="Celular" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Cedula</Form.Label>
        <Form.Control type="text" placeholder="Cedula" />
       </Form.Group>
       </Col>
       </Row>
       <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text" placeholder="Usuario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Rol</Form.Label>
          <Form.Select id="Select">
            <option>Disabled select</option>
            <option>Disabled select</option>
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Numero de cuenta</Form.Label>
        <Form.Control type="text" placeholder="Numero de cuenta" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label htmlFor="Select">Entidad Bancaria</Form.Label>
          <Form.Select id="Select">
            <option>Disabled select</option>
            <option>Disabled select</option>
            <option>Disabled select</option>
          </Form.Select>
       </Form.Group>
       </Col>
       </Row>
       
         <Button type="submit">Submit</Button>
         <p>El nombre es:{nombre}</p>
      
         </Form>
         </Card>
         
      </div>
    );
  }
  export default TarjetaForm;