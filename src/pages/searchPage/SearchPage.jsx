import Container from 'react-bootstrap/Container';
// import GeneralForm from '../../components/generalForm/GeneralForm';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Axios from 'axios';
import { Button } from 'react-bootstrap';
import { validate } from 'gerador-validador-cpf';


export default function SearchPage() {
  const [cpf, setCpf] = useState('');
  const [lost, setLost] = useState('');

  const handleSearch = async () => {
    const cpfIsValid = validate(cpf);
    if (!cpfIsValid) {
      alert('CPF inválido');
    }
    try {
      const {
        data: { data },
      } = await Axios.get(`https://softfocus-lc-api.herokuapp.com/lost/${cpf}`);
      setLost(data);
    } catch (e) {
      alert(e.response.data.detail);
    }
  };

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

      <Button onClick={() => handleSearch()}>Buscar</Button>
    </Container>
  );
}
// export default function InsertPage() {
//   return (
//     <Container>
//       <SearchComponent />
//       <GeneralForm />
//     </Container>
//   );
// }
