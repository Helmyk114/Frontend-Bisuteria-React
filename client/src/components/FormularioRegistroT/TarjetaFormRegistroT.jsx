import React, { useForm } from 'react-hook-form'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styleFormRegistroT.css';


function TarjetaForm({Text}) {
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
        <Form.Control {...register('nombre')} type="text" placeholder="Nombre" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}/>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Apellidos</Form.Label>
        <Form.Control {...register('apellido')} type="text" placeholder="Apellidos" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}/>
       </Form.Group>
       </Col>
       </Row>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control {...register('correo')} type="email" placeholder="Correo" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}/>
      </Form.Group>

      <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Celular</Form.Label>
        <Form.Control {...register('celular')} type="text" placeholder="Celular" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}/>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Cedula</Form.Label>
        <Form.Control {...register('cedula')} type="text" placeholder="Cedula" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}/>
       </Form.Group>
       </Col>
       </Row>
       <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Usuario</Form.Label>
        <Form.Control {...register('usuario')} type="text" placeholder="Usuario" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control {...register('contraseña')} type="password" placeholder="Contraseña" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}/>
      </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Rol</Form.Label>
          <Form.Select  {...register('rol')} id="Select" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
            <option>Disabled select</option>
            <option>Disabled select</option>
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Numero de cuenta</Form.Label>
        <Form.Control {...register('cuenta')} type="text" placeholder="Numero de cuenta" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}/>
      </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Label htmlFor="Select">Entidad Bancaria</Form.Label>
          <Form.Select {...register('banco')} id="Select" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </Form.Select>
       </Form.Group>
       </Col>
       </Row>
       
         <Button className='Boton' type="submit">{Text}</Button>
            
         </Form>
         </Card>
         
        
         
      </div>
    );
  }
  export default TarjetaForm;