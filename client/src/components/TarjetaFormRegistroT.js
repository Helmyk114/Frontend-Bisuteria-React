import React, { useForm } from 'react-hook-form'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '../components/styleFormRegistroT.css';


function TarjetaForm() {
  const {register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    console.log (data);
  }
  
    return (
     <div className='content1'>
      <Card className='card' style={{width: '40rem'}}>
       <Card.Title className='titulo'>Informacion trabajador</Card.Title>
      <Form className='form' onSubmit={handleSubmit(onSubmit)}>
      <Row>
      <Col>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre</Form.Label>
        <Form.Control {...register('nombre')} type="text" placeholder="Nombre" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control {...register('apellido')} type="text" placeholder="Apellidos" />
       </Form.Group>
       </Col>
       </Row>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control {...register('correo')} type="email" placeholder="Correo" />
      </Form.Group>

      <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Celular</Form.Label>
        <Form.Control {...register('celular')} type="text" placeholder="Celular" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Cedula</Form.Label>
        <Form.Control {...register('cedula')} type="text" placeholder="Cedula" />
       </Form.Group>
       </Col>
       </Row>
       <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Usuario</Form.Label>
        <Form.Control {...register('usuario')} type="text" placeholder="Usuario" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control {...register('contraseña')} type="password" placeholder="Contraseña" />
      </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Rol</Form.Label>
          <Form.Select  {...register('rol')} id="Select">
            <option>Disabled select</option>
            <option>Disabled select</option>
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Numero de cuenta</Form.Label>
        <Form.Control {...register('cuenta')} type="text" placeholder="Numero de cuenta" />
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label htmlFor="Select">Entidad Bancaria</Form.Label>
          <Form.Select {...register('banco')} id="Select">
            <option>Disabled select</option>
            <option>Disabled select</option>
            <option>Disabled select</option>
          </Form.Select>
       </Form.Group>
       </Col>
       </Row>
       
         <Button type="submit">Submit</Button>
         
      
         </Form>
         </Card>
         
      </div>
    );
  }
  export default TarjetaForm;