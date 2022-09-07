import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './style.scss';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Container className="home-page-container">
      <h4>Bem vindo à interface de comunicação de perda</h4>

      <Button variant="success" onClick={() => navigate('/insert')}>
        Quero inserir uma perda
      </Button>

      <Button variant="success" onClick={() => navigate('/search')}>
        Quero consultar uma perda
      </Button>
    </Container>
  );
}
