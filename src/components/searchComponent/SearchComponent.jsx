import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

export default function SearchComponent() {
  const [cpf, setCpf] = useState('');

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="cpfFormGroup">
          <Form.Label>CPF do produtor rural</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
            placeholder="Use apenas números"
          />
        </Form.Group>
      </Form>

      <Button>Buscar</Button>
    </Container>
  );
}
