import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

export default function Add() {
  const enWord = useRef<HTMLInputElement | null>(null);
  const frWord = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Correction de la méthode
        
    if (enWord.current && frWord.current) {
      const newWord = {
        en: enWord.current.value,
        fr: frWord.current.value,
      };
      
      fetch('/api/vocapi', {
        method: 'POST',
        body: JSON.stringify(newWord),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
        enWord.current!.value = ''; // Utilisation de "!" pour indiquer à TypeScript que enWord.current ne sera pas null ici
        frWord.current!.value = ''; // Utilisation de "!" pour indiquer à TypeScript que frWord.current ne sera pas null ici
    }
  };

  return (
    <div className='container p-4'>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Mot en Anglais</Form.Label>
          <Form.Control type='text' placeholder='Anglais' ref={enWord} /> {/* Attribution de la référence */}
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Mot en Francais</Form.Label>
          <Form.Control type='text' placeholder='Francais' ref={frWord} /> {/* Attribution de la référence */}
        </Form.Group>
        
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}
