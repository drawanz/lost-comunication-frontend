import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function HomePage() {
  return (
    <Container>
      <h4>Bem vindo à interface de comunicação de perda</h4>

      <div>
        <p>Para inserir uma nova perda, por favor, clique no botão abaixo</p>
        <Button>Quero inserir uma perda</Button>
      </div>

      <div>
        <p>Para consultar ou atualizar uma perda, por favor, clique no botão abaixo</p>
        <Button>Quero consultar uma perda</Button>
      </div>

      <div>
        <p>Para excluir uma perda, por favor, clique no botão abaixo</p>
        <Button>Quero excluir uma perda</Button>
      </div>

    </Container>
  );
}
