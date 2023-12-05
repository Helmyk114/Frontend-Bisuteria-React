import React from 'react'
import { Button, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/styleNavbar.css';

function TarjetaForm() {
    return (
     <div className='content'>
      <Card className='card' style={{width: '40rem'}}>
       <Card.Title>Card Title</Card.Title>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body className='body'>
          
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
    );
  }
  export default TarjetaForm;