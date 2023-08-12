import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useRef} from 'react'
export default function Add() {
  const enWord=useRef()
  const frWord=useRef()
const handleSubmit = (e) =>{
  e.prevenDefault()
  const newWord={
    en:enWord.current.value,
    fr:enWord.current.value,
  }
}

  return (
    <div className='container p-4'>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mot en Anglais</Form.Label>
        <Form.Control type="text" placeholder="Anglais" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot en Francais</Form.Label>
        <Form.Control type="text" placeholder="Francais" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    </div>
  );
}