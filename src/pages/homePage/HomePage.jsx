import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <h4>Bem vindo à interface de comunicação de perda</h4>

      <div>
        <p>Para inserir uma nova perda, por favor, clique no botão abaixo</p>
        <Button onClick={() => navigate('/insert')}>Quero inserir uma perda</Button>
      </div>

      <div>
        <p>
          Para consultar, atualizar ou deletar uma perda, por favor, clique no botão
          abaixo
        </p>
        <Button onClick={() => navigate('/search')}>Quero consultar uma perda</Button>
      </div>
    </Container>
  );
}
