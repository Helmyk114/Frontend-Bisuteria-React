import React, { useForm } from 'react-hook-form'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styleFormRegistroT.css';


function TarjetaForm({Text, apiEndPoint}) {
  const {register, handleSubmit } = useForm();

  const onSubmit = async (data) =>{
    console.log (data);
    
    try {
      const respuesta = await fetch(apiEndPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (respuesta.ok) {
        console.log('Datos enviados con exito');
      } else {
        console.error('Error al enviar los datos a la API')
      }
    } catch (error) {
      console.error('Error: ',error)
    }
  };

    return (
     <div className='content1'>

      <Card className='card' style={{width: '40rem'}}>
      <Form className='form' onSubmit={handleSubmit(onSubmit)}>
    
      <Row>
      <Col>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control {...register('nombreProducto')} type="text" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}/>
      </Form.Group>
      </Col>
      </Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Precio Comercial (PC)</Form.Label>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Form.Control {...register('PrecioComercial')} type="text" className="custom-width" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}} />
          <Form.Label style={{marginLeft: '6px'}}>COP</Form.Label>
        </div>
       </Form.Group>
       </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Precio mano de obra (PO)</Form.Label>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Form.Control {...register('PrecioObra')} type="text" className="custom-width" style={{borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}} />
          <Form.Label style={{marginLeft: '6px'}}>COP</Form.Label>
        </div>
      </Form.Group>
      </Col>
         <Button className="Boton" type="submit">{Text}</Button>
      </Form>
      </Card>
    </div>
    );
  }
  export default TarjetaForm;