import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export default function HomePage() {
  return (
    <Container>
      <h4>Bem vindo à interface de comunicação de perda</h4>

      <div>
        <p>Para consultar, atualizar ou excluir uma perda, por favor, consulte o CPF no campo abaixo</p>
        <input />
        <Button>Consultar</Button>
      </div>


      <div>
        <p>Para inserir uma nova perda, por favor, clique no botão abaixo</p>
        <Button>Inserir uma nova perda</Button>
      </div>

    </Container>
  );
}
