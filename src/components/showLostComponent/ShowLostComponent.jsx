import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

export default function ShowLostComponent() {
  const {
    nome,
    email,
    CPF,
    latitude,
    longitude,
    lavoura,
    data_colheita,
    evento,
  } = useSelector((state) => state.lost);

  return (
    <Card>
      <Card.Header>Comunicação de perda</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Nome: {nome}</ListGroup.Item>
        <ListGroup.Item>Email: {email}</ListGroup.Item>
        <ListGroup.Item>CPF: {CPF}</ListGroup.Item>
        <ListGroup.Item>
          Localização: {latitude} / {longitude}
        </ListGroup.Item>
        <ListGroup.Item>Lavoura: {lavoura}</ListGroup.Item>
        <ListGroup.Item>Data da colheita: {data_colheita}</ListGroup.Item>
        <ListGroup.Item>Evento: {evento}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
