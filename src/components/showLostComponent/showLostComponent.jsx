import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function showLostComponent() {
  return (
    <Card>
      <Card.Header>Comunicação de perda</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Nome: </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
