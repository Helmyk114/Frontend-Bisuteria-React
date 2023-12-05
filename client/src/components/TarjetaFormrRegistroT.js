import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/styleNavbar.css';
function TarjetaImg() {
    return (
     <div className='content'>
      <Card className='card' style={{width: '40rem'}}>
       <Card.Title>Card Title</Card.Title>
       
        <Card.Body className='body'>
        <Form>
      <fieldset disabled>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Disabled input</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Disabled input" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledSelect">Disabled select menu</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id="disabledFieldsetCheck"
            label="Can't check this"
          />
         </Form.Group>
         <Button type="submit">Submit</Button>
        </fieldset>
      </Form>
        </Card.Body>
      </Card>
      </div>
    );
  }
  export default TarjetaImg;