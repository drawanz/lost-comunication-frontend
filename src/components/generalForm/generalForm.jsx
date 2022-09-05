import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function GeneralForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitutde, setLongitutde] = useState('');
  const [typeCrop, setTypeCrop] = useState('');
  const [date, setDate] = useState('');
  const [event, setEvent] = useState('');

  const location = useLocation();

  // useEffect(() => {
  //   console.log(location.pathname);
  // });

  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="nameFormGroup">
          <Form.Label>Nome do produtor rural</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Ex: José Guilherme Oliveira"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="emailFormGroup">
          <Form.Label>Email do produtor rural</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Ex: jose.guilherme@exemplo.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cpfFormGroup">
          <Form.Label>CPF do produtor rural</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setCpf(e.target.value)}
            value={cpf}
            placeholder="Use apenas números"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="localizaçãoFormGroup">
          <Form.Label>Localização da lavoura</Form.Label>
          <Form.Control
            type="number"
            onChange={(e) => setLatitude(e.target.value)}
            value={latitude}
            placeholder="Latitude"
          />
          <Form.Control
            type="number"
            onChange={(e) => setLongitutde(e.target.value)}
            value={longitutde}
            placeholder="Longitude"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="typeCropFormGroup">
          <Form.Label>Tipo de lavoura</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTypeCrop(e.target.value)}
            value={typeCrop}
            placeholder="Ex: milho"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dataFormGroup">
          <Form.Label>Data da colheita</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            placeholder="Ex: 03/25/2015"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dateFormGroup">
          <Form.Label>Evento ocorrido</Form.Label>
          <Form.Select
            aria-label="Selecione evento"
            onChange={(e) => setEvent(e.target.value)}
            value={event}
          >
            <option>Selecione um evento</option>
            <option value="Chuva excessiva">Chuva excessiva</option>
            <option value="Geada">Geada</option>
            <option value="Granizo">Granizo</option>
            <option value="Seca">Seca</option>
            <option value="Vendaval">Vendaval</option>
            <option value="Raio">Raio</option>
          </Form.Select>
        </Form.Group>

        {location.pathname === '/insert' && <Button>Finalizar</Button>}
      </Form>
    </Container>
  );
}
